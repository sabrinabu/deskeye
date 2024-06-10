import { NextRequest, NextResponse } from "next/server";

const departments = [
  {
    _id: 210,
    firmId: 130,
    name: "Department1",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
  {
    _id: 210,
    firmId: 130,
    name: "Department2",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
  {
    _id: 220,
    firmId: 169,
    name: "Department3",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
  {
    _id: 230,
    firmId: 169,
    name: "Department1",
    address: "Kaynatstr. 68, 58789 Berlin",
  },
];

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firmid } = reqBody;
    console.log(reqBody);

    const response = NextResponse.json({
      message: "successful",
      data: departments.filter((item) => item.firmId != firmid),
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
