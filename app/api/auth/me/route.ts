import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET(request: Request) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization")

    if (!authorization) {
      return NextResponse.json({ message: "Not authorized to access this route" }, { status: 401 })
    }

    // Forward the request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/me`, {
      headers: {
        Authorization: authorization,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Authentication failed" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Auth verification error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

