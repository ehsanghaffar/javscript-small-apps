function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}

(async function () {
  const ids = [10, 20, 30];
  // for (const id of ids) {
  //   await getById(id);
  // }
  ids.forEach(async (id) => {
    await getById(id);
  });
})();
