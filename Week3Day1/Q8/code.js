// What is the output?

// if (true) {
//   let x = 10;
//   var y = 20;
// }
// console.log(y);
// console.log(x);

// Ans: The output will be 20 and x is not defined, this is because let has only block scp=ope and var has functional scope


//Q2
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user.details.email)
console.log(profile.user.details?.phone)


//Q3Create an example where optional chaining prevents a runtime error when accessing a missing nested property.


const company = {
  name: "Masai",
  address: {
    city: "New York",
    zip: 10001
  }
};
console.log(company.address.city)
console.log(company.address?.street)
