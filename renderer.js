
// const section1 = document.getElementById('1')
// const section2 = document.getElementById('2')

// let i;
// const children = 12
let id = 1
const lowerLimit = 1
const upperLimit = 12

let section = document.getElementById('1')
function randomiser(){
    // activity to loop
    section.innerHTML = ''
    let randomPick = Math.floor(Math.random() * upperLimit + lowerLimit)
    section = document.getElementById(randomPick.toString())
    section.innerHTML = '<img src="frog2.jpg">'
    console.log('another one at ', randomPick)

    setTimeout(randomiser, 1000);
}
randomiser()

    // setTimeout(() => {
    //      let randomPick = Math.floor(Math.random() * upperLimit + lowerLimit)
    //      console.log(3)
    //     //  section = document.getElementById(randomPick.toString())
    //     //  section.innerHTML = '<img src="frog2.jpg">'

    // }, 1000)
    // count ++

// const loop = (delay, callback) => {
//     let randomiser = () => {

//     }
// // }
// function sayHello(){
//     console.log('Hello World!');
//     setTimeout(sayHello, 1000);
// }; sayHello();

