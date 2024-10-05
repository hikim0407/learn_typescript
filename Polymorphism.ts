type SuperPrint = {
    <TypePlaceholder>(arr:TypePlaceholder[]):void
    
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(item => console.log(item));
}

superPrint([1, 2, 3, 4]);
superPrint([true, false]);
superPrint([1, 2, true, false]);
superPrint([1, 2, "true", false]);