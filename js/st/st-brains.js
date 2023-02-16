/* st-brains.js */

st.brains = {

	list: [],	

	init: function(callback) {
		st.log("st.brains.init");
		st.brains.request(callback);
	},
	
	request: function(callback) {
		st.log("st.brains.request");
		var url = "data/brains.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function(d) {
				st.brains.response(d);
				setTimeout(callback, 10);
			},
			encoding: "UTF-8"
		});
	},
	
	response: function(d) {
		st.log("st.brains.response");
		st.log(d);
		st.brains.list = d.data;
	}
};
