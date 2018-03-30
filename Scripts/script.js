function MyFunction() {
    document.getElementById("demo").innerHTML = "Thank you for liking penguins as much as I do!";
    document.getElementById('outset').id = 'inset';
    document.getElementById('regular').id = 'inverted';

}
function Hide() {
  $("#HS").hide();
  $("#HSBH").hide();
  $("#HSBS").show();
}
function Show() {
  $("#HS").show();
  $("#HSBS").hide();
  $("#HSBH").show();
}

$(".Hide").click( () => {
  Hide()
});
$(".Show").click( ()=> {
  Show()
})
