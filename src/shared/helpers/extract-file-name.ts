const extractFileName = (path: string) => {
  const parts = path.split('/');
  const fileNameWithExtension = parts[parts.length - 1] ?? '';

  return `${fileNameWithExtension.split('.')[0]}`;
};

export { extractFileName };
