function somar(){
    var entrada = Number (document.getElementById("quantidade").value);
    entrada = entrada + 1  

    document.getElementById("quantidade").value = String(entrada)
}

function subtrair(){
    var entrada = Number (document.getElementById("quantidade").value);
    entrada = entrada - 1  

    document.getElementById("quantidade").value = String(entrada)
}