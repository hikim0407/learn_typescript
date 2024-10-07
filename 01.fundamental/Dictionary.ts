type Words = {
    //key:value 의 타입을 지정해준 것.
    [key:string]: string;
}

class Word {
    constructor(
        public readonly term:string,
        public readonly def:string,
    ) {}
}

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }

    //class를 타입처럼 사용 가능함. 자바랑 같음.
    add(word: Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    del(term:string) {
        if(this.words[term] !== undefined) {
            delete this.words[term];
        }
    }
    mod(term:string, def:string) {
        if(this.words[term] !== undefined) {
            this.words[term] = def;
        }
    }

    def(term:string) {
        return this.words[term];
    }
}

const kimchi = new Word("kimchi", "한국의 음식");

const dist = new Dict();
dist.add(kimchi);
console.log(dist.def("kimchi"));