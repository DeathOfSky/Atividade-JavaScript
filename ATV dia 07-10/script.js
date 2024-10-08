var animes = [];
var elementos = 0;

function guardarDados(event){
    var anime = document.getElementById("anime").value;
    var ano = document.getElementById("ano").value;
    var nota = document.getElementById("nota").value;
    var genero = document.getElementById("genero").
    options[document.getElementById("genero").
        selectedIndex].innerHTML;

    animes.push({
        'anime':anime,
        'ano':ano,
        'genero':genero,
        'nota':nota
    });
    
    event.preventDefault();

    limparCampos();
    exibirAnimes();
}

function limparCampos(){
    document.getElementById("anime").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("genero").
        selectedIndex = 0;
}

function exibirAnimes(){
    
    var linha = " Nome: " +animes[elementos].anime + "/ Genero: " + animes[elementos].genero + "/ Lançamento: " + animes[elementos].ano + "/ Nota: " + animes[elementos].nota;
    
    var item = document.createElement("li");
    item.innerHTML = linha;
    document.getElementById("listaAnimes").appendChild(item);

    elementos++;
}