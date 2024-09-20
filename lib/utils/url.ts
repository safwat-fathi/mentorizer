export const getLocaleFromURL = (path: string) => {
  const match = path.match(/^\/(ar|en)(\/|$)/);

  if (match) {
    return match[1];
  }

  return null;
};
