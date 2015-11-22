var HomeController = function () {
	this.view = new HomeView();
	this.model = new HomeModel(); 
	this.votingController = new VotingController();

	this.init();
};

HomeController.prototype.init = function () {
	this.view.goButton.click(this.goButtonClicked.bind(this));
	this.view.navAbout.click(this.navButtonClicked.bind(this));
	this.view.navHome.click(this.navButtonClicked.bind(this));
	this.view.navContact.click(this.navButtonClicked.bind(this));
	this.view.navTeacher.click(this.navButtonClicked.bind(this));
};

HomeController.prototype.goButtonClicked = function () {

	var hash = this.view.hashInput[0].value;

	var changeContent = function (data) {
		if(data.hash) {
			this.goToVoteScreen(data);
		} else {

		}
	};

	var ajaxObject = {
		method: "GET",
		url: "http://localhost:3000/poll/" + hash,
		dataType: "json"
	};

	$.ajax(ajaxObject)
		.done(changeContent.bind(this));
};

HomeController.prototype.navButtonClicked = function (ev, handler) {
	var clicked = $("#" + ev.currentTarget.id);

	console.log(this);

	this.view.navAbout.removeClass("active");
	this.view.navHome.removeClass("active");
	this.view.navContact.removeClass("active");
	this.view.navTeacher.removeClass("active");

	clicked.addClass("active");
};

HomeController.prototype.goToVoteScreen = function (poll) {

	console.log(this);

	this.votingController.init(poll);

	this.changeContentToVote();

};

HomeController.prototype.changeContentToVote = function () {

	this.view.content = this.votingController.view.content;

	console.log(this.votingController.view.content);

};