import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  // search: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // }
  poopTest: function(){
  	return axios.post('/users/login');
  }
};