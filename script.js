var lista2020Datas = [
'12/02/2020','08/01/2020','11/01/2020','28/01/2020','08/02/2020','11/02/2020'
];
var lista2020Textos = ['uma rainha linda','pessoas dentro de uma água com profundidade suspeita num rolê aleatorio','PIERCING',
'sara nicoly 2.0 JA DE MIBAND UHU','o pq de n termos fotos nossas, as foto meu pai','nova moda na NYFW'];

var lista2019Datas = [
    '12/02/2020','08/01/2020','11/01/2020','28/01/2020','08/02/2020','11/02/2020'
];
var lista2019Textos = [];

var lista2018Datas = [];
var lista2018Textos = [];

function mudar(idMsg,anoFoto){
    var idMsg = idMsg;
    var anoFoto = anoFoto;
// padrao: ./fotos/2020/1.jpeg
    var urlNova = "./fotos/"+anoFoto+"/"+idMsg+".jpeg";
    document.getElementById('fotoURL').src=urlNova;
    console.log(urlNova);
    
    if (anoFoto==2020){
        document.getElementById('dataFoto').innerText=lista2020Datas[idMsg-1];
        document.getElementById('legendaFoto').innerText=lista2020Textos[idMsg-1];

    }
    else if(anoFoto==2019){
        document.getElementById('dataFoto').innerText=lista2019Datas[idMsg-1];
        document.getElementById('legendaFoto').innerText=lista2019Textos[idMsg-1];

    }
    else if(anoFoto==2018){
        document.getElementById('dataFoto').innerText=lista2018Datas[idMsg-1];
        document.getElementById('legendaFoto').innerText=lista2018Textos[idMsg-1];

    }
   
}

