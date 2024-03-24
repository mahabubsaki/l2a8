import { NextResponse } from "next/server";
import data from "./flashsale.json";

export async function GET() {
    return NextResponse.json(data.products.slice(0, 4));
}