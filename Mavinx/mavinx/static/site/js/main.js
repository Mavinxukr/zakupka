$( document ).ready(function() {
    let rangeWeek = $('#rangeWeek');
    let rangeBudget = $('#rangeBudget');
    let rangeWeekFill = $('.rangeWeek .bar .fill');
    let rangeBudgetFill = $('.rangeBudget .bar .fill');
    let valWeek = $('#valWeek');
    let valBudget = $('#valBudget');

    rangeWeekFill.css("width", rangeWeek.val()*2 + "%");
    rangeBudgetFill.css("width", rangeBudget.val() / 1000 + "%");

    rangeWeek.on('input', function() {
        rangeWeekFill.css("width", rangeWeek.val()*2 + "%");
        valWeek.html(rangeWeek.val());
    });
    rangeBudget.on('input', function() {
        rangeBudgetFill.css("width", rangeBudget.val() / 1000 + "%");
        valBudget.html(rangeBudget.val());
    });

    $('.timer').each(count);

    function count(options) {
        let $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    (function($) {
        $(function() {
            $("ul.tabs__caption").on("click", "li:not(.active)", function() {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
                    .closest("div.tabs")
                    .find("div.tabs__content")
                    .removeClass("active")
                    .eq($(this).index())
                    .addClass("active");
            });
        });
    })(jQuery);

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
      prevArrow:"<button type='button' class='slick-prev customBtn pull-left'><img src='/static/site/images/arrow.svg'></button>",
      nextArrow:"<button type='button' class='slick-next customBtn pull-right'><img src='/static/site/images/arrow.svg'></button>"
    });

    $('input[type="file"]').each(function() {
        let label = $(this).parents('.form-group').find('label').text();
        label = (label) ? label : 'Upload File';
        $(this).wrap('<div class="input-file"></div>');
        $(this).before('<button type="button" class="btn">'+label+'</button>');
    });
    $('.input-file .btn').click(function() {
        $(this).siblings('input[type="file"]').trigger('click');
    });

    $('.deleteFile').click(function() {
          $('.form-group').removeClass('hide');
          $('.fileName').removeClass('show');
          $('#file').val('');
    });

    $('#file').on('change', function(e){
        var file = this.files[0]
        $('.fileName').addClass('show');
        $('.form-group').addClass('hide');
        $('.fileName').append('<span class="fontRegular">' + file.name + '</span>')
    });

    $('a[href*=\\#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    $('.labelCheckbox').on('click', function() {
      $('.labelCheckbox').removeClass('noChecked');
    });

});
