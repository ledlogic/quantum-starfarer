/* st-body.js */

st.body = {

	list: [],	

	init: function() {
		st.log("st.body.init");
		st.body.loadBody();
	},
	
	loadBody: function() {
		st.log("st.body.loadBody");
		var url = "data/body.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function(d) {
				st.body.bodyResponse(d);
				setTimeout(st.init4, 10);
			},
			encoding: "UTF-8"
		});
	},
	
	bodyResponse: function(d) {
		st.log("st.body.bodyResponse");
		st.log(d);
		st.body.list = d.data;
	}
};
