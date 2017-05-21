function the( thing, parent ) {
  var item, list;

  parent = parent || document;

  item = document.getElementById( thing );
  if ( item !== null ) return item

  list = parent.getElementsByClassName( thing );
  if ( list.length ) return list[ 0 ]

  list = parent.getElementsByTagName( thing );
  if ( list.length ) return list[ 0 ]

  item = parent.querySelector( thing );
  if ( item !== null ) return item

	return null
}

function them( thing, parent ) {
  var list;
  
  parent = parent || document;

  list = parent.getElementsByClassName( thing );
  if ( list.length ) return list

  list = parent.getElementsByTagName( thing );
  if ( list.length ) return list

  list = parent.querySelectorAll( thing );
  if ( list.length ) return list

	return null
}

function each( thing, callback, parent ) {

  var list, isArray, get, total;

  parent = parent || document;
  
  get = function( thing ) {
    
    if ( typeof thing === 'string' ) {

      list = parent.getElementsByClassName( thing );
      if ( list.length ) return list

      list = parent.getElementsByTagName( thing );
      if ( list.length ) return list

      list = parent.querySelectorAll( thing );
      if ( list.length ) return list

      return false
    }

    return thing
  }

  list = get( thing );

  if ( !list ) return false

	isArray = list.constructor === Array ? true : false;

  total = typeof list === 'number' ? list : list.length;
  
	for ( var i = 0 ; i < total ; i++ ) {

		if ( isArray ) callback.call( list[ i ], list[ i ], i )
		else           callback.call( list[ i ], i )

	}

  return null
}
