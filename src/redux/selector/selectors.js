export const selectFilter = state => state.filter;
export const selectContacts = state => state.contact.items;
export const selectIsLoading = state => state.contact.isLoading;
export const selectToken = state => state.signup.token;
export const selectIsLoggedIn = state => state.signup.isLoggedIn;
export const selectUser = state => state.signup.user;
