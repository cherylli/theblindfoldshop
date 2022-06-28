export const arrayToSelectOptions = (array) => {
  return array.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
};
