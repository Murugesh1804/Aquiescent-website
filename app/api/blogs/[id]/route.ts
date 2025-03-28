import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization") || ""

    // Forward the request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/blogs/${params.id}`, {
      headers: {
        Authorization: authorization,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Failed to fetch blog post" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization")

    if (!authorization) {
      return NextResponse.json({ message: "Not authorized to access this route" }, { status: 401 })
    }

    const body = await request.json()

    // Forward the request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/blogs/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Failed to update blog post" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization")

    if (!authorization) {
      return NextResponse.json({ message: "Not authorized to access this route" }, { status: 401 })
    }

    // Forward the request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/blogs/${params.id}`, {
      method: "DELETE",
      headers: {
        Authorization: authorization,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Failed to delete blog post" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

