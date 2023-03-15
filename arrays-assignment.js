//Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

arr1 = [3,7,34,90,12];
arr2 = [true, "green", "where",12,56];

let a=arr1[arr1.length -1];
console.log(a);

let b=arr2[arr2.length -1];
console.log(b);


//Write a JS program that will join the following array elements into a string

myPets = ["Cow", "Bird", "Snake", "Dog"];
let animals=myPets.join(",");
console.log(animals);

//Write a JS script to sort the following array items

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 arr3.sort()
 console.log(arr3)

//  Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];

            var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];
      
    function deleteDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
     function findDuplicates(arr) {
         return arr.filter((item, 
             index) => arr.indexOf(item) !== index);
     }

    
    console.log(deleteDuplicates(arr));
    console.log(findDuplicates(arr));

    //Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
function findit(arr5){
    if(arr5.find="way"){
        console.log("way");
    }else{
        console.log("the search word was not found")
    }
}
console.log(findit(arr5));
    

// Write a JS script to sort the following string
let word = "sevink"
 let r=(word)=>{
return word .split("").sort().join("");
 };

 console.log(r("sevink"))
 