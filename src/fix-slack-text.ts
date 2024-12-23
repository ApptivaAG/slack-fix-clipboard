export const fixSlackText = (text) => {
  return text.replace(/\n\@([a-zA-Z]+)\n/g, "@$1");
};

