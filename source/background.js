//Remove stupid header elements
$( "img" ).remove();
$("div[id=header-internal]").remove();
$("div[class=print-view-btn]").remove();
//Set margins and remove gray text
$("*").css("margin-left","auto");
$("*").css("margin-right","auto");
$('span[style*="color: rgb(153, 153, 153)"]').remove();
