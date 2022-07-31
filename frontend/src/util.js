export function backend(route) {
  return `${process.env.REACT_APP_API_ENDPOINT}/${route}`;
}