//String are used to store for text.It is written with quotes and Backticks.

{ //Defining the string
    let text = "Ahmad umar";
    console.log(text)
    let text1 = 'Umar'
    console.log(text1)
    let text2 = `Ahmad ${text1}`
    console.log(text2)
    let text3 = `Ahmad
    umar
    se02@gmail.com` //It allow multiline string
    console.log(text3)
}
//properties

{   //Extracting Strind character
    let text = "Abcdefghijklmnopqrstuvwxyz"
    console.log(text.length);     // length

    //Extracting String Characters
    console.log(text.charAt(25));  //chatAt()
    
    console.log(text.charCodeAt(12)) //charCodeAt() return the UTF-16 code (between to 0 65535)

    console.log(text.at(1)); //at() return the character at a specified index
}

{   //Extracting String Part
    let text = "Apple,Banana, Kiwi"
    console.log(text)

    // Three methods for extracting a part of string
    // 1)slice(start , end)
    // 2)substring(start , end)
    // 3)substr(start , length)

    console.log(text.slice(0 , 8)) 

    console.log(text.substring(3 , 10)); 
    
    console.log(text.substr(3 , 7));
}

{
    let text = "AbcdefghijklMNOpqrSTuvwxyz"
    console.log(text.toUpperCase());
    console.log(text.toLowerCase());    
}

{
    let text = "Ahmad umar";
    let text1 = "AbcdefghijklMNOpqrSTuvwxyz"
    console.log(text.concat( " ".concat(text1)));
}

{ //JavaScript String Trim
    // trim() method used to remove the spaces from both side of the string
    let text = "        Hello World     "
    console.log(text.trim())
    console.log(text.length);
    
    console.log(text.trimStart())
    console.log(text.trimEnd());
    //it does not change the original string
}

{
    let text = "3"
    let padding = text.padStart(4 , "0")
    console.log(text.padStart(5 , "0"))
    console.log(text.padEnd(6 , "0"))
}

{ //does not change the original string
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    console.log(text.repeat(2))
    console.log(text) 
    console.log(text.replaceAll("Cats" , "Dogs"))
    console.log(text)
}

{
    //split() method convert the string into aray
    let text = "a , b , c , d , e , f"
    console.log(text.split())
}