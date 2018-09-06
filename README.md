# Simplify

Lightweight library for selecting, looping and ~~creating~~ HTML elements

## What can it do?

It's possible to retrieve one element by using, for example:

```
the( 'idName' )
the( 'className', 'parentSelector' )
the( 'tagName' )
the( 'button.active' )
```

You can also retrieve a node list by calling:

```
them( 'className' )
them( 'h1' )
them( 'section[data-type="graphic"]' )
```

Looping through node lists, arrays and even numbers is also easy:

```
each( 'className', function() {
  console.log( this )
} )

let letters = [ 'A', 'B', 'C' ]

each( letters, function( letter ) {
  console.log( letter )
} )

each( 10, function( i ) {
  console.log( i )
} )
```
