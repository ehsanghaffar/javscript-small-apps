/**
 *
 * @param {*} firstDate
 * @param {*} secondDate
 * @returns {number}
 */
const calculateDaysBetweenDates = (firstDate, secondDate) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDateMs = firstDate.getTime();
  const secondDateMs = secondDate.getTime();
  const differenceMs = Math.abs(firstDateMs - secondDateMs);
  return Math.round(differenceMs / oneDay);
};
