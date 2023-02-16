/* st-traits.js */

st.traits = {

	list: [],	

	init: function(callback) {
		st.log("st.traits.init");
		st.traits.request(callback);
	},
	
	request: function(callback) {
		st.log("st.traits.request");
		var url = "data/traits.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			delimiter: "|",
			download: true,
			header: true,
			complete: function(d) {
				st.traits.response(d);
				setTimeout(callback, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	response: function(d) {
		st.log("st.traits.response");
		st.log(d);
		st.traits.list = d.data;
	}
};
