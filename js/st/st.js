/* st.js */

var st = {
	log: function(s) {
		if (typeof(window.console) != "undefined") {
			console.log(s);
		}
	},

	init: function() {
		st.log("st.init");
		st.skills.init();
		st.traits.init();
	},
	
	init2: function() {
		st.log("st.init2");
		st.weaknesses.init();
	},
	
	init3: function() {
		st.log("st.init3");
		st.body.init();
	},
	
	init4: function() {
		st.log("st.init4");
		st.char.init();
		st.actions.init();
		st.render.init();
	}
};

$(document).ready(st.init);
