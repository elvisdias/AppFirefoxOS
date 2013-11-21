var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});

lastfm.artist.getInfo({artist: localStorage.getItem("artcli")}, {
  success: function(data){
  
  var div = "<div>";
  var div2 = "<div>";
  //var div3 = "<div>";
  var div4 = "<div id='dive4'>";

  div = "<div class='titlename'>" +  data.artist.name + "</div>";
  
  var str =  data.artist.bio.content;
  var vazio = "";
  var res = str.replace(/User-contributed text is available under the Creative Commons By-SA License and may also be available under the GNU FDL./g, vazio);
  
  div2 = "<div class='content' id='cont'>" + res +  "</div>";
  //div3 = "<div>" +  "<img src='http://userserve-ak.last.fm/serve/252/78461.jpg'>" + "</div>";
  
  for (i=0; i<=4; i++){
  div4 += "<div class='similars' id='si"+i+"'>" +  data.artist.similar.artist[i].name + "</div>";
  }
  
  $(div + div2 + div4 + '</div>').appendTo('#artistinfo');
    $('.loading').fadeOut();


}, error: function(data){
  alert(data.error + " " + data.message);
}});

lastfm.artist.getTopAlbums({artist: localStorage.getItem("artcli"), limit: 10}, {
  success: function(data){
  
  var list = "<div class='albumss'>";  
  var ide;
    for (var i = 0; i < data.topalbums.album.length; i++) {
                
      list += "<div onClick=location.href='albuminfo.html' class='artalbum'>" +  data.topalbums.album[i].name + "</br>" + "<hr 'style= width:100%; color:#D3D3D3'>" + "</div>";
        
    }
 
  $(list + '</div>').appendTo('#artistinfo2');
  $('.loading').fadeOut();
    
    $(document).ready(function(){
      $('.artalbum').click(function(){
        localStorage.setItem("albcli", $(this).text());                    
       })
    })   
   
}, error: function(data){
  alert(data.error + " " + data.message);
}});

