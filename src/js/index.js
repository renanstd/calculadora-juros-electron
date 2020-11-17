$(function() {
    /* Botão calcular */
    $('#calc').click(function(event) {
        event.preventDefault();

        const base_calculo = parseFloat($('#base-calc').val());
        const porcentagem = parseFloat($('#percent').val());
        const data_ini = $('#date-ini').val();
        const data_fim = $('#date-fim').val();
        const result = 42.0;

        $('#result').val(result);
    });
});
