var operacoes = function(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var soma = numero1 + numero2;
    var sub = numero1 - numero2;
    var mult = numero1 * numero2;
    var div = numero1 / numero2;
    var resto = numero1 % numero2;
    alert('Soma: ' + soma + "\nSubtração do primeiro pelo segundo: " + sub + "\nMultiplicação: " + mult
    + "\nDivisão do primeiro pelo segundo: " + div + "\nResto da divisão: " + resto);
};

var media = function(){
    var nome = document.getElementById('nome').value;
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var numero3 = parseFloat(document.getElementById('numero3').value);
    var numero4 = parseFloat(document.getElementById('numero4').value);
    alert('Média de ' + nome + ': ' + (numero1 + numero2 + numero3 + numero4)/4);
};