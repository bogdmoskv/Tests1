const chai = require('chai');
const expect = chai.expect;
const Mtrx = require('mtrx');

describe('Create matrix operations test', () => {
    it('should create a random 1x1 matrix without arguments', () => {
        const mtrx = new Mtrx();
        expect(mtrx).to.be.an('array');
        expect(mtrx).to.have.lengthOf(1);
        expect(mtrx[0]).to.be.an('array');
        expect(mtrx[0]).to.have.lengthOf(1);
    });
    it('should create a random NxN matrix with argument N', () => {
        const N = 3;
        const mtrx = new Mtrx(N);
        expect(mtrx).to.be.an('array');
        expect(mtrx).to.have.lengthOf(N);
        for (const row of mtrx) expect(row).to.have.lengthOf(N);
    });
    it('should create a random NxK matrix with N and K arguments', () => {
        const [N, K] = [4, 5];
        const mtrx = new Mtrx(N, K);
        expect(mtrx).to.be.an('array');
        expect(mtrx).to.have.lengthOf(N);
        for (const row of mtrx) expect(row).to.have.lengthOf(K);
    });
    it('should create a NxK matrix with N and K arguments filled by X argument', () => {
        const [N, K, X] = [3, 2, 3];
        const mtrx = new Mtrx(N, K, X);
        expect(mtrx).to.be.an('array');
        expect(mtrx).to.have.lengthOf(N);
        for (const row of mtrx) {
            expect(row).to.have.lengthOf(K);
            expect(row).to.include(X);
            expect(row).to.not.include(X+1).and.not.include(X-1);
        }
    });
    it('should create a diagonal matrix from an array of numbers', () => {
        const inputArray = [1, 2, 3, 4];
        const expectedMatrix = [
            [1, 0, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 3, 0],
            [0, 0, 0, 4]
        ];
        const mtrx = new Mtrx(inputArray);
        expect(mtrx).to.deep.equal(expectedMatrix);
    });
    it('should create a matrix with given function expression', () => {
        const expectedMatrix = [
            [ 0, 1, 2 ],
            [ 1, 2, 3 ]
        ];
        const mtrx = new Mtrx(2, 3, (i, j) => i + j);
        expect(mtrx).to.deep.equal(expectedMatrix);
    });
});