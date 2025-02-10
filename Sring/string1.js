//JavaScript Sring Search Methods

{ 
    //indexOf() method returns the last index position of the first occurrence of a string in a string , or it return -1 if the string in not found.

    let text = "Please locate where 'locate' occurs!";
    console.log(text.indexOf("locate"))
 
    console.log(text.lastIndexOf("locate"))

    console.log(text.indexOf("locate" , 15))
}

{
        // search() method searches a string for a string and return the position of the match.
    let text = "Please 'locate' where locate occurs!";
    console.log(text.search("locate"))

    console.log(text.match(/locate/g))
}

{
    //match() method return the true if  string contain a specified value.otherwise false
    let text = "Hello world, welcome to the universe.";
    console.log(text.includes("world"))

    // startWith() methods return true if a string begins withe a specified value.Otherwise it return false
    console.log(text.startsWith("Hello"))
    // endWith() methods return true if a string ends with a specified index.
    console.log(text.endsWith("universe."))
    console.log("world" , 11)
}