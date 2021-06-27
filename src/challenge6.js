

function alphabetPosition( text ) {
	var positions = [];
	for ( var i = 0; i < text.length; i++ ) {
		var charCode = text.charCodeAt(i);
		if ( charCode >= 97 && charCode <= 122 ) {
			positions.push( charCode - 95 );
		} else if ( charCode >= 65 && charCode <= 90 ) {
			positions.push( charCode - 37 );
		}
	}
	return positions;
}


console.log(alphabetPosition('Ed'));