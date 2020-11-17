$(function () {
    /* Botão calcular */
    $('#calc').click(function (event) {
        event.preventDefault();

        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const base_calculo = parseFloat($('#base-calc').val().replace(',', '.'));
        const porcentagem = parseFloat($('#percent').val().replace(',', '.'));
        const data_ini = new Date($('#date-ini').val());
        const data_fim = new Date($('#date-end').val());
        // Converte data_ini e data_fim em um período de dias
        const utc_date_ini = Date.UTC(data_ini.getFullYear(), data_ini.getMonth(), data_ini.getDate())
        const utc_date_fim = Date.UTC(data_fim.getFullYear(), data_fim.getMonth(), data_fim.getDate())
        const periodo = Math.floor((utc_date_fim - utc_date_ini) / _MS_PER_DAY);
        // Cálculo do resultado
        const result = parseFloat(base_calculo * (1 + porcentagem * periodo));

        $('#result').val(result);
    });
});
