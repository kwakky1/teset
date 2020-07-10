export default function destructure() {
    console.log(`--- 1. 객체 구조분해 ----`)
    let {a, b, ...c} = {a: 10, b: 20, c: 30, d: 40}
    console.log(`${a}`)
    console.log(`${b}`)
    console.log(`${c}`)
    console.log(`--- 2. 배열 구조분해 ----`)
    let numbers = ["a", "b", "c", "d", "e"]
    let [num1, num2] = numbers
    console.log(`[num1, num2] ==> ${num1}, ${num2}`)
    let [,, num3, num4,] = numbers
    console.log(`[,, num3, num4] ==> ${num3}, ${num4}`)
    // 디스트럭처링을 이용한 변수 값 교체
    console.log(`**[num4, num3] = [num3, num4] 에서 num4 에러 발생`)
    //[num4, num3] = [num3, num4]
    console.log(`[num4, num3] = [num3, num4] ==>  ${num3}, ${num4}`)
    console.log(`[,, num3, num4] ==> ${num3}, ${num4}`)
    console.log(`--- 3. 함수 배열 구조분해 ----`)
    function fn([a, b]: [number, string]){
        console.log(`함수배열 내부 ${a}`)
        console.log(`함수배열 내부 ${b}`)
    }
    fn([100, "Hello"])
    console.log(`--- 4. 함수 객체 구조분해 ----`)
    function printProfile({name, nation= "korea"}={name:"홍길"}){
        console.log(name, nation)
    }
    printProfile({name: "홍길동"})
    printProfile({name: "유관순", nation:"USA"})

    console.log(`--- 5. 사용자 타입 객체 구조분해 ----`)

    function fruit({a,b}:{a: string, b: number}): void {
        console.log(a,b)
    }
    fruit({a : "사과", b : 1000})
}
export function spread() {
    console.log(`--- 1. 스프레드 연산자 ----`)

    let arr : number[] = [1,2]
    let arr2: number[] = [...arr, 3,4]
    console.log(`배열 1번 형태 ${arr2}`)
    let [a,...rest]:[number, number, number, number] = [1,2,3,4]
    console.log(`배열2번형태 ${a}`)
    console.log(`배열3번형태 ${rest}`)
    console.log(`배열4번형태 ${rest[0]}`)
}
const x = () => {
    function y() {
        console.log('a')
    }
}

