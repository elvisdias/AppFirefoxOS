var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});


$(document).ready(function(){
    for (var i = 0; i < 10; i++) {
    getTopAlbums(localStorage.getItem("artist"+i), 10);    
}
       
});

function getTopAlbums(artist, limit){
   
    lastfm.artist.getTopAlbums({
        artist: artist,
        limit: limit
    },
    {
        success: function(data) {
            //var img =  0;
            //var div = 0;
            var list = '<ol>';
            for (var i = 0; i < data.topalbums.album.length; i++) {
                
                list += "<div class='dive2' onClick=location.href='album.html';click()>" +  data.topalbums.album[i].name + "</div>";

                }
         jQuery(list + '</ol>').appendTo('#topalbums');
         $('.loading').fadeOut();
        },
        
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}

function click() {
    
    $(document).ready(function(){        
       $('.dive2').click(function(){

        localStorage.setItem('album', this.data.topalbums.album.name);
       })

    });

}

$(document).ready(function(){
$('#home').hide();
/*$('#house').click(function(){
    $('#home').fadeIn();
    $("html, body").css({'width':'100%', 'height':'100%', 'overflow':'hidden'});
})*/

});

