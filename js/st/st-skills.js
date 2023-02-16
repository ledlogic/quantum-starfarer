/* st-skills.js */

st.skills = {

	list: [
		"combat",
		"knowledge",
		"physical",
		"social",
		"space",
		"stealth",
		"technical"
	],		

	init: function(callback) {
		st.log("st.skills.init");
		setTimeout(callback, 10);
	}
};
