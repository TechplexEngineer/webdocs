Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			title: $(e.target).find('[name=title]').val(),
			author: this.userId,
			brief: $(e.target).find('[name=brief]').val(),
			body: $(e.target).find('[name=body]').val()
		}

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}
});

