import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // New business rule: Reject files larger than 1MB.
    const MAX_FILE_SIZE = 1024 * 1024; // 1MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File is too large. Maximum size is 1MB.' },
        { status: 413 } // 413: Payload Too Large is a semantic HTTP status code for this.
      );
    }

    // In a real app, you'd save the file to a storage service.
    console.log(`Received file: ${file.name}, size: ${file.size}`);

    return NextResponse.json({
      success: true,
      filename: file.name,
      size: file.size,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error processing file' },
      { status: 500 }
    );
  }
}

