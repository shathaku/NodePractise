let openParanthesis = [];
let closingParanthesis = [];
let mapping = {};

function paranthesisPosition(sentence, position) {
	let openParanthesis = [];
	let closingParanthesis = [];
	let mapping = {};
	sentence.split("").forEach((elem, i) => {
		if(elem == "("){ 
			openParanthesis.push(i);
		}
		if(elem == ")"){ 
			mapping[openParanthesis.pop()] = i;
		}
	})
	console.log(mapping)
	//console.log(openParanthesis.indexOf(position));
	console.log(mapping[position]);
	
}

function matchingParanthesis(sentence) {
	let openParanthesis = [];
	let flag = true;
	let mapping = {};
	sentence.split("").forEach((elem, i) => {
		if(elem == "(" || elem == "{" || elem == "["){ 
			openParanthesis.push(i);
		}
		if(elem == ")" || elem == "}" || elem == "]"){ 
			mapping[openParanthesis.pop()] = i;
		}
	})
	console.log(mapping);
	for(let i in mapping) {
		if(sentence.charAt(i) === "(" & sentence.charAt(mapping[i]) != ")") {
			flag = false
		}
		if(sentence.charAt(i) === "{" & sentence.charAt(mapping[i]) != "}") {
			flag = false
		}
		if(sentence.charAt(i) === "[" & sentence.charAt(mapping[i]) != "]") {
			flag = false
		}
		//console.log(flag)
	}		
	return flag
}

//paranthesisPosition("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing", 10);
console.log(matchingParanthesis("{ [ () [] ] }"));