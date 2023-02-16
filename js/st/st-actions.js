/* st-actions.js */

st.actions = {
	init: function() {
		st.log("st.actions.init");
		$("a[data-action=choose-species]").on("click", st.actions.chooseSpecies);
	},
	
	chooseSpecies: function(e) {
		st.log("st.actions.chooseSpecies");
		var choice = $(e.target).data("choice");
		st.log("choice[" + choice + "]");
		if (choice == "android" || choice == "robot") {
			$("a[data-action=choose-species]").not("[data-choice=" + choice + "]").parent().hide();
			$("a[data-action=choose-species]").off("click").changeElementType("span");
			st.char.setSpecies(choice);
		} else {
			alert("Not yet available (species=" + choice + ").");
		}
	}
};

(function($) {
    $.fn.changeElementType = function(newType) {
        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        this.replaceWith(function() {
            return $("<" + newType + "/>").append($(this).contents());
        });
    };
})(jQuery);