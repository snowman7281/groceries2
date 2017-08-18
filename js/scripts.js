$(document).ready(function(){
$("#groceriesList").submit(function(event){
  var groceryListItems = ["groceryItem1", "groceryItem2", "groceryItem3", "groceryItem4"];
  var result = [];
  var userInput;

  groceryListItems.forEach(function(groceryListItem){

      userInput = $("input#" + groceryListItem).val().toUpperCase();
      result.push(userInput);


  });
  if(userInput !== ""){
    result.sort();
    $("#output").append(result);

    $("#groceriesList").hide();
    $("#output").hide();
    $("#item1").text(result[0]);
    $("#item2").text(result[1]);
    $("#item3").text(result[2]);
    $("#item4").text(result[3]);
    $("#allItemsEntered").show();
  }else{
    $("span").show();
  }



  event.preventDefault();
  });
});
