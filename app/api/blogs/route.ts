import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET(request: Request) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization") || ""
    const { searchParams } = new URL(request.url)

    // Forward the request to your backend with all query parameters
    const queryString = searchParams.toString()
    const url = `${process.env.BACKEND_URL}/api/blogs${queryString ? `?${queryString}` : ""}`

    const response = await fetch(url, {
      headers: {
        Authorization: authorization,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Failed to fetch blogs" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization")

    if (!authorization) {
      return NextResponse.json({ message: "Not authorized to access this route" }, { status: 401 })
    }

    const body = await request.json()

    // Forward the request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Failed to create blog post" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

