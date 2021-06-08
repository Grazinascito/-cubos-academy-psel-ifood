
function solucao(precos) {
   let maPrecos = Math.min(...precos)

let soma = 0;
for(let i = 0; i < precos.length; i++){
    soma += precos[i];
}
  if(precos.length >= 5){
  
    soma = soma - maPrecos

  }

  
  console.log(soma)

}