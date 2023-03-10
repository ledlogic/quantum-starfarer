/* st-body.js */

st.body = {

	list: [],	

	init: function(callback) {
		st.log("st.body.init");
		st.body.request(callback);
	},
	
	request: function(callback) {
		st.log("st.body.request");
		var url = "data/body.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function(d) {
				st.body.response(d);
				setTimeout(callback, 10);
			},
			encoding: "UTF-8"
		});
	},
	
	response: function(d) {
		st.log("st.body.response");
		st.log(d);
		st.body.list = d.data;
	}
};
