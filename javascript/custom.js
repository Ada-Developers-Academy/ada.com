$(window).ready(function () {
  if ($(window).width() < 980) {
    $('#logo').hide();
    $("#jumbotron-text h1").css({"font-size":"60px"});
    $("h1.ada-text").css({"font-size":"80px"});
    $(".page-header h1").css({"font-size":"40px"});
    $(".footer-email-form").css("cssText", "text-align: left !important;");
    $("body").css({"padding":"0px"});
    $(".sponsors").css({"text-align":"center"});
  }
});

$(window).resize(function() {
  if ($(window).width() < 980) {
    $('#logo').hide();
    $("#jumbotron-text h1").css({"font-size":"60px"});
    $("h1.ada-text").css({"font-size":"80px"});
    $(".page-header h1").css({"font-size":"40px"});
    $(".footer-email-form").css("cssText", "text-align: left !important;");
    $(".sponsors").css({"text-align":"center"});
  } 
  else {
    $('#logo').show();
    $("#jumbotron-text h1").css({"font-size":"70px"});
    $("h1.ada-text").css({"font-size":"120px"});
    $(".page-header h1").css({"font-size":"5em"});
    $(".footer-email-form").css("cssText", "text-align: right !important;");
    $("body").css({"padding":"0px"});
    $(".sponsors").attr("style", "");
  }
});

// 
