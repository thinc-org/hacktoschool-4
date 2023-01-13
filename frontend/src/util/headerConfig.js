// USED when Authorization needed.
export const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
};
