const extractFileName = (path: string) => {
  const parts = path.split('/');
  const fileNameWithExtension = parts[parts.length - 1] ?? '';
  const fileNameWithoutExtension = fileNameWithExtension.split('.')[0] ?? '';
  const formattedFileName = fileNameWithoutExtension.replace(/-+/g, ' ').trim();

  return formattedFileName;
};

export { extractFileName };
