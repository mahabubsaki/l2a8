import { NextRequest, NextResponse } from "next/server";
import data from "../products.json";


export async function GET(request: NextRequest) {
    const category = request.nextUrl.searchParams.get('category');
    const rating = request.nextUrl.searchParams.get('rating');
    const price = request.nextUrl.searchParams.get('price');
    let datas = [...data.products];
    if (category && category !== 'all') {
        datas = datas.filter(i => i.category === category);
    }
    if (category === 'all') datas = [...data.products];
    if (rating) {
        datas = datas.filter(i => i.rating >= +(rating) - 1 && i.rating <= (+rating));
    }
    if (price) {
        const [min, max] = price.split('-');
        datas = datas.filter(i => i.price >= +min && i.price <= +max);
    }
    console.log(datas.length);

    return NextResponse.json(datas);
}