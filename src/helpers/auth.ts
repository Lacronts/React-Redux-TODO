export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export function resetToken() {
  localStorage.removeItem('token');
  window.location.reload();
}
