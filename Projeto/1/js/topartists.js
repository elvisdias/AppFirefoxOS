

$(document).ready(function(){
    alert("ola");
});
/*var cache = new LastFMCache();

// Create a LastFM object
var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});




jQuery("#but").click(function() {
    
    getTopArtists('reidoindie', 10);
    
});


function getTopArtists(user, limit) {
    // Get the top artists for this user
    lastfm.user.getTopArtists({
        user: user
        limit: limit
    },
    {
        success: function(data) {
            // Create HTML to append to the #listtop element :
            var onClick = '<div>';
            for (var i = 0; i < data.listtop.artist.length; i++) {
                // Append new element to "#listtop"
                Create += '<div>' + data.listtop.artist[i].name + '</div>';
            }
            jQuery(Create + '</div>').appendTo('#listtop');
        },
        error: function(data) {
            
            alert(data.error + " " + data.message);
        }
    });



