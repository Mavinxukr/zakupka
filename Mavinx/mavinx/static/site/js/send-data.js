$( document ).ready(function() {
    let data = new FormData();
    $('#file').on('change',function () {
         let file = $('#file')[0].files[0]
         data.append('file', file)
    })
    $('#submit_btn').on('click',function (e) {
        e.preventDefault()
        data.append('name', $('#name').val())
        data.append('phone', $('#phone').val())
        data.append('email', $('#email').val())
        data.append('terms', $('#rangeWeek').val())
        data.append('budget', $('#rangeBudget').val())
        data.append('detail', $('#detail').val())
        data.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())

            $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "http://127.0.0.1:8000/client-request/",
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