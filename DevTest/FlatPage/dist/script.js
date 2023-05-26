var ele, eleIndex,  moveLeft;
    $(document).on('click', '.testimonial-wrapper .bullet-item', function () {
        ele = $(this);
        eleIndex = ele.index() + 1;
        $('.testimonial-item, .bullet-item').removeClass('selected');
        $('.testimonial-item:nth-child(' + eleIndex + ')').addClass('selected');
        $('.bullet-item:nth-child(' + eleIndex + ')').addClass('selected');
        moveLeft = -(100 * (eleIndex - 1)) + '%'; //Calculating the distance to move
        $('.testimonial-item:first-child').animate({
            marginLeft: moveLeft
        }, 600);
 });

 $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });