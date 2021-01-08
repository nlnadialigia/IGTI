function getNewTimestamp() {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = `${date.getMilliseconds()}`;

  const result = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}.${milliseconds}`;
  // eslint-disable-next-line no-console
  console.log(result);

  return result;
}

export { getNewTimestamp };
