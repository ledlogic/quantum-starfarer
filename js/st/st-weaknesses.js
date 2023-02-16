/* st-weaknesses.js */

st.weaknesses = {

	list: [],	

	init: function(callback) {
		st.log("st.weaknesses.init");
		st.weaknesses.request(callback);
	},
	
	request: function(callback) {
		st.log("st.weaknesses.request");
		var url = "data/weaknesses.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			delimiter: "|",
			download: true,
			header: true,
			complete: function(d) {
				st.weaknesses.response(d);
				setTimeout(callback, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	response: function(d) {
		st.log("st.weaknesses.response");
		st.log(d);
		st.weaknesses.list = d.data;
	}
};
