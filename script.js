// * a string representing the diners diet
//let mealType = "omnivore";

/**
 * * function lunchyMunchies
 * @param {*} dinersPreference - mealType is given this nickname
 * * function to determine what kind of lunch to feed our guests
 */

 // *     {   }
function lunchyMunchies(dinersPreference){
    console.log(dinersPreference);
    let meal;
    if(dinersPreference=="omnivore"){
        meal = "Meat Lovers Pizza with Peppers";
    }else if(dinersPreference=="vegetarian"){
        meal = "garlic naan with curried dahl and rice";
    }else if(dinersPreference=="pescatarian"){
        meal = "steamed garlic trout";
    }else{
        meal = "beans and rice";
    }
    console.log(meal);
    let body = document.querySelector('body');
    let p = document.createElement('p');
    p.innerText = `${dinersPreference}: ${meal}`;
    body.appendChild(p);
    let dessert = document.createElement('p');
    dessert.innerText = "and now for ice cream";
    body.appendChild(dessert);
}

function mealClick(e){
    console.log(e.target);
    console.log(e.target.innerText);
    lunchyMunchies(e.target.innerText);
}

//lunchyMunchies("omnivore");
//lunchyMunchies("vegetarian");
//lunchyMunchies("pescatarian");

let omnivoreBtn = document.querySelector("#omnivore");
omnivoreBtn.addEventListener("click", mealClick);

let vegetarianBtn = document.querySelector("#vegetarian");
vegetarianBtn.addEventListener("click", mealClick);

let pescatarianBtn = document.querySelector("#pescatarian");
pescatarianBtn.addEventListener("click", mealClick);

for(let i=0;i<10;i++){
    console.log(i);
}
