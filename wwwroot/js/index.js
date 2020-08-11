
$(document).ready(function () {
    var x = 0;
    var s = "";
    console.log("Hello PluralSight");


    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-info li");
    productInfo.on("click", function () {
        console.log(" You are Clicked on" + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.toggle(1000);
    });

});