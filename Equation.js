function calculate(){


    var a=parseFloat(document.getElementById('a').value);
    var b=parseFloat(document.getElementById('b').value);
    var c=parseFloat(document.getElementById('c').value);
    var delta = (b*b)-(4*a*c);
    var x1, x2, x3;
   
    document.getElementsById('result1').textContent= "Delta =" +delta+"";
    
    if(delta<0){
        document.getElementById('result2').textContent= "Puisque delta est négatif , alors cette équation n'a pas de solution.";
        
    }
    else if(delta==0){
        var x3=(-b/(2*a));
        document.getElementById('result3').innerHTML= "Puisque delta est égal à 0 alors l'équation n'a qu'une solution : x'=x''=" +x3;
    }
    else{
        var x1=((-b-Math.sqrt(delta))/2*a);
        var x2=((-b+Math.sqrt(delta))/2*a);
       var espace= "\u00A0";
        document.getElementById('result4').textContent="Puisque delta est positif alors l'équation possède deux solutions dont x1= " +x1+" et x2=" +x2;
      
        
    }
}