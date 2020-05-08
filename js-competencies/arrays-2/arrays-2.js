
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called addMoreDucks that takes in an array
//and if the array's length is greater than 4, replace the
//3rd element of the array with the string '42 ducks'. 
//addMoreDucks should return the array.

const addMoreDucks = array => {
    if(array.length > 4){
        array[2] = '42 ducks'
    }
    return array
}


//////////////////PROBLEM 2////////////////////

//Create a function called cutItOut that takes in an array
//and if the array's length is greater than 4, removes 
//the 3rd element of the array. cutItOut should return the array.

const cutItOut = array => {
    if(array.length > 4){
        array.splice(2, 1)
    }
    return array
}


//////////////////PROBLEM 3////////////////////

//Create a function called changeName that takes in an array
//and finds the element "Tolkn", and changes it to "Tolkien".
//changeName should return the array.

const changeName = array => {
    array.forEach(function(element, index){
        if(element[index] === "Tolkn"){
            element[index] = "Tolkien"
    }
    })
    return array
}
