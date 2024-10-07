//추상클래스 개념은 좋지만 결국 JS 에는 추상클래스 개념이 없음.
//TS > JS 로 변환할때, 추상클래스는 클래스로 변환이 됨.
/*
abstract class Name {
    constructor(
        protected firstName:string,
        protected lastName:string,
    ) {};
    abstract sayHi(name:string):string;
    abstract fullName():string;
}

class Person extends Name {
    sayHi(name: string): string {
        return `Hello ${name}. I'm ${this.fullName()}`;
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
*/

//인터페이스는 TS > JS 로 변할때 표현되지 않음. 파일의 크기 줄일 수 있음.
//단점은 implements 하는 클래스에서 property들을 constructor로 구현해야 한다는 점.
//private 로 property들을 구현할 수 없다는점.
//타입도 될 수 있음.
interface Name {
    firstName:string,
    lastName:string,
    sayHi(name:string):string;
    fullName():string;
}
interface Human {
    health:number
}

class Person implements Name, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number,
    ){};
    sayHi(name: string): string {
        return `Hello ${name}. I'm ${this.fullName()}`;
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

function makeUser(user: Name) {
    return "hi";
}

makeUser({
    firstName:"nico",
    lastName:"las",
    fullName: () => "X",
    sayHi: () => "hi",
})