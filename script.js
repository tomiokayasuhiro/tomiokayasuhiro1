$(function() {

  /* スムーススクロール */
  $("a[href^='#']").click(function() {
  
    var speed = 300;
    var header = $(".header").innerHeight();
    var id = $(this).attr("href");
    var position = 0;
  
    if (id != "#") {
      var position = $(id).offset().top - header;
    }
  
    $("html, body").animate({
      scrollTop: position
    },
    speed
    );
    return false;
  });



  /* ドロワーメニュー */
  $(".drawer_box").click(function(e) {
    e.preventDefault();
  
    $(this).toggleClass("is_active");
    $(".drawer_content").toggleClass("is_active");
    $(".drawer_bar").toggleClass("is_active");
    $(".drawer_bg").toggleClass("is_active");
  });
  
  $(".drawer_content_item_link").click(function() {
    $(".drawer_box").toggleClass("is_active");
    $(".drawer_bar").toggleClass("is_active");
    $(".drawer_content").toggleClass("is_active");
    $(".drawer_bg").toggleClass("is_active");
  });


  /* swiper */
  const swiper = new Swiper('.swiper-container', {
   
    loop: true,
    loopedSlides: 6,
    width: 400,
    spaceBetween: 40,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {
      320: {
        width: 274,
        spaceBetween: 20,
      },

      768: {
        width: 400,
        spaceBetween: 40,
      }
    }

  });


  /* FAQ */
  $(".faq_question").click(function() {
    $(this).next().slideToggle();
    $(this).children(".faq_box").toggleClass("is_open");
  });



  /* 送信ボタンの有効化 */
  (function() {
    var require_flg = false;
    var privacy_flg = false;
    var require = $( "#js_form .js_require" );
    var fillCount = 0;
  
    function setSubmitProp() {
      if( require_flg && privacy_flg ) {
        $( "#js_submit" ).prop( "disabled", false );
      } else {
        $( "#js_submit" ).prop( "disabled", true );
      }
    }
  
    /* 必須項目 */ 
    require.blur(function() {
      if( $( this ).attr( "id" ) === "ruby" && !$( this ).val().match( /^([ァ-ン]|ー)+$/ ) ) {
        $( this ).val( "" );
        alert( "全角カタカナで入力してください。" )
      }
  
      require.each( function() {
        var value = $( this ).val();
  
        if( ( value !== "" && value.match( /[^\s\t]/ ) ) ) {
          fillCount++;
        }
      });
  
      require_flg = ( fillCount === require.length ? true : false );
  
      setSubmitProp();
      fillCount = 0;
    });
  
    // プライバシーポリシー
    $( "#privacy" ).change(function() {
      privacy_flg =  ( $( this ).prop( "checked" ) ? true : false );
      setSubmitProp();
    });
  
    // 送信時
    $( "#js_form" ).submit(function() {
      if( !( require_flg && privacy_flg ) ) {
        alert( "入力に誤りがあります。" );
        return false;
      }
    });
  })();

  $(window).scroll(function() {
    if(100 < $(this).scrollTop()) {
      $(".to_top_btn").addClass("is_show");
    } else {
      $(".to_top_btn").removeClass("is_show");
    }
  });
});
