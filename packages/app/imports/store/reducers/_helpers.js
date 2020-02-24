export const clearExpired = (state, ttl = 1000 * 60 * 60 * 24 * 7) => {
  const newState = { ...state };
  Object.entries(state).forEach(([key, value]) => {
    if (!value.lastUpdated || value.lastUpdated + ttl < Date.now()) {
      delete newState[key];
    }
  });
  return newState;
};
