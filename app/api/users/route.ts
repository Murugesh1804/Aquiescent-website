import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET(request: Request) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization")

    if (!authorization) {
      return NextResponse.json({ message: "Not authorized to access this route" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)

    // Forward the request to your backend with all query parameters
    const queryString = searchParams.toString()
    const url = `${process.env.BACKEND_URL}/api/users${queryString ? `?${queryString}` : ""}`

    const response = await fetch(url, {
      headers: {
        Authorization: authorization,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Failed to fetch users" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

