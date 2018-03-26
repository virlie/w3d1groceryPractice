$(document).ready(function(){

  $(".list").submit(function(event) {
    event.preventDefault();
    var shoppingList=[];
    var dairy=$("#dairy").val();
    var produce=$("#produce").val();
    var meats=$("#meats").val();

    shoppingList.push(dairy);
    shoppingList.push(produce);
    shoppingList.push(meats);

      $(".output").append("<p class='lead mt-5'>Here is your list: </p>");

    var uppercase = shoppingList.map(list => list.toUpperCase());

    // remove the empty values
    // var uppercase = uppercase.(function(list){
    //
    // });

    // alert(uppercase);
    uppercase.forEach(function(word){
      $(".output").append("<p class='lead mt-5'>"+ word+"</p>");
    });

  });
});
