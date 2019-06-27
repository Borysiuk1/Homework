$('.header_item').click(function () {
    var selected = $(this).attr('id');
    $('.header_item').removeClass('active');
    $(this).addClass('active');
    
    if(selected == 'one') {
        $('.content_1').show();
        $('.content_2').hide();
        $('.content_3').hide()
     } else if(selected == 'two') {
        $('.content_1').hide();
        $('.content_2').show();
        $('.content_3').hide()
     } else if(selected == 'three') {
        $('.content_1').hide();
        $('.content_2').hide();
        $('.content_3').show()
     }
     console.log(selected);
 })
       