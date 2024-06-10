import { NextRequest, NextResponse } from "next/server";

const locationdetails = [
    {
      _id: 510,
      locationid: 410,
      name: "Server",
      amount: 2100,
    },
    {
        _id: 520,
       locationid: 410,
        name: "computer",
        amount: 1100,
      },
      {
        _id: 530,
       locationid: 410,
        name: "websiten",
        amount: 11,
      },
      {
        _id: 540,
       locationid: 420,
        name: "ArbeitPlatz",
        amount: 15,
      }, {
        _id: 550,
       locationid: 420,
        name: "Human resource",
        amount:12,
      },
      {
        _id: 560,
       locationid: 130,
        name: "Business Management",
        amount:122,
      },]

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { locationid } = reqBody;
    console.log(reqBody);

    const response = NextResponse.json({
      message: "locationdetails",
      data: locationdetails.filter((item)=>item. locationid === locationid),
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}




