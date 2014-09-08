'use strict';
var easyTween = require('./tween');

describe('Easing', function(){
  it('Exists in global scope', function(){
    expect(easyTween).toBeDefined();
  });
});