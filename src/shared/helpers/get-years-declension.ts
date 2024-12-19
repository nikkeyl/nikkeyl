const getYearsDeclension = (years: number) => {
  if (years % 100 >= 11 && years % 100 <= 14) {
    return 'лет';
  }

  switch (years % 10) {
    case 1:
      return 'год';
    case 2:
    case 3:
    case 4:
      return 'года';
    default:
      return 'лет';
  }
};

export { getYearsDeclension };
