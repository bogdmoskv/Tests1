const chai = require('chai');
const expect = chai.expect;
const Mtrx = require('mtrx');

describe('Static functions test', () => {
    it('should create NxK matrix filled by 0', () => {
        const [N, K] = [2, 3];
        const mtrx = Mtrx.zeros(N, K);
        expect(mtrx).to.be.an('array');
        expect(mtrx).to.have.lengthOf(N);
        expect(mtrx[0]).to.be.an('array');
        expect(mtrx[0]).to.have.lengthOf(K);
        for (const row of mtrx) {
            for (const element of row) expect(element).to.equal(0);
        }
    });
    it('should create NxK matrix filled by 1', () => {
        const [N, K] = [3, 4];
        const mtrx = Mtrx.ones(N, K);
        expect(mtrx).to.be.an('array');
        expect(mtrx).to.have.lengthOf(N);
        expect(mtrx[0]).to.be.an('array');
        expect(mtrx[0]).to.have.lengthOf(K);
        for (const row of mtrx) {
            for (const element of row) expect(element).to.equal(1);
        }
    });
    it('should create NxN diagonal 1 matrix', () => {
        const N = 4;
        const mtrx = Mtrx.eye(N);
        const expectedMatrix = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];
        expect(mtrx).to.deep.equal(expectedMatrix);
    });
    it('should check if matrix was created with Mtrx constructor', () => {
        const n = [[0, 1, 2], [1, 2, 3]]
        const m = new Mtrx(n)
        expect(Mtrx.isMtrx(n)).to.be.false;
        expect(Mtrx.isMtrx(m)).to.be.true;
        expect(Mtrx.isMtrxLike(n)).to.be.true;
        expect(Mtrx.isSameShape(m,n)).to.be.true;
    });
    const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});