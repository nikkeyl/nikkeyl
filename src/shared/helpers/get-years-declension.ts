const getYearsDeclension = (years: number) => {
  if (years % 100 >= 11 && years % 100 <= 14) {
    return 'лет';
  }

  if (years % 10 === 1) {
    return 'год';
  }

  if (years % 10 >= 2 && years % 10 <= 4) {
    return 'года';
  }

  return 'лет';
};

export { getYearsDeclension };
