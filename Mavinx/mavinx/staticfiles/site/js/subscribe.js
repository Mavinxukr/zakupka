$( document ).ready(function() {
    $('#send_sub_but').on('click', function (e) {
        e.preventDefault();
        let input = $('#sub_email')
        let url = "/api/client-subscribe/";
        let data = new FormData();
        if (!input.val()){
            return alert('Заполните поле e-mail !');
        }
        data.append('email', input)
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: url,
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                alert(data.message)
                input.val('')
            },
            error: function (e) {
                console.log(e)
            }
    });
    })
})