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
 var div4 = "<div>";
 var isLarge = false; 

 var vazio = "";
     
     div = "<div>" +  data.album.name + "</div>";      
     document.getElementById('albim').src = data.album.image[3]['#text']; 

//se não tiver descrição:

      if (data.album.wiki) {
        var str =  data.album.wiki.content;
        res = data.album.wiki.content;
        var res = str.replace(/User-contributed text is available under the Creative Commons By-SA License and may also be available under the GNU FDL./g, vazio);     
        div2 = "<div class='content'>" +  res + "</div>";
        
        div4 = "<div class='more'>" +  "Show more" + "</div>";

      } else {
       div2 = "<div class='content' style='height:30px;'>" +  "No description for this album." + "</div>";       // ?
      }        

      for(i=0; i<data.album.tracks.track.length; i++){
        var i2= 1+i;
        div3 +=  "<div class='trackss'>" + "&nbsp" + "&nbsp" + i2+ "." + "&nbsp" + "&nbsp" + "&nbsp" + data.album.tracks.track[i].name + /*data.album.tracks.track[i].duration  + */"</div>"; 
        }
  $(div + '</div>').appendTo('#titlen');
  $(div2 + div4 + '</div>').appendTo('#albuminfo');

  $(div3 + '</div>').appendTo('#tracks');
    $('.loading').fadeOut();


      $(document).ready(function(){
         $(".more").hover(
         function(){
         $(this).css("color","black");},
          function(){
          $(this).css("color","#FFE1FF"); 
         });
        $(".more").click(function(){
        $(".content").animate({height: isLarge ? "250px" : $('.content').css("height", "auto")});
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

lastfm.album.getBuylinks({artist: localStorage.getItem("artcli"), album: localStorage.getItem("albcli"), country: "US"}, {
  success: function(data){
  var div = "<div id='link'>";              
  
    div += "<a href="+data.affiliations.physicals.affiliation[0].buyLink+">" + "<img src='pics/amazon.png'>" + "</a>";    

  $(div + '</div>').appendTo('#links');
  $('.loading').fadeOut();
  
}, error: function(data){
  alert(data.error + " " + data.message);
}});


