const calculateExperience = (startDate: Date) => {
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
};

export { calculateExperience };
