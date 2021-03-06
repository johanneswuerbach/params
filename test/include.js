test('return a function', function() {
  var exclude = params.exclude('prop');
  exclude.should.be.a('function');
});

test('include only the listed properties', function() {
  var a = { hello: 'world' };
  var b = { hello: 'universe', speak: 'softly' };
  var c = { speak: 'loudly', language: 'en' };
  var exclude = params.include('hello', 'speak');
  var d = exclude(a, b, c);
  d.should.deep.equal({ hello: 'universe', speak: 'loudly' });
});

test('not modify the original objects', function() {
  var a = { hello: 'world' };
  var b = { hello: 'universe', speak: 'softly' };
  var c = { speak: 'loudly', language: 'en' };
  var exclude = params.include('hello', 'speak');
  var d = exclude(a, b, c);
  a.should.deep.equal({ hello: 'world' });
  b.should.deep.equal({ hello: 'universe' , speak: 'softly' });
  c.should.deep.equal({ speak: 'loudly' , language: 'en' });
});
