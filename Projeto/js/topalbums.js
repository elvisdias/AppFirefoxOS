var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});

var gettop = new Array();
var realtop = new Array();

for (var i = 0; i < localStorage.length ; i++) {
    gettop[i] = JSON.parse(localStorage.getItem("artist0"));    
}
/*for(var i = 0; i < gettop.length; i++){
    if (gettop[i] != undefined && gettop[i] != null && gettop[i] != "NuLL") {
    realtop.push(gettop[i]);
    }
 }  */     

lastfm.artist.getTopAlbums({

    artist: localStorage.getItem(gettop), 
    limit: 10
    }, 
    {  success: function(data){
  
  var list = "<div>";  
    for (var i = 0; i < data.topalbums.album.length; i++) {                
      list += "<div onClick=location.href='albuminfo.html'>" +  data.topalbums.album[i].name +  "</div>";        
    }

  $(list + '</div>').appendTo('#topalbums');
  $('.loading').fadeOut();
   
}, error: function(data){
  alert(data.error + " " + data.message);
}});

