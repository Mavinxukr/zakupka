$( document ).ready(function() {
    const request =  new SendDataClass();
    let data = new FormData()
    let  area_id =  $('input[name=radio-group]:checked').data('area-id');
    $('#file').on('change',function () {
        data.append('file', $('#file')[0].files[0])
    })
    $('input[name=radio-group]').on('click',function () {
        area_id = $(this).data("area-id")
    })
    $('#submit_btn').on('click',function (e) {
        e.preventDefault()

        data.append('name', $('#name').val())
        data.append('area_id', area_id)
        data.append('phone', $('#phone').val())
        data.append('email', $('#email').val())
        data.append('terms', $('#rangeWeek').val())
        data.append('budget', $('#rangeBudget').val())
        data.append('detail', $('#detail').val())
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())

        request.send_data(data)
    })
})


class SendDataClass {

    url  = 'http://127.0.0.1:8000/client-request/';

    send_data(body){
            $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: this.url,
            data: body,
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
    }

}