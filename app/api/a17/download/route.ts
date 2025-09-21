import { NextResponse } from 'next/server';

export async function GET() {
  const fileContent = 'This is the content of the downloaded file.';
  const headers = new Headers();
  headers.set('Content-Type', 'text/plain');
  headers.set(
    'Content-Disposition',
    'attachment; filename="workshop_download.txt"'
  );

  return new NextResponse(fileContent, { status: 200, headers });
}
