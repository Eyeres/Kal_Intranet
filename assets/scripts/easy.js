$(document).ready(function () {
  setupEasyJS();
});

//Setup EasyJS

function setupEasyJS() {
  console.log('Easy Ready');



  //common
  $('.darkoverlay').hide();
  $('.darkoverlay').css('opacity', '1');

  //popupclose
  $('.popupmodal .closebtn').on('click', function () {
    $('.darkoverlay').hide();
  });

  //Button Animations
  $('.animbuttonone').on('mouseenter', function () {

    anime({

      targets: this,

      scaleX: [1, 1.05],

      elasticity: 500,

      duration: 500

    });

  });



  $('.animbuttonone').on('mouseleave', function () {

    anime({

      targets: this,

      scaleX: [1.05, 1],

      elasticity: 500,

      duration: 500

    });

  });



  //Scroll or Resize Event
  $(window).on('resize scroll load', function () {

    var reveals = $('.reveal').withinviewport();

    animReveals(reveals);

  });


  //Micro-Interactions
  $('.effect-ofo').on('click', function (e) {
    var opos = $(this).offset();
    var dimn = this.getBoundingClientRect();
    var zindex = $(this).css('zindex');
    var clone = $(this).clone();
    var holder = $('<div class="click-holder"></div>');
    $(holder).css('position', 'absolute');
    $(holder).css('top', opos.top + 'px');
    $(holder).css('left', opos.left + 'px');
    $(holder).css('width', dimn.width);
    $(holder).css('height', dimn.height);
    $(holder).css('zindex', zindex + 1);
    $('body').append(holder);
    $(holder).append(clone);
    $(holder).css({
      '-webkit-transform': 'scale(0)',
      '-moz-transform': 'scale(0)',
      '-ms-transform': 'scale(0)',
      '-o-transform': 'scale(0)',
      'transform': 'scale(0)'
    });
    anime({
      targets: $(holder).get(0),
      opacity: [1, 0],
      scale: [1, 1.2],
      duration: 300,
      easing: 'easeOutQuad',
      complete: function (anim) {
        $(holder).remove();
      }
    });
  });

  $('.effect-mclk').on('click', function (e) {
    var style = window.getComputedStyle(this);
    var borderRadius = style['border-top-left-radius'] + ' ' + style['border-top-right-radius'] + ' ' + style['border-bottom-right-radius'] + ' ' + style['border-bottom-left-radius'];
    var holder = $("<div id='click-holder'></div>");
    var opos = $(this).offset();
    var zindex = $(this).css('zindex');
    $(holder).css('width', $(this).innerWidth() + 'px');
    $(holder).css('height', $(this).innerHeight() + 'px');
    $(holder).css('border-radius', borderRadius + '');
    $(holder).css('position', 'absolute');
    $(holder).css('top', opos.top + 'px');
    $(holder).css('left', opos.left + 'px');
    $(holder).css('zindex', zindex + 1);
    $(holder).css('overflow', 'hidden');
    var circle = $("<div id='click-circle'></div>");
    $(circle).css('position', 'absolute');
    $(circle).css('background-color', 'rgba(255,255,255,0.2)');
    if ($(this).hasClass('wave-light'))
      $(circle).css('background-color', 'rgba(255,255,255,0.2)');
    if ($(this).hasClass('wave-dark'))
      $(circle).css('background-color', 'rgba(0,0,0,0.2)');
    $(circle).css('transform', 'scale(1)');
    $(circle).css('width', '1px');
    $(circle).css('height', '1px');
    $(circle).css('border-radius', '5000px');
    $(circle).css('top', Math.abs(e.clientY - this.getBoundingClientRect().top) + 'px');
    $(circle).css('left', Math.abs(e.clientX - this.getBoundingClientRect().left) + 'px');
    $(holder).append(circle);
    $('body').append(holder);
    var maxScale = $(this).innerWidth() + $(this).innerHeight();
    anime({
      targets: $(circle).get(0),
      opacity: [1, 0],
      scale: [1, maxScale],
      duration: 600,
      easing: 'easeOutQuad',
      complete: function (anim) {
        $(holder).remove();
      }
    });

  });

  $('.effect-pclk').on('click', function (e) {
    anime({
      targets: $(this).get(0),
      scale: [1, 0.98, 1],
      duration: 300,
      easing: 'linear'
    });
  });


  //Components
  $.each($('.easycheckbox input'), function (ind, ele) {
    var cbsvg = $(this).parent().find('.checkmarkpath');
    if (!this.checked) {
      $(cbsvg).attr('d', 'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z');
    } else {
      $(cbsvg).attr('d', 'M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z');
    }
  });

  $('.easycheckbox input').on('change', function () {
    var cbsvg = $(this).parent().find('.checkmarkpath');
    if (!this.checked) {
      $(cbsvg).attr('d', 'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z');
    } else {
      $(cbsvg).attr('d', 'M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z');
    }
  });

  $('.easyradio input').on('change', function () {
    var rads = $(this).parent().parent().find('.easyradio');
    $.each($(rads), function (ind, ele) {
      $(ele).find('input').prop("checked", false);
    });
    $(this).prop("checked", true);
  });

  $('.easyinput input').on('input', function () {
    $(this).attr('value', $(this).val());
  });

  $('.easytextarea textarea').attr('value', '');

  $('.easytextarea textarea').on('input', function () {
    $(this).attr('value', $(this).val());
  });

  $('.easyinput input[value=""] + .placeholder').on('click', function(){
    $(this).parent().find('input').focus();
  });

  $('.easytextarea textarea[value=""] + .placeholder').on('click', function(){
    $(this).parent().find('textarea').focus();
  });

  $('.easyinput .show').on('click', function () {
    var inputEle = $(this).parent().find('input');
    inputEle.focus();
    if (inputEle.attr('type') == 'text') {
      inputEle.attr('type', 'password');
    } else if (inputEle.attr('type') == 'password') {
      inputEle.attr('type', 'text');
    }
  });

/*  $(document).mouseup(function (e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    var activeSel = $('.dismiss').parent().find('.select');
    $('.dismiss').hide();
    activeSel.removeClass('shadow2');
    $('.dismiss').removeClass('dismiss');
    if ($(e.target).hasClass('select') && $(e.target).parent().hasClass('easydropdown') && $(e.target).get(0) != $(activeSel).get(0)) {
      var select = $(e.target);
      select.removeClass('shadow2');
      var position = 'bottom';
      var options = select.parent().find('.options');
      if (options.css('display') == 'none') {
        if (position == 'top') {
          options.css('top', '-' + (options.innerHeight() + 30) + 'px');
        } else {
          options.css('top', (select.innerHeight() + 3) + 'px');
        }
        options.addClass('dismiss');
        options.parent().find('.select').addClass('shadow2');
        options.addClass('shadow2');
        options.fadeIn('fast');
      } else {
        options.parent().find('.select').removeClass('shadow2');
        options.hide();
        options.removeClass('dismiss');
      }
    } else if ($(e.target).parent().hasClass('options') && $(e.target).parent().parent().hasClass('easydropdown')) {
      var selOption = $(e.target);
      selOption.parent().find('option').css('border-left', '2px solid transparent');
      var selectfield = $(e.target).parent().parent().find('.select');
      selectfield.text(selOption.text());
      selOption.css('border-left', '2px solid #c00');
      $('.dismiss').hide();
      $('.dismiss').removeClass('dismiss');
    }
  }); */

  $('.easyFullImage').on('click', function () {
    var fimouter = $("<div id='fim-outer'></div>");
    var fiminner = $("<div id='fim-inner'></div>");
    var fimcloser = $("<span class='fim-closer mdi mdi-close shadow2 textlarge cursorpointer textcolorone'></span>");
    fimcloser.css({
      'background-color': 'white',
      'border-radius': '100px',
      'position': 'fixed',
      'top': '15px',
      'right': '30px',
      'display' : 'block',
      'padding' : '8px',
      'border' : 'thick solid #c00'
    });
    fimouter.css({
      'position': 'fixed',
      'top': '0px',
      'bottom': '0px',
      'left': '0px',
      'right': '0px',
      'background-color': 'rgba(0,0,0,0.8)',
      'z-index': '5000'
    });
    fiminner.css({
      'position': 'fixed',
      'top': '110px',
      'left': '30px',
      'bottom': '30px',
      'right': '30px'
    });
    fimouter.append(fiminner);
    fimouter.append(fimcloser);
    fiminner.addClass('fitbg');

    var imgurl = $(this).attr('src');
    fiminner.css('background-image', 'url(' + imgurl + ')');

    $('body').append(fimouter);
    fimcloser.on('click', function () {
      fimcloser.off('click');
      fimouter.remove();
    });
  });

}



