$( document ).ready(function() {
    let  button = $('#send_sub_but');
    let url = "http://127.0.0.1:8000/client-subscribe/";
    button.on('click', function (e) {
        e.preventDefault();
        let input = $('#sub_email').val()
        if (!input){
            alert('Заполните поле e-mail !')
            return;
        }
        let data = new FormData();
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
            },
            error: function (e) {
                console.log(e)
            }
        });
    })
})