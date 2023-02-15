/* st-actions.js */

st.actions = {
	init: function() {
		st.log("st.actions.init");
		$("a[data-action=choose-char]").on("click", st.actions.chooseChar);
	},
	
	chooseChar: function(e) {
		st.log("st.actions.chooseChar");
		var choice = $(e.target).data("choice");
		st.log(choice);
		$("a[data-action=choose-char]").not("[data-choice=" + choice + "]").parent().hide();
	}
};
