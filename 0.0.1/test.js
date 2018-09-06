console.log(

	the( 'paragraph-id' )        ,
	the( 'p' )                   ,
	the( 'p', 'article' )        ,
	the( 'paragraph-class' )     ,

	them( 'paragraph-class' )    ,
	them( 'p' )                  ,
	them( 'p.paragraph-class' )  ,

)

each( 'paragraph-class', function() {
	console.log( this )
} )

let letters = [ 'A', 'B', 'C' ]

each( letters, function( letter ) {
	console.log( letters )
} )

each( 10, function( i ) {
	console.log( i )
} )
