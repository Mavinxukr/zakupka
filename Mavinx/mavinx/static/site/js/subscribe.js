$( document ).ready(function() {
     let url = "/api/client-subscribe/";
     let data = new FormData();
    $('#send_sub_but').on('click', function (e) {
        e.preventDefault();
        let input = $('#sub_email')
        if (!input.val()){
            $('.subscribeError').addClass('showError');
            return
        }
        data.append('email', input.val())
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
              $('body').addClass("activeShow");
              $('.messageSubscribed').addClass('show');
              input.val('')
              setTimeout(function() {
                $('body').removeClass("activeShow");
                $('.messageSubscribed').removeClass('show');
              },3000);
            },
            error: function (e) {
                console.log(e)
            }
    });
    })
})
