import { NextRequest, NextResponse } from "next/server";

const location = [
  {
    _id: 410,
    customerid: 310,
    address: "berlinstr. 68, 58789 Berlin",
  },
  {
    _id: 420,
    customerid: 310,
    address: "usagstr. 68, 58789 Berlin",
  },
  {
    _id: 430,
    customerid: 320,
    address: "bdstr. 68, 58789 Berlin",
  },
  {
    _id: 440,
    customerid: 320,
    address: "rsstr. 68, 58789 Berlin",
  },
];

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { customerid } = reqBody;
    console.log(reqBody);
    const response = NextResponse.json({
      message: "successful",
      data: location.filter((item) => item.customerid === customerid),
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
