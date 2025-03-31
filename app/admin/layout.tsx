"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { LayoutDashboard, BookOpen, FileText, Users, Settings, LogOut, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import api from "@/utils/axiosConfig"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const { data } = await api.get('/auth/me');
        
        if (data.user.role !== "admin") {
          throw new Error("Admin access required");
        }

        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("token");
        router.push("/admin/login");
        toast({
          title: "Authentication Error",
          description: "Please log in to access the admin panel",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    verifyToken();
  }, [router, toast]);

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/admin/login")
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    })
  }

  const toggleSubmenu = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(menu)
    }
  }

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const menuItems = [
    {
      title: "Blog",
      icon: <FileText className="h-5 w-5" />,
      submenu: true,
      submenuItems: [
        { title: "All Posts", path: "/admin/blog" }
      ],
    },
    {
      title: "Users",
      icon: <Users className="h-5 w-5" />,
      submenu: true,
      submenuItems: [
        { title: "All Users", path: "/admin/users" }
      ],
    }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar skeleton */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <Skeleton className="h-8 w-40" />
            </div>
            <div className="px-4 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Main content skeleton */}
        <div className="flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200">
            <Skeleton className="h-16 w-full" />
          </div>
          <main className="flex-1 p-6">
            <div className="space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-96 w-full" />
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for desktop */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition duration-200 ease-in-out md:relative md:flex md:w-64 md:flex-col`}
      >
        <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto h-full border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4 mb-5">
            <Link href="/admin/dashboard" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Acquiescent Logo"
                width={180}
                height={45}
                className="h-auto w-auto"
              />
            </Link>
            <button
              className="ml-auto md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md ${
                        activeSubmenu === item.title ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-3">{item.title}</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeSubmenu === item.title ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeSubmenu === item.title && (
                      <div className="mt-1 pl-10 space-y-1">
                        {item.submenuItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className={`block px-4 py-2 text-sm rounded-md ${
                              isActive(subItem.path)
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path || "#"}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      isActive(item.path || "") ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto p-4">
            <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-full px-4 md:px-6">
            <div className="flex items-center">
              <button
                className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-2 md:hidden">
                <Image
                  src="/logo.svg"
                  alt="Acquiescent Logo"
                  width={150}
                  height={40}
                  className="h-auto w-auto"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="md:hidden" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

