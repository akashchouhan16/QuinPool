export const filterUIAddress = (address) => {
  if (address.length <= 20) return address;
  else {
    return address.substring(0, 25) + "+";
  }
};
