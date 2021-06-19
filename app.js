//  //                                                             PROJECT 14--16
// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// var student_names = [];  //empty array
// console.log(student_names);


// // 2. Declare an empty array using JS object notation to store
// // student names in future.


// var student_names = new Array ();
// console.log(student_names);

// // // 3. Declare and initialize a strings array.

// var names = ["Aiman","Yousra","Sumayya","Ruqqyah"];
// console.log(names);

// // // 4. Declare and initialize a numbers array.

// var prices = [500,600,700,900];
// console.log(prices);

// // // 5. Declare and initialize a boolean array.

// var boolean_array = [true,false];
// console.log(boolean_array);

// // // 6. Declare and initialize a mixed array.

// var mixed_array = ["Aiman",34,"Wania",true,500];
// console.log(mixed_array);

// // // 7. Declare and Initialize an array and store available 
// // // education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// // // BS, BCOM, MS, M. Phil., PhD). Show the listed 
// // // qualifications in your browser like:



var qualifications,amount,text,i;
qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
amount=qualifications.length;
text= "<ol>";
for( i=0; i<amount; i++){
 text += "<li>" + qualifications[i] + "</li>";
}
text += "</ol>";
document.getElementById("demo").innerHTML = text;

// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students. 
// // Assume that total marks are 500 for each student, display 
// // the scores & percentages of students like:

// var student_names = [ "Aiman", "Faraj", "Rushba"];
// var student_score = [ 450,445,231];
// var total_marks = 500;
// var i;
// for(i=0;i<student_names.length;i++){
//     var percentages=(student_score[i]*100)/total_marks;
//   document.write("Score of " + student_names[i] + " is " + student_score[i] + ". Percentage :"+ percentages  +"%" +"<br>");
// }



// // nitialize an array with color names. Display the array
// // elements in your browser.

// var color_names=["Blue","Green","Orange","Yellow","Pink","Purple","Gray","See green"];
// document.write(color_names+"<br>"+"<br>");


// // // a. Ask the user what color he/she wants to add to the
// // // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.

// var add_color=prompt("what color you wants to add to the beginning");
// color_names.unshift(add_color);
// document.write(color_names);

// // b. Ask the user what color he/she wants to add to the end 
// // & add that color to the end of the array. Display the 
// // updated array in your browser.

// var add_color_to_the_end=prompt("what color you wants to add to the end");
// color_names.push(add_color_to_the_end);
// document.write(color_names);

// // c. Add two more color to the beginning of the array. 
// // Display the updated array in your browser.

// var two_more_color_to_the_beginning=prompt( "Add two more color to the beginning of the array");
// color_names.unshift(two_more_color_to_the_beginning);
// document.write(color_names);

// // d. Delete the first color in the array. Display the updated
// // array in your browser.

// color_names.shift();
// document.write(color_names);

// // e. Delete the last color in the array. Display the updated
// // array in your browser.

// color_names.pop();
// document.write(color_names);

// // f. Ask the user at which index he/she wants to add a color 
// // & color name. Then add the color to desired 
// // position/index. . Display the updated array in your 
// // browser.

// var index=prompt("at which index you wants to add a color");
// var index_color_names=prompt("at which index you wants to add a color name");
// var no_of_dlt=0;
// color_names.splice(index,no_of_dlt,index_color_names);
// document.write(color_names);

// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. 
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

// var index_delete_start=prompt(" at which index he/she wants to delete color(s)");
// var index_delete_end=prompt(" at which index he/she wants to end delete color(s)");
// var slice_method=color_names.slice(index_delete_start,index_delete_end) ;

// document.write(slice_method);


// // 10. Write a program to store student scores in an array & 
// // sort the array in ascending order using Array’s sort 
// // method

// var student_scores =[340,234,678,34,56,23,86,,543,876,234,198];
// document.write("Scores of student: "+student_scores+"<br>"+"<br>");

// student_scores.sort(function(a,b){return a-b});
// document.write("Ordered Scores of student: "+student_scores);

// // 11. Write a program to initialize an array with city names. 
// // Copy 3 array elements from cities array to selectedCities 
// // array.

// var city_names=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list :" + "<br>" + city_names + "<br>"+"<br>");

// var selected_Cities=city_names.slice(2,4);
// document.write("Selected Cities list :" + "<br>" + selected_Cities + "<br>"+"<br>");

// // 12. Write a program to create a single string from the 
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)


// var arr = [" this "," is "," my "," cat"];
// document.write("Array :" + "<br>" + arr + "<br>"+"<br>");
// var my=arr.join("");
// document.write("string :" + "<br>" + my + "<br>"+"<br>");

// // 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they 
// // were stored. (FIFO-First In First Out)

// var devices=["keybard","mouse","printer","monitor"];
// var i;
// document.write("Devices :" + "<br>" + devices + "<br>"+"<br>");
// for(i=0;i<devices.length;i++){
//     document.write("Out :" + "<br>" + devices[i] + "<br>"+"<br>");
// }


// // 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last InFirst Out

// var devices=["keybard","mouse","printer","monitor"];
// var i;
// document.write("Devices :" + "<br>" + devices + "<br>"+"<br>");

// for(i=0;i<devices.length;i++){
//     devices.reverse();
//     document.write("Out :" + "<br>" + devices[i] + "<br>"+"<br>");
// }

// // 15. Write a program to store phone manufacturers (Apple,
// //     Samsung, Motorola, Nokia, Sony & Haier) in a n array. 
   // //     Display the following dropdown/select menu in your 
// //     browser using document.write() method



// var select=document.getElementById("select"),
// phone_manufacturers =["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];

// for(var i=0; i<phone_manufacturers.length;i++){
//     var option=document.createElement("OPTION",)
//      text=document.createTextNode(phone_manufacturers[i]);

//      option.appendChild(text);

//      select.insertBefore(option,select.lastChild)

// }


