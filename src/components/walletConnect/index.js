export const shortenAddress = (address) => {
  if (!address) return "";

  const addressStart = address.substring(0, 6);
  const addressEnd = address.substring(address.length - 4);
  return `${addressStart}...${addressEnd}`;
};
