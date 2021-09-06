const transformAmount = (amount, currencyCode) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
  });
  return formatter.format(amount);
};

export default transformAmount;
