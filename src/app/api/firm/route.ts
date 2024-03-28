import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "firm",
      data: [
        {
          _id: 130,
          name: "4S BusinessService",
          address: "Georoge straße 21, 56348 Berlin",
        },
        {
          _id: 169,
          name: "Lorop GmbH",
          address: "Parkstr. 69, 45828 Berlin",
        },
        {
          _id: 187,
          name: "Siemens Berlin",
          address: "Tannenstr. 69, 12300 Berlin",
        },
      ],
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
