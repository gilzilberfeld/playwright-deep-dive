    import { NextResponse } from 'next/server';

    // This API always returns a list of products.
    // The only way to test the "empty" state is to mock this response.
    const products = [
      { id: 1, name: 'Awesome Cat Toy' },
      { id: 2, name: 'Laser Pointer' },
      { id: 3, name: 'Cardboard Box' },
    ];

    export async function GET() {
      return NextResponse.json({ products });
    }