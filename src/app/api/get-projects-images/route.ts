import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const projectsFolder = join(process.cwd(), 'public/images/projects');

  try {
    const files = await readdir(projectsFolder);
    const projects = files.map((file) => `/images/projects/${file}`);

    return NextResponse.json(projects);
  } catch {
    return NextResponse.json(
      { error: 'Could not get [projects] files' },
      { status: 500 },
    );
  }
};

export { GET };
