// Saves options to chrome.storage.sync.
function saveOptions() {
  var toSave = [];
  for(var i=0; i<document.getElementById("filteredUsers").options.length;i++){
    toSave.push(document.getElementById("filteredUsers").options[i].value);
  }
  
  chrome.storage.sync.set({
    users: toSave,
    keepLast : document.getElementById("keepLast").checked
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'User list updated saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function addUserName() {
  var newUser = document.getElementById('newUser').value;
  if(newUser.length){
    addUserNameToList("filteredUsers", newUser);
    document.getElementById('newUser').value = ""; 
  }
  document.getElementById('newUser').focus();
}

function removeSelectedUsers()
{
  var userFiltersBox = document.getElementById("filteredUsers");
  var keep = [];
  for (var i = 0; i < userFiltersBox.length; i++){
    if (!userFiltersBox.options[i].selected){
      keep.push(userFiltersBox.options[i].value);
    }
  }
  document.getElementById("filteredUsers").options.length = 0;

  for (var i = 0; i < keep.length; i++){
    addUserNameToList("filteredUsers", keep[i])
  }
}

function addUserNameToList(list, name){
  var elt = new Option();
    elt.text = name;
    elt.value = name;
    document.getElementById(list).appendChild(elt);
}

function restoreOptions() {
  chrome.storage.sync.get({
    users: ["hadoopqa", "hudson", "githubbot"],
    keepLast :  false
  }, function(items) {
    for(var i=0;i<items.users.length;i++){
      addUserNameToList("filteredUsers", items.users[i]);
    }
    document.getElementById("keepLast").checked = items.keepLast;
 });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('add').addEventListener('click', addUserName);
document.getElementById('remove').addEventListener('click', removeSelectedUsers);
