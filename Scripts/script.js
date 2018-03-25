function MyFunction() {
    document.getElementById("demo").innerHTML = "Thank you for liking penguins as much as I do!";
    document.getElementById('outset').id = 'inset';
    document.getElementById('regular').id = 'inverted';

}
function Hide() {
  $("#HS").hide();
}
function Show() {
  $("#HS").show();
}
$(".Hide").click( () => {
  Hide()
});
$(".Show").click( ()=> {
  Show()
})
