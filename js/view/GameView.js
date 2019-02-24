/** GameView Object constructor
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 */ 
var GameView = function (container, model) {
	// container är alltså "exampleView"-div:en in index där allt ligger
	
	/*
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data.
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * GameView.
	 */
	this.window = container.find(".container-fluid");	// the whole window

	this.slotContainer = container.find("#rotate");	// slot machine container
	this.reel1 = container.find("ring1");
	this.reel2 = container.find("ring2");
	this.reel3 = container.find("ring3");

	this.betForm = container.find("#bet");	// the whole form
	this.betForm.html(addEventListener('submit', function(event){event.preventDefault();})); //Makes the page not refreshing on .onsubmit form

	this.currentBet = container.find("#currentBet");	// current bet text

	this.betNum = container.find("#betNum");		// the input field (not #bet)
	this.betInput = container.find("#submitBtn"); 	// the submit button (not #bet)

	this.playBtn = container.find("#play");	// play button

	this.popup = container.find("#popup");		// winner popup div
	this.closePopup = container.find(".close")	// popup close button
	
	/* interactivity */
	this.currentBet.html(model.getBet());
	model.addObserver(this);

	// körs igång av notifyObservers i modelen, >> GameView.update()
	this.update = function(arg){
		console.log("*View updates*");
		this.currentBet.html(model.getBet());
	}
	
}
 
