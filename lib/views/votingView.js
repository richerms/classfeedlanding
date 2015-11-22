var VotingView = function () {

	var that = this;

};

VotingView.prototype.init = function (poll) {
	this.likeButton = $("#likebtn");
	this.deslikeButton = $("#deslikebtn");
	this.msgButton = $("#msgbtn");
	this.message = $("#voteMsg");

	this.teacher = $("#teacher");
	this.description = $("#description");
	this.subject = $("#subject");
	this.end = $("#end");

	this.teacher.text(poll.owner);
	this.description.text(poll.description);
	this.subject.text(poll.name);
}