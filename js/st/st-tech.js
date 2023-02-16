/* st-tech.js */

st.tech = {

	list: [],	

	init: function(callback) {
		st.log("st.tech.init");
		st.tech.request(callback);
	},
	
	request: function(callback) {
		st.log("st.tech.request");
		var url = "data/tech.csv?t=" + (new Date()).getTime();
		Papa.parse(url, {
			delimiter: "|",
			download: true,
			header: true,
			complete: function(d) {
				st.tech.response(d);
				setTimeout(callback, 10);
			},
			encoding: "UTF-8",
			quotes: true,
			quoteChar: '"'
		});
	},
	
	response: function(d) {
		st.log("st.tech.response");
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
