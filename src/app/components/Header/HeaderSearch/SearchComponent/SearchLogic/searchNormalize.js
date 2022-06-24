// Pressets:
const AlphsTabsPairs = [
    ['й', 'q'], ['ц', 'w'], ['у', 'e'], ['к', 'r'], ['е', 't'], ['н', 'y'], ['г', 'u'], ['ш', 'i'], ['щ', 'o'], ['з', 'p'], ['ф', 'a'], ['ы', 's'], ['в', 'd'], 
    ['а', 'f'], ['п', 'g'], ['р', 'h'], ['о', 'j'], ['л', 'k'], ['д', 'l'], ['я', 'z'], ['ч', 'x'], ['с', 'c'], ['м', 'v'], ['и', 'b'], ['т', 'n'], ['ь', 'm'],
]
const cyrillicCommonChars = /[йцукенгшщзфывапролджячмить]/;

export default function searchNormalize(str) {
    const normalizeUnits = [
        (strA) => strA.toLowerCase(),
        // (strB) => strB.trim(),
        (strC) => {
            const arrFromStr = strC.split('');
            if (cyrillicCommonChars.test(strC)) {
                for (let i = 0; i < arrFromStr.length; i += 1){
                    if (cyrillicCommonChars.test(arrFromStr[i])){
                        arrFromStr[i] = [...([...AlphsTabsPairs].find((pair) => pair[0] === arrFromStr[i]))[1]];
                    } 

            }
            
        }
        return arrFromStr.join('');
    }
    ];
    const normalizeStr = (strE, normalizeStack) => normalizeStack.reduce((acc, func) => func(acc), strE);
    return normalizeStr(str, normalizeUnits)
}