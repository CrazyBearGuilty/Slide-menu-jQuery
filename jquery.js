$('.content').load('main.html');
$('.main').css('border-left', '1px solid #A04D00');
$('.main').css('background-color', 'none');



 function menujs() {
  $('.manutopsanimate').animate({position: 'absolute', left: '0%'},500);
  $('.menuafterbefore').animate({position: 'absolute', left: '0%'},0);
  $('.menuafterbefore').animate({opacity: '1'},500);


$('#munucontent').show();
$('#bottommenuicon').show();

$('#menuicon').css('float', 'left'  );

 }
 function menuclosed() {
   $('.manutopsanimate').animate({position: 'absolute', left: '-100%'},300);
   $('.menuafterbefore').animate({position: 'absolute', left: '-100%', opacity: '0'},300);


 $('#menuicon').css('float', 'left'  );
 }

function modalmailvk() {
  $('.modal').animate({position: 'fixed', top: '0vh', opacity: '0'},0);
$('.modal').animate({opacity: '1'},400);
   }


function modalcloseds() {
  $('.modal').animate({position: 'fixed', top: '-100vh'},0);
$('.modal').animate({opacity: '1'},400);
$('.modalvk').animate({position: 'absolute', top: '-100vh'},400);
$('.modal').animate({opacity: '0'},400);
}


var blockloading = '<div class="loaderwidth">  </div> <div class="loaderwidth2">  </div><div class="loaderwidth3">  </div>';

$('.profile').on('click', function() {
  //$('.content').html('<div class="preloadercontent" style="background-color:white;opacity:0;margin:0 auto; width:1%; height:1vh;"><div class="preloadermainst"></div></div>');
//$('.preloadercontent').animate({width: "100%", height: "100vh", opacity: "1"},7000);
$('.content').before(blockloading);
$('.loaderwidth').css({position: "fixed", top: "100vh"});
$('.loaderwidth2').css({position: "fixed", top: "120vh"});
$('.loaderwidth3').css({position: "fixed", top: "140vh"});

$('.loaderwidth').animate({position: "fixed", top: "0vh"},600);
$('.loaderwidth2').animate({position: "fixed", top: "0vh"},1000);
$('.loaderwidth3').animate({position: "fixed", top: "0vh"},1800);


$('.loaderwidth').animate({position: "fixed", top: "-100vh"},600);
$('.loaderwidth2').animate({position: "fixed", top: "-100vh"},900);
$('.loaderwidth3').animate({position: "fixed", top: "-100vh"},900);

$('.loaderwidth').css({position: "fixed", top: "100vh"});
$('.loaderwidth2').css({position: "fixed", top: "100vh"});
$('.loaderwidth3').css({position: "fixed", top: "100vh"});

$('title').text('Profile CrazyBearGuilty Алексей Лоскутов');

setTimeout(function(){$('.content').load('includeprofile.html')},700);



$('.manutopsanimate').animate({position: 'absolute', left: '-100%'},300);
$('.menuafterbefore').animate({position: 'absolute', left: '-100%', opacity: '0'},300);
$('.gallery').css('border-left', 'none');
 $('.profile').css('border-left', '1px solid #A04D00');
 $('.help').css('border-left', 'none');
 $('.main').css('border-left', 'none');
 $('.music').css('border-left', 'none');
 $('.portfolio').css('border-left', 'none');

});





$('.main').on('click', function() {
  $('.content').before(blockloading);
  $('.loaderwidth').css({position: "fixed", top: "100vh"});
  $('.loaderwidth2').css({position: "fixed", top: "120vh"});
  $('.loaderwidth3').css({position: "fixed", top: "140vh"});

$('.loaderwidth').animate({position: "fixed", top: "0vh"},400);
$('.loaderwidth2').animate({position: "fixed", top: "0vh"},800);
$('.loaderwidth3').animate({position: "fixed", top: "0vh"},1600);


$('.loaderwidth').animate({position: "fixed", top: "-100vh"},400);
$('.loaderwidth2').animate({position: "fixed", top: "-100vh"},800);
$('.loaderwidth3').animate({position: "fixed", top: "-100vh"},700);

  $('.loaderwidth').css({position: "fixed", top: "100vh"});
  $('.loaderwidth2').css({position: "fixed", top: "100vh"});
  $('.loaderwidth3').css({position: "fixed", top: "100vh"});

setTimeout(function(){$('.content').load('main.html')},400);



$('title').text('CrazyBearGuilty Алексей Лоскутов');
$('.manutopsanimate').animate({position: 'absolute', left: '-100%'},300);
$('.menuafterbefore').animate({position: 'absolute', left: '-100%', opacity: '0'},300);
$('.gallery').css('border-left', 'none');
 $('.profile').css('border-left', 'none');
 $('.help').css('border-left', 'none');
 $('.main').css('border-left', '1px solid #A04D00');
 $('.music').css('border-left', 'none');
 $('.portfolio').css('border-left', 'none');

});



