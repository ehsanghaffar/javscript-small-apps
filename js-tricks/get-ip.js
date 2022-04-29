const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let baseUrl = "https://geolocation-db.com/";

// get my ip address and information
async function getIp(address) {
  let response = await fetch(baseUrl + address);
  const data = await response.json();
  console.log(data);
}
getIp("json");

// get ip address information
const getIpInfo = async (ip) => {
  const prefix = "jsonp/";
  const url = `${baseUrl}${prefix}${ip}`;
  const res = await fetch(url)
    .then((data) => console.log("simplest possible fetch", data))
    .catch((err) => console.log(err));
};

testIp = "82.196.6.158";
getIpInfo(testIp);
