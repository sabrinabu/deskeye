import { NextRequest, NextResponse } from "next/server";

const customers = [
  {
    _id: 310,
    departmentId: 210,
    name: "IT Service",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
  {
    _id: 320,
    departmentId: 210,
    name: "Software Development",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
  {
    _id: 330,
    departmentId: 220,
    name: "Business Management",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
  {
    _id: 340,
    departmentId: 220,
    name: "Human resource",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
];

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { departmentId } = reqBody;
    console.log(reqBody);

    const response = NextResponse.json({
      message: "successful",
      data: customers.filter((item) => item.departmentId != departmentId),
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
