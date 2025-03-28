import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function POST(request: Request) {
  try {
    const headersList = headers()
    const authorization = headersList.get("Authorization")

    if (!authorization) {
      return NextResponse.json({ message: "Not authorized to access this route" }, { status: 401 })
    }

    // Get the form data from the request
    const formData = await request.formData()

    // Forward the request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: authorization,
      },
      body: formData,
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Failed to upload file" }, { status: response.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

