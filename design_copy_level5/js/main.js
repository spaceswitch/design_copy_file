$(function(){

  $('.question_box_q').click(function(){
      $(this).next('.question_box_a').slideToggle(300);
      $(".fas",this).toggleClass("fa-chevron-up");
      $(".fas",this).toggleClass("fa-chevron-down");
      //以下クリックされたもの以外閉じるコード
      $('.question_box_a').not($(this).next('.question_box_a')).slideUp(300);
  });

  // $('.flow_box_left').click(function(){
  //     $(this).next('.flow_box_right').slideToggle(300);
  //     $(".fas",this).toggleClass("fa-chevron-up");
  //     $(".fas",this).toggleClass("fa-chevron-down");
  //     //以下クリックされたもの以外閉じるコード
  //     $('.flow_box_right').not($(this).next('.flow_box_right')).slideUp(300);
  // });



    // 1000px以下の場合
  if (window.matchMedia( '(max-width: 1000px)' ).matches) {
    $(function(){
      $('.flow_box_left').click(function(){
        $(this).next('.flow_box_right').slideToggle(300);
        $(".fas",this).toggleClass("fa-chevron-up");
        $(".fas",this).toggleClass("fa-chevron-down");
        //以下クリックされたもの以外閉じるコード
        $('.flow_box_right').not($(this).next('.flow_box_right')).slideUp(300);
      });
    });

  };

 
 






});



