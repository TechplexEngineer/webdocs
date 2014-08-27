Posts = new Meteor.Collection('posts');

// Posts.allow({
// 	insert: function(userId, doc) {
// 		// only allow posting if you are logged in
// 		return !! userId;
// 	}
// });

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user();
		var postWithSameTitle = Posts.findOne({title: postAttributes.title});
		// ensure the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to login to post new stories");
		}
		// ensure the post has a title
		if (!postAttributes.title) {
			throw new Meteor.Error(422, 'Please fill in a title');
		}
		// check that there are no previous posts with the same link
		if (postAttributes.title && postWithSameTitle) {
			throw new Meteor.Error(302, 'A post with that title already exists', postWithSameTitle._id);
		}

		if (!postAttributes.brief) {
			throw new Meteor.Error(422, 'Please fill in a brief');
		}

		if (!postAttributes.body) {
			throw new Meteor.Error(422, 'Please fill in a brief');
		}

		// pick out the whitelisted keys
		var post = _.extend(_.pick(postAttributes, 'title', 'brief', 'body'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});
		var postId = Posts.insert(post);

		return postId;
	}
});

//@note: so the client can see all of the "server side" validation