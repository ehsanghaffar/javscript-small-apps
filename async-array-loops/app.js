const asyncUppercase = (item) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItems = async () => {
  const items = ["a", "b", "c"];
  await items.forEach(async (item) => {
    const uppercaseItem = await asyncUppercase(item);
    console.log(uppercaseItem);
  });

  console.log("Items processed");
};

uppercaseItems();
// LOGS: ''Items processed', 'B', 'A', 'C'
