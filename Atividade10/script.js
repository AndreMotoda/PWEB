document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!peso || !altura) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
});