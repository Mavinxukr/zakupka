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
      $('.errorPhone').removeClass('showError');
    });

    $('.labelCheckbox').click(function() {
        $('.errorCheckbox').removeClass('showError');
    });

    $('#email').keyup(function() {
      $('.errorMail').removeClass('showError');
      $('.errorMailFormat').removeClass('showError');
    });

    function isValidEmailAddress(emailAddress) {
         let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
         return pattern.test(emailAddress);
     }

     function validatePhone(txtPhone) {
        let filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        return filter.test(txtPhone);
    }

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
             $('.errorMailFormat').removeClass('showError');
        } else {
          $('.errorMail').removeClass('showError');

          if(isValidEmailAddress(email) && email){
            $('.errorMailFormat').removeClass('showError');
          } else {
            $('.errorMailFormat').addClass('showError');
            return
          }
        }
        if (!phone){
             $('.errorPhone').addClass('showError');
             $('.errorPhoneFormat').removeClass('showError');
        } else {
          $('.errorPhone').removeClass('showError');

          if(validatePhone(phone) && phone){
            $('.errorPhoneFormat').removeClass('showError');
          } else {
            console.log('ada1')
            $('.errorPhoneFormat').addClass('showError');
            return
          }
        }

        let checkedItem = [];
        $('#send_form input:checkbox:checked').each(function(){
          checkedItem.push($(this).val());
        });

        if (checkedItem.length === 0) {
          $('.labelCheckbox').addClass('noChecked');
          $('.errorCheckbox').addClass('showError');
        } else {
            $('.labelCheckbox').removeClass('noChecked');
            $('.errorCheckbox').removeClass('showError');
        }

        if (name && email && phone && checkedItem.length > 0){
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
                 $("#send_form")[0].reset();
                 $('.form-group').removeClass('hide');
                 $('.fileName').removeClass('show');
                 let rangeWeek = $('#rangeWeek');
                 let rangeBudget = $('#rangeBudget');
                 let rangeWeekFill = $('.rangeWeek .bar .fill');
                 let rangeBudgetFill = $('.rangeBudget .bar .fill');
                 let valWeek = $('#valWeek');
                 let valBudget = $('#valBudget');

                 valWeek.html('1');
                 valBudget.html('1000');
                 rangeWeekFill.css("width", rangeWeek.val()*2 + "%");
                 rangeBudgetFill.css("width", rangeBudget.val() / 1000 + "%");
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
