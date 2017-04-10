var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

	title: {
		type: String
	},
	url: {
		type: String
	},
	description: {
		type: String
	}
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;