var assert = require('assert'),
    compoundSubject = require('../compound-subject.js');

describe('#delimitWith()', function () {

    it('should return a single item unchanged', function () {
	assert.equal(
		compoundSubject(['apple']).delimitWith(';').make(),
		'apple'
	)});

    it('should return two items separated by "and"', function () {
	assert.equal(
		compoundSubject(['apple', 'banana']).delimitWith(';').make(),
		'apple and banana'
	)});

    it('should use semicolon as the separator', function () {
	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).delimitWith(';').make(),
		'apple; banana and cherry'
	)});

    it('should use semicolon as the separator (five items)', function () {
	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry', 'dragon fruit']).delimitWith(';').make(),
		'apple; banana; cherry and dragon fruit'
	)});


});
