//ASSINCRONO POR PADRAO
// function alert1(){
//     alert("alert1");
// }

// function alert2(){
//     alert("alert2");
// }

// alert1();
// alert2();



//FORCANDO O ASSINCRONISMO
// function alert1(){
//     alert("alert1");
// }

// function alert2(){
//     alert("alert2");
// }

// setTimeout(()=>{
//     alert1();
// }, 3000);

// alert2();



//async await e promisse
// function pensarNaVida(conclusao) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(conclusao); // resolvi a vida
//         }, 5000);
//     });
// }

// async function chamandoPromisse() {
//     console.log('pensando na vida');
//     var x = await pensarNaVida("promisse resolvida");
//     console.log(x); // "promisse resolvida"
//     // setInterval()
// }
// chamandoPromisse();




