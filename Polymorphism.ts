type SuperPrint = {
    <TypePlaceholder>(arr:TypePlaceholder[]):void
    
}

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false]);
const c = superPrint([1, 2, true, false]);
const d = superPrint([1, 2, "true", false]);