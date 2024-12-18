import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const aboutMeFolder = join(process.cwd(), 'public/images/about-me');

  try {
    const files = await readdir(aboutMeFolder);
    const aboutMe = files.map((file) => `/images/about-me/${file}`);

    return NextResponse.json(aboutMe);
  } catch {
    return NextResponse.json(
      { error: 'Could not get [about-me] files' },
      { status: 500 },
    );
  }
};

export { GET };
