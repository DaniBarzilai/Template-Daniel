function verificar(){
    var numeros = document.getElementById("PhoneNumber").value
    var listaNumeros = numeros.split("");
    
    if (listaNumeros[0] == "(" && listaNumeros[3] == ")" && listaNumeros[9] == "-"){
        window.alert("Numero inserido corretamente")
    }
    else{
        window.alert("Por favor, insira o numero no formato: (DDD)XXXXX-XXXX")
    }
}