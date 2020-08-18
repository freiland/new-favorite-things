$(document).ready(function () {
  $("form#fav").submit(function (event) {
    event.preventDefault();
    const favFood = $("input#favoritefood").val();
    const favColor = $("input#favoritecolor").val();
    const favMovie = $("input#favoritemovie").val();
    let favorites = [favFood, favColor, favMovie];
    let newFave = favorites.pop();
    const favOne = favorites[0];
    const favTwo = favorites[1];
    //alert(favOne);
    //alert(favTwo);
    $("ul").append("<li>" + favOne + "</li>");
    $("ul").append("<li>" + favTwo + "</li>");

  });
});