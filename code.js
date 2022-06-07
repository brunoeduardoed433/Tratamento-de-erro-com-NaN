const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(erro){
        console.log(erro);
        alert(erro);
    }
    finally{
        alert("Obrigado pela visita");
    }
    
    
}

function clickNumberButton(){

    document.getElementById("outputnumber").innerHTML = ""
    number = document.getElementById("inputnumber").value

    try{
        if (number == '') 
        {
           throw 'Informe um valor'
        }
        
        if (number < 5 || number > 10 )
        {
            throw 'Informe um valor maior que 5 e menor que 10'
        }

        if ((isNaN(number))) 
        {
            throw 'Você inseriu um texto'
        }
    }
        
    catch(erro){
        document.getElementById("outputnumber").innerHTML = erro;
        alert(erro);
    }
    finally{
        alert("O número escolhido foi " + number);
    }
}

