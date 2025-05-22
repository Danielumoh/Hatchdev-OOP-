class Books{
    title: string;
    author:string;

    constructor( title: string, author:string) {
        this.title = title;
        this.author = author;
    }

    GetDetails(): string{
        return `${this.title} by ${this.author}`; 
    }
}
 
class Member{
    private name: string;
    private memberIdNo: number;

    constructor( name:string,memberIdNo:number ){
        this.name=name;
        this.memberIdNo=memberIdNo;
    }

    getMemberInfo():string{
        return `Name:${this.name}, MemberId:${this.memberIdNo}`;
    }
}

class Librarian extends Member{
    constructor(name:string, memberIdNo:number){
        super(name, memberIdNo);
    }
    getMemberInfo(): string {
        return `librarian ${super.getMemberInfo()}`
    }
}

const Book1 = new Books("Things fall apart", "Chinua Achebe");
console.log(Book1.GetDetails());

const Member1 = new Member("Bright", 2029);
console.log(Member1.getMemberInfo());

const librarian = new Librarian("Mrs theresa", 2007);
console.log(librarian.getMemberInfo());
