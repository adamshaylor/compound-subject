var assert = require('assert'),
    compoundSubject = require('../compound-subject.js');

describe('#delimitAll()', function () {

    it('should delimit all items up until the ending item', function () {
	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).delimitAll().make(),
		'apple, banana, and cherry'
	)});

    it('should not delimit all items when provided with false', function () {
	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).delimitAll().delimitAll(false).make(),
		'apple, banana and cherry'
	)});

    it('should not use the delimiter when there are only two items', function () {
	assert.equal(
		compoundSubject(['apple', 'banana']).delimitAll().make(),
		'apple and banana'
	)});

});
