/* st-math.js */

st.math = {
	init: function() {
		st.log("st.math.init");
	},
	die: function(qty, die, mod) {
		var ret = mod;
		for (var i = 0; i < qty; i++) {
			ret += st.math.dieN(die);
		}
		return ret;
	},
	dieN: function(die) {
		var ret = st.math.dieN0(die) + 1;
		return ret;
	},
	dieN0: function(die) {
		return Math.floor(Math.random() * die);
	},
	dieArray: function(array) {
		return Math.floor(Math.random() * array.length);
	},
	selArray: function(array) {
		st.log("st.math.selArray");
		var index = st.math.dieArray(array);
		st.log("index[" + index + "]");
		return array[index]; 
	},
	minDieN: function(die) {
		var d20a = st.math.dieN(die);
		var d20b = st.math.dieN(die);
		var d20 = Math.min(d20a, d20b);
		return d20;
	},
	maxDieN: function(die) {
		var d20a = st.math.dieN(die);
		var d20b = st.math.dieN(die);
		var d20 = Math.max(d20a, d20b);
		return d20;
	},
	probMet: function(ptest) {
		st.log("st.math.probMet");
		st.log("ptest[" + ptest + "]");
		var p = Math.random();
		st.log("p[" + p + "]");
		var ret = (p<=ptest);
		st.log("ret[" + ret + "]");
		return ret;
	}
};