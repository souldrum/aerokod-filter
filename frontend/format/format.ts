export const rubSign = "₽";

export const formatPrice = (price: string | number) => {
  if (typeof price === "string") price = Number(price);

  const CurrencyFormatter = Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return CurrencyFormatter.format(price);
};

export const formatReleaseDates = (value: string) => {
  const formatValue = value.replace(/кв./, " квартал");
  let quarter = value.slice(0, 1);

  switch (quarter) {
    case "1":
      quarter = "I";
      break;
    case "2":
      quarter = "II";
      break;
    case "3":
      quarter = "III";
      break;
    case "4":
      quarter = "IV";
      break;
    default:
      break;
  }

  return `${quarter} ${formatValue.slice(1)}`;
};