$('.music').on('click', function() {
  $('.content').before(blockloading);
  $('.loaderwidth').css({position: "fixed", top: "100vh"});
  $('.loaderwidth2').css({position: "fixed", top: "120vh"});
  $('.loaderwidth3').css({position: "fixed", top: "140vh"});

  $('.loaderwidth').animate({position: "fixed", top: "0vh"},400);
  $('.loaderwidth2').animate({position: "fixed", top: "0vh"},800);
  $('.loaderwidth3').animate({position: "fixed", top: "0vh"},1600);


  $('.loaderwidth').animate({position: "fixed", top: "-100vh"},400);
  $('.loaderwidth2').animate({position: "fixed", top: "-100vh"},800);
  $('.loaderwidth3').animate({position: "fixed", top: "-100vh"},700);

  $('.loaderwidth').css({position: "fixed", top: "100vh"});
  $('.loaderwidth2').css({position: "fixed", top: "100vh"});
  $('.loaderwidth3').css({position: "fixed", top: "100vh"});

setTimeout(function(){$('.content').load('music.html')},700);



$('title').text('Musick CrazyBearGuilty Алексей Лоскутов');
$('.manutopsanimate').animate({position: 'absolute', left: '-100%'},300);
$('.menuafterbefore').animate({position: 'absolute', left: '-100%', opacity: '0'},300);
$('.gallery').css('border-left', 'none');
$('.portfolio').css('border-left', 'none');

 $('.profile').css('border-left', 'none');
 $('.help').css('border-left', 'none');
 $('.main').css('border-left', 'none');
 $('.music').css('border-left', '1px solid #A04D00');
});

$('.gallery').on('click', function() {
  $('.content').before(blockloading);
  $('.loaderwidth').css({position: "fixed", top: "100vh"});
  $('.loaderwidth2').css({position: "fixed", top: "120vh"});
  $('.loaderwidth3').css({position: "fixed", top: "140vh"});

$('.loaderwidth').animate({position: "fixed", top: "0vh"},600);
$('.loaderwidth2').animate({position: "fixed", top: "0vh"},1000);
$('.loaderwidth3').animate({position: "fixed", top: "0vh"},1800);


$('.loaderwidth').animate({position: "fixed", top: "-100vh"},600);
$('.loaderwidth2').animate({position: "fixed", top: "-100vh"},900);
$('.loaderwidth3').animate({position: "fixed", top: "-100vh"},900);

  $('.loaderwidth').css({position: "fixed", top: "100vh"});
  $('.loaderwidth2').css({position: "fixed", top: "100vh"});
  $('.loaderwidth3').css({position: "fixed", top: "100vh"});

setTimeout(function(){$('.content').load('gallery.html')},700);



$('title').text('Gallery CrazyBearGuilty Алексей Лоскутов');
$('.manutopsanimate').animate({position: 'absolute', left: '-100%'},300);
$('.menuafterbefore').animate({position: 'absolute', left: '-100%', opacity: '0'},300);
$('.gallery').css('border-left', '1px solid #A04D00');
 $('.profile').css('border-left', 'none');
 $('.portfolio').css('border-left', 'none');

 $('.help').css('border-left', 'none');
 $('.main').css('border-left', 'none');
 $('.music').css('border-left', 'none');

});

