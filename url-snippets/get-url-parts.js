
var urlRegex = /([a-z]{1,2}tps?):\/\/((?:(?!(?:\/|#|\?|&)).)+)(?:(\/(?:(?:(?:(?!(?:#|\?|&)).)+\/))?))?(?:((?:(?!(?:\.|$|\?|#)).)+))?(?:(\.(?:(?!(?:\?|$|#)).)+))?(?:(\?(?:(?!(?:$|#)).)+))?(?:(#.+))?/;

var getUrlParts = function getUrlParts(url) {
  var found = url.match(urlRegex);
  console.log("reg", found)
  try {
    var _found = _slicedToArray(found, 8),
        fullUrl = _found[0],
        protocol = _found[1],
        domain = _found[2],
        path = _found[3],
        endFilename = _found[4],
        endFileExtension = _found[5],
        query = _found[6],
        hash = _found[7];

    return {
      fullUrl: fullUrl,
      protocol: protocol,
      domain: domain,
      path: path,
      endFilename: endFilename,
      endFileExtension: endFileExtension,
      query: query,
      hash: hash
    };
  } catch (e) {
    throw new Error("Could not find url parts from ".concat(url, "."));
  }
};

const testUrl = getUrlParts('https://google.com/bio?dsdas=dsd&defs2=cdcs#nea')
console.log("t", testUrl)