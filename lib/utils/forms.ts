export const arrayToObject = (arr: any[]) =>
  arr.reduce((acc, issue) => {
    const path = issue.path.join(".");
    acc[path] = issue.message;
    return acc;
  }, {});
