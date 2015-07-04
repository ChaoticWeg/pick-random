var pick = require('./pick.js');

var arr   = [ 'one', 'two', 'three', 'four', 'five' ];
var times = 25000;

var meta = {};
for (var i = 0; i < times; ++i)
{
  var picked = pick(arr);
  if (!meta.hasOwnProperty(picked))
    meta[picked] = 0;

  meta[picked] += 1;
}

for (var obj in meta)
{
  var occ = meta[obj]
  var pct = ((occ / times) * 100).toFixed(2);
  console.log('%s: %d (%d\%)', obj, occ, pct);
}
