export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export function resetToken() {
  localStorage.clear();
  setTimeout(function() {
    window.location.reload(true);
  }, 100);
}
