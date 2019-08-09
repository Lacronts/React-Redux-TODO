export function fullDateFormat(date: string) {
  const dateTime = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return new Intl.DateTimeFormat('en', options).format(dateTime);
}
