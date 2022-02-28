/**
 * create accordion with js
 * @param {string} selector
 * @param {string} openTab
 * @param {string} closeTab
 * @return {object}
 * @author: Ehsan Ghaffar
 */
const tabs = document.querySelectorAll(".tab");

const openTab = (tab) => {
  const content = tab.childNodes[3];
  const contentHeight = content.scrollHeight;
  content.style.height = contentHeight + "px";
};

/**
 *
 * @param tabs
 * @param openTab
 * @param closeTab
 * @return {object}
 */
const closeTab = (tabs, openTab) => {
  tabs.forEach((tab) => {
    if (tab !== openTab) {
      const content = tab.childNodes[3];
      content.style.height = 0;
    }
  });
};

/**
 * @param {string} selector
 * @param {string} openTab
 * @param {string} closeTab
 * @return {object}
 */
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    openTab(tab);
    closeTab(tabs, tab);
  });
});
