var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});

var artist = [];
var tam = localStorage.length -3;

$(document).ready(function(){
    for (var i = 0; i <= tam; i++){
       getTopAlbums(localStorage.getItem("artist"+i), 7);          
}}) 

function getTopAlbums(artist, limit){
    lastfm.artist.getTopAlbums({
        artist: artist,
        limit: limit
    },
    {
     success: function(data){  
    /*var list = "<div>";  

    for (var i = 0; i < tam; i++) {                
    
    list += "<div class='diven'>" + "<div>" + "<img src='"+ data.topalbums.album[i].image[0]['#text']+"'>" + "</div>" + "     " + "<span>" + data.topalbums.album[i].name + "</span>" + "</div>";            
        
      }*/
        artist = [data.topalbums.album[0].name, data.topalbums.album[1].name, data.topalbums.album[2].name, data.topalbums.album[3].name, data.topalbums.album[4].name, data.topalbums.album[5].name,data.topalbums.album[6].name];
        localStorage.setItem("arr", artist);
        
  //$(list + '</div>').appendTo('#topalbums');
  //$('.loading').fadeOut();

for (var i = 0; i <= tam; i++){    
for (var e = 0; e < 5; e++){

lastfm.album.getInfo({artist: localStorage.getItem("artist"+i), album: artist[e]}, {
  success: function(data){

    var list = "<div>";  
   var datee = data.album.releasedate; 
   var y = "2013";
   var a = new RegExp('\\b' + y + '\\b');

    if(a.test(datee)) {
    
    list += "<div class='diven'>" + "<div>" + "<img src='"+ data.album.image[0]['#text']+"'>" + "</div>" + "<span>" + data.album.name + "</span>" + "</div>";        
  
    $(list + '</div>').appendTo('#topalbums');
    $('.loading').fadeOut();

    localStorage.setItem(data.album.name, data.album.artist); 

    } else {}
     $(document).ready(function(){
      $('.diven').click(function(){
        location.href='albuminfo.html';
        localStorage.setItem("albcli", $(this).text());    
        var abb = localStorage.getItem("albcli");
        var e = localStorage.getItem(abb);
        localStorage.setItem("artcli",e);               
       })
    })   

  console.log(a.test(datee));
  console.log(datee);
}, error: function(data){
  alert(data.error + " " + data.message);  
}});
  }}

}, error: function(data){
  alert(data.error + " " + data.message);
}});
}
/*
var pf = new Array();
$(document).ready(function(){
    for (var i = 0; i <= tam; i++){
       for (var e = 0; e < 5; e++){
        pf = localStorage.getItem("arr").split(',');
        getInfo(localStorage.getItem("artist"+i), pf[e]); 
         }
}});

function getInfo(artist, album){
    lastfm.album.getInfo({
        artist: artist,
        album: album
    },
    {  success: function(data){
   var list = "<div>";  
   var datee = data.album.releasedate; 
   var y = "2013";
   var a = new RegExp('\\b' + y + '\\b');

    if(a.test(datee)) {
    
    list += "<div class='diven'>" + "<div>" + "<img src='"+ data.album.image[0]['#text']+"'>" + "</div>" + "     " + "<span>" + data.album.name + "</span>" + "</div>";        
  
    $(list + '</div>').appendTo('#topalbums');
    $('.loading').fadeOut();
    } else {}

  console.log(a.test(datee));
  console.log(datee);
}, error: function(data){
  alert(data.error + " " + data.message);  
}});
  }*/

 

  

$(document).ready(function(){
  $('.menu').hide();
  $(function() {
   $('.set').toggle(function() {
    $('.menu').show();
    $('body').css('overflow','hidden');

    $('#topalbums').click(function() {
    $('.menu').hide();
  });
   }, function() {
    $('.menu').hide(); 
    $('body').css('overflow','auto');
   });
  });
});
$(document).ready(function(){
  $('.menu').hide();
  $(function() {
   $('#').toggle(function() {
    $('.menu').show();
    $('body').css('overflow','hidden');
   }, function() {
    $('.menu').hide(); 
    $('body').css('overflow','auto');
   });
  });
$("#edit").click(function(){
    location.href='artists.html';
  })

  $("#edit").hover(function(){
  $(this).css("background-color", "#EEE9E9");
  $(this).css("color","black");
}, 
   function(){
     $(this).css("color","black"); 
     $(this).css("background-color","white");
    });

  
  $("#logout").hover(function(){
  $(this).css("background-color","#EEE9E9");
  $(this).css("color","black");
  },
  function(){
     $(this).css("color","black"); 
     $(this).css("background-color","white");
    });  

  $("#logout").click(function(){
     if (confirm('Are you sure you want to log out?')) {
  location.href='main.html';
  localStorage.clear();
} else {}
  })
});