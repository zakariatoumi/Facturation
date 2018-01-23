function ajouter(){


var n1=document.getElementById('lib');
var n2=document.getElementById('prix');
var n3=document.getElementById('Qan');


var res=document.getElementById('T');

var mm=n2.value*n3.value;

res.innerHTML+="<tr><th id='lib'>"+n1.value+"</th><th id='prix'>"+n2.value+"</th><th id='Qan'>"+n3.value+"</th><th>"+mm+"</th></tr>";
}