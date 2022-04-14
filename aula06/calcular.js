function calcular() {
     var nome = prompt("Informe o nome do aluno:");
     window.alert('Olá ' + nome + ', é um prazer te ver!');

     var primeira = parseInt(prompt("Me informe o valor da primeira nota :"));

     var segunda = parseInt (prompt("Me informe o valor da segunda nota :"));

     window.alert('Você tirou ' + primeira + ' na primeira prova, e tirou ' + segunda + ' na segunda prova!'); 

     var soma= parseInt(primeira + segunda);
     window.alert('a soma é: ' + soma);
    
     var media = parseInt(soma/2);
     window.alert('A média é: ' + media); 

      
if(media >= 6) {
    alert('Uau, você foi aprovado com louvor! A sua média é: ' + media); 
}

 else {
alert('Puxa, você precisa estudar mais. Está reprovado! A sua média é: ' + media );  
}

}