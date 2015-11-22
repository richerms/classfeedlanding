var VotingController = function () {
	this.view = new VotingView();
	this.model = new VotingModel();
};

VotingController.prototype.init = function (poll) {

	var that = this;

	this.poll = poll;
	$("#content").load("voting.html", function () {


		that.view.init(poll);
		that.setEvents();
		
	});


};

VotingController.prototype.setEvents = function () {
	this.view.likeButton.click(this.likeButtonClicked.bind(this));
	this.view.deslikeButton.click(this.deslikeButtonClicked.bind(this));
	this.view.msgButton.click(this.msgButtonClicked.bind(this));
};

VotingController.prototype.likeButtonClicked = function () {

	var that = this;

	var callThanks = function () {
		that.view.end.css("display", "block");
	};

	var comment = this.view.message.val();

	var ajaxObject = {
		method: "POST",
		url: "http://10.25.0.241:3000/poll/" + this.poll.hash + "/vote",
		contentType: "application/json",
		data: JSON.stringify({"value": true, "comment": comment})
	};

	$.ajax(ajaxObject)
		.done(callThanks);
};

VotingController.prototype.deslikeButtonClicked = function () {

	var that = this;

	var callThanks = function () {
		that.view.end.css("display", "block");
	};

	var comment = this.view.message.val();

	var ajaxObject = {
		method: "POST",
		url: "http://10.25.0.241:3000/poll/" + this.poll.hash + "/vote",
		contentType: "application/json",
		data: JSON.stringify({"value": false, "comment": comment})
	};

	$.ajax(ajaxObject)
		.done(callThanks);
};

VotingController.prototype.msgButtonClicked = function () {

	var display = this.view.message.css("display");

	if(display == "none") {

		this.view.message.css("display", "block");
		
	} else {
		
		this.view.message.css("display", "none");

	}

};