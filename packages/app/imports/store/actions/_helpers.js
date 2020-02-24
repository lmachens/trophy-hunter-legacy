const shouldFetch = (state, ttl) => {
  if (!state) return true;
  if (state.isFetching && Date.now() - state.lastUpdated > 10000) return true;
  if (state.error) return true;
  return Date.now() - state.lastUpdated > ttl;
};

export const fetchIfNeeded = (fetchFunction, reducer, ttl = 1000 * 60 * 60 * 30) => identifier => {
  return (dispatch, getState) => {
    const state = getState()[reducer][identifier];
    if (shouldFetch(state, ttl)) {
      setTimeout(() => {
        dispatch(fetchFunction(identifier));
      }, 0);
    }
    return Promise.resolve();
  };
};
