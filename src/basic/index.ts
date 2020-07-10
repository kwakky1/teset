import hello, {birthday, bye, sum} from "./Hello";
// @ts-ignore
import jsTypes, {symbolType, tsTypes, tupleType} from './jsTypes';
import operator, {spread} from "./operator";
import destructure from "./operator";
import loop from "./loop";

let menu: number = 4
let year: number
let name = ""
switch (menu) {
    case 0:
        name = "홍길동"
        console.log(bye(name))
        break
    case 1:
        name = "김유신"
        year = 2002
        console.log(birthday(name, year))
        break
    case 2:
        let num1 : number = 10
        let num2 : number = 20
        console.log(`덧셈결과: ${sum(num1, num2)}`)
        break
    case 3:
        // jsTypes()
        // tsTypes()
        // symbolType()
        // tupleType()

        break
    case 4:
        // destructure()
        // spread()
        loop()
        break
    default:
        console.log("존재하지 않는 케이스입니다.")
        break

}