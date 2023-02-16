/* st-traits.js */

st.traits = {

	list: [],	

	init: function() {
		st.log("st.traits.init");
		st.traits.loadTraits();
	},
	
	loadTraits: function() {
		st.log("st.traits.loadTraits");
		Papa.parse("data/traits.csv", {
			delimiter: "|",
			download: true,
			header: true,
			complete: function(d) {
				st.traits.traitsResponse(d);
				setTimeout(st.init2, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	traitsResponse: function(d) {
		st.log("st.traits.traitsResponse");
		st.log(d);
		st.traits.list = d.data;
	}
};
