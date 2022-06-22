export const formatMoney = (price) => {
  const dollarAU = Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });
  return `${dollarAU.format(price)}`;
};