// Animations



function easyFadeIn(ele) {

  anime({

    targets: ele,

    opacity: [0, 1],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeOut(ele) {

  anime({

    targets: ele,

    opacity: [1, 0],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeInTop(ele) {

  anime({

    targets: ele,

    translateY: [-1000, 0],

    opacity: [0, 1],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeOutTop(ele) {

  anime({

    targets: ele,

    translateY: [0, -1000],

    opacity: [1, 0],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeInBottom(ele) {

  anime({

    targets: ele,

    translateY: [1000, 0],

    opacity: [0, 1],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeOutBottom(ele) {

  anime({

    targets: ele,

    translateY: [0, 1000],

    opacity: [1, 0],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeInLeft(ele) {

  anime({

    targets: ele,

    translateX: [-1000, 0],

    opacity: [0, 1],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeOutLeft(ele) {

  anime({

    targets: ele,

    translateX: [0, -1000],

    opacity: [1, 0],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeInRight(ele) {

  anime({

    targets: ele,

    translateX: [1000, 0],

    opacity: [0, 1],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyFadeOutRight(ele) {

  anime({

    targets: ele,

    translateX: [0, 1000],

    opacity: [1, 0],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyScaleX(ele) {

  anime({

    targets: ele,

    scaleX: [0, 1],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyScaleY(ele) {

  anime({

    targets: ele,

    scaleY: [0, 1],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyScale(ele) {
  $(ele).show();
  anime({

    targets: $(ele).get(0),

    scale: [0, 1],

    duration: 500,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}



function easyProgress(ele) {

  var min = parseFloat($(ele).attr('min'));

  var max = parseFloat($(ele).attr('max'));

  var val = parseFloat($(ele).attr('val'));



  var pw = ((val - min) / (max - min)) * 100;

  var child = $(ele).find('.easyprogress').get(0);



  anime({

    targets: child,

    width: ['0%', pw + '%'],

    duration: 1000,

    easing: 'linear'

  });

  $(ele).removeClass('reveal');

}




function easyNumberAnim(ele) {
  var start = $(ele).attr('val-start');
  var end = $(ele).attr('val-end');

  var obj = {
    number: start + ''
  };

  anime({
    targets: obj,
    number: end + '',
    round: 1,
    easing: 'linear',
    update: function () {
      $(ele).text(obj.number);
    }
  });

  $(ele).removeClass('reveal');
}




function animReveals(elems) {

  $.each(elems, function (index, ele) {



    if ($(ele).hasClass('easyFadeIn')) {

      easyFadeIn(ele);

    }



    if ($(ele).hasClass('easyFadeOut')) {

      easyFadeOut(ele);

    }



    if ($(ele).hasClass('easyFadeInTop')) {

      easyFadeInTop(ele);

    }



    if ($(ele).hasClass('easyFadeOutTop')) {

      easyFadeOutTop(ele);

    }



    if ($(ele).hasClass('easyFadeInBottom')) {

      easyFadeInBottom(ele);

    }



    if ($(ele).hasClass('easyFadeOutBottom')) {

      easyFadeOutBottom(ele);

    }



    if ($(ele).hasClass('easyFadeInLeft')) {

      easyFadeInLeft(ele);

    }



    if ($(ele).hasClass('easyFadeOutLeft')) {

      easyFadeOutLeft(ele);

    }



    if ($(ele).hasClass('easyFadeInRight')) {

      easyFadeInRight(ele);

    }



    if ($(ele).hasClass('easyFadeOutRight')) {

      easyFadeOutRight(ele);

    }



    if ($(ele).hasClass('easyScale')) {

      easyScale(ele);

    }



    if ($(ele).hasClass('easyScaleX')) {

      easyScaleX(ele);

    }



    if ($(ele).hasClass('easyScaleY')) {

      easyScaleY(ele);

    }



    if ($(ele).hasClass('easyProgress')) {

      easyProgress(ele);

    }

    if ($(ele).hasClass('easyNumberAnim')) {
      easyNumberAnim(ele);
    }



  });

}


function easyBounce(ele) {
  $(ele).show();
  anime({
    targets: $(ele).get(0),
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 400,
    elasticity: 600
  });
}

//Strings

function capitalize(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}
