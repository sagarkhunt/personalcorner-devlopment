export const fomatNumberToStandard = (number) => {
  return Intl.NumberFormat("en-US", {
    notation: "standard",
    maximumFractionDigits: 2,
  }).format(number);
};

export const fomatNumberToCompact = (number) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(number);
};
