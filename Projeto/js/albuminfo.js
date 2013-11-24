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
 var div3 = "<div id='track'>";
                     
     div = "<div class='titlename'>" +  data.album.name + "</div>";

      var str =  data.album.wiki.content;
      var vazio = "";
      var res = str.replace(/User-contributed text is available under the Creative Commons By-SA License and may also be available under the GNU FDL./g, vazio);

     div2 = "<div class='content'>" +  res + "</div>";
        
      for(i=0; i<data.album.tracks.track.length; i++){
        var i2= 1+i;
        div3 += "<div class='trackss'>" + "&nbsp" + i2+ "." + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + data.album.tracks.track[i].name + /* data.album.tracks.track[i].duration +*/ "</div>";
        }
  $(div + '</div>').appendTo('#titlen');
  $(div2 +'</div>').appendTo('#albuminfo');

  $(div3 + '</div>').appendTo('#tracks');
    $('.loading').fadeOut();

}, error: function(data){
  alert(data.error + " " + data.message);
}});

/*lastfm.album.getBuylinks({artist: localStorage.getItem("artcli"), album: localStorage.getItem("albcli"), country: "US"}, {
  success: function(data){
  var div = "<div>";              
  
    div += "<div class='content'>" + data.affiliations.downloads.affiliation.supplierIcon + "</div>";    

  $(div + '</div>').appendTo('#links');
  $('.loading').fadeOut();
  
}, error: function(data){
  alert(data.error + " " + data.message);
}});

*/
