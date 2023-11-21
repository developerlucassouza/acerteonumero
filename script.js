$(document).ready(function () {

    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function resetarJogo() {
        numero = randint(1, 1000);
        tentativas = 0;

        $('#num').val(null);
        $('#texto').html('Pensei em um número aleatório de 1 a 1000 <br>Tente acertar esse número.')
        $('#modalAcertou').modal('hide');
        $('#modalDesistiu').modal('hide');
        $('#modal').modal();
    }

    


    $('#ok').click(function() {
        num = Number($('#num').val());
        tentativas++;
        
        if (num == numero) {
            $('#textoAcertou').html(`Você chutou <strong>${num}</strong> e acertou<br>Você utilizou ${tentativas} tentativas`);
            $('#modal').modal('hide');
            $('#modalAcertou').modal();
        } else if (num < numero) {
            $('#texto').html(`Você chutou o número <strong>${num}</strong><br>O número é <strong>maior</strong>`);
        } else if (num > numero) {
            $('#texto').html(`Você chutou o número <strong>${num}</strong><br>O número é <strong>menor</strong>`);
        } else {
            $('#texto').html(`ERRO`);
        }

        $('#num').val(null);
    });

    $('#desistir').click(function() {
        $('#textoDesistiu').html(`Você Desistiu após ${tentativas} tentativas.`);
        $('#modalDesistiu').modal();
    });

    $('.recomecar').click(function() {
        resetarJogo();
    });



    resetarJogo();
});