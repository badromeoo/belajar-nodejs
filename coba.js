// //syncronous function
// const getUserSync = (id) => {
//   let user = "";
//   if (id === 1) {
//     user = "John Doe";
//   } else {
//     user = "jomox";
//   }
//   return { id, user };
// };

// const user1 = getUserSync(1);
// const user2 = getUserSync(2);
// console.log(user1); // John Doe
// console.log(user2); // jomox





// Asynchronous function using callback
const getUser = (id, cb)=> {
    const time = id === 1 ? 4000 : 2000;
    setTimeout(()=> {
 const nama = id === 1 ? "John Doe" : "jomox";
        cb({ id, nama });
    }, time);

};

const user1 = getUser(1,(data)=>{
    console.log(data);
});
const user2 = getUser(3,(data)=>{
    console.log(data);
});
console.log("hallo"); // undefined