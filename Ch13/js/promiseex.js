const order = new Promise((resolve, reject) => {
  let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if(coffee != null && coffee != "") {
    document.querySelector(".start").innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

function display(result) {
  document.querySelector(".end").innerText = `${result} 준비 완료`;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
}

function showErr(err) {
  document.querySelector(".start").innerText = err;
}

order
  .then(display)
  .catch(showErr);



//1. order 라는 프로미스 객체를 만든다. (우선 프로미스만 만들기)
//2. 2. 라이브 서버를 사용해 콘솔 창에서 order 객체의 상태를 확인한다. 
//      (웹 브라우저 창은 계속 열어두기)
//3. order 객체 완성하기

