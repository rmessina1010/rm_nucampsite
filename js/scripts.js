$(function () {
    $(".carousel").carousel({ interval: 2000, pause: "false" }); // accesses carousel method, sets interval attribute to 2 sec
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    // Week 4: A scaling DRY solution
    $('a[id]').click((event) => {
        //available buttons
        let targetHash = {
            loginButton: "loginModal",
            reserveButton: "reserveModal"
        }
        //ID of the clicked button
        let ButtonID = event.target.id;
        if (targetHash[ButtonID]) {// if  button ID is not in hash , no action is taken
            $('.modal').modal('hide');
            $('#' + targetHash[ButtonID]).modal('show');
        }
    });


    /**
        //Week 4: Simpler answer
        $('#loginButton').click(() => {
            $('.modal').modal('hide');
            $('#loginModal').modal('show');
        });

        $('#reserveButton').click(() => {
            $('.modal').modal('hide');
            $('#reserveModal').modal('show');
        });
    **/
});


