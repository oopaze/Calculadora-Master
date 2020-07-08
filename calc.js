function clearText(){
	textBox.value = "";
}

function inputNum(x){
	textBox = document.getElementById("textBox");
	textBox.value += x;
}

function results(){
	textBox.value = eval(textBox.value);
}

/*
var numeros = [];
var resultado = 0;
var proxSinal = "+";

function resultDigitado(conta){
	var num = "";
	var lastnum = 0;
	for(var i of conta){
		if (i != "-" && i != "+"){
			num += i;

		} else if (i == "-"){
			numeros.push(parseInt(proxSinal + num));
			proxSinal = "-";
			num = "";

		} else if (i == "+"){
			numeros.push(parseInt(proxSinal + num))
			proxSinal = "+";
			num = "";
		}
		lastnum = i;
	}
	lastnum = num
	num = "";
	return lastnum;
}


function result(){
	if (numeros.length < 1){
		textBox.value = resultDigitado(textBox.value)
	}
	numeros.push(parseFloat(proxSinal + textBox.value))
	textBox.value = "";
	numeros.forEach(function(item, indice, array){
			resultado += item;
		}
	);


	alert(resultado)
	resultado = 0;
	numeros = [];
	proxSinal = "+"
	textBox.value = "";
}
*/
