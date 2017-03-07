var assert = require('assert'),
	compoundSubject = require('../compound-subject.js');

describe('#endWith()', function () {

	it('should end with "or" instead of "and"', function () {
		assert.equal(
			compoundSubject(['apple', 'banana', 'cherry']).endWith('or').make(),
			'apple, banana or cherry'
		)});

});
