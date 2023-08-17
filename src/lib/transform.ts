export const transform = (string: string): string => {
  const regex = /{"status":"content","value":"([^"]+)"}/g;
  const values = [];

  let match;
  while ((match = regex.exec(string)) !== null) {
    const object = JSON.parse(match[0]);
    values.push(object.value);
  }

  return values.join('');
};
