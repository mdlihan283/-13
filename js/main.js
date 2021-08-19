//typing......
var typed = new Typed(
  ".typing",{
  strings: ["Front End-Web Developer.","Freelancer.","Responsive Web Designer.","Developer."],
  typeSpeed:80,
  backSpeed:80,
  loop:true
});

//aos animation.....
AOS.init({
  offset:400,
  duration:1000
});

//skill bar code
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  $('.circlechart').circlechart(); // Initialization


 //gmaps.........
 function initMap(){
   var location={lat: -25.363, lag: 131.044};
   var map = new google.maps.Map(documen.getElementById("map"),{
     zoom:4,
     center:location
   });
   var marker = new google.maps.Marker({
     position : location,
     map : map
   });
 }




//start jquery okk
$(document).ready(function(){
 //navigation.......
 $(window).scroll(function(){
   if (this.scrollY > 100) {
     $('#topBar').addClass('menuBg');
   }else{
     $('#topBar').removeClass('menuBg');
   }
 });
 
 //scrollup icon
  $(window).scroll(function(){
   if (this.scrollY > 550) {
     $('.scrollTopIcon').fadeIn();
   }else{
     $('.scrollTopIcon').fadeOut();
   }
 });
 
 $('.scrollTopIcon').click(function(){
   $("html,body").animate({
   scrollTop:0
   },1000);
   return false;
 });
 setTimeout(function() {
   $('.loader').fadeToggle ();
 }, 3000);

     
 
});//jquery....