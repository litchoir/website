(function() {

  $(document).ready(initialize);
  function initialize() {
    navbar();

    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider({
      height: 450,
      interval: 8000
    });
    $('#directorBtn').click(buttonRun);
    $(window).resize(navbar);
    $(window).resize(arrows);
    $(window).resize(adjustPeople);
    $('ul.pagination li a').click(changeTour);
    $(window).scroll(hidePage);
    $(window).scroll(adjustYear);
    setInterval(adjustYear,200);
  }

  function buttonRun() {
    if ($('#directorBtn').text() == "Expand Quotes") {
      $('#directorBtn').text("Collapse Quotes");
      $('#people .card-action').css('display','block');
    }
    else {
      $('#directorBtn').text("Expand Quotes");
      $('#people .card-action').css('display','none');

    }
  }


  function navbar() {
      if ($(window).width() < 791) {
         $('.navbar').css('height','100px');
         $('.navbar').css('padding','3px');
      }
      else if ($(window).width() >= 791) {
         $('.navbar').css('height','44px');
         $('.navbar').css('padding','0px');
      }

  }

  function arrows() {
    if ($('.slides .caption .newsContent').hasScrollBar()) {
      $('#upArrow').css('visibility', 'visible');
      $('#downArrow').css('visibility', 'visible');
    }
    else {
      $('#upArrow').css('visibility', 'hidden');
      $('#downArrow').css('visibility', 'hidden');
    }
  }

  function adjustPeople() {
    var theresa_height = $('.litcom').width();
    $('.card .card-action').css('width',str(theresa_height));
  }

  function changeTour() {
    console.log("Changing tour");
    var year = jQuery(this).html();
    var element = jQuery(this).attr("id");
    if (element != 'lswitcher' && element != 'rswitcher') {
      $('ul.pagination li').removeClass('active');
      $('ul.pagination li.' + year).addClass('active');
      if (year == '2012') {
        $('ul.pagination li.Rli').addClass('disabled');
        $('ul.pagination li.Lli').removeClass('disabled');
      }
      else if (year == '2019') {
        $('ul.pagination li.Lli').addClass('disabled');
        $('ul.pagination li.Rli').removeClass('disabled');
      }
      else $('ul.pagination li').removeClass('disabled');
      $(location).attr('href', './tours.html#a' + year);
    }
    else if (element == 'lswitcher' && ! $('ul.pagination li.Lli').hasClass('disabled')) {
      $('ul.pagination li.Rli').removeClass('disabled');
      var activeYear = $('ul.pagination li.active a').html();
      $('ul.pagination li').removeClass('active');
      activeYear++;
      $('ul.pagination li.'+ activeYear).addClass('active');
      if (activeYear == '2019') $('ul.pagination li.Lli').addClass('disabled');
      $(location).attr('href', './tours.html#a' + activeYear);
    }
    else if (element == 'rswitcher' && ! $('ul.pagination li.Rli').hasClass('disabled')) {
      $('ul.pagination li.Lli').removeClass('disabled');
      var activeYear = $('ul.pagination li.active a').html();
      $('ul.pagination li').removeClass('active');
      activeYear--;
      if (activeYear == '2012') {
        $('ul.pagination li.Rli').addClass('disabled');
      }
      $('ul.pagination li.'+ activeYear).addClass('active');
      $(location).attr('href', './tours.html#a' + activeYear);
    }

  }

  function hidePage() {
    // console.log($(window).scrollTop(),$('#a2012').offset().top);
    if ($(window).scrollTop() >= $('#aearlier').offset().top) {
        $('.pagination').css('display','none');
    }
    else {
      $('.pagination').css('display','block');
    }
  }

  function adjustYear() {

    var y1918 = ($('#a2019').offset().top + $('#a2018').offset().top) / 2;
    var y1817 = ($('#a2018').offset().top + $('#a2017').offset().top) / 2;
    var y1716 = ($('#a2017').offset().top + $('#a2016').offset().top) / 2;
    var y1615 = ($('#a2016').offset().top + $('#a2015').offset().top) / 2;
    var y1514 = ($('#a2015').offset().top + $('#a2014').offset().top) / 2;
    var y1413 = ($('#a2014').offset().top + $('#a2013').offset().top) / 2;
    var y1312 = ($('#a2013').offset().top + $('#a2012').offset().top) / 2;
    var y12e = ($('#a2012').offset().top + $('#aearlier').offset().top) / 2;

    if ($(window).scrollTop() < y1918) {
      $('ul.pagination li').removeClass('active');
      $('ul.pagination li.2019').addClass('active');
      $('ul.pagination li.Lli').addClass("disabled");
    }

    else if ($(window).scrollTop() < y1817 && $(window).scrollTop() > y1918) {
        $('ul.pagination li').removeClass('active');
        $('ul.pagination li.2018').addClass('active');
        $('ul.pagination li.Lli').removeClass("disabled");
    }
    else if ($(window).scrollTop() < y1716 && $(window).scrollTop() > y1817) {
        $('ul.pagination li').removeClass('active');
        $('ul.pagination li.2017').addClass('active');
        $('ul.pagination li.Lli').removeClass("disabled");
        $('ul.pagination li.Rli').removeClass("disabled");
    }
    else if ($(window).scrollTop() < y1615 && $(window).scrollTop() > y1716) {
        $('ul.pagination li').removeClass('active');
        $('ul.pagination li.2016').addClass('active');
        $('ul.pagination li.Lli').removeClass("disabled");
        $('ul.pagination li.Rli').removeClass("disabled");
    }
    else if ($(window).scrollTop() < y1514 && $(window).scrollTop() > y1615) {
        $('ul.pagination li').removeClass('active');
        $('ul.pagination li.2015').addClass('active');
        $('ul.pagination li.Lli').removeClass("disabled");
        $('ul.pagination li.Rli').removeClass("disabled");
    }
    else if ($(window).scrollTop() < y1413 && $(window).scrollTop() > y1514) {
        $('ul.pagination li').removeClass('active');
        $('ul.pagination li.2014').addClass('active');
        $('ul.pagination li.Lli').removeClass("disabled");
        $('ul.pagination li.Rli').removeClass("disabled");
    }
    else if ($(window).scrollTop() < y1312 && $(window).scrollTop() > y1413) {
        $('ul.pagination li').removeClass('active');
        $('ul.pagination li.2013').addClass('active');
        $('ul.pagination li.Lli').removeClass("disabled");
        $('ul.pagination li.Rli').removeClass("disabled");
    }
    else if ($(window).scrollTop() < y12e && $(window).scrollTop() > y1312) {
        $('ul.pagination li').removeClass('active');
        $('ul.pagination li.2012').addClass('active');
        $('ul.pagination li.Lli').removeClass("disabled");
        $('ul.pagination li.Rli').addClass('disabled');
    }
    else if ($(window).scrollTop() < $('#aearlier').offset().top && $(window).scrollTop() > y12es) {
        $('ul.pagination li').removeClass('active');
        // $('ul.pagination li.2012').addClass('active');
    }
  }

})();

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);
