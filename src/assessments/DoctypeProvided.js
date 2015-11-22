var Case = require('Case');
var DoctypeProvided = function (test) {
  var doc = test.get('$scope').get(0);
  if ($(doc.doctype).length === 0 && !document.doctype) {
    test.add(Case({
      element: doc,
      status: 'failed'
    }));
  }
  else {
    test.add(Case({
      element: doc,
      status: 'passed'
    }));
  }
};
module.exports = DoctypeProvided;