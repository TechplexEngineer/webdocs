//Use this file to add data to the database

if (Posts.find().count() === 0) {

	Posts.insert({
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		brief: 'this is a brief description',
		created: '8/18/92',
		updated: '8/18/14'
	});
	Posts.insert({
		title: 'Meteor',
		author: 'Tom Coleman',
		brief: 'this is a brief description1',
		created: '8/18/92',
		updated: '8/18/14'
	});
	Posts.insert({
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		brief: 'this is a brief description2',
		created: '8/18/92',
		updated: '8/18/14'
	});
}
