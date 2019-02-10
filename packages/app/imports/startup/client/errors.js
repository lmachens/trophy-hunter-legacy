window.onerror = (message, url, line, col, error) => {
  console.error('window.onerror', message, url, line, col, error);
};
