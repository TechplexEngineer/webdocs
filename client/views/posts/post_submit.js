Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var postdata = {
			title: $(e.target).find('[name=title]').val(),
			brief: $(e.target).find('[name=brief]').val(),
			body: $(e.target).find('[name=body]').val()
		}

		Meteor.call('post', postdata, function(error, id) {
			if (error) {
				return alert(error.reason); //@todo it would be nice to show these using bootstrap alerts
			}
			//the books shows the router here
		})

		//post._id = Posts.insert(postdata);
		Router.go('postPage', postdata);
	}
});

