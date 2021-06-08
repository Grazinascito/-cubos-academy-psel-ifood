function solucao(obj) {
	 let podeVerFilme = true;
    if (!obj.temIngresso) {
        podeVerFilme = false;
    }

    if (obj.idade <= obj.censura && !obj.estaComPais) {
        podeVerFilme = false;
    }

    if (!podeVerFilme) {
        console.log("ACESSO NEGADO");
    } else {
        let ingressoMeia = false;
        if (obj.temCarteirinha) {
            ingressoMeia = true;
        }

        if (obj.idade < 18) {
            ingressoMeia = true;
        }
        console.log(ingressoMeia? "MEIA": "INTEIRA")
    }
}