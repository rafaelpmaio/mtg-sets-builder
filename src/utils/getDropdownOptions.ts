export const getDropdownOptions = (pathname: string) => {
  if (pathname === "/") {
    return ["All Collections", "Collect List", "Completed Sets"];
  }
  if (pathname.includes("/collection")) {
    return ["Number", "Collected", "Missing"];
  }
  return ["page path not found"];
};
