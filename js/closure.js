function closureConcept(a, b) {
  return function (c, d) {
    return function (e, f) {
      return a * c * e + b * d * f;
    };
  };
}

multiply(10, 11)(12, 13)(14, 15);
