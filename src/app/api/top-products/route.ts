import { NextResponse } from "next/server";
import data from "../products.json";

export async function GET() {
    return NextResponse.json(data.products.sort((a, b) => b.rating - a.rating).slice(0, 8));
}