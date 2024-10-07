abstract class User {
    constructor (
        protected firstName:string,
        private lastName:string,
        public nickName:string
    ) {}

    abstract getNickName():void;

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User {
    getNickName() {
        //상속했다 해도 private 요소에는 접근이 불가능하다.
        //this.lastName
        //protected 요소에는 접근이 가능함.
        this.firstName;
        console.log(this.nickName);
    }
}

const nico = new Player("nico","las","니꼬");
nico.getFullName();
//상속받지 않은 클래스에서는 protected도 접근 불가능
//nico.firstName;