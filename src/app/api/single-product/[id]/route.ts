import { NextResponse } from "next/server";
import data from "../../products.json";

export async function GET(_: Request, { params }: { params: { id: string; }; }) {

    return NextResponse.json(data.products.find(i => +i.id === +params.id) || {});
}