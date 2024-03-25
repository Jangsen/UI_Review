let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) 
      resolve('피자를 주문합니다.');
  else
      reject('피자를 주문하지 않습니다.');
});



pizza
  .then (
    result => console.log(result)
  )
  .catch (
    err => console.log(err)
  )
  .finally(
    () => console.log("완료")
  );
    

/*
    콜백 함수로 여러 단계 연결하기
*/