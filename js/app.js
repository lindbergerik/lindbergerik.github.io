$(function() {
	//We instantiate our model
	var model = new GameModel();
	
	// And create the instance of GameView
	var gameView = new GameView($("#gameView"), model);

	// controller
	var gameController = new GameController(gameView, model);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see gameView.js).
	 */

});