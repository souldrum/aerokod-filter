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

export const formatRangeData = (name: "price" | "square", value: number) =>
  name === "price" ? formatPrice(value) : value;

export const formatRoomsNumber = (value: number) => {
  if (value === 0) return "Ст";

  return value + "к";
};

export const showTotal = (total: number) => {
  if (total == 0) return "Ничего не найдено";

  const string = String(total);

  switch (true) {
    case string.endsWith("2") && !string.endsWith("12"):
    case string.endsWith("3") && !string.endsWith("13"):
    case string.endsWith("4") && !string.endsWith("14"):
      return `Найдено ${total} квартиры`;
    case string.endsWith("1") && !string.endsWith("11"):
      return `Найдено ${total} квартира`;

    default:
      return `Найдено ${total} квартир`;
  }
};
