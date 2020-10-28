function d20() {


    var randomNumber = Math.floor((Math.random() * 20) + 1);
    var d20Resultado = document.getElementById("d20Resultado").innerHTML = randomNumber;
    var message = "";

    console.log(randomNumber);

    if (randomNumber < 2) {
        message = "Falha Critica!";

    } else if (randomNumber >= 2 && randomNumber < 5) {
        message = "Falha com ressalvas leves na ação";


    } else if (randomNumber >= 5 && randomNumber < 10) {
        message = "Falha com ressalvas normais na ação";

    } else if (randomNumber >= 10 && randomNumber < 15) {
        message = "Acerto de jogada com pequena penalidade";

        var randomNumberPenalidade = Math.floor((Math.random() * 2) + 1);
        if (randomNumberPenalidade == 1) {
            message = "Penalidade a vontade do mestre!";
        }

    } else if (randomNumber >= 15 && randomNumber <= 19) {
        message = "Acerto com vantagens se demontrar 1";

        var randomNumberVantagens = Math.floor((Math.random() * 2) + 1);
        if (randomNumberVantagens == 1) {
            message = "Vantagens a vontade do mestre!";
        }
    } else if (randomNumber == 20) {
        message = "20! Double Damage no ataque";
    }

    console.log({ message });
    document.getElementById("message").innerHTML = message;

};
