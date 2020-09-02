import InitGame from '../src/InitGame';

//Constructing
describe("avaliablePoints", () =>{
    it("equal to 2", () => {
        const init = new InitGame();
    
        expect(init.avaliablePoints).toBe(2);
    });
    it("equal to 1", () => {
        const init = new InitGame();
        init.addPoints(true);

        expect(init.avaliablePoints).toBe(1);
    });
});