$(document).ready(function() {
     $(".tab_content").hide();
     $("ul.tabs li").eq(1).addClass("active").show();
     $(".tab_content").eq(1).show();
     $("ul.tabs li").click(function() {
          $("ul.tabs li").removeClass("active");
          $(this).addClass("active");
          $(".tab_content").hide();
          var activeTab = $(this).find("a").attr("href");
          $(activeTab).fadeIn();
          return false;
     });
});