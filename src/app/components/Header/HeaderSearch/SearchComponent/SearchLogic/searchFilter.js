export default function searchFilter(){
    const filterCases = [
        (word, name) => word.test(name),
        
    ];
    return filterCases
};