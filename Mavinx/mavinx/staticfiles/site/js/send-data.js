$( document ).ready(function() {
    let data = new FormData()
    let url = '/api/client-request/'
    let  area_id =  $('input[name=radio-group]:checked').data('area-id');
    let name = $('#name').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    $('#file').on('change',function () {
        data.append('file', $('#file')[0].files[0])
    })
    $('input[name=radio-group]').on('click',function () {
        area_id = $(this).data("area-id")
    })

    $('#submit_btn').on('click',function (e) {
        e.preventDefault()
         if (!name && !phone && !email){
            return alert('Заполните поля')
        }
        data.append('name', name )
        data.append('area_id', area_id)
        data.append('phone', phone)
        data.append('email', email)
        data.append('terms', $('#rangeWeek').val())
        data.append('budget', $('#rangeBudget').val())
        data.append('detail', $('#detail').val())
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
