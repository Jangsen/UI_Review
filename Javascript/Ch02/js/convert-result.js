// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 섭씨 : celsius, 화씨 : fahrenheit

let fah = parseFloat(prompt("변환할 화씨 온도"));
let cel;

cel = ((fah - 32) / 1.8).toFixed(1);
alert(`화씨 ${fah}도는 섭씨 ${cel}도입니다.`);

let a = '5';
let b = 8;

// 실수의 소수점 자릿수를 고정하려면 ->  toFixed() 함수 사용
// 값.toFixed(1)이나 값.toFixed(2)처럼 괄호 안에 자릿수만 지정하면 됨.
