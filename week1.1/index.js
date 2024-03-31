var name ="arun";
var age = 20;
var users = ["Arun" ,"Kumar","Badhai"];
console.log(name)
console.log(users)

console.log("**********************Next line *************");

var users_and_age ={
    name: "Arun",
    age: 21,
    email: "arun.badhai@gmail.com",
    phone:8050379540
}

console.log(users_and_age);
console.log(users_and_age.name);
console.log("**********************Next line *************");
for(var i =0 ;i<users.length;i++){

    console.log(users[i])
}
console.log("**********************Array of Objects*************");
var users_1=[
   { name: "Arun", age: 21,email : "arun.badhai@gmail.com",phone:8050379540},
   { name: "Arun", age: 21,email: "kumar.badhai@gmail.com",phone:121},
   { name: "Arun", age: 21,email: "badhai@gmail.com",phone:3434},
];
console.log("**********************Array of Objects print in format*************");
for (i=0 ;i<users.length;i++){

    console.log(users[i].name + "'s age is" +users[i].age )
}