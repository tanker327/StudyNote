var chai = require('chai');


chai.should();

describe('First test', function () {
    describe('do something', function () {
        it('should equal to himself', function () {
            var foo = 'hello world';
            foo.should.be.a('string');
            foo.should.have.length(5);
        });
    });
});