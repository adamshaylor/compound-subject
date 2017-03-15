var assert = require('assert'),
	compoundSubject = require('../compound-subject.js');

describe('#make()', function () {

	it('should return an empty string when input is undefined', function () {
		assert.equal(
			compoundSubject(undefined).make(),
			''
		)});

	it('should return a single item unchanged', function () {
		assert.equal(
			compoundSubject(['apple']).make(),
			'apple'
		)});

	it('should separate two items with "and" with no extra options', function () {
		assert.equal(
			compoundSubject(['apple', 'banana']).make(),
			'apple and banana'
		)});

	it('should insert a comma after the first item, and separate the last two with "and"', function () {
		assert.equal(
			compoundSubject(['apple', 'banana', 'cherry']).make(),
			'apple, banana and cherry'
		)});

	it('should insert a comma after all but the last two items, and separate the last two with "and" ', function () {
		assert.equal(
			compoundSubject(['apple', 'banana', 'cherry', 'dragon fruit']).make(),
			'apple, banana, cherry and dragon fruit'
		)});

});
