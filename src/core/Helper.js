export function convertObjToArray(obj) {
  let temp = [];
  Object.keys(obj).forEach(key => {
    temp.push(obj[key]);
  });

  return temp;
}
