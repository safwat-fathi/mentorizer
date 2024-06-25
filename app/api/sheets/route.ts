import { SheetsService } from "@/lib/services/sheets.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const email = req.nextUrl.searchParams.get("email");
		console.log("🚀 ~ GET ~ email:", email);
		const joinAs = req.nextUrl.searchParams.get("joinAs");
		console.log("🚀 ~ GET ~ joinAs:", joinAs);

		if (!email || !joinAs) {
			return NextResponse.json(
				{ success: false, message: "Missing email or join as type" },
				{ status: 400 }
			);
		}

		const sheetsService = SheetsService.Instance();

		const rowAdded = await sheetsService.addRow({
			email: email,
			joinAs: joinAs,
		});

		if (rowAdded)
			return NextResponse.json(
				{ success: true, message: "Added new row successfully" },
				{ status: 200 }
			);
		else
			return NextResponse.json(
				{ success: false, message: "Added new row failed" },
				{ status: 400 }
			);
	} catch (err) {
		return NextResponse.json(
			{ success: false, message: `${err}` },
			{ status: 500 }
		);
	}
}
