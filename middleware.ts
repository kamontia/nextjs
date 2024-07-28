import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {

  // const token = await request.headers.get("Authorization")?.split("")[1]
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthbW9udGlhQGdtYWlsLmNvbSIsImV4cCI6MTcyMTkxMjcyNn0.8S2nqaO2sUFZQVzaxPlvkY6wJvwgh8_-HahaB5Co9BM"

  if (!token) {
    return NextResponse.json({ message: "Token is not found." })
  }
  console.log("verify")
  try {
    const secretKey = new TextEncoder().encode("next-market-app-book")
    const decodedJwt = await jwtVerify(token, secretKey)
    console.log(`decodedJwt: ${decodedJwt}`)
    console.log(decodedJwt)
    return NextResponse.next()

  } catch (err) {
    return NextResponse.json({ message: "Token is INVALID." })
  }

}

export const config = {
  matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"]
}
