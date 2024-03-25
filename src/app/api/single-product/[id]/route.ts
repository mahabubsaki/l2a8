import { NextResponse } from "next/server";
import data from "../../products.json";
import IFlashSale from "@/interfaces/flashsale";
export const generateStaticParams = async () => {

    return [
        { productID: "1" },
        { productID: "2" },
        { productID: "3" },
        { productID: "4" },
        { productID: "5" },
        { productID: "6" },
        { productID: "7" },
        { productID: "8" },
        { productID: "9" },
        { productID: "10" }
    ];
};

export async function GET(_: Request, { params }: { params: { id: string; }; }) {

    return NextResponse.json(data.products.find(i => +i.id === +params.id) || {});
}