const safeParseInt = data => {
  if (/^\d+$/.test(data)) {
    return parseInt(data);
  }
  return data;
};

export default safeParseInt;
