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
		st.char.init();
		st.actions.init();
	}
};

$(document).ready(st.init);
