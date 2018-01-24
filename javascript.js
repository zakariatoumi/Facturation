
somme=0;
function ajouter(){


 n1=document.getElementById('lib');
 n2=document.getElementById('prix');
 n3=document.getElementById('Qauntite');
 tht=document.getElementById('tht');
 tva=document.getElementById('tva');
 ttc=document.getElementById('ttc');
 res=document.getElementById('T');



res.innerHTML+="<tr><th id='lib'><input type='text' name='libelle' value='"+n1.value+"' ></th><th id='prix'><input type='text' name='prix' value='"+n2.value+"' onkeyup='calculer()'></th><th id='Qan'><input type='text' name='Qauntite' onkeyup='calculer()' value='"+n3.value+"'></th><td><a href='#1' onclick='sup(this)'>supprimer</td></tr>";

//calculer();
}

function calculer(){
somme=0;
sprix=document.getElementsByName('prix');
qauntite=document.getElementsByName('Qauntite');

for (var i = 0; i < sprix.length; i++) {
	//alert(sprix[i].value);
	somme+=sprix[i].value*qauntite[i].value;
}

tht.innerHTML = somme +"DHS";
ttc.innerHTML=somme*(1+tva.value/100);
}

function sup(e) {
	e.parentNode.parentNode.remove();
}