$(document).ready(function () {
    $('input').change(function () {
        const input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i></li>');
        $(this).val('');
    })

    $('ul').on('click', '.fa-trash', function () {
        $(this).parent().fadeOut();
    })

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('completed');
    });
}) 