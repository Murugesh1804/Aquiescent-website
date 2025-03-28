"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { Users, BookOpen, FileText, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    users: {
      total: 0,
      new: 0,
      withInterests: 0,
      withEnrollments: 0,
      recentUsers: [],
    },
    courses: {
      total: 0,
      published: 0,
      draft: 0,
      totalEnrollments: 0,
      topCourses: [],
    },
    blogs: {
      total: 0,
      published: 0,
      draft: 0,
      totalViews: 0,
    },
  })
  const { toast } = useToast()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) return

        // Fetch user stats
        const userResponse = await fetch("/api/users/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Fetch course stats
        const courseResponse = await fetch("/api/courses/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Fetch blog stats (assuming you have this endpoint)
        const blogResponse = await fetch("/api/blogs/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!userResponse.ok || !courseResponse.ok || !blogResponse.ok) {
          throw new Error("Failed to fetch dashboard data")
        }

        const userData = await userResponse.json()
        const courseData = await courseResponse.json()
        const blogData = await blogResponse.json()

        setStats({
          users: userData.stats,
          courses: courseData.stats,
          blogs: blogData.stats,
        })
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load dashboard data",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [toast])

  const StatCard = ({ title, value, icon, change, changeType }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-2 bg-primary/10 rounded-full">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{isLoading ? <Skeleton className="h-8 w-20" /> : value}</div>
        {change && (
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            {changeType === "increase" ? (
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
            ) : (
              <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
            )}
            <span className={changeType === "increase" ? "text-green-500" : "text-red-500"}>
              {change}% from last month
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 Days
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={stats.users.total}
          icon={<Users className="h-4 w-4 text-primary" />}
          change="12"
          changeType="increase"
        />
        <StatCard
          title="Course Enrollments"
          value={stats.courses.totalEnrollments}
          icon={<BookOpen className="h-4 w-4 text-primary" />}
          change="8"
          changeType="increase"
        />
        <StatCard
          title="Published Courses"
          value={stats.courses.published}
          icon={<TrendingUp className="h-4 w-4 text-primary" />}
          change="3"
          changeType="increase"
        />
        <StatCard
          title="Blog Posts"
          value={stats.blogs.total}
          icon={<FileText className="h-4 w-4 text-primary" />}
          change="5"
          changeType="increase"
        />
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Recent Users */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Latest user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {stats.users.recentUsers?.map((user, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        <div className="text-xs text-gray-500">{new Date(user.createdAt).toLocaleDateString()}</div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Top Courses */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Top Courses</CardTitle>
                <CardDescription>Courses with highest enrollments</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {stats.courses.topCourses?.map((course, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{course.title}</p>
                          <p className="text-xs text-gray-500">{course.enrollmentCount} enrollments</p>
                        </div>
                        <Link href={`/admin/courses/edit/${course._id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Blog Posts */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Blog Posts</CardTitle>
                <CardDescription>Latest published articles</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* This would be populated with actual blog data */}
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">Top 5 Skills for Data Engineers</p>
                        <p className="text-xs text-gray-500">Published 2 days ago</p>
                      </div>
                      <Link href="/admin/blog/edit/1">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">The Future of Cloud Computing</p>
                        <p className="text-xs text-gray-500">Published 5 days ago</p>
                      </div>
                      <Link href="/admin/blog/edit/2">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Statistics</CardTitle>
              <CardDescription>Overview of user registrations and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Total Users</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.users.total}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Admin Users</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.users.adminUsers || 0}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">With Course Interests</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.users.withInterests}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">With Enrollments</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.users.withEnrollments}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link href="/admin/users">
                  <Button>View All Users</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Statistics</CardTitle>
              <CardDescription>Overview of course performance and enrollments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Total Courses</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.courses.total}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Published</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.courses.published}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Draft</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.courses.draft}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Total Enrollments</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.courses.totalEnrollments}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link href="/admin/courses">
                  <Button>View All Courses</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Blog Statistics</CardTitle>
              <CardDescription>Overview of blog posts and reader engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Total Posts</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.blogs.total}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Published</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.blogs.published}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Draft</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.blogs.draft}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Total Views</p>
                  <p className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-8 w-16" /> : stats.blogs.totalViews}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link href="/admin/blog">
                  <Button>View All Posts</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

