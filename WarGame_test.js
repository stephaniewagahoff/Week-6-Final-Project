var expect = chai.expect;

describe('MyFunctions', function(){
    describe('#addCard', function(){       
        it('should throw an error if parameter is not a Card object', function(){
            expect(function(){
                var player1 = new Player("Casey");
                player1.addCard("Testing for an Error");
            }).to.throw(Error);
        });
    });
});