const timestampToLocaleDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString();
};

export { timestampToLocaleDate };
