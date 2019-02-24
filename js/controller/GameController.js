//GameController Object constructor
var GameController = function(view, model) {

	view.betInput.click(function(){
		console.log("Input value: ", view.betNum[0].value);
		model.setBet(view.betNum[0].value);
		//console.log(view.betNum); 	//our number input, we use this instead of the whole form (get the value by taking [0] for some reason)
		//console.log(view.betForm);	//(the whole form)
	});

	// initiate slots 
	view.slotContainer.ready(function(){
		var seed = model.getSeed();
	 	model.createSlots(view.reel1, seed);
	 	model.createSlots(view.reel2, seed);
	 	model.createSlots(view.reel3, seed);
	});

	// play button
	view.playBtn.click(function()
	{
		var timer = 2;
 		model.spin(timer);
 		// launch popup
 		view.popup.css('display', 'block');
	});

	// Popup Controls
	view.closePopup.click(function(){
		view.popup.css('display', 'none');
	});
	// view.window.click(function(){
	// 	view.popup.css('display', 'none');
	// });
}