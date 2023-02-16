/* st-render.js */

st.render = {
	init: function() {
		st.log("render.init");
	},
	render: function() {
		st.log("render skills");
		st.render.renderReset();
		st.render.renderStats();
		st.render.renderBody();		
		st.render.renderLocomotion();		
		st.render.renderSkills();
		st.render.renderTraits();		
		st.render.renderWeakness();		
		$(".st-page").removeClass("st-initial-state");
	},
	renderReset: function() {
		$(".st-page-ft").html("");
	},
	renderStats: function() {
		st.log("st.render.renderStats");

		var t = [];
			
		// stats
		t.push("<table class=\"st-cost\"><tbody>");
		t.push("<tr><th colspan=\"2\" class=\"st-cost-desc\">Core</th></tr>");

		var r = [];

		var species= st.char.stats.species;
		r.push("<tr>");
		r.push("<th>Species:</th>");
		r.push("<td>" + species + "</td>");
		r.push("</tr>");		
		
		var tech= st.char.stats.tech;
		var description = st.tech.findTech(tech).Description;
		r.push("<tr>");
		r.push("<th>Tech:</th>");
		r.push("<td class=\"st-tech\">" + tech + ":<br/>" + description + "</td>");
		r.push("</tr>");		

		var cost= st.char.stats.cost;
		r.push("<tr>");
		r.push("<th>Cost:</th>");
		r.push("<td>" + cost.toLocaleString() + " [Cr]</td>");
		r.push("</tr>");		
	
		var endurance= st.char.stats.endurance;
		var reliability = st.char.stats.reliability;
		r.push("<tr>");
		r.push("<th>Endurance/Reliability/Stamina:</th>");
		r.push("<td>" + (endurance + reliability) + "</td>");
		r.push("</tr>");	

		var durability = st.char.stats.durability;
		var lifeblood = st.char.stats.lifeblood;
		r.push("<tr>");
		r.push("<th>Durability/Lifeblood:</th>");
		r.push("<td>" + (durability + lifeblood) + "</td>");
		r.push("</tr>");		

		t.push(r.join(""));
		t.push("</tbody></table>");

		$(".st-page-ft").append(t.join(""));
	},
	renderSkills: function() {
		st.log("st.render.renderSkills");
		var t = [];
			
		t.push("<table class=\"st-skills\"><tbody>");
		t.push("<tr><th colspan=\"" + _.size(st.char.stats.skills) + "\" class=\"st-skills-desc\">Skills</th></tr>");
		
		var r = [];
		_.map(st.char.stats.skills, function(val, key) {
			r.push("<tr>");
			r.push("<th>" + key + "</th>");
			r.push("<td>" + val + "</td>");
			r.push("</tr>");
		});
		t.push(r.join(""));
		t.push("</tbody></table>");

		$(".st-page-ft").append(t.join(""));
	},
	renderTraits: function() {
		st.log("st.render.renderTraits");
		var size = _.size(st.char.stats.traits);
		
		if (size) {
			var t = [];
			t.push("<table class=\"st-traits\"><tbody>");
			t.push("<tr><th colspan=\"" + size + "\" class=\"st-traits-desc\">Traits</th></tr>");
			
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
	},
	renderWeakness: function() {
		st.log("st.render.renderWeakness");
		var t = [];
			
		var weakness = st.char.stats.weakness;
		if (weakness) {
			t.push("<table class=\"st-weakness\"><tbody>");
			t.push("<tr><th colspan=\"2\" class=\"st-weakness-desc\">Weakness</th></tr>");
	
			var r = [];
			r.push("<tr>");
			r.push("<td>" + weakness.Weakness + "</td>");
			r.push("<td class=\"st-weakness-desc\">" + weakness.Description + "</td>");
			r.push("</tr>");
			
			t.push(r.join(""));
			t.push("</tbody></table>");
		}

		$(".st-page-ft").append(t.join(""));
	},
	renderBody: function() {
		st.log("st.render.renderBody");
		var body = st.char.stats.body;
		var size = _.size(body);
		
		if (body) {
			var t = [];
			t.push("<table class=\"st-body\"><tbody>");
			t.push("<tr><th colspan=\"" + size + "\" class=\"st-body-desc\">Body</th></tr>");
			
			var r = [];
			_.map(body, function(val, key) {
				r.push("<tr>");
				r.push("<th>" + key + "</th>");
				if (key == "Cost") {
					val = parseInt(val, 10).toLocaleString() + " [Cr]";
				}
				r.push("<td>" + val + "</td>");
				r.push("</tr>");
			});
			t.push(r.join(""));
			t.push("</tbody></table>");
	
			$(".st-page-ft").append(t.join(""));
		}
	},
	renderLocomotion: function() {
		st.log("st.render.renderLocomotion");
		var locomotion = st.char.stats.locomotion;
		var size = _.size(locomotion);
		
		// traits
		if (locomotion) {
			var t = [];
			t.push("<table class=\"st-locomotion\"><tbody>");
			t.push("<tr><th colspan=\"" + size + "\" class=\"st-locomotion-desc\">Locomotion</th></tr>");
			
			var r = [];
			_.map(locomotion, function(val, key) {
				var rate = "";
				if (key == "Clear" || key == "Rough") {
					rate = " [m/round]";
				}
				r.push("<tr>");
				r.push("<th>" + key + "</th>");
				r.push("<td>" + val + rate + "</td>");
				r.push("</tr>");
			});
			t.push(r.join(""));
			t.push("</tbody></table>");
	
			$(".st-page-ft").append(t.join(""));
		}
	}
	
};