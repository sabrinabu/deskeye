import { NextRequest, NextResponse } from "next/server";

const customers = [
    {
      _id: 310,
      departmentid: 210,
      name: "Amazon",
      address: "amnatstr. 68, 58789 Berlin",
    },
    {
        _id: 320,
        departmentid: 210,
        name: "Amazon2",
        address: "rmnatstr. 68, 58789 Berlin",
      },
      {
        _id: 330,
        departmentid: 215,
        name: "google",
        address: "seestr. 68, 58789 Berlin",
      },
      {
        _id: 340,
        departmentid: 215,
        name: "google8",
        address: "skystr. 68, 58789 Berlin",
      }]

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { departmentid } = reqBody;
    console.log(reqBody);

    const response = NextResponse.json({
      message: "customer",
      data: customers.filter((item)=>item.departmentid===departmentid),
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
