
// Creating objects with stats for each fighter

var royce =
{
    attack: 100,
    defense: 100,
    counterattack: 100,
};
var marco =
{
    attack: 100,
    defense: 100,
    counterattack: 100,
};
var vitor =
{
    attack: 100,
    defense: 100,
    counterattack: 100,
};
var mark =
{
    attack: 100,
    defense: 100,
    counterattack: 100,
};

// Handling fighter selection, appending opposing fighters to tournament section

$("#royce").on("click", function() 
 {
$(".tournament").append($("#marco, #vitor, #marc"));

 });

 $("#marco").on("click", function() 
 {
$(".tournament").append($("#royce, #vitor, #marc"))
 });
 $("#vitor").on("click", function() 
 {
$(".tournament").append($("#marco, #royce, #marc"))
 });
 $("#marc").on("click", function() 
 {
$(".tournament").append($("#marco, #vitor, #royce"))
 });
/* i think i have to create boolean values for each fighter to signify when they are in the opponent
selection div, if that value it true then add a click event to be moved to the current opponent
screen.
*/