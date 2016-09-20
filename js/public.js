/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  if ($(window).width () < 1000) {
    var subs = [];

    var arr = $('.top_down .top_down_cent > div').map (function () {
      var $a = $(this).find ('> a').eq (0);
      var $as = $a.nextAll ();

      if ($as.length > 2) {

        subs = subs.concat ($as.map (function () {
            return {
                href: $(this).attr ('href'),
                text: ($(this).attr ('title') ? $(this).attr ('title') : '') + $(this).text ()
              };
          }).toArray ());
        return null;
      } else {
        return [{
            href: $a.attr ('href'),
            text: $a.text ()
          }];
      }
      return re;
    }).filter (function (t) { return t != null; }).toArray ();

    arr = arr.concat (subs);

    $('<div />').addClass ('top_down_m').append (
      $('<select / >').append (arr.map (function (t) {
        return $('<option />').text (t.text).val (t.href);
      })).change (function () {
        if ($(this).val ()) window.location = $(this).val ();
      })).insertBefore ($('.top_down'));
  }


  // news 上下拉
  $('.page_cent_boxs .news_title').click (function () {
    $('.page_cent_boxs .news_title.open').not ($(this)).removeClass ('open');
    $(this).toggleClass ('open');
  });


  // 圖自動縮放
   $('.pic_box_3, .pic_box_1, .page_pic_box_3, .page_pic_box_1').imgLiquid ({verticalAlign: 'center'});


  // page點選切換tab
   $('.name').click(function() {
    $('.name').removeClass ('nc');
    $(this).addClass ('nc');

    $('.team_type_boxs').removeClass('show');
    $('.team_type_boxs').eq($(this).parent().index()).addClass('show');
   });

   $('.name').eq (0).click();

});