$('.help').on('click', function() {
  //$('.content').html('<div class="preloadercontent" style="background-color:white;opacity:0;margin:0 auto; width:1%; height:1vh;"><div class="preloadermainst"></div></div>');
//$('.preloadercontent').animate({width: "100%", height: "100vh", opacity: "1"},7000);
$('.content').before(blockloading);
$('.loaderwidth').css({position: "fixed", top: "100vh"});
$('.loaderwidth2').css({position: "fixed", top: "120vh"});
$('.loaderwidth3').css({position: "fixed", top: "140vh"});

$('.loaderwidth').animate({position: "fixed", top: "0vh"},600);
$('.loaderwidth2').animate({position: "fixed", top: "0vh"},1000);
$('.loaderwidth3').animate({position: "fixed", top: "0vh"},1800);


$('.loaderwidth').animate({position: "fixed", top: "-100vh"},600);
$('.loaderwidth2').animate({position: "fixed", top: "-100vh"},900);
$('.loaderwidth3').animate({position: "fixed", top: "-100vh"},900);

$('.loaderwidth').css({position: "fixed", top: "100vh"});
$('.loaderwidth2').css({position: "fixed", top: "100vh"});
$('.loaderwidth3').css({position: "fixed", top: "100vh"});


setTimeout(function(){$('.content').load('help.html')},700);




$('.manutopsanimate').animate({position: 'absolute', left: '-100%'},300);
$('.menuafterbefore').animate({position: 'absolute', left: '-100%', opacity: '0'},300);
$('.gallery').css('border-left', 'none');
 $('.profile').css('border-left', 'none');
 $('.help').css('border-left', '1px solid #A04D00');
 $('.main').css('border-left', 'none');
 $('.music').css('border-left', 'none');
});

$('.portfolio').on('click', function() {
  //$('.content').html('<div class="preloadercontent" style="background-color:white;opacity:0;margin:0 auto; width:1%; height:1vh;"><div class="preloadermainst"></div></div>');
//$('.preloadercontent').animate({width: "100%", height: "100vh", opacity: "1"},7000);
$('.content').before(blockloading);
$('.loaderwidth').css({position: "fixed", top: "100vh"});
$('.loaderwidth2').css({position: "fixed", top: "120vh"});
$('.loaderwidth3').css({position: "fixed", top: "140vh"});

$('.loaderwidth').animate({position: "fixed", top: "0vh"},400);
$('.loaderwidth2').animate({position: "fixed", top: "0vh"},800);
$('.loaderwidth3').animate({position: "fixed", top: "0vh"},1600);


$('.loaderwidth').animate({position: "fixed", top: "-100vh"},400);
$('.loaderwidth2').animate({position: "fixed", top: "-100vh"},800);
$('.loaderwidth3').animate({position: "fixed", top: "-100vh"},700);

$('.loaderwidth').css({position: "fixed", top: "100vh"});
$('.loaderwidth2').css({position: "fixed", top: "100vh"});
$('.loaderwidth3').css({position: "fixed", top: "100vh"});

$('title').text('Portfolio CrazyBearGuilty Алексей Лоскутов');

setTimeout(function(){$('.content').load('portfolio.html')},700);




$('.manutopsanimate').animate({position: 'absolute', left: '-100%'},300);
$('.menuafterbefore').animate({position: 'absolute', left: '-100%', opacity: '0'},300);
$('.gallery').css('border-left', 'none');
 $('.profile').css('border-left', 'none');
 $('.help').css('border-left', 'none');
 $('.portfolio').css('border-left', '1px solid #A04D00');
 $('.main').css('border-left', 'none');
 $('.music').css('border-left', 'none');
});

function closedimg() {
   window.close();

}
function preventSelection(element){
  var preventSelection = false;

  function addHandler(element, event, handler){
    if (element.attachEvent)
      element.attachEvent('on' + event, handler);
    else
      if (element.addEventListener)
        element.addEventListener(event, handler, false);
  }
  function removeSelection(){
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection && document.selection.clear)
      document.selection.clear();
  }
  function killCtrlA(event){
    var event = event || window.event;
    var sender = event.target || event.srcElement;

    if (sender.tagName.match(/INPUT|TEXTAREA/i))
      return;

    var key = event.keyCode || event.which;
    if (event.ctrlKey && key == 'A'.charCodeAt(0))  // 'A'.charCodeAt(0) можно заменить на 65
    {
      removeSelection();

      if (event.preventDefault)
        event.preventDefault();
      else
        event.returnValue = false;
    }
  }

  // не даем выделять текст мышкой
  addHandler(element, 'mousemove', function(){
    if(preventSelection)
      removeSelection();
  });
  addHandler(element, 'mousedown', function(event){
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
  });

  // борем dblclick
  // если вешать функцию не на событие dblclick, можно избежать
  // временное выделение текста в некоторых браузерах
  addHandler(element, 'mouseup', function(){
    if (preventSelection)
      removeSelection();
    preventSelection = false;
  });

  // борем ctrl+A
  // скорей всего это и не надо, к тому же есть подозрение
  // что в случае все же такой необходимости функцию нужно
  // вешать один раз и на document, а не на элемент
  addHandler(element, 'keydown', killCtrlA);
  addHandler(element, 'keyup', killCtrlA);
}
preventSelection(document);



jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow.addClass('visible');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}
});
