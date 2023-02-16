/* st-tech.js */

st.tech = {

	list: [],	

	init: function() {
		st.log("st.tech.init");
		st.tech.loadTech();
	},
	
	loadTech: function() {
		st.log("st.tech.loadTech");
		var url = "data/tech.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			delimiter: "|",
			download: true,
			header: true,
			complete: function(d) {
				st.tech.techResponse(d);
				setTimeout(st.init6, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	techResponse: function(d) {
		st.log("st.tech.techResponse");
		st.log(d);
		st.tech.list = d.data;
	},
	
	findTech: function(techKey) {
		st.log("st.tech.findTech");
		st.log("techKey[" + techKey + "]");
		var ret = _.find(st.tech.list, function(tech) { return tech.Tech == techKey; });
		st.log("ret[" + ret + "]");
		return ret;
	},
	
	findTechIndex: function(techKey) {
		st.log("st.tech.findTechIndex");
		st.log("techKey[" + techKey + "]");
		var ret = _.findIndex(st.tech.list, function(tech) { return tech.Tech == techKey; });
		st.log("ret[" + ret + "]");
		return ret;
	}
};
