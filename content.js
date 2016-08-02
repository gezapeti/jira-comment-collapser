// content.js
 var comments = $(".activity-comment").has("a[rel='hadoopqa']");
 for (var i = 0; i < comments.length; i++) {
    console.log("collapsing " + $(comments[i]).attr("id"))
    $(comments[i]).removeClass("expanded");
    $(comments[i]).addClass("collapsed");
 }
