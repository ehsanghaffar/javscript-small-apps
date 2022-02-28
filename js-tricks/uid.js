/**
 * create uid without any packahge or library in JavaScript
 * @returns {number} - unique id
 * @author: Ehsan Ghaffar
 */
const uid = () => {
  const firstSection = Date.now().toString(36);
  const secondSection = Math.random().toString(36).substring(2);
  return firstSection.concat(secondSection);
};

console.log(uid());
