// var city = "London";
// let country = "UK";
// const pi = 3.14;

// // console.log(city);


// let obj = {name:"Raju"}
// console.log(obj.name)

// let attendence = 60 + 5;
// let eligibleForExam = (attendence >= 75);
// console.log("Eligible for exam: ",eligibleForExam);


// function greetStudent(name){
//     console.log("Hello",name);
// }

// console.log(greetStudent("Dhanush"));



// let today = new Date();
// console.log(today);

// let arr = ['Nayan','Raju','Dhanush','Sanjay'];

// arr.push('Mahesh');//Add at last
// arr.unshift("Amit");//Add at first
// console.log(arr);
// arr.splice(2,1);//Replace

// console.log(arr);
// arr.pop();//Remove last
// console.log(arr);
// arr.pop("Nayan");
// console.log(arr);
// arr.shift();//Remove first
// console.log(arr);

// for(let ele of arr){     
//     console.log(ele);
// }



// console.log("Do..While loop");
// let i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// }while (i < arr.length
//);

let x = new Map();


x.set("101",{name:"Raju",dept:"CSE"});
x.set("102",{name:"Ram",dept:"CSE"});
x.set("103",{name:"Rajesh",dept:"CSE"});
console.log("Student 101:",x.get("101").name);