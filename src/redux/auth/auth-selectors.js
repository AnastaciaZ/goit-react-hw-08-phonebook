const getAuthLoading = state => state.auth.loading;

const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getAuthError = state => state.auth.error;

const authSelectors = { getAuthLoading, getIsAuthenticated, getUserName, getAuthError };

export default authSelectors;