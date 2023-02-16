/* st-arms.js */

st.arms = {

	list: [],	

	init: function(callback) {
		st.log("st.arms.init");
		st.arms.request(callback);
	},
	
	request: function(callback) {
		st.log("st.arms.request");
		var url = "data/arms.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function(d) {
				st.arms.response(d);
				setTimeout(callback, 10);
			},
			encoding: "UTF-8"
		});
	},
	
	response: function(d) {
		st.log("st.arms.response");
		st.log(d);
		st.arms.list = d.data;
	}
};
