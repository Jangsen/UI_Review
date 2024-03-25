const step1 = (callback) => {
  setTimeout(() => {
    console.log("피자 도우 준비");
    callback();
  }, 2000);
}
const step2 = (callback) => {
  setTimeout(() => {
    console.log("토핑 완료");
    callback();
  }, 1000)
}
const step3 = (callback) => {
  setTimeout(() => {
    console.log("굽기 완료");
    callback();
  }, 2000);
}

console.log("피자 주문!!");
step1(function(){
  step2(function() {
    step3(function() {
      console.log("피자 준비됨!")
    });
  });
});