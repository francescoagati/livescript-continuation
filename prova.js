/* Generated by Continuation.js v0.0.5 */
(function () {
  var identity, container, i$, ref$, len$, n, x;
  identity = function (el, cb) {
    var rt;
    rt = function () {
      return cb(el);
    };
    return setTimeout(rt, 100);
  };
  container = [];
  i$ = 0, len$ = (ref$ = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100
  ]).length;
  function loop_0(loop_0_cont) {
    if (i$ < len$) {
      n = ref$[i$];
      identity(n, function () {
        x = arguments[0];
        if (x > 50) {
          container.push(x);
        }
        ++i$;
        loop_0(loop_0_cont);
      });
    } else {
      loop_0_cont();
    }
  }
  loop_0(function () {
    console.log(container);
  });
}.call(this));