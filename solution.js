/* Version2 Solution for findCombinationsFromText (validPrefixes = Keywords) ,
 Cases :
 - if there isn't Subcategory we we take it from Category,
 - if there isn't Subcategory and Make is Found there is not neccasry for Subcategory
 - clear the invalid trilling and leading chars
 - sort the array based on the validPrefixes levels 
*/

const findCombinationsFromText = (text) => {
  //Valid Prefixes
  const validPrefixes = ["Group", "Category", "Subcategory", "Make", "Model"];
  const Combinations = [];

  //ensure if there an invalid prifex or more than one Group
  const regex1 = new RegExp(validPrefixes[0], "g");
  const regex2 = new RegExp("WrongPrefix", "g");
  const countRegex1 = (text.match(regex1) || []).length;
  const countRegex2 = (text.match(regex2) || []).length;
  if (countRegex1 > 1 || countRegex2 > 0) {
    return Combinations;
  }

  //   take indexes of Valid Prifexes
  const validPrefixesResult = {};
  validPrefixes.forEach((ele) => {
    let prifexIndex = text.search(ele);
    if (prifexIndex !== -1) {
      validPrefixesResult[ele] = prifexIndex;
    }
  });
  // Sort Indexes of Valid Prifexes
  const sortedInexes = Object.values(validPrefixesResult).sort((a, b) => a - b);
  sortedInexes.forEach((ele, i) => {
    if (i === 2) {
      Combinations.push(clearPrifex(text.slice(ele, text.length)));
    } else {
      Combinations.push(clearPrifex(text.slice(ele, sortedInexes[i + 1])));
    }
  });

  //   Sort Combinations based on prefixes
  Combinations.sort(compareByPrefix);
  //create the require Collection form
  const resultArr = Combinations.reduce((acc, _, i) => {
    acc.push(Combinations.slice(0, Combinations.length - i));
    return acc;
  }, []);

  return resultArr;
};

// remove leading/trailing spaces and hyphens/underscores
function clearPrifex(str) {
  return str
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .replace(/[^a-zA-Z0-9_-]|[0-9]*([a-zA-Z])[0-9]*/g, "$1");
}
// make Sort function based on prefix

function compareByPrefix(a, b) {
  const validPrefixes = ["Group", "Category", "Subcategory", "Make", "Model"];
  const aPrefix = a.split("_")[0];
  const bPrefix = b.split("_")[0];

  const aIndex = validPrefixes.indexOf(aPrefix);
  const bIndex = validPrefixes.indexOf(bPrefix);

  if (aIndex === -1) {
    return 1;
  } else if (bIndex === -1) {
    return -1;
  } else {
    return aIndex - bIndex;
  }
}
module.exports = findCombinationsFromText;
