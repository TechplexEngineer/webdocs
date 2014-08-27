// var postsData = [
// 	{
// 		title: 'Introducing Telescope',
// 		author: 'Sacha Greif',
// 		url: 'http/://sachagreif.com/introducing-telescope/',
// 		created: '8/18/92',
// 		updated: '8/18/14'
// 	},
// 	{
// 		title: 'Meteor',
// 		author: 'Tom Coleman',
// 		url: 'http://meteor.com',
// 		created: '8/18/92',
// 		updated: '8/18/14'
// 	},
// 	{
// 		title: 'The Meteor Book',
// 		author: 'Tom Coleman',
// 		url: 'http://themeteorbook.com',
// 		created: '8/18/92',
// 		updated: '8/18/14'
// 	}
// ];
Template.postsList.helpers({
	posts: function () {
		return Posts.find();
	}
});
