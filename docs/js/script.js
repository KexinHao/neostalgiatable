var urls = [
  "img/flags/pauldegroot.jpg",
  "img/flags/henrikdeman.jpg",
  "img/flags/wimschermerhorn.jpg",
  "img/flags/jaapburger.jpg",
  "img/flags/jkmgevers.jpg",
  "img/flags/koosvorrink.jpg",
  "img/flags/louisdevisser.jpg",
  "img/flags/theovandriesten.jpg",
  "img/flags/willybrandt.jpg",
  "img/flags/siccomansholt.jpg",
  "img/flags/gerbenwagenaar.jpg",
  "img/flags/gerardveringa.jpg",
  "img/flags/jlanser.jpg"
]

var rawurls = [
  "https://disseminate.objectrepository.org/file/level2/10622/30051000586377", //de paul_de_groot
  "https://disseminate.objectrepository.org/file/level3/10622/30051000812864", //Plan_de_Man
  "https://disseminate.objectrepository.org/file/level3/10622/30051000804333", //Schermerhorn
  "https://disseminate.objectrepository.org/file/level3/10622/30051000812658", //Burger
  "https://disseminate.objectrepository.org/file/level3/10622/30051001331740", //Gevers
  "https://disseminate.objectrepository.org/file/level3/10622/30051002757307", //koosvorrink
  "https://disseminate.objectrepository.org/file/level2/10622/30051001359535", //louis de visseer
  "https://disseminate.objectrepository.org/file/level3/10622/30051002713250", //theovandriesten
  "https://disseminate.objectrepository.org/file/level3/10622/30051000576584", //willybrandt
  "https://disseminate.objectrepository.org/file/level2/10622/30051000484136", //Mansholt
  "https://disseminate.objectrepository.org/file/level2/10622/30051001509105", //wangenaar
  "https://disseminate.objectrepository.org/file/level3/10622/30051000799707", //Veringa
  "https://disseminate.objectrepository.org/file/level3/10622/30051001319976" //lanser
]

var names = [
  "Paul de Groot", //de paul_de_groot
  "Henrik de Man", //Plan_de_Man
  "Wim Schermerhorn", //Schermerhorn
  "Jaap Burger", //Burger
  "J.K.M Gevers", //Gevers
  "Koos Vorrink", //koosvorrink
  "Louis de Visser", //louis de visseer
  "Theo van Driesten", //theovandriesten
  "Willy Brandt", //willybrandt
  "Sicco Mansholt", //Mansholt
  "Gerben Wagenaar", //wangenaar
  "Gerard Veringa", //Veringa
  "J. Lanser" //lanser
]

var parties = [
  "img/assets/cpn.png",
  "img/assets/bwp-pob.png",
  "img/assets/pvda.png",
  "img/assets/sdap.png",
  "img/assets/xxx.png",
  "img/assets/ajc.png",
  "img/assets/ci.png",
  "img/assets/wfdy.png",
  "img/assets/spd.png",
  "img/assets/pvda.png",
  "img/assets/cpn.png",
  "img/assets/cda.png",
  "img/assets/cnv.png"
]


showRandomImage();
//
// $("#vs").on("click",function(){
//   showRandomImage();
//   // showRandomImage2();
// });

var t = setInterval(showRandomImage,5000);
function showRandomImage() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#flag1").attr("src",new_url);
  $("#rawpic1").attr("src", rawurls[index]);
  $(".title1").text(names[index]);
  $(".logo1").attr("src",parties[index]);
}

showRandomImage2();
var t = setInterval(showRandomImage2,5000);
function showRandomImage2() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#flag2").attr("src",new_url);
  $("#rawpic2").attr("src", rawurls[index]);
  $(".title2").text(names[index]);
  $(".logo2").attr("src",parties[index]);
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

$(function(){
  $('#flag1').click(function(){
      $('#rawpic1').toggle();
      });
  $('#flag2').click(function(){
      $('#rawpic2').toggle();
      });
// $(function(){
   // $('.title').click(function(){
   //     $('#image' + $(this).attr('id')).show();
   //     $('.imagebox > div').not('#image' + $(this).attr('id')).hide();
   //     $('#text' + $(this).attr('id')).show();
   //     $('.text > div').not('#text' + $(this).attr('id')).hide();
   //     window.location.hash = $(this).attr('id');
   //    });
   })
