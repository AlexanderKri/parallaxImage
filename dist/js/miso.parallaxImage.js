;(function ($) {

  $.fn.parallaxImage = function (options) {

    var settings = $.extend({
      widthImg : '110%',
      offset: '-5%',
      query: 767,
      speed: 30

    },options||{});

    return this.each(function () {

      var $current = $(this);

      /**
       * [сохранение в дата натуральный размер картинки]
       */
      $current.load(function () {
        $current.attr('data-height', $current.prop('naturalHeight'));
        $current.parent().parent().height($current.data('height'));
      });


      /**
       * [addAttribute центрирование изображения]
       * @param {[string]} pr [принимает строку из объкта settings]
       */
      function addAttribute(pr) {
        $current.parent().parent()
              .css({
                'float' : 'left',
                'overflow' : 'hidden'
              })
             .end().css({
               'float' : 'left',
               'height' : '100%'
             })
             .end().css({
               'position' : 'relative',
               'top' : pr,
               'left' : pr,
               'float' : 'left',
               'min-width' : settings.widthImg
             });
      }

      /**
       * [if вызов фукнции только на устройствах больше в значении cв-ва query объекта settings]
       */
      if (getWindowWidth() > settings.query) {
        addAttribute(settings.offset);
      }

      function getWindowWidth() {
        return window.innerWidth || document.body.clientWidth;
      }

      $(this).mousemove(function(e) {

      var $current = $(this);

       if (getWindowWidth() > settings.query) {

        /**
         * [coordinates в переменную arr записывается массив с координатами ]
         * @return {[object]} [массив с числовыми данными]
         */
        function coordinates() {

          var arr = [],
              x = -(e.pageX + $current.offset().left) / settings.speed,
              y = -(e.pageY + $current.offset().top) / settings.speed;

          arr.push(x);
          arr.push(y);

          return arr;
        }
        addAttribute(settings.offset);

        $(this).css({
          'left' : coordinates()[0] + 'px',
          'top' : coordinates()[1] + 'px'
        });

      }

      else {
        $(this).removeAttr('style').parent().removeAttr('style').parent().removeAttr('style');
      }

      });

    });

  }

})(jQuery);