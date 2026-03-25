let renda = Number(prompt("Digite sua renda:"));

// ! Simbolo de navegação 
// IsNaN: Is not number (verifica se NÂO e um número)

if(!isNaN(renda)){
    if (renda>=3000){
        let nomeLimpo = prompt("Nome limpo? (sim ou não)");
        if (nomeLimpo === "sim"){
            alert("Financiamento aprovado!");
        } else {
            alert("Nome negativado")
        }
    } else {
        alert("Renda insuficiente")
    }
}
