import { NextResponse } from "next/server";
import data from "../products.json";

export async function GET() {
    return NextResponse.json(data.products.filter(i => !!i.flash_sale));
}