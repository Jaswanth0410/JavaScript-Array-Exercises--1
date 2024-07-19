// Array objects sorting
console.log("Array objects Sorting")
let arr = [4, 2, 9, 1, 5];
console.log(arr);

// Sorting array in ascending order

arr.sort((a, b) => a - b);
console.log("Sorted Array in ascending order:", arr);

// Sorting array in descending order

arr.sort((a, b) => b - a);
console.log("Sorted Array in descending order:", arr);

// Merging of Arrays
console.log("Merging Array");
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
let mergedArray = [...arr1,...arr2];
console.log("Merged Array:", mergedArray.sort());

// Find the index of first ocuurance
console.log("Index of first occurance");
let element = 5;
console.log("Element:", element);
let index = arr.indexOf(element);
if (index !== -1) {
    console.log("Index of first occurrence:", index);
} else {
    console.log("Element not found in array");
}

// Create the new array for given length
console.log("New array for given length");
let length = 5;
let newArray = Array.from({ length }, () => 2*2);
console.log("New Array:", newArray);

// Array deduplication
console.log("Array DeDuplication");
let arr3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log("Original Array:", arr3);
let uniqueArray = [...new Set(arr3)];
console.log("Deduplicated Array:", uniqueArray);

// Intersection of two arrays
console.log("Intersection of Arrays");
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [3, 4, 5, 6, 7];
console.log("Array 1:", arr4);
console.log("Array 2:", arr5);
let intersectionArray = arr4.filter(value => arr5.includes(value));