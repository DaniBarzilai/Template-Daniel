function diurno(){
            var pessoas = document.getElementById("quantidade").value
            var preco = pessoas * 200
            var desconto = 0
            if(pessoas > 50){
                desconto = preco * 0.60
                //document.getElementById("resultado").value = 'Preço final será de R$'${desconto}''
                resultado.innerHTML += `<p>${desconto}</p>`
                console.log(desconto);
            }
            else{
                resultado.innerHTML += `<p>${preco}</p>`
                //document.getElementById("resultado").value = preco
                console.log(preco);
            }
        }

        function noturno(){
            var pessoas = document.getElementById("quantidade").value
            var preco = pessoas * 100
            var desconto = 0
            if(pessoas > 50){
                desconto = preco * 0.80
                resultado.innerHTML += `<p>${desconto}</p>`
                console.log(desconto);
            }
            else{
                resultado.innerHTML += `<p>${preco}</p>`
                console.log(preco);
            }
        }
