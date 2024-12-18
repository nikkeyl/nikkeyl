import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const toolsFolder = join(process.cwd(), 'public/images/tools');

  try {
    const files = await readdir(toolsFolder);
    const tools = files.map((file) => `/images/tools/${file}`);

    return NextResponse.json(tools);
  } catch {
    return NextResponse.json(
      { error: 'Could not get [tools] files' },
      { status: 500 },
    );
  }
};

export { GET };
