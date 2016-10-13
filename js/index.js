$(document).ready(function() {

  $('.social li:nth-child(1)').mouseenter(function() {
    $('.hint').empty().css('color', 'inherit').html("<h4><span>+ </span> Contribute</h4>");
  });
  $('.social li:nth-child(2)').mouseenter(function() {
    $('.hint').empty().css('color', '#55acee').html("<h4>Tweet my work</h4>");
  });
  $('.social li:nth-child(3)').mouseenter(function() {
    $('.hint').empty().css('color', '#dd4b39').html("<h4>Lets Talk</h4>");
  });
  $('.social').mouseleave(function() {
    $('.hint').css('color', '#efefef');
  });

  
  
  
  $(".grad").each(function() {

    var rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    console.log(rgb + " rgb");
    var color1 = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    console.log(color1 + " color1");
    var color2 = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    console.log(color2 + " color2");

    $(this).css("background", "linear-gradient(" + color1 + "," + color2 + ")");
  });
});