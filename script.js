document.addEventListener("DOMContentLoaded", function() {
    var categoryShortNames = ["Lunch", "Dinner", "Sushi", "Beverages"]; // Add more categories if needed
    
    function handleSpecialsClick(event) {
        event.preventDefault(); // Prevent default link behavior
        
        var randomIndex = Math.floor(Math.random() * categoryShortNames.length);
        var randomCategoryShortName = categoryShortNames[randomIndex];
        
        // Simulate navigating to the category page
        alert("Redirecting to " + randomCategoryShortName + " page");
    }
    
    var specialsTile = document.getElementById("specials-tile");
    specialsTile.addEventListener("click", handleSpecialsClick);
});

