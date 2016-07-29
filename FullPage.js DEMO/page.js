$(document).ready(function () {
    $("#fullpage").fullpage({
        verticalCentered: false,
        paddingTop: "70px",
        loopHorizontal: false,
        navigation: true,
        navigationPosition: "right",
        afterLoad: function (anchorLink, index) {
            if (index === 3) {
                $(".third-page>p").animate({"marginTop": "300px"}, "0.5s");
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index === 3 && direction === 'up') {
                $(".third-page>p").animate({"marginTop": "150px"});
            }
        }
    });

    $("#header>div").on("click", function () {
        $("#side-bar").show();
    })
    $("#side-bar p").on("click", function () {
        $("#side-bar").hide();
    })
});
