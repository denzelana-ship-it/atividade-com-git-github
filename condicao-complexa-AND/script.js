let idade = Number(prompt("Insira suaidade"));
let temCNH = prompt("possui CNH? (sim ou não)");

if (idade >= 18 && temCNH === "sim") {
    alert("Pode dirigir");
} else {
        alert("não pode dirigir")
}