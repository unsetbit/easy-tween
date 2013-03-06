Tweening for any numerical JavaScript object property.

It's early in development, here's some unofficial documentation:

## Main function
Assuming you add `./dist/tween.js` in to a web application, you get a global createTween function (there's also `./dist/tween-module.js` which behaves as a nodejs module).

`createTween(easingFunc, obj, prop, targetValue, duration, callback)`
* easingFunc - Any function in createTween.easing
* obj - the object whose property we want to tween
* prop - the string property name
* targetValue - the finalValue to tween to
* duration - how many milliseconds the tween should take (by default it's 0, meaning no tweening)
* callback - optional callback function

This function returns an object with `resume` and `pause` methods, which do exactly what you would think they would do.

## Helpers
`createTween.[EASING_FUNCTION_NAME]` are functions which behave just as createTween, except without the easingFunc property.

`createTween.easing` contains all of the easing functions available, these can be used standalone for other purposes too, they're [simple tweening functions](http://gizma.com/easing/)

## Easing Functions
(these are in createTween.easing)
* linear
* quadraticIn
* quadraticOut
* quadraticInOut
* cubicIn
* cubicOut
* cubicInOut
* sinusoidalIn
* sinusoidalOut
* sinusoidalInOut
* exponentialIn
* exponentialInOut

## Example
In this example we'll start a 10 second tween, pausing for 3 seconds after 5 seconds.
```javascript
var tween = createTween(createTween.easing.cubicIn, myObject, "verticalWind", 100, 10 * 1000);
// This is the same as
var tween = createTween.cubicIn(myObject, "verticalWind", 100, 10 * 1000);

setTimeout(function(){
    tween.pause();

    setTimeout(function(){
        tween.resume();
    }, 5 * 1000);
}, 3 * 1000);
