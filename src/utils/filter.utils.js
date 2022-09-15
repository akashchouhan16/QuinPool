export const filterUIAddress = (address) => {
  if (address.length <= 40) return address;
  else {
    return address.substring(0, 40) + "..";
  }
};
