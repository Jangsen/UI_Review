const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자 주문!!");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  });
};
const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 1000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 2000);
  });
};

pizza()
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log(result))
  .then(() => {
    console.log("피자 준비완료!");
  })

/* 
pizza()
  .then(step1)  
  .then(step2)  
  .then(step3)  
  .then(console.log)
  .then(() => {
    console.log("피자 준비완료!");
  });

  
*/