$(document).ready(function () {
  $("form#num").submit(function (event) {
    event.preventDefault();
    const upToInt = parseInt($("input#upto").val());
    const multInt = parseInt($("input#multiple").val());
    

     
    let countArr = [];
    
    for (let index = multInt; index <= upToInt; index += multInt ) {
      countArr.push(" " + index);
      //console.log(countArr);
    }
    
    $(".answer").text(countArr).show();
    
    
    //for ( let index = 0; index < countArr.length; index += 1 ) {
      //index = index.concat("<li>" + countArr[index] +  "<li>");
    //}
    //$("ul").append("<li>" + favOne + "</li>");
    //$("ul").append("<li>" + favTwo + "</li>");

  });
});