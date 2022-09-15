export const filterUIAddress = (address) => {
  if (address.length <= 30) return address;
  else {
    return address.substring(0, 30) + "..";
  }
};
