let arr = [
  { ild: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
let arr2 = [
  { id: 11, name: "aarti", age: "19", marks: 85 },
  { id: 22, name: "ayush", age: "17", marks: 90 },
  { id: 33, name: "aashi", age: "2", marks: 90 },
];

function PrintStudentswithMap() {
  
  let mr = arr.filter((stu) => stu.marks > 50);
  console.log(mr);
}
 PrintStudentswithMap();


 arr.forEach(student => {
  if (student.marks > 50) {
    console.log(student);
  }
});

function addData() {

arr.push( {id:4,name:"susan",age:"20",marks:45});
console.log(arr);
}
addData();

function removeFailedStudent() {
  
  let mr = arr.filter((stu) => stu.marks >= 50);
  console.log(mr);
}
removeFailedStudent();

function concatenateArray() {
   arr = arr.concat(arr2);
 console.log(arr);
}
concatenateArray();