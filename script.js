/**
 * Created by hydee on 9/30/16.
 */
$(document).ready(function () {

    var numberOfSquares = 0;
    var size = 0;

    $('.create').click(function () {

        numberOfSquares = prompt("enter square width?");

        size = 950 / numberOfSquares;

        for(var i = 0; i < numberOfSquares; i++){

            for (var j = 0; j < numberOfSquares; j++){

                $('.square-panel').append('<div class="appended-div"></div>');

                $('.appended-div').show(function () {

                    var randomColorRed = Math.floor(Math.random() * 100);
                    var randomColorBlue = Math.floor(Math.random() * 100);
                    var randomColorGreen = Math.floor(Math.random() * 100);

                    var bg_color = "#"+randomColorRed+randomColorGreen+randomColorBlue;

                    $(this).css("background-color", bg_color);
                });

                //$('.appended-div').css("background-color", bg_color);

                //$('.square-panel').append('<div class="appended-div" style="background-color: bg_color;"></div>');
                //$('.appended-div').css("background-color","rgba(randomColorRed, randomColorBlue, randomColorGreen)");
            }
        }


        $('.appended-div').height(size);
        $('.appended-div').width(size);

        $('.appended-div').mouseenter(function () {
            $(this).css("background-color", "#000000");
        });
    });



    $('.refresh').click(function () {
        $('.square-panel').empty();
    });

});