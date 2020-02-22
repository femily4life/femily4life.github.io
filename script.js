var lista2020Datas = [
'12/02/2020','08/01/2020','11/01/2020','28/01/2020','08/02/2020','11/02/2020'
];
var lista2020Textos = ['uma rainha linda','pessoas dentro de uma água com profundidade suspeita num rolê aleatorio','PIERCING',
'sara nicoly 2.0 JA DE MIBAND UHU','o pq de n termos fotos nossas, as foto meu pai','nova moda na NYFW'];

var lista2019Datas = [
    '22/02/2019','12/11/2019','12/11/2019','07/12/2019','22/02/2019','11/02/2020','07/11/2019','2/12/2019',
    '6/12/2019','22/02/2019','18/05/2019','30/05/2019','10/07/2019','21/07/2019','11/07/2019'
    ,'21/07/2019','09/08/2019','21/08/2019','24/08/2019','28/08/2019','13/09/2019','22/09/2019','29/09/2019','01/10/2019','20/10/2019','29/11/2019',
    '07/12/2019','12/12/2019','24/12/2019','29/03/2019','29/03/2019','14/04/2019','10/04/2019','29/07/2019','04/12/2019','4/12/2019','11/12/2019','11/12/2019'
    ,'21/08/2019','27/12/2019'
];
var lista2019Textos = ['uma bebe comendo temakizito sem saber usar hashi','se resumisse a gnt numa foto q vc prefere','a gnt bonito numa foto mto legal q eu prefiro','um casal numa confra da turma','nois sendo nois cortando bolito, q cara eh essa vei KKKK',
'talvez eu seja meio carente','JINGLE BELL','casal 4 ano cabelo novo','uma jovem empreendedora digital orgulho da fafa','UMA FOTO BOA UHU, deveria estar num porta retrato','casalzinho lindo n lembro','hm kk tinder',
'q carinha linda modeuso','casal meio estranho sem eu estar olhando direito','casal em su casita','um formoso casal formal em um role familia diferenciado','a tosse de 2 meses','joinha','santo >>>','cochylo da tarde eh importante','meldels',
'lindos e destruidos pós simulado camerino','indo ser destruidos no simulado do tio came','namore com alguem que olhe assim pra vc',
'aaaaaaaaaaaaaaaaaaaa MULHER LINDA AFFAFAFAFAF',
'apaixonado por vcccccc','um casal numa rede na confra n qr guerra com ngm só com qm fica atrapalhando desgraçados','ifal no ritmo jingle bell ft adryan','jingle bell arrumada','meme frances','meme frances 2','A FOTO Q NUNCA SAIU....','o famigerado trab de ingles rsrsrsrs',
'uma gatinha rsrs','bejo','nova moda capilar em paris'
,'oq eh isso vei KKKK','MANO KKKKKKK MEU DUES','um casal ifiano','dedo pra vc, o amor da minha vida s2'];

var lista2018Datas = ['03/05/2018','06/01/2018','06/01/2018','06/12/2018','21/12/2018'];
var lista2018Textos = ['um nenem no SANE testando um S8 fazendo bico','indo fazer a prova do adriano',
'lendo a 1a questao da prova do adriano','#gisele2018','um casal hm kk fotinha num role hm kk'];

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

