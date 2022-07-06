// quera 44
function linerEquation(a, b) {
  let liner = -b / a;
  let result;
  if (liner > 0) {
    result = `unique`;
  } else if (liner == -Infinity) {
    result = `infinite`;
  } else {
    result = `invalid`;
  }
  return result;
}
