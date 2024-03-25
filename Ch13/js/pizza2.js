const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자 주문!");
  });
};

const step1 = (message) => {
  console.log(message);
};

pizza().then(result => step1(result));