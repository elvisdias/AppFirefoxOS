var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});


$(document).ready(function(){
    
    getTopArtists(localStorage.getItem("key"), 10);    
       
});

function getTopArtists(user, limit){
   
    lastfm.user.getTopArtists({
        user: user,
        limit: limit
    },
    {
        success: function(data) {
            
            var list = '<ol>';
            for (var i = 0; i < data.topartists.artist.length; i++) {
                
                list += "<div style='background-color: white; border-radius: 4px;  height: 30px; width: 290; border-top: 6px solid #CD2626; position: relative; top: -20px; left: -40px; '>" + data.topartists.artist[i].name + "<img src='pics/-.png' style='position: absolute; left: 260px; top: 10px;'>"  + "</div>";
                }


            jQuery(list + '</ol>').appendTo('#topartists');
        },
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}
 $(document).ready(function(){
$("img").click(function() {
$(this).fadeTo("fast", 0.5);
});
});