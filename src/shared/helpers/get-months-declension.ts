const getMonthsDeclension = (months: number) => {
  if (months % 10 === 1 && months !== 11) {
    return 'месяц';
  }

  if (months % 10 >= 2 && months % 10 <= 4 && (months < 10 || months > 20)) {
    return 'месяца';
  }

  return 'месяцев';
};

export { getMonthsDeclension };
