/* st.js */

var st = {
	log: function(s) {
		if (typeof(window.console) != "undefined") {
			console.log(s);
		}
	},

	err: function(s) {
		if (typeof(window.console) != "undefined") {
			console.error(s);
		}
	},

	init: function() {
		st.log("st.init");
		st.skills.init(st.init2);
	},
	
	init2: function() {
		st.log("st.init2");
		st.traits.init(st.init3);
	},
	
	init3: function() {
		st.log("st.init3");
		st.weaknesses.init(st.init4);
	},
	
	init4: function() {
		st.log("st.init4");
		st.body.init(st.init5);
	},
	
	init5: function() {
		st.log("st.init5");
		st.locomotion.init(st.init6);
	},

	init6: function() {
		st.log("st.init6");
		st.tech.init(st.init7);
	},
	
	init7: function() {
		st.log("st.init7");
		st.arms.init(st.init8);
	},
	
	init8: function() {
		st.log("st.init7");
		st.brains.init(st.init9);
	},	

	init9: function() {
		st.log("st.init9");
		st.char.init();
		st.actions.init();
		st.render.init();
	}
};

$(document).ready(st.init);
