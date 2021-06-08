function solucao(produtos) {
 let faturaDosTop = 0;
    let totalEmpresa = 0;
   

    for(let i of produtos){
     let todosProdutos = i.preco
      totalEmpresa = totalEmpresa + todosProdutos;

    

      if(i.preco >= 10000 ){
     
      let topLinhaPreco = i.preco
      
      faturaDosTop = faturaDosTop + topLinhaPreco
       
      }
    }  
    let percent = faturaDosTop/totalEmpresa
      
 console.log({
    totalTop: faturaDosTop,
    percentual: percent
})
    

}