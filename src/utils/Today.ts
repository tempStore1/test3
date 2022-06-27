const addZero = (time: number) => {
  return time < 10 ? `0${time}` : time;
};

export const Today = () => {
  let getDate = new Date();
  let year = getDate.getFullYear();
  let month = addZero(getDate.getMonth() + 1);
  let day = addZero(getDate.getDate());

  let getToday = `${year}-${month}-${day}`;
  return getToday;
};
