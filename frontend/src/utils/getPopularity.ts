const getPopularity = (value: number): string => {
  if (value < 30) {
    return 'Pouco escutado';
  }
  if (value < 55) {
    return 'Chamando Atenção';
  }
  if (value < 80) {
    return 'Bem conhecido';
  }
  if (value < 88) {
    return 'Popular';
  }

  return 'Estourando';
};

export default getPopularity;
