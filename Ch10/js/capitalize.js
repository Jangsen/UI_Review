const string = prompt("영문 소문자로 된 문자열을 입력");

const firstCh = string[0].toUpperCase();
const remainStr = string.slice(1);
const result = firstCh + remainStr;

document.write(result);

// string 메서드 사용
// const firstCh = string[0].toUpperCase();  // 첫 글자를 대문자로 만들어 저장
// const remainStr = string.slice(1);  // 두번째 글자부터 끝까지 추출해서 저장
// const result = firstCh + remainStr;  // 첫 글자와 추출한 문자열을 연결
// document.write(result);

// // 전개 연산자 사용
// const result1 = [string[0].toUpperCase(), ...string.slice(1)].join("");
// document.write(result);


/*

전개 연산자

[string[0].toUpperCase()

1) 첫번째 글자를 대문자로

, ...stirng.slice(1)]

slice(1)  == 2) 두번째 부터 끝까지 추출

...stirng.slice(1)] == 3) 추출한 문자열 펼쳐 놓음
                        [] 안에 표시됨 (배열)

.join("");

4) 1) ~ 3) 의 결과를 연결
-> 문자열



*/