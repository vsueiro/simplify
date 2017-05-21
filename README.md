# Simplify

Lightweight library for selecting, looping and creating HTML elements

## What can it do?

It's possible to retrieve one element by using, for example:

```
the( 'idName' )
the( 'className', parentNode )
the( 'tagName' )
the( 'button.active' )
```

You can also retrieve a node list by calling:

```
them( 'className' )
them( 'h1' )
them( 'section[data-type="graphic"]' )
```

Looping through arrays, node lists and even numbers is also easy:

```
each( nodeList, function() {
  console.log( this )
} )

each( names, function( name ) {
  console.log( name )
} )

each( 10, function( i ) {
  console.log( i )
} )
```
