var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});

lastfm.artist.getInfo({artist:'Placebo'}, {success: function(data){
  
  var div = "<div>";
  var div2 = "<div>";
 // var div3 = "<div>";
  
  div = "<div class='titlename'>" +  data.artist.name + "</div>";
  div2 = "<div class='content'>" + '&nbsp;' + '&nbsp;' + data.artist.bio.content + "</div>";
  //div3 = "<div class='content'>" +  data.artist.image[size='medium'] + "</div>";
 
  $(div + div2 + '</div>').appendTo('#artistinfo');
    $('.loading').fadeOut();


}, error: function(data){
  alert(data.error + " " + data.message);
}});


