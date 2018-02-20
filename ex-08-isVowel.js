/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/

function isVowel(letra){
	if (letra == 'a' || letra == 'e' || letra == 'i'  || letra == 'o' || letra == 'u' || letra == 'A' || letra == 'E' || letra =='I'  || letra == 'O' || letra == 'U'
		|| letra == 'y'){
		return true 

	}else{
		return false
	}

}




 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
