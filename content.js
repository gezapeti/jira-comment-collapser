// content.js
console.log("getting user list")
chrome.storage.sync.get({
    users: ["hadoopqa", "hudson", "githubbot"],
    keepLast :  false
  }, function(items){
	var shift = 0;
	if( items.keepLast ){
		shift = 1;
	}
	collapseSpammers(items.users, shift);
})


function collapseSpammers(spammers, shift){
for (var spammer of spammers) {
  var comments = $(".activity-comment").has("a[rel='" + spammer + "']");
  console.log("collapsing user " + spammer);
  collapse(comments, shift);
}
}

function collapse(comments, shift) {
  for (var i = 0; i < comments.length - shift; i++) {
    console.log("collapsing " + $(comments[i]).attr("id"))
    $(comments[i]).removeClass("expanded");
    $(comments[i]).addClass("collapsed");
  }
}

