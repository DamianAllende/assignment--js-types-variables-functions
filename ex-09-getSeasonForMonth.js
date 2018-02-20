/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false``
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.ç

 marzo abril y mayo  spring 
 junio julio y agosto summer
 septiembre octubre novienbre  fall
 diciembre enero febrero winter

 *
 **/

 


function getSeasonForMonth(number){

	if(typeof number === "number"){

		if (number >= 1 && number <= 12) {

			if (number == 12 || number == 1 || number == 2) {
		 		return "winter"
		 	}else if (number == 3 || number == 4 || number == 5){
		 		return "spring"
		 	}else if (number == 6 || number == 7 || number == 8) {
		 		return "summer"
		 	}else if (number == 9 || number == 10 || number == 11){
		 		return "fall"
		 	}
		}else{
			return false
		}


	}else{
		
		return false
	}


 	

 }
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
