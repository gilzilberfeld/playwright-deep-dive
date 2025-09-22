import { NextResponse } from "next/server";
import { getCounter, incrementCounter, setCounter } from "./state_management";

export async function GET() {
  console.log("GET /api/a11/counter - current counter:", getCounter);
  return NextResponse.json({ count: getCounter() });
}

export async function POST(req: Request) {
  try {
    console.log("POST /api/a11/counter - current counter:", getCounter);
    console.log("Request body:", await req.clone().text());
    // Gracefully handle requests with no body, like the simple increment.
    const text = await req.text();
    const data = text ? JSON.parse(text) : {};

    // THE FIX: We check for the existence of the property, not its truthiness.
    // This correctly handles the case where newCounter is 0.
    if (data.newCounter !== undefined) {
      setCounter(data.newCounter);
    } else {
      // If there's no reset payload, we increment.
      incrementCounter();
    }

    return NextResponse.json({ count: getCounter() });
  } catch (error) {
    // Handle potential JSON parsing errors for empty bodies
    if (error instanceof SyntaxError) {
      incrementCounter();
      return NextResponse.json({ count: getCounter() });
    }
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}