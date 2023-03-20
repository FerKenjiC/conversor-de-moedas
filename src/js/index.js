function ConverterDolar() {
    var valorElemento = document.getElementById("valorDolar");
    var valor = valorElemento.value;
    var valorDolarNumerico = parseFloat(valor);

    var valorReal = valorDolarNumerico * 5.27;
    console.log(valorReal);

    var elementoValorConvertido = document.getElementById("dolarConvertido");
    dolarConvertido = "O resultado em reais é: R$ " + valorReal;
    elementoValorConvertido.innerHTML = dolarConvertido;
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valorEuro");
    var valor = valorElemento.value;
    var valorEuroNumerico = parseFloat(valor);

    var valorReal = valorEuroNumerico * 5.62;
    console.log(valorReal);

    var elementoValorConvertido = document.getElementById("euroConvertido");
    euroConvertido = "O resultado em reais é: R$ " + valorReal;
    elementoValorConvertido.innerHTML = euroConvertido;
}

function ConverterBitcoin() {
    var valorElemento = document.getElementById("valorBitcoin");
    var valor = valorElemento.value;
    var valorBitcoinNumerico = parseFloat(valor);

    var valorReal = valorBitcoinNumerico * 141.28884;
    console.log(valorReal);

    var elementoValorConvertido = document.getElementById("bitcoinConvertido");
    bitcoinConvertido = "O resultado em reais é: R$ " + valorReal;
    elementoValorConvertido.innerHTML = bitcoinConvertido;
}
