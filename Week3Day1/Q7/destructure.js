const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { name, address: { city, pin } } = user;
const result = `${name} lives in ${city}, pin ${pin}`;
console.log(result);