// ASSIGNMENTS
// function getArrayLength(input) {
//     let length = input.length;
//     return length;
// }
// let array=[1,2,3,4,5];
// console.log(getArrayLength(array));




// function getEvenLength(input)
// {
//     let count=0;
// let even=input.filter((ele)=>{
//     if(ele%2==0){
//         count++;
//     }
// })
// return count;
// }
// let array=[1,2,3,4,5];
// console.log(getEvenLength(array));




// function removeIndex(input, index) {
//     // Apply conditions to verify the index is valid or not
//     if (index < 0 || index >= input.length) {
//         return input; 
//     }
//     input.splice(index, 1);
//     return input;
//     return ans;
// }
// let array = [1, 2, 3, 4, 5];
// let num = 2;
// console.log(removeIndex(array, num)); // Output: [1, 2, 4, 5]





/* Type your javascript code here */
// function removeElement(input, ele) {
//     // Check whether the element is available or not
//     // Remove all the occurrences of the element
//     for (let i = input.length - 1; i >= 0; i--) {
//         if (input[i] === ele) {
//             input.splice(i, 1);
//         }
//     }
//     return input;
// }

// var arr = [1, 2, 3, 4, 2, 5, 2];
// var ele = 2;
// console.log(removeElement(arr, ele)); // Output: [1, 3, 4, 5]









/* Type your javascript code here
Input is an array and return a new array with unique elements
 */
// function removeDuplicates(input) {
//     var i;
//     var uniqueArray = [];
//     var num=input.sort((a, b) => a - b);
//     for(i=0;i<num.length;i++){
//         if(num[i]!=num[i+1]){
//             uniqueArray.push(num[i]);
//         }
//     }

// 	return uniqueArray;
// }
// var arr=[1,2,3,1,4,5,2];
// console.log(removeDuplicates(arr));




// /*.Write a function to receive n number of arguments and return the sum of all the arguments pass */
// function addAll(n)
// {
//     var sum=0;
// for(let i=0;i<n.length;i++){
//  sum=sum+i
// }
// return sum;
// }
// var arr=[1,2,3,1,4,5,2];
// console.log(addAll(arr));







// 'use strict';

// const categories = [{
//   id: "C1",
//   categoryName: "Platters",
//   superCategory: {

//     superCategoryName: "South Indian",
//     id: "SC1"
//   }
// }, {
//   id: "C2",
//   categoryName: "Tandoor",
//   superCategory: {

//     superCategoryName: "North Indian",
//     id: "SC2"
//   }
// }, {
//   id: "C3",
//   categoryName: "Dosai",
//   superCategory: {

//     superCategoryName: "South Indian",
//     id: "SC3"
//   }
// }, {
//   id: "C4",
//   categoryName: "Vegetables",
//   superCategory: {

//     superCategoryName: "North Indian",
//     id: "SC4"
//   }
// }];


// const menu = [{
//   id: "item1",
//   itemName: "Butter Roti",
//   rate: 20,
//   taxes: [{
//     name: "Service Charge",
//     rate: 10,
//     isInPercent: true,
//   }, {
//     name: "GST",
//     rate: 18,
//     isInPercent: true,
//   }],
//   category: {
//     categoryId: "C2"
//   }
// }, {
//   id: "item2",
//   itemName: "Paneer Butter Masala",
//   rate: 120,
//   taxes: [{
//     name: "Service Charge",
//     rate: 10,
//     isInPercent: true,
//   }, {
//     name: "GST",
//     rate: 18,
//     isInPercent: true,
//   }, {
//     name: "Service Tax",
//     rate: 10,
//     isInPercent: true,
//   }],
//   category: {
//     categoryId: "C4"
//   }
// }, {
//   id: "item3",
//   itemName: "Masala Dosai",
//   rate: 50,
//   taxes: [{
//     name: "GST",
//     rate: 18,
//     isInPercent: true,
//   }, {
//     name: "Service Tax",
//     rate: 10,
//     isInPercent: true,
//   }],
//   category: {
//     categoryId: "C3"
//   }
// }, {
//   id: "item4",
//   itemName: "Dosai Platter",
//   rate: 150,
//   taxes: [{
//     name: "Service Tax",
//     rate: 10,
//     isInPercent: true,
//   }],
//   category: {
//     categoryId: "C1"
//   }
// }];

// // bill object for reference :-
// const bill = {
//   id: "B1",
//   billNumber: 1,
//   openTime: "06 Nov 2020 14:19",
//   customerName: "CodeQuotient",
//   billItems: [{
//     id: "item2",
//     quantity: 3,
//     discount: {
//       rate: 10,
//       isInPercent: false,
//     }
//   }, {
//     id: "item1",
//     quantity: 9,
//     discount: {
//       rate: 10,
//       isInPercent: true,
//     }
//   }, {
//     id: "item4",
//     quantity: 2,
//     discount: {
//       rate: 15,
//       isInPercent: true,
//     }
//   }]
// };




// function calculateBill(categories, bill, menu) {
//   let totalAmount = 0;

//   bill.billItems.forEach(billItem => {
//     const menuItem = menu.find(item => item.id === billItem.id);
//     if (menuItem) {
//       let itemTotal = menuItem.rate * billItem.quantity;

//       // Apply discount
//       if (billItem.discount.isInPercent) {
//         itemTotal -= itemTotal * (billItem.discount.rate / 100);
//       } else {
//         itemTotal -= billItem.discount.rate;
//       }

