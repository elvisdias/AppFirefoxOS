var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});


jQuery(document).ready(function(){

    getTopArtists('', );    
       
});


function getTopArtists(user, limit){
   
    lastfm.user.getTopArtists({
        user: user,
        limit: limit
    },
    {
        success: function(data) {
            // Create HTML to append to the #topartists element :
            var list = '<ol>';
            for (var i = 0; i < data.search.artist.length; i++) {
                // Append new element to "#topartists"
                list += "<div style='background-color: white; height: 30px; width: 350; border-top: 1px solid gray; position: relative; top: -20px; left: -40px; '>" + data.search.artist[i].name + "<img src='pics/-.png' style='position: absolute; left: 260px; top: 10px;'>"  + "</div>";
                }


            jQuery(list + '</ol>').appendTo('#topartists');
        },
        error: function(data) {
            // Show error message.
            alert(data.error + " " + data.message);
        }
    });