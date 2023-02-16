/* st-render.js */

st.render = {
	init: function() {
		st.log("render.init");
	},
	render: function() {
		st.log("render skills");
		st.render.renderReset();
		st.render.renderStats();
		st.render.renderSkills();
		st.render.renderTraits();		
		$(".st-page").removeClass("st-initial-state");
	},
	renderReset: function() {
		$(".st-page-ft").html("");
	},
	renderStats: function() {
		st.log("st.render.renderStats");

		var t = [];
			
		// skills
		t.push("<table class=\"st-cost\"><tbody>");

		var r = [];

		var species= st.char.stats.species;
		r.push("<tr>");
		r.push("<th>Species:</th>");
		r.push("<td>" + species + "</td>");
		r.push("</tr>");		

		var cost= st.char.stats.cost;
		r.push("<tr>");
		r.push("<th>Cost:</th>");
		r.push("<td>" + cost.toLocaleString() + " Cr</td>");
		r.push("</tr>");		
	
		var endurance= st.char.stats.endurance;
		r.push("<tr>");
		r.push("<th>Endurance:</th>");
		r.push("<td>" + endurance + "</td>");
		r.push("</tr>");		

		var lifeblood = st.char.stats.lifeblood;
		r.push("<tr>");
		r.push("<th>Lifeblood:</th>");
		r.push("<td>" + lifeblood + "</td>");
		r.push("</tr>");		

		t.push(r.join(""));
		t.push("</tbody></table>");

		$(".st-page-ft").append(t.join(""));
	},
	renderSkills: function() {
		st.log("st.render.renderSkills");
		var t = [];
			
		// skills
		t.push("<table class=\"st-skills\"><tbody>");
		t.push("<tr><th colspan=\"" + _.size(st.char.stats.skills) + "\" class=\"st-skills-desc\">Skills</th></tr>");
		
		var r = [];
		_.map(st.char.stats.skills, function(val, key) {
			r.push("<tr>");
			r.push("<td>" + key + "</td>");
			r.push("<td>" + val + "</td>");
			r.push("</tr>");
		});
		t.push(r.join(""));
		t.push("</tbody></table>");

		$(".st-page-ft").append(t.join(""));
	},
	renderTraits: function() {
		st.log("st.render.renderTraits");
		var t = [];
			
		// skills
		t.push("<table class=\"st-traits\"><tbody>");
		t.push("<tr><th colspan=\"" + _.size(st.char.stats.traits) + "\" class=\"st-traits-desc\">Traits</th></tr>");
		
		var r = [];
		_.map(st.char.stats.traits, function(val, key) {
			r.push("<tr>");
			r.push("<td>" + val.Trait + "</td>");
			r.push("<td>" + val.Description + "</td>");
			r.push("</tr>");
		});
		t.push(r.join(""));
		t.push("</tbody></table>");

		$(".st-page-ft").append(t.join(""));
	}
};