$( document ).ready(function() {
    let rangeWeek = $('#rangeWeek');
    let rangeBudget = $('#rangeBudget');
    let rangeWeekFill = $('.rangeWeek .bar .fill');
    let rangeBudgetFill = $('.rangeBudget .bar .fill');
    let valWeek = $('#valWeek');
    let valBudget = $('#valBudget');

    let pageUrl = window.location.href;
    let lastUrl = new URL(pageUrl);

    if (lastUrl.searchParams.get("page") || lastUrl.searchParams.get("area")) {
      $('html, body').animate({
          scrollTop: $(".tabs").offset().top - 80
      }, 800);
    }

    lastUrl.searchParams.delete('page');
    if (pageUrl.indexOf('/works') != -1) {
      $('.allProjects').addClass('hide');
      let tabsUrl = document.querySelectorAll('.tabs__link');

      $.each( tabsUrl, ( key, value ) => {
        if (lastUrl == tabsUrl[key].href) {
          $('.tabs__link').removeClass('active');
          $(`.tabs__link:eq(${key})`).addClass('active');
        }
      });
    } else {
      $(`.tabs__link:eq(0)`).addClass('active');
      $('.tabs__link').click(function(e) {
        e.preventDefault();
      })
    }

    $( ".servicesTabs .services-tabs-title.hide" ).remove();
    $( ".servicesTabs .tabs-panel .fontRegular.hide" ).remove();

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
            $("ul.tabs__caption").on("click", "a:not(.active)", function() {
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

    $(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $(".scrollToTop").addClass("showBtn");
    } else {
      $(".scrollToTop").removeClass("showBtn");
    }
  });

    $('.scrollToTop').click(function() {
      $('html, body').animate({scrollTop:(0)}, '1000');
    });
});

function openTabsServices(evt, idItem) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabs-panel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("services-tabs-title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(idItem).style.display = "block";
  evt.currentTarget.className += " is-active";
}
