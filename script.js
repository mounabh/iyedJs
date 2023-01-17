const name = "iyed Mnassri";
console.log(name);
const ele = document.getElementsByClassName("name");
console.log(ele[0]);
ele[0].innerHTML=name;
fetch ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552")
.then((response) => response.json())
  .then((data) => 
  {console.log(data);
console.log(data.ingredients[0].strIngredient);}

  );
