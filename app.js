

// let add = () => {
//     let numOne = document.getElementById('input-1').value;
//     let numTwo = document.getElementById('input-2').value;
//     let resultMe = document.getElementById('result');

//     if (numOne || numTwo === '') {
//         alert('No value inputed')
//     } else {
//         resultMe.innerHTML = numOne / numTwo
//     }
//     // let doNum = (/^[0-9]+$/)
//     // if (numOne != doNum && numTwo != doNum ) {
//     //     alert('invalid')
//     // }
// }

// let btn = document.querySelector('button');
// btn.addEventListener('click', add )


let numOne = document.getElementById('input-1');
let numTwo = document.getElementById('input-2');
let resultMe = document.getElementById('result');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let finalOne = numOne.value;
    let finalTwo = numTwo.value;

    let doNum = /^[0-9]+$/
    if (finalOne.match(doNum) && finalTwo.match(doNum) ) {
        resultMe.innerHTML =  finalTwo / finalOne
 

    }else if (finalOne | finalTwo === '') {
        alert('No value inputed')
    }
    else {
        alert('invalid')
    }

   numOne.value = '';
   numTwo.value = '';
})
 

