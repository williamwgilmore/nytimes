// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper Functions (in this case the only one is runQuery)
var helpers = {

  sendQuery: function(searchTerm, startYear, endYear) {

    console.log(searchTerm + ' ' + startYear + ' ' + endYear);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + 
      '?api-key=c9ea41f364074775a29143d207f9d55c&q=' + searchTerm +
      '&begin_date=' + startYear + '0000&end_date=' + endYear + '0000&page=10';
			// qsearchTerm,
			// 'begin_date': startYear,
			// 'end_date': endYear,
			// 'page': recordNumber";

    return axios.get(queryURL).then(function(response) {

      console.log('Return ' + response.data.response.docs);
      return response;
    //return axios.get('/query');
    })
  }
};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
