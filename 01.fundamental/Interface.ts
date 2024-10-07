/*
//타입은 alias 도 가능하지만, 특정값을 가지도록 하는것도 가능하다.
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

//interface는 오직 오브젝트의 모양을 설명하는 용도로만 쓰임.
//type 이 좀 더 쓰임이 많다.
interface IPlayer {
    nickName: string,
    team:Team,
    health: Health,
}

const INico: IPlayer = {
    nickName:"nico",
    team:"blue",
    health:1
}
*/
interface IUser {
    name: string
}
interface IUser {
    lastName: string
}
interface IUser {
    health: number
}
interface IPlayer extends IUser {
}

const INico: IPlayer = {
    name:"nico",
    lastName:"las",
    health:1,
}