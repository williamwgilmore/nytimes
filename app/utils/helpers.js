// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var helpers = {

  sendQuery: function(searchTerm, startYear, endYear) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + 
      '?api-key=c9ea41f364074775a29143d207f9d55c&q=' + searchTerm +
      '&begin_date=' + startYear + '0000&end_date=' + endYear + '1231&page=0';

    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + 
    //   '?api-key=c9ea41f364074775a29143d207f9d55c&q=' + 'Syria' +
    //   '&begin_date=' + '2000' + '0000&end_date=' + '2001' + '1231&page=0';

    return axios.get(queryURL).then(function(response) {

      return response;
    })
  },

  getArticles: function() {
    return axios.get("/articles");
  },
  saveArticle: function(article) {
    return axios.post('/save', article);
  },
  removeArticle: function(_id){
    console.log(_id);
    return axios.post('/delete', {id: _id});
  }
    
};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
