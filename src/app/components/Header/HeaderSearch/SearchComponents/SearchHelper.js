import * as Sentry from "@sentry/react";

async function fetchSearchKeys(API, endPoint) {
  // ---------------
  // Helpers:
  function getKeysFromFetchedProducts(fetchedProducts = [{}]) {
    const keys = fetchedProducts.map((el) => ({
      name: el.name,
      itemNo: el.itemNo,
    }));
    return keys;
  }

  async function fetchData(URL) {
    try {
      const res = await fetch(URL);
      const parseRes = res.json();
      return parseRes;
    } catch (err) {
      Sentry.ErrorBoundary(err);
    }
    return "eslint";
  }
  // ---------------
  if (endPoint === "products") {
    const fetchedProducts = await fetchData(`${API}${endPoint}`);
    const keys = getKeysFromFetchedProducts(fetchedProducts);
    return keys;
  }

  return fetchData(`${API}${endPoint}`);
}

function formatUserText(input) {
  const cyrilicPairs = {
    1040: 70,
    1041: 60,
    1042: 68,
    1043: 85,
    1044: 76,
    1045: 84,
    1025: 96,
    1046: 59,
    1047: 80,
    1048: 66,
    1049: 81,
    1050: 82,
    1051: 75,
    1052: 86,
    1053: 89,
    1054: 74,
    1055: 71,
    1056: 72,
    1057: 67,
    1058: 78,
    1059: 69,
    1060: 65,
    1061: 123,
    1062: 87,
    1063: 88,
    1064: 73,
    1065: 79,
    1066: 125,
    1067: 83,
    1068: 77,
    1069: 34,
    1070: 1070,
    1071: 90,
    1028: 34,
    1030: 83,
    1031: 125,
    1072: 102,
    1073: 44,
    1074: 100,
    1075: 117,
    1076: 108,
    1077: 116,
    1105: 96,
    1078: 59,
    1079: 112,
    1080: 98,
    1081: 113,
    1082: 114,
    1083: 107,
    1084: 118,
    1085: 121,
    1086: 106,
    1087: 103,
    1088: 104,
    1089: 99,
    1090: 110,
    1091: 101,
    1092: 97,
    1093: 91,
    1094: 119,
    1095: 120,
    1096: 105,
    1097: 111,
    1098: 93,
    1099: 115,
    1100: 109,
    1101: 39,
    1102: 46,
    1103: 122,
    1108: 39,
    1110: 115,
    1111: 93,
  };
  const regExs = {
    cyrillic: /[бгджзийлнпуфцчшщъыьэюяїіє]/gim,
    notValidValues: /[^a-z0-9\s]/gim,
  };
  // ++++++
  function normalizeInput(str = "") {
    let formattedInput = str;

    if (regExs.cyrillic.test(formattedInput)) {
      let convertedStr = formattedInput;
      const arrOfCyrillicCodes = Object.keys(cyrilicPairs);
      for (let i = 0; i < formattedInput.length; i += 1) {
        const currentCharCode = formattedInput.charCodeAt(i);
        if (arrOfCyrillicCodes.includes(currentCharCode.toString())) {
          convertedStr =
            convertedStr.slice(0, i) +
            String.fromCharCode(cyrilicPairs[currentCharCode]) +
            convertedStr.slice(i + 1);
        }
      }
      formattedInput = convertedStr;
    }

    if (regExs.notValidValues.test(formattedInput)) {
      const res = Array.from(
        new Set(formattedInput.match(regExs.notValidValues))
      );
      formattedInput = res.reduce(
        (text, sym) => text.replaceAll(sym, ""),
        formattedInput
      );
    }
    return formattedInput.trim();
  }
  return normalizeInput(input);
}

async function fetchProducts(
  arrOfItemsNo = [],
  setState,
  startPoint,
  endPoint
) {
  // -------------------

  // Helpers:
  function createProductsURL(ItemsNo = []) {
    const productsURLs = ItemsNo.map(
      (itemNo) => `${startPoint}${endPoint}/${itemNo}`
    );
    return productsURLs;
  }
  async function fetchProduct(url) {
    try {
      const res = await fetch(url);
      const parseRes = res.json();
      const product = await parseRes;
      return product;
    } catch (err) {
     Sentry.ErrorBoundary(err);
    }
    return "eslint";
  }
  // Compose func:
  async function getAllProductsFrom(ItemsNo) {
    const productsUrls = createProductsURL(ItemsNo);
    const arrOfProducts = await Promise.all(
      productsUrls.map((url) => fetchProduct(url))
    );
    setState("success");
    return arrOfProducts;
  }

  // -------------------
  setState("pending");
  return getAllProductsFrom(arrOfItemsNo);
}

function createArrOfIDs(keys, strToSearch = "") {
  const regExs = {
    subStr: /\b\w+\b/gim,
  };
  const arrOfKeyWords = strToSearch.match(regExs.subStr);

  function testNameWithKeyWords(name = "", keyWords = []) {
    function checkKeyWordInName(keyWord = "") {
      const regEx = new RegExp(`(?<=^| )${keyWord}`, "gim");
      const keyWordIsInName = regEx.test(name);
      return keyWordIsInName;
    }
    const isValidNameProduct = keyWords.every(checkKeyWordInName);

    return isValidNameProduct;
  }
  const arrOfProducts = keys.filter(
    (searchKey) => testNameWithKeyWords(searchKey.name, arrOfKeyWords),
    (key) => key.ItemNo
  );
  const arrOfProductsIds = arrOfProducts.map((el) => el.itemNo);
  return arrOfProductsIds;
}

export {
  fetchSearchKeys,
  formatUserText,
  fetchProducts,
  createArrOfIDs,
};
