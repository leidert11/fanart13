/* poop : programacion orientada a objetos */

 let a=1
 let b=2


 function suma() {
    const  a=1
    const  b=2
    let suma=a+b
    console.log(suma)
    }
    
    suma()




/* funcion expresada 

/* const sumar1 = function(a,b){
    let suma a+b
    console.log(suma)
}
sumar1(1,2)

/* arrow funtion 

const sumar3=(a,b)=>{
    let suma=a+b
    console.log(suma)
} */

let number=+prompt('give me a number')


function multiplicate(){
    for(let i = 1; i <=9 ; i++) {
        document.write(`${number}x${i} =${number*i} <br>`)
    }
}

multiplicate()