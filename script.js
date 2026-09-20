
var search = document.getElementById("searchInput");

search.oninput = function()
{
    var categories = document.getElementsByClassName("category");

    for(var i = 0; i < categories.length; i++)
    {
        var cards = categories[i].getElementsByClassName("movie-card");
        var found = false;

        for(var j = 0; j < cards.length; j++)
        {
            var title = cards[j].getElementsByTagName("h3")[0].innerText;

            if(title.toLowerCase().includes(search.value.toLowerCase()))
            {
                cards[j].style.display = "";
                found = true;
            }
            else
            {
                cards[j].style.display = "none";
            }
        }

        if(found == true)
        {
            categories[i].style.display = "";
        }
        else
        {
            categories[i].style.display = "none";
        }
    }
};