//GameModel Object constructor
var GameModel = function() {
 
	/* ######### Variables/Objects ######## */
	// General
	var bet = 0;

	// Slot machine
	var SLOTS_PER_REEL = 22;
	var REEL_RADIUS = 275;

	var imgArray = ['icon_0.png', 'icon_1.png', 'icon_2.png', 'icon_3.png', 'icon_4.png', 'icon_5.png', 'icon_6.png'];
	var reel1 = [100,100,100,100,101,101,101,101,100,100,104,104,104,104,100,105,105,105,105,100,100,100,100,103,103,100,100,100,100,105,105,105,105,100,104,104,104,104,100,101,101,101,101,100,104,104,104,104,100,105,105,105,105,100,102,102,100,100,100,100,106,106,106,106];
	var reel2 = [100,100,100,100,101,100,100,100,106,106,106,106,100,105,105,105,105,100,100,100,100,102,102,100,100,100,100,105,105,105,105,100,106,106,106,106,100,100,101,100,100,106,106,106,106,100,105,105,105,105,100,100,103,103,103,103,100,100,100,100,104,104,104,104];
	var reel3 = [100,100,100,100,102,102,102,100,100,106,106,106,106,100,104,104,104,100,100,100,100,101,101,100,100,100,100,104,104,104,100,100,106,106,106,106,100,100,102,102,102,100,100,106,106,106,106,100,104,104,104,100,100,100,103,103,100,100,100,100,105,105,105,105];
	var reelArray = [reel1, reel2, reel3];


	/* ######### General Methods ######## */

	this.setBet = function(num) {
		bet = num + bet;
		notifyObservers();
	}

	this.getBet = function() {
		return bet;
	}

	/* ######### Slot Machine Methods ######## */
	this.createSlots = function(ring, seed) {
		
		var slotAngle = 360 / SLOTS_PER_REEL;

		// var seed = getSeed();

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

	this.getSeed = function() {
		// generate random number smaller than 13 then floor it to settle between 0 and 12 inclusive
		return Math.floor(Math.random()*(21));
		// return Math.floor(Math.random()*(SLOTS_PER_REEL));
	}

	this.spin = function(timer) {
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

			// Winner slots
			// $('.slot').css('background-color', 'red');
			// winSlot1 = $('#ring'+1)[0];
			// winSlot1.css('background-color', 'red');
			// okej du måste ju selecta bara den vinnande slotsen, men jag tror de redan gör det? (de skickar ju ut nummer?)
		}

		console.log('=====');
	}

	/* ######### Observers, for interactivity ######## */
	var observers = [];
	this.addObserver = function(observer) {
		observers.push(observer);
	}
	// en allmän "notifyObservers" funktion, som inte är this. GLÖM INTE ATT CALLA DEN VID ALL INTERAKTION
	var notifyObservers = function(arg) {
		for(var i=0; i<observers.length; i++) {
			observers[i].update(arg);
		}
	}

}
