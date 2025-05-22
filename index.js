var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Books = /** @class */ (function () {
    function Books(title, author) {
        this.title = title;
        this.author = author;
    }
    Books.prototype.GetDetails = function () {
        return "".concat(this.title, " by ").concat(this.author);
    };
    return Books;
}());
var Member = /** @class */ (function () {
    function Member(name, memberIdNo) {
        this.name = name;
        this.memberIdNo = memberIdNo;
    }
    Member.prototype.getMemberInfo = function () {
        return "Name:".concat(this.name, ", MemberId:").concat(this.memberIdNo);
    };
    return Member;
}());
var Librarian = /** @class */ (function (_super) {
    __extends(Librarian, _super);
    function Librarian(name, memberIdNo) {
        return _super.call(this, name, memberIdNo) || this;
    }
    Librarian.prototype.getMemberInfo = function () {
        return "librarian ".concat(_super.prototype.getMemberInfo.call(this));
    };
    return Librarian;
}(Member));
var Book1 = new Books("Things fall apart", "Chinua Achebe");
console.log(Book1.GetDetails());
var Member1 = new Member("Bright", 2029);
console.log(Member1.getMemberInfo());
var librarian = new Librarian("Mrs theresa", 2007);
console.log(librarian.getMemberInfo());
