import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const reviewsFolder = join(process.cwd(), 'public/images/reviews');

  try {
    const files = await readdir(reviewsFolder);
    const reviews = files.map((file) => `/images/reviews/${file}`);

    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json(
      { error: 'Could not get [reviews] files' },
      { status: 500 },
    );
  }
};

export { GET };
