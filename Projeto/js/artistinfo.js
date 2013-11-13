var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});

lastfm.artist.getInfo({artist:'Nirvana'}, {success: function(data){
  
  var div = "<div>";
  
  div = "<div>" +  data.artist.name + "</div>";
 // div = "<div>" +  data.artist.info + "</div>";
 console.log(data.artist.getInfo);
 

 $(div + '</div>').appendTo('#artistinfo');
    $('.loading').fadeOut();


}, error: function(data){
  alert(data.error + " " + data.message);
}});





