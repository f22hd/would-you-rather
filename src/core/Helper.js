export function convertObjToArray(obj) {
  let temp = [];
  Object.keys(obj).forEach(key => {
    temp.push(obj[key]);
  });

  return temp;
}

export function beutifyDate(timestamp) {
  let createdAt = new Date();
  createdAt.setTime(timestamp);
  return createdAt.toDateString();
}
