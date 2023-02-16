/* st-locomotion.js */

st.locomotion = {

	list: [],	

	init: function() {
		st.log("st.locomotion.init");
		st.locomotion.loadLocomotion();
	},
	
	loadLocomotion: function() {
		st.log("st.locomotion.loadlocomotion");
		var url = "data/locomotion.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			download: true,
			header: true,
			complete: function(d) {
				st.locomotion.locomotionResponse(d);
				setTimeout(st.init5, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	locomotionResponse: function(d) {
		st.log("st.locomotion.locomotionResponse");
		st.log(d);
		st.locomotion.list = d.data;
	}
};
