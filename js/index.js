$(document).ready(function() {

    $(".grad").each(function() {

        var rgb = [Math.floor(Math.random() * 250), Math.floor(Math.random() * 250), Math.floor(Math.random() * 250)];
        //console.log(rgb + " rgb");
        var color1 = 'rgb(' + Math.floor(Math.random() * 250) + ',' + Math.floor(Math.random() * 250) + ',' + Math.floor(Math.random() * 250) + ')';
        //console.log(color1 + " color1");
        var color2 = 'rgb(' + Math.floor(Math.random() * 250) + ',' + Math.floor(Math.random() * 250) + ',' + Math.floor(Math.random() * 250) + ')';
        //console.log(color2 + " color2");

        $(this).css("background", "linear-gradient(" + color1 + "," + color2 + ")");
    });
});
