$("#pad").html(localStorage.getItem("note"));
$("#pad").on("keyup", function(){
  localStorage.setItem("note", $("#pad").html());
});
