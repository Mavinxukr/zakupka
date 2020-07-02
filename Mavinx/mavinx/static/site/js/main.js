$( document ).ready(function() {
    var url = "{% static 'site/images/' %}";
    console.log(url)
    let rangeWeek = $('#rangeWeek');
    let rangeBudget = $('#rangeBudget');
    let rangeWeekFill = $('.rangeWeek .bar .fill');
    let rangeBudgetFill = $('.rangeBudget .bar .fill');
    let valWeek = $('#valWeek');
    let valBudget = $('#valBudget');

    rangeWeekFill.css("width", rangeWeek.val() + "%");
    rangeBudgetFill.css("width", rangeBudget.val() / 100 + "%");

    rangeWeek.on('input', function() {
        rangeWeekFill.css("width", rangeWeek.val() + "%");
        valWeek.html(rangeWeek.val());
    });
    rangeBudget.on('input', function() {
        rangeBudgetFill.css("width", rangeBudget.val() / 100 + "%");
        valBudget.html(rangeBudget.val());
    });

    $(document).foundation();

    $('.timer').each(count);

    $('#example-tabs li.tabs-title').on('mouseenter', function() {
        $(this).find('a').click();
    });

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
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        arrows: false,
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        infinite: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow:"<button type='button' class='slick-prev customBtn pull-left'><img src='http://127.0.0.1:8000/static/site/images/arrow.svg'></button>",
        nextArrow:"<button type='button' class='slick-next customBtn pull-right'><img src='http://127.0.0.1:8000/static/site/images/arrow.svg'></button>"
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
});
