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
			//router must be here so we only change page if there was no error
			Router.go('postPage', {_id: id});
		})
	}
});

