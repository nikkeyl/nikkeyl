const calculateExperience = (startDate: Date) => {
  const currentDate = new Date();
  const years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();

  return { years, months };
};

export { calculateExperience };
