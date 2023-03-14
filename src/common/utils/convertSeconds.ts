export function convertSeconds(givenSeconds: number) {
  let dateObj = new Date(givenSeconds * 1000);
  let hours = dateObj.getUTCHours();
  let minutes = dateObj.getUTCMinutes();
  let seconds = dateObj.getSeconds();
  if (hours === 0 && minutes === 0 && seconds === 0) {
    return ''
  }
  let hoursString = hours === 0 ? '' : hours.toString().padStart(2, '0') + ':'
  return hoursString + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}