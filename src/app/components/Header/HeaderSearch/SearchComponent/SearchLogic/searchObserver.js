// ======================================================
// ------------------------------------------------------
// ++++++
// +++
// ======================================================
export default function searchObserver(inputStr) {
  // ------------------------------------------------------
  // Pressets
  const regExs = {
    firstWord: /^\w{3,}/i,
    oneWord: /\w{1,}\s/gi,
  };
  // ------------------------------------------------------
  const observeCases = [
      (str) => regExs.firstWord.test(str),
    ];
    const checkCases = (str, cases) => cases.reduce((trigger, func) => func(str) ? true : trigger, false);
    ;
  // ------------------------------------------------------
  return checkCases(inputStr, observeCases);
}
