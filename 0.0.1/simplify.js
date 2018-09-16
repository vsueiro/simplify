// start polyfills

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

// end polyfills

function the( thing, parent ) {

  let item, list
  
  if ( typeof parent === 'string' )
    parent = the( parent )
  else
    parent = parent || document

  item = document.getElementById( thing )
  if ( item !== null ) return item

  list = parent.getElementsByClassName( thing )
  if ( list.length ) return list[ 0 ]

  list = parent.getElementsByTagName( thing )
  if ( list.length ) return list[ 0 ]

  item = parent.querySelector( thing )
  if ( item !== null ) return item

}

function them( thing, parent ) {

  let list
  
  if ( typeof parent === 'string' )
    parent = the( parent )
  else
    parent = parent || document

  list = parent.getElementsByClassName( thing )
  if ( list.length ) return list

  list = parent.getElementsByTagName( thing )
  if ( list.length ) return list

  list = parent.querySelectorAll( thing )
  if ( list.length ) return list

}

function each( thing, callback, parent ) {

  let list, isArray, retrieved, total
  
  if ( typeof parent === 'string' )
    parent = the( parent )
  else
    parent = parent || document
  
  if ( typeof thing === 'string' )
    retrieved = them( thing, parent )
  
  list = retrieved ? retrieved : thing

  isArray = list.constructor === Array ? true : false

  total = typeof list === 'number' ? list : list.length
  
  for ( let i = 0 ; i < total ; i++ ) {

    if ( isArray ) callback.call( list[ i ], list[ i ], i )
    else           callback.call( list[ i ], i )

  }
}

function create( thing ) {
  
  let element
  
  if ( thing.startsWith( '.') ) {
    let attribute = thing.replace( '.', '' )
    element = document.createElement( 'div' )
    element.classList.add( attribute )
    return element
  }
    
  if ( thing.startsWith( '#') ) {
    let attribute = thing.replace( '#', '' )
    element = document.createElement( 'div' )
    element.id = attribute
    return element
  }
      
  element = document.createElement( thing )
  return element
  
}
