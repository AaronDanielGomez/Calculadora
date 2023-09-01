const input = document.querySelector(".input__result")
const buttons = document.querySelectorAll(".button")

const btnResultado = document.querySelector(".button__result")

const btnDelete = document.querySelector(".button__ac")

const btnDel = document.querySelector(".button__del")




//Function Sumar 

const sumar = (num1,num2) =>{
    let result = parseInt(num1) + parseInt(num2)

    input.value = result
}

//Function Restar 

const restar = (num1,num2) =>{
    let result = parseInt(num1) - parseInt(num2)

    input.value = result
}

//Function Multiplicar 

const multiplicar = (num1,num2) =>{
    let result = parseInt(num1) * parseInt(num2)

    input.value = result
}

//Function Dividir 

const dividir = (num1,num2) =>{
    let result = parseInt(num1) / parseInt(num2)

    input.value = result
}


// function that takes all button values and writes them to input

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        input.value += btn.value
    })
})


// function of the AC button that deletes everything that is written in the input

btnDelete.addEventListener("click",()=>{
    input.value = null
})


// button function =, which when click resolves what is written in the input

btnResultado.addEventListener("click",()=>{

    if(input.value.includes("+")){
        
        let operation = input.value.split("+")

        sumar(operation[0],operation[1])
    
    }else if(input.value.includes("-")){

        let operation = input.value.split("-")
        
        restar(operation[0],operation[1])
    
    }else if(input.value.includes("*")){

        let operation = input.value.split("*")
        
        multiplicar(operation[0],operation[1])
    
    }else if(input.value.includes("/")){

        let operation = input.value.split("/")

        dividir(operation[0],operation[1])
    }
})


// function of the DEL button, which deletes the last character that is written in the input

btnDel.addEventListener("click",()=>{

    let operation = input.value

    let characters = []

    for(let i = 0; i < operation.length; i++){

        characters[i] = i
    }

    let firstCharacter = characters.shift()

    let lastCharacter = characters.pop()

    input.value = operation.substring(firstCharacter,lastCharacter)

})
