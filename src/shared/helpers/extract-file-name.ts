const extractFileName = (path: string, isClean?: boolean) => {
  const parts = path.split('/');
  const fileName = parts[parts.length - 1] ?? '';
  const fileNameFormat = fileName.split('.')[0] ?? '';
  const fileNameClean = fileNameFormat.replace(/-+/g, ' ').trim();

  return isClean ? fileNameClean : fileNameFormat;
};

export { extractFileName };
