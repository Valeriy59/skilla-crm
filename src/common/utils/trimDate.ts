export function trimDate (dateString: string) {
  let date = new Date(dateString)
  return `${date.getHours()}:${date.getMinutes()}`;
}