//       // Calculate taxes
//       let taxAmount = 0;
//       menuItem.taxes.forEach(tax => {
//         if (tax.isInPercent) {
//           taxAmount += itemTotal * (tax.rate / 100);
//         } else {
//           taxAmount += tax.rate;
//         }
//       });
//       // Add tax to item total
//       itemTotal += taxAmount;

//       // Add to total amount
//       totalAmount += itemTotal;
//     }
//   });

//   return totalAmount;
// }

// const totalBillAmount = calculateBill(categories, bill, menu);
// console.log(`Total Bill Amount: ${totalBillAmount}`);








// function calculateBill(categories, bill, menu) {
//   let totalAmount = 0;
//   let billDetails = '';

//   bill.billItems.forEach(billItem => {
//     const menuItem = menu.find(item => item.id === billItem.id);
//     if (menuItem) {
//       let itemTotal = menuItem.rate * billItem.quantity;

//       // Apply discount
//       if (billItem.discount.isInPercent) {
//         itemTotal -= itemTotal * (billItem.discount.rate / 100); // we will devode the 100 because the discount in percentage 
//       } else {
//         itemTotal -= billItem.discount.rate;
//       }

//       // Calculate taxes
//       let taxAmount = 0;
//       menuItem.taxes.forEach(tax => {
//         if (tax.isInPercent) {
//           taxAmount += itemTotal * (tax.rate / 100);
//         } else {
//           taxAmount += tax.rate;
//         }
//       });

//       // Add tax to item total
//       itemTotal += taxAmount;

//       // Add to total amount
//       totalAmount += itemTotal;

//       // Append to bill details
//       billDetails += `${menuItem.itemName}@${menuItem.rate} x ${billItem.quantity} = ${itemTotal.toFixed(2)}\n`;  // /n is the new line 
//     }
//   });

//   return {
//     totalAmount: totalAmount.toFixed(2),
//     billDetails
//   };
// }

// const result = calculateBill(categories, bill, menu);
// console.log(`Total Bill Amount: ${result.totalAmount}`);
// console.log(result.billDetails);








//To calculate the salary of the employee
// const employees = [
//     {
//     id : "E1",
//     name : "Rohan",
//     basicSalary : 50000,
//     performanceRatings : [
//         { month : "January", rating : 4.5},
//         { month : "February", rating : 4.0},
//         { month : "March", rating : 5.0},
//     ],
//     attendance : [
//         { month : "January", daysPresent : 20, totalWorkingDays:22 },
//         { month : "February", daysPresent : 18, totalWorkingDays:20 },
//         { month : "March", daysPresent : 22, totalWorkingDays:22 },
//     ]
//     },
//     {
//         id : "E1",
//         name : "Purushotham",
//         basicSalary : 70000,
//         performanceRatings : [
//             { month : "January", rating : 4.5},
//             { month : "February", rating : 4.0},
//             { month : "March", rating : 5.0},
//         ],
//         attendance : [
//             { month : "January", daysPresent : 20, totalWorkingDays:22 },
//             { month : "February", daysPresent : 18, totalWorkingDays:20 },
//             { month : "March", daysPresent : 22, totalWorkingDays:22 },
//         ]
//         }
// ]


// function calculateSalary(employee){
    
//     let totalSalary =[];
//     employee.map(employees => {
//         let basicSalary = employees.basicSalary;

//         let avgrating=0;
//         employees.performanceRatings.forEach(obj => {
//             avgrating += obj.rating;
//         })
//         avgrating = avgrating/employees.performanceRatings.length;
    
//         if(avgrating >= 4.5){
//             basicSalary = basicSalary + (20*basicSalary)/100 ;
//         }
//         else if(avgrating >= 4.0){
//             basicSalary = basicSalary + (10*basicSalary)/100 ;
//         }
//         else if(avgrating >=3.5){
//             basicSalary = basicSalary + (5*basicSalary)/100 ;
//         }
    
//         let attendancePercentage = 0;
//         employees.attendance.forEach(obj => {
//             attendancePercentage = attendancePercentage + (obj.daysPresent * 100)/obj.totalWorkingDays ;
//         })
//         attendancePercentage = attendancePercentage / employees.attendance.length;

//         if(attendancePercentage<=90){
//             basicSalary = basicSalary - (5*basicSalary)/100;
//         }
    
//         totalSalary.push(`${employees.name}: ${basicSalary}`)
//     })
//     return totalSalary;
// }
// console.log(calculateSalary(employees));




//TO find the  union and intersectoin in the two arrays 
// var arr1 = [2, 3, 5, 7, 8, 9, 10];
// var arr2 = [1, 2, 6, 4, 11, 12, 13];
// var arr3 = [];
// var arr4 =[];
// function union(arr1, arr2) {
//     let set = new Set();
//     for (let i = 0; i < arr1.length; i++) {
//         set.add(arr1[i]);
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         set.add(arr2[i]);
//     }
//     arr3 = Array.from(set);

//     return arr3;
// }

// console.log(union(arr1, arr2));


// var arr1 = [2, 3, 5, 7, 8, 9, 10];
// var arr2 = [1, 2, 6, 4, 11, 12, 13];
// function intersectoin(arr1, arr2) {
// var arr4 =[];
// var i,j;
//     for (i = 0; i < arr1.length; i++) {
//     for ( j = 0; j< arr2.length; j++) {
//      if(arr1[i]==arr2[j]){
//         arr4.push(arr1[i]);
//      }
//     }
// }
//    return arr4;
// }
// console.log(intersectoin(arr1, arr2));

























