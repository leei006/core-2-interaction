function add(a,b) {
    return a + b;
};
function makeItGreen() {
    var circle = document.getElementById("circle")
    circle.style.backgroundColor = "green"
};

let recipe = [
    {
        "name":"Cookies",
        "ingredients":["flour","eggs","sugar","butter","salt","chocolate chips", "baking powder"],
        "hours": 1,
        "serving_size": 6,
        "directions":{
            "step1": "preheat oven to 350 degrees",
            "step2": "mix dry ingredients",
            "step3": "mix wet ingredients",
            "step4": "shape dough into balls and bake for 12 minutes"
        }
    }
]

console.log(recipe)