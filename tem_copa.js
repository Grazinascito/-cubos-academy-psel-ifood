function solucao(ano) {
   let resto = ano % 4
   
    if(ano < 2021){
       console.log("MEH")
           
    }else if(resto !== 2 && resto !== 0){
        console.log("MEH")
    }
    else if(resto === 2 ){
        console.log("COPA")
    }else if(resto === 0){
        console.log("JOGOS")
    }
}