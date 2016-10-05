// content.js
var spammers = ["hadoopqa", "hudson"];
for (var spammer of spammers) {
  var comments = $(".activity-comment").has("a[rel='" + spammer + "']");
  collapse(comments);
}

function collapse(comments) {
  for (var i = 0; i < comments.length; i++) {
    console.log("collapsing " + $(comments[i]).attr("id"))
    $(comments[i]).removeClass("expanded");
    $(comments[i]).addClass("collapsed");
  }
}
