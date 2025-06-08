function calculate(){
var U1,U2,U3,U4,I1,I2,I3,I4,Req1,Req

const E=parseFloat(document.getElementById('E').value);

const R1=parseFloat(document.getElementById('R1').value);

const R2=parseFloat(document.getElementById('R2').value);

const R3=parseFloat(document.getElementById('R3').value);

const R4=parseFloat(document.getElementById('R4').value);

/*document.getElementById('text1').innerHTML="R2 et R3 sont en parallès, on doit d'abord calculer Req1=((R2*R3)/(R2+R3)).";
document.getElementById('text2').innerHTML="Avant de calculer l'intensité principal ,il faut chercher Req=Req1+R1+R4 .";
document.getElementById('text3').innerHTML="On a: I1=I .";
document.getElementById('text4').innerHTML="Pour calculer I2, il faut appliquer le diviseur d'intensité dont  I2=((R3/(R2+R3))*I1).";
document.getElementById('text5').innerHTML="il faut appliquer la loi de noeud ,donc on a: I1=I2+I3";
*/
Req1=((R2*R3)/(R2+R3));

Req=Req1+R1+R4;
I1=(E/Req);
U1=(R1*I1);

I2=((R3/(R2+R3))*(I1));
U2=(R2*I2);

I3=(I1-I2);
U3=(R3*I3);
I4=I1;
U4=(R4*I4);

document.getElementById('resultat').innerHTML="Les résultats sont les suivantes:";
document.getElementById('resultat_tension').innerHTML="U1="+U1+"V, U2="+U2+"V, U3="+U3+"V, U4="+U4+"V;";
document.getElementById('resultat_intensite').innerHTML="I1="+I1+"A, I2="+I2+"A, I3="+I3+"A, I4="+I4+"A;";

}

  

