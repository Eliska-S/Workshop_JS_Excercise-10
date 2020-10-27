$('.whattodo').on('click', () => {
    let input = $('input').val();
    $('ul').append(`<li>${input}</li>`);
    $('input').val("");
})