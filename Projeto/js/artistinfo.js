var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});

lastfm.artist.getInfo({artist: localStorage.getItem("artcli")}, {
  success: function(data){
  
  var div2 = "<div>";
  var div3 = "<div>";
  var div4 = "<div id='dive4'>";
  var div = "<div>" +  data.artist.name + "</div>";
  var isLarge = false; 
  var vazio = "";
  var dive;
  var aa=0;
  var nu;
  var id=10

  for (var i = 0; i < localStorage.length; i++){
    if (data.artist.name == localStorage.getItem("artist"+i)) {
      nu = i;
      aa++;
    } else {}
  }
  if (aa == 1) {
    dive = "<div id='mp'>" +  "<img src='pics/--.png'/>" + "<img src='pics/+.png' style='display:none'/>" +"</div>";
    $(dive).appendTo('.home');
    $(".home").click(function() {
    $(this).find('img').toggle();
    delete window.localStorage["artist"+nu];
});
  } else {
    dive = "<div id='mp'>" +  "<img src='pics/+.png'/>" + "<img src='pics/--.png' style='display:none'/>" + "</div>";
    $(dive).appendTo('.home');
    $(".home").click(function() {
    $(this).find('img').toggle();
    localStorage.setItem('artist'+id,data.artist.name);   
    localStorage.setItem("id", (parseInt(localStorage.getItem("id")))+1);  
    id++
});
  }  
    document.getElementById('artim').src = data.artist.image[3]['#text'];

  if (data.artist.bio) {
        var str =  data.artist.bio.content;
        res = data.artist.bio.content;
        var res = str.replace(/User-contributed text is available under the Creative Commons By-SA License and may also be available under the GNU FDL./g, vazio).replace("Read more about "+data.artist.name+" on Last.fm", vazio);     
        div2 = "<div class='content' id='cont'>" + res + "</div>";         
        div3 = "<div class='more'>" +  "Show more" + "</div>";

  } else {
        div2 = "<div class='content'>" +  "No description for this album." + "</div>";
        $('.content').css({"height":"auto"});      
   }    
  for (i=0; i<=4; i++){
  div4 += "<div class='similars'>" +  data.artist.similar.artist[i].name + "</div>";
  }
  
  $(div).appendTo('#titlen');
  $(div2 + div3 + '</div>').appendTo('#artistinfo');
  $(div4 + '</div>').appendTo('#similar');
    $('.loading').fadeOut();
    
  $(document).ready(function(){
      $('.similars').click(function(){
        location.href='artistinfo.html';
        localStorage.setItem("artcli", $(this).text());                    
       })
    })   


$(document).ready(function(){
  $(".more").hover(
    function(){
  $(this).css("color","black");},
    function(){
     $(this).css("color","#FFE1FF"); 
    });
  $(".more").click(function(){
    $("#cont").animate({height: isLarge ? "250px" : $('#cont').css("height", "auto") });    
    isLarge = !isLarge;    
    if(isLarge == false){
      $(".more").text("Show More")
    } else {
      $(".more").text("Show Less")
    }
  });
});


}, error: function(data){
  alert(data.error + " " + data.message);
}});

lastfm.artist.getTopAlbums({artist: localStorage.getItem("artcli"), limit: 6}, {
  success: function(data){
  
  var list = "<div class='albumss'>";  
    for (var i = 0; i < data.topalbums.album.length; i++) {                
      list += "<div onClick=location.href='albuminfo.html' class='artalbum'>" + "<img src="+data.topalbums.album[i].image[0]['#text']+">" + "<span>" + data.topalbums.album[i].name + "</span>" + "</div>";        
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

