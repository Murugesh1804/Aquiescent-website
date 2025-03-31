"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { BookOpen, Calendar, Mail, ArrowLeft } from "lucide-react"
import axios from "axios"

export default function UserEnrollmentsTable({ userId, userEmail }) {
  const [enrollments, setEnrollments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    if (userId && userEmail) {
      fetchEnrollments()
    }
  }, [userId, userEmail])

  const fetchEnrollments = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      if (!token) return;
  
      const response = await axios.get("http://localhost:3500/api/enrollments");
      console.log(response)
      // Check if response.data is an array
      if (!Array.isArray(response.data)) {
        throw new Error("Unexpected response format");
      }

      // Set enrollments state
      setEnrollments(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load user enrollments",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          User Enrollments
        </CardTitle>
        <CardDescription>View all course enrollments for this user</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Enrollment Date</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enrollments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                      No enrollments found for this user
                    </TableCell>
                  </TableRow>
                ) : (
                  enrollments.map((enrollment) => (
                    <TableRow key={enrollment._id}>
                      <TableCell className="font-medium">{enrollment.course}</TableCell>
                      <TableCell>{`${enrollment.firstName} ${enrollment.lastName}`}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{enrollment.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>{enrollment.phone}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{formatDate(enrollment.date)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate" title={enrollment.message}>
                          {enrollment.message}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" onClick={() => fetchEnrollments()}>
            Refresh
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}