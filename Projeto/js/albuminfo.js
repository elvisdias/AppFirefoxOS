var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});        
   
lastfm.album.getInfo({artist: localStorage.getItem("artcli"), album: localStorage.getItem("albcli")}, {
  success: function(data){
  
 var div = '<div>';
 var div2 = '<div>';
 var div3 = '<div>';
                     
                           
         div = "<div class='titlename'>" +  data.album.name + "</div>";
         div2 = "<div class='content'>" +  data.album.wiki.content + "</div>";
         for(i=0; i>25; i++){
         div3 += "<div>" +  data.album.tracks[i].name + "</div>";
        }
  $(div + div2 +'</div>').appendTo('#albuminfo');
  $(div3 + '</div>').appendTo('#tracks');
    $('.loading').fadeOut();

}, error: function(data){
  alert(data.error + " " + data.message);
}});

