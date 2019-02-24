/* ######### Slot Graphics ######## */

const SLOTS_PER_REEL = 22;
// radius = Math.round( ( panelWidth / 2) / Math.tan( Math.PI / SLOTS_PER_REEL ) ); 
// current settings give a value of 149, rounded to 150
const REEL_RADIUS = 275;
// images
const imgArray = ['icon_0.png', 'icon_1.png', 'icon_2.png', 'icon_3.png', 'icon_4.png', 'icon_5.png', 'icon_6.png'];
const reel1 = [100,100,100,100,101,101,101,101,100,100,104,104,104,104,100,105,105,105,105,100,100,100,100,103,103,100,100,100,100,105,105,105,105,100,104,104,104,104,100,101,101,101,101,100,104,104,104,104,100,105,105,105,105,100,102,102,100,100,100,100,106,106,106,106];
const reel2 = [100,100,100,100,101,100,100,100,106,106,106,106,100,105,105,105,105,100,100,100,100,102,102,100,100,100,100,105,105,105,105,100,106,106,106,106,100,100,101,100,100,106,106,106,106,100,105,105,105,105,100,100,103,103,103,103,100,100,100,100,104,104,104,104];
const reel3 = [100,100,100,100,102,102,102,100,100,106,106,106,106,100,104,104,104,100,100,100,100,101,101,100,100,100,100,104,104,104,100,100,106,106,106,106,100,100,102,102,102,100,100,106,106,106,106,100,104,104,104,100,100,100,103,103,100,100,100,100,105,105,105,105];
const reelArray = [reel1, reel2, reel3];

function createSlots (ring) {
	
	var slotAngle = 360 / SLOTS_PER_REEL;

	var seed = getSeed();

	for (var n = 0; n < 3; n ++) {

		for (var i = 0; i < SLOTS_PER_REEL; i ++) {
			var slot = document.createElement('div');
			
			slot.className = 'slot';

			// compute and assign the transform for this slot
			var transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';

			slot.style.transform = transform;

			// First random image implementation
			// var randNum = Math.floor(Math.random() * imgArray.length);
			// var randImg = imgArray[randNum];
			// var content = $(slot).append('<img src="images/'+randImg+'">');

			// Proper seed implementation
			// setup the number to show inside the slots
			// the position is randomized to 
			var imgNum = 0;
			var reel = reelArray[n];
			var reelNum = reel[i];
			if (reelNum == 100) {
				imgNum = 0;
			}	else if (reelNum == 101) {
				imgNum = 1;
			}	else if (reelNum == 102) {
				imgNum = 2;
			}	else if (reelNum == 103) {
				imgNum = 3;
			}	else if (reelNum == 104) {
				imgNum = 4;
			}	else if (reelNum == 105) {
				imgNum = 5;
			}	else if (reelNum == 106) {
				imgNum = 6;
			}
			var slotImg = imgArray[imgNum]
			console.log('======')
			console.log('n: '+n)
			console.log('i: '+i)
			console.log('reel: '+reel)
			console.log('imgNum: '+imgNum)
			console.log('slotImg: '+slotImg)
			var content = $(slot).append('<img src="images/'+slotImg+'">');
			// var content = $(slot).append('<p>' + ((i)%22)+ '</p>');

			// add the poster to the row
			if (n == 0) {
				ring1.append(slot);
			}	else if (n == 1) {
				ring2.append(slot);
			}	else if (n == 2) {
				ring3.append(slot);
			}
		}
	}
}

function getSeed() {
	// generate random number smaller than 13 then floor it to settle between 0 and 12 inclusive
	return Math.floor(Math.random()*(21));
	// return Math.floor(Math.random()*(SLOTS_PER_REEL));
}

function spin(timer) {
	//var txt = 'seeds: ';
	for(var i = 1; i < 4; i ++) {
		// var oldSeed = -1;
		// /*
		// checking that the old seed from the previous iteration is not the same as the current iteration;
		// if this happens then the reel will not spin at all
		// */
		// var oldClass = $('#ring'+i).attr('class');
		// if(oldClass.length > 4) {
		// 	oldSeed = parseInt(oldClass.slice(10));
		// 	console.log("oldSeed: "+oldSeed);
		// }
		// var seed = getSeed();
		// while(oldSeed == seed) {
		// 	seed = getSeed();
		// }
		var seed1='0';
		var seed2='1';
		var seed3='15';

		$('#ring'+1)
			.css('animation','back-spin 1s, spin-' + seed1 + ' ' + (timer + i*0.5) + 's')
			.attr('class','ring spin-' + seed1);
		$('#ring'+2)
			.css('animation','back-spin 1s, spin-' + seed2 + ' ' + (timer + i*0.5) + 's')
			.attr('class','ring spin-' + seed2);
		$('#ring'+3)
			.css('animation','back-spin 1s, spin-' + seed3 + ' ' + (timer + i*0.5) + 's')
			.attr('class','ring spin-' + seed3);
	}

	console.log('=====');
}

$(document).ready(function() {

	// initiate slots 
 	createSlots($('#ring1'));
 	createSlots($('#ring2'));
 	createSlots($('#ring3'));

 	// hook start button
 	$('.play').on('click',function(){
 		var timer = 2;
 		spin(timer);
 	})

 	// hook xray checkbox
 	$('#xray').on('click',function(){
 		//var isChecked = $('#xray:checked');
 		var tilt = 'tiltout';
 		
    if($(this).is(':checked')) {
 			tilt = 'tiltin';
 			$('.slot').addClass('backface-on');
 			$('#rotate').css('animation',tilt + ' 2s 1');

			setTimeout(function(){
			  $('#rotate').toggleClass('tilted');
			},2000);
 		} else {
      tilt = 'tiltout';
 			$('#rotate').css({'animation':tilt + ' 2s 1'});

			setTimeout(function(){
	 			$('#rotate').toggleClass('tilted');
	 			$('.slot').removeClass('backface-on');
	 		},1900);
 		}
 	})

 	// hook perspective
 	$('#perspective').on('click',function(){
 		$('#stage').toggleClass('perspective-on perspective-off');
 	})	
 });
