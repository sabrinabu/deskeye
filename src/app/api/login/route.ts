import { NextRequest, NextResponse } from "next/server";

const customers = [
  {
    user: "khaled",
    password: "123",
    email: "khaled@gmail.com",
    role: "user",
  },
  {
    user: "sabrina",
    password: "1234",
    email: "sabrina@gmail.com",
    role: "admin",
  },

];

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { password } = reqBody;
    console.log(reqBody);

    const response = NextResponse.json({
      message: "customer",
      data: customers.filter((item) => item.password == password),
     
      success: true,
    });

    return response;
    console.log(response)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
