/*
type SuperPrint = {
    (arr:number[]):void
    (arr:boolean[]):void
    (arr:string[]):void
    (arr:(number|boolean)[]):void
}
*/
//Generic은 any 랑 다르다.
//Generic은 내가 원하는 형태의 타입을 만들어주는것. > 그래서 타입스크립트의 보호 기능이 작동한다.
//any는 타입을 지정하지 않기에 타입스크립트의 보호 기능이 작동하지 않는다.
type SuperPrint = {
    <T,M>(a:T[], b:M): T
}

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], "X");
const b = superPrint([true, false], 1);
const c = superPrint([1, 2, true, false], false);
const d = superPrint([1, 2, "true", false], "hello");