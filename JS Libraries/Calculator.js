var solve = function(equation){
	for(var i = 0; i < equation.length; i++){
		if(!isNaN(equation[i])){
			equation[i] = Number(equation[i]);
		} else if(equation[i] == "PI"){
			equation[i] = Math.PI;
		};
	};
	var parenthesis = [];
	for(var i = 0; i < equation.length; i++){
		if(equation[i] == "FPAR" || equation[i] == "BPAR"){
			parenthesis.push(i);
		};
	};
	for(var z = 0; z < parenthesis.length; z=z+2){
		var parEquate = equation.slice(parenthesis[z]+1, parenthesis[z+1]);
		while(parEquate.length != 1){
			for(var i = 0; i < parEquate.length; i++){
				if(parEquate[i] == "EXP" || parEquate[i] == "SQRT"){
					if(parEquate[i] == "EXP"){
						var expRes = parEquate[i-1]**parEquate[i+1];
						parEquate.splice(i-1, 3, expRes);
					} else if(parEquate[i] == "SQRT"){
						var expRes = Math.sqrt(parEquate[i+1]);
						parEquate.splice(i, 2, expRes);
					};
				};
			};
			for(var i = 0; i < parEquate.length; i++){
				if(parEquate[i] == "MUL" || parEquate[i] == "DIV"){
					if(parEquate[i] == "MUL"){
						var mulRes = parEquate[i-1]*parEquate[i+1];
						parEquate.splice(i-1, 3, mulRes);
					} else if(parEquate[i] == "DIV"){
						var divRes = parEquate[i-1]/parEquate[i+1];
						parEquate.splice(i-1, 3, divRes);
					};
				};
			};
			for(var i = 0; i < parEquate.length; i++){
				if(parEquate[i] == "PLU" || parEquate[i] == "MIN"){
					if(parEquate[i] == "PLU"){
						var pluRes = parEquate[i-1]+parEquate[i+1];
						parEquate.splice(i-1, 3, pluRes);
					} else if(parEquate[i] == "MIN"){
						var minRes = parEquate[i-1]-parEquate[i+1];
						parEquate.splice(i-1, 3, minRes);
					};
				};
			};
		};
		var parRes = parEquate[0];
		equation.splice(z, equation.slice(parenthesis[z], parenthesis[z+1]+1).length, parRes);
	};
	while(equation.length != 1){
		for(var i = 0; i < equation.length; i++){
			if(equation[i] == "EXP" || equation[i] == "SQRT"){
				if(equation[i] == "EXP"){
					var expRes = equation[i-1]**equation[i+1];
					equation.splice(i-1, 3, expRes);
				} else if(equation[i] == "SQRT"){
					var expRes = Math.sqrt(equation[i+1]);
					equation.splice(i, 2, expRes);
				};
			};
		};
		for(var i = 0; i < equation.length; i++){
			if(equation[i] == "MUL" || equation[i] == "DIV"){
				if(equation[i] == "MUL"){
					var mulRes = equation[i-1]*equation[i+1];
					equation.splice(i-1, 3, mulRes);
				} else if(equation[i] == "DIV"){
					var divRes = equation[i-1]/equation[i+1];
					equation.splice(i-1, 3, divRes);
				};
			};
		};
		for(var i = 0; i < equation.length; i++){
			if(equation[i] == "PLU" || equation[i] == "MIN"){
				if(equation[i] == "PLU"){
					var pluRes = equation[i-1]+equation[i+1];
					equation.splice(i-1, 3, pluRes);
				} else if(equation[i] == "MIN"){
					var minRes = equation[i-1]-equation[i+1];
					equation.splice(i-1, 3, minRes);
				};
			};
		};
	};
	ans = equation[0];
	return ans;
};
