alert("Bienvenido al trabajo del momento 2 de Programacion para la Web I");

alert("Teniendo en cuenta que tu Salario Mensual es de 1,300,000 de pesos, ingrese los gastos mensuales en los siguientes campos");

let Alimentacion = parseInt(prompt("Ingrese el sueldo dirigido a la alimentacion del hogar"));

if(Alimentacion > 30000){
    alert("Mucho gasto en la alimentacion");
} 

let Transporte = parseInt(prompt("Tienes vehiculo propio, indique la cantidad del sueldo dirigida a gastos del vehiculo"));

if(Transporte > 200000){
    alert("Gasto excesivo en el transporte")
}

let Servicios = parseInt(prompt("Ingrese la cantidad del sueldo dirigido a los servicios del hogar"));

if(Servicios > 300000){
    alert("Gasta demasiado en servicios")
}

let Salud = parseInt(prompt("Ingrese la cantidad dirigida al sueldo para su salud en caso de alguna emergencia"));

if(Salud > 300000){
    alert("Gasta demasiado dinero en salud");
}


let TotalGastos = Alimentacion + Transporte + Servicios + Salud;
let DineroSobrante = 1300000 - TotalGastos;

alert("Total de Gastos en el mes:" + "\nAlimentacion: " + Alimentacion + "\nTransporte: " + Transporte + "\nServicios: " + Servicios + "\nSalud: " + Salud + "\n Total de gastos mensual: " + TotalGastos + "\n Dinero que te sobra: " + DineroSobrante);

console.log("Total de Gastos en el mes:" + "\nAlimentacion: " + Alimentacion + "\nTransporte: " + Transporte + "\nServicios: " + Servicios + "\nSalud: " + Salud + "\n Total de gastos mensual: " + TotalGastos + "\n Dinero que te sobra: " + DineroSobrante);

if (DineroSobrante < 200000){
    alert("Tu total de dinero que te sobra es muy poco");
    console.log("Tu total de dinero que te sobra es muy poco")
} else if(DineroSobrante > 150000 && DineroSobrante  <= 200000){
    alert("Te sobra muy poco dinero para tus gustos")
    console.log("Te sobra muy poco dinero para tus gustos")
} else if(DineroSobrante < 150000 && DineroSobrante >= 100000){
    alert("Casi no te sobra el dinero, debes encontrar una mejor estrategia")
    console.log("Casi no te sobra el dinero, debes encontrar una mejor estrategia")
} else if(DineroSobrante < 100000){
    alert("Estas en la pobreza");
    console.log("Estas en la pobreza");
}