"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { BookOpen, Calendar, Mail, MessageSquare } from "lucide-react"
import axios from "axios"

export default function UserDashboard({ userId, userEmail }) {
  const [enrollments, setEnrollments] = useState([])
  const [queries, setQueries] = useState([])
  const [remarks, setRemarks] = useState({})
  const [isLoadingEnrollments, setIsLoadingEnrollments] = useState(true)
  const [isLoadingQueries, setIsLoadingQueries] = useState(true)
  const [submittingId, setSubmittingId] = useState(null)
  const { toast } = useToast()
  const [brochureDownloads, setBrochureDownloads] = useState([]);
  const [isLoadingBrochures, setIsLoadingBrochures] = useState(true);




  useEffect(() => {
    if (userId && userEmail) {
      fetchEnrollments()
      fetchQueries()
      fetchBrochureDownloads()
    }
  }, [userId, userEmail])

  const fetchEnrollments = async () => {
    try {
      setIsLoadingEnrollments(true);
      // const token = localStorage.getItem("token");
      // if (!token) {
      //   toast({ title: "Error", description: "Authentication token missing", variant: "destructive" });
      //   return;
      // }
  
      const response = await axios.get("https://api.acquiescent.in/api/enrollments");
      
      if (!Array.isArray(response.data)) {
        throw new Error("Unexpected response format");
      }
      
      // Initialize remarks from fetched data
      const initialRemarks = {};
      response.data.forEach(enrollment => {
        if (enrollment.adminRemark) {
          initialRemarks[enrollment._id] = enrollment.adminRemark;
        }
      });
      
      setEnrollments(response.data);
      setRemarks(initialRemarks);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      toast({ 
        title: "Error", 
        description: error.response?.data?.message || "Failed to load user enrollments", 
        variant: "destructive" 
      });
    } finally {
      setIsLoadingEnrollments(false);
    }
  };

  const fetchBrochureDownloads = async () => {
    try {
      setIsLoadingBrochures(true);
      const token = localStorage.getItem("token");
  
      if (!token) {
        toast({
          title: "Error",
          description: "Authentication token missing",
          variant: "destructive"
        });
        return;
      }
  
      const response = await axios.get("https://api.acquiescent.in/api/brochure/fetch", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Extract only the necessary user info
      const downloadedUsers = response.data.data.map(user => ({
        name: user.name,
        email: user.email,
        phone: user.phone,
        downloadedAt: user.createdAt
      }));
  
      setBrochureDownloads(downloadedUsers);
    } catch (error) {
      console.error("Error fetching brochures:", error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to load brochure downloads",
        variant: "destructive"
      });
    } finally {
      setIsLoadingBrochures(false);
    }
  };
  
  const fetchQueries = async () => {
    try {
      setIsLoadingQueries(true);
      const token = localStorage.getItem("token");
      if (!token) {
        toast({ title: "Error", description: "Authentication token missing", variant: "destructive" });
        return;
      }
  
      const response = await axios.get("https://api.acquiescent.in/api/queries", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!Array.isArray(response.data)) {
        throw new Error("Unexpected response format");
      }
      
      setQueries(response.data);
    } catch (error) {
      console.error("Error fetching queries:", error);
      toast({ 
        title: "Error", 
        description: error.response?.data?.message || "Failed to load user queries", 
        variant: "destructive" 
      });
    } finally {
      setIsLoadingQueries(false);
    }
  };

  const handleRemarkChange = (enrollmentId, value) => {
    setRemarks((prev) => ({ ...prev, [enrollmentId]: value }))
  }

  const submitRemark = async (enrollmentId) => {
    if (!remarks[enrollmentId] || remarks[enrollmentId].trim() === "") {
      toast({ title: "Warning", description: "Please enter a remark before submitting", variant: "warning" });
      return;
    }
    
    try {
      setSubmittingId(enrollmentId);
      console.log(enrollmentId)
      console.log(remarks[enrollmentId])
      await axios.post("https://api.acquiescent.in/api/enrollments/remark", {
        enrollmentId,
        remark: remarks[enrollmentId],
      }
      );
      
      toast({ title: "Success", description: "Remark added successfully", variant: "success" });
      // Refresh data to show updated remarks
      fetchEnrollments();
    } catch (error) {
      console.error("Error submitting remark:", error);
      toast({ 
        title: "Error", 
        description: error.response?.data?.message || "Failed to add remark", 
        variant: "destructive" 
      });
    } finally {
      setSubmittingId(null);
    }
  }

  const getEnrollmentId = (enrollment) => {
    return enrollment._id || enrollment.enrollmentId;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            User Enrollments
          </CardTitle>
          <CardDescription>View all course enrollments for this user</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingEnrollments ? (
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
                    <TableHead>Admin Remark</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enrollments.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No enrollments found for this user
                      </TableCell>
                    </TableRow>
                  ) : (
                    enrollments.map((enrollment) => {
                      const id = getEnrollmentId(enrollment);
                      return (
                        <TableRow key={id}>
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
                              <span>{new Date(enrollment.date).toLocaleDateString("en-US", {
                                year: "numeric", month: "short", day: "numeric"
                              })}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="max-w-xs truncate" title={enrollment.message}>
                              {enrollment.message}
                            </div>
                          </TableCell>
                          <TableCell>
                            <input 
                              type="text" 
                              value={remarks[id] || ""}
                              onChange={(e) => handleRemarkChange(id, e.target.value)}
                              className="border p-1 w-full rounded"
                              placeholder="Add admin remark"
                            />
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-1 w-full" 
                              onClick={() => submitRemark(id)}
                              disabled={submittingId === id}
                            >
                              {submittingId === id ? "Submitting..." : "Submit"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" onClick={fetchEnrollments}>Refresh</Button>
          </div>
        </CardContent>
      </Card>

      {/* User Queries Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            User Queries
          </CardTitle>
          <CardDescription>View all queries submitted by users</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingQueries ? (
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
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {queries.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        No queries found
                      </TableCell>
                    </TableRow>
                  ) : (
                    queries.map((query) => (
                      <TableRow key={query._id}>
                        <TableCell className="font-medium">{`${query.firstName} ${query.lastName}`}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{query.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{query.phone}</TableCell>
                        <TableCell>{query.subject}</TableCell>
                        <TableCell>
                          <div className="max-w-xs truncate" title={query.message}>
                            {query.message}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{new Date(query.createdAt).toLocaleDateString("en-US", {
                              year: "numeric", month: "short", day: "numeric"
                            })}</span>
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
            <Button variant="outline" size="sm" onClick={fetchQueries}>Refresh</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
  <CardHeader>
    <CardTitle className="flex items-center">
      <BookOpen className="h-5 w-5 mr-2" />
      Brochure Downloads
    </CardTitle>
    <CardDescription>View all users who downloaded brochures</CardDescription>
  </CardHeader>
  <CardContent>
    {isLoadingBrochures ? (
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
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {brochureDownloads.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                No brochure downloads found
              </TableCell>
            </TableRow>
          ) : (
            brochureDownloads.map((download) => (
              <TableRow key={download._id}>
                <TableCell>{download.name}</TableCell>
                <TableCell>{download.email}</TableCell>
                <TableCell>{download.phone}</TableCell>
                <TableCell>
                {new Date(download.createdAt).toLocaleDateString("en-US", {
                                year: "numeric", month: "short", day: "numeric"
                              })}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
    

    )}
    <div className="mt-4 flex justify-end">
      <Button variant="outline" size="sm" onClick={fetchBrochureDownloads}>Refresh</Button>
    </div>
  </CardContent>
</Card>

    </div>
  )
}