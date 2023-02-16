/* st-weaknesses.js */

st.weaknesses = {

	list: [],	

	init: function() {
		st.log("st.weaknesses.init");
		st.weaknesses.loadWeaknesses();
	},
	
	loadWeaknesses: function() {
		st.log("st.weaknesses.loadWeaknesses");
		var url = "data/weaknesses.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			delimiter: "|",
			download: true,
			header: true,
			complete: function(d) {
				st.weaknesses.weaknessesResponse(d);
				setTimeout(st.init3, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	weaknessesResponse: function(d) {
		st.log("st.weaknesses.weaknessesResponse");
		st.log(d);
		st.weaknesses.list = d.data;
	}
};
