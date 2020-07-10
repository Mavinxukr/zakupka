$( document ).ready(function() {
    let data = new FormData()
    let url = '/api/client-request/'
    let area_id =  $('input[name=radio-group]:checked').data('area-id');
    $('#file').on('change',function () {
        data.append('file', $('#file')[0].files[0])
    })
    $('input[name=radio-group]').on('click',function () {
        area_id = $(this).data("area-id")
    })

    $('#name').keyup(function() {
      $('.errorName').removeClass('showError');
    });

    $('#phone').keyup(function() {
      $('.errorName').removeClass('showError');
    });

    $('#email').keyup(function() {
      $('.errorName').removeClass('showError');
    });

    $('#submit_btn').on('click',function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let phone = $('#phone').val();
        let email = $('#email').val();

        if (!name){
             $('.errorName').addClass('showError');
        } else {
          $('.errorName').removeClass('showError');
        }
        if (!email){
             $('.errorMail').addClass('showError');
        } else {
          $('.errorMail').removeClass('showError');
        }
        if (!phone){
             $('.errorPhone').addClass('showError');
        } else {
          $('.errorPhone').removeClass('showError');
        }

        let checkedItem = [];
        $('#send_form input:checkbox:checked').each(function(){
          checkedItem.push($(this).val());
        });

        if (name && email && phone){
          data.append('name', name )
          data.append('areas_id', checkedItem)
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
                 $('body').addClass("activeShow");
                 $('.messageBlock').addClass('show');
                 $("#send_form")[0].reset()
                 setTimeout(function() {
                   $('body').removeClass("activeShow");
                   $('.messageBlock').removeClass('show');
                 },3000);
               },
               error: function (e) {
                   console.log(e)
               }
           });
        }
    })
})
