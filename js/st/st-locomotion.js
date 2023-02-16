/* st-locomotion.js */

st.locomotion = {

	list: [],	

	init: function(callback) {
		st.log("st.locomotion.init");
		st.locomotion.request(callback);
	},
	
	request: function(callback) {
		st.log("st.locomotion.request");
		var url = "data/locomotion.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function(d) {
				st.locomotion.response(d);
				setTimeout(callback, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	response: function(d) {
		st.log("st.locomotion.response");
		st.log(d);
		st.locomotion.list = d.data;
	},
	
	findLocomotion: function(locomotionKey) {
		st.log("st.locomotion.findLocomotion");
		st.log("locomotionKey[" + locomotionKey + "]");
		var ret = _.find(st.locomotion.list, function (locomotion) { return locomotion.Locomotion == locomotionKey; });
		st.log("ret[" + ret + "]");
		return ret;
	}
};
