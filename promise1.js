function buycar() {
    return new Promise((resolve,reject)=> {
        setTimeout (() =>{
            resolve('buy a car');
        },5000)
    })
}
function plantrip() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve('lets go to manali');
        },2000)
    })
}
function reachmanali() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve('reached manali');
        },1000)
    })
}
function gotomountain(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            reject('Error:some accident happened');
        },1000)
    })
}
// buycar().then((msg) => {
//     console.log(msg);
//     plantrip().then((msg2) => {
//         console.log(msg2);
//         reachmanali().then((msg3) => {
//             console.log(msg3);
//             gotomountain().then((msg4) => {
//                 console.log(msg4);
//             })
//         })
//     })
// })
async function fun1(){

    const msg1=await buycar();
    console.log(msg1);
    const msg2=await plantrip();
    console.log(msg2);
    const msg3=await reachmanali();
    console.log(msg3);
    const msg4=await gotomountain();
    console.log(msg4);

}
fun1();