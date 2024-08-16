// 1- imprimir numero 1 ao 10 

  for (var contador = 1; contador <= 10; contador += 1) 
    {
        console.log(contador)
    }

// 2- imprimir uma palavra ao contrario 

let palavra = "monitor";
let nova = "";

for (let ini = palavra.length -1; ini >= 0; ini -= 1)
{
    nova = nova + palavra.charAt(ini);

}
console.log(nova);

