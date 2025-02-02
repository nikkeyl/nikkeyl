const extractFileName = (path: string, isClean?: boolean) => {
  const parts = path.split('/');
  const fileNameWithExtension = parts[parts.length - 1] ?? '';
  const fileNameWithoutExtension = fileNameWithExtension.split('.')[0] ?? '';
  const formattedFileName = fileNameWithoutExtension.replace(/-+/g, ' ').trim();

  return isClean ? formattedFileName : fileNameWithoutExtension;
};

export { extractFileName };
