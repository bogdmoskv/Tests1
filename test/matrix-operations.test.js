const chai = require('chai');
const expect = chai.expect;
const Mtrx = require('mtrx');

const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

describe('Operations with matrix test', () => {
    describe('Static operations', () => {
        it('should add two matrix', () => {
            const resultMatrix = Mtrx.add(m, n);
            const expectedMatrix = [
                [ 2, 2, 3 ],
                [ 4, 6, 6 ],
                [ 7, 8, 10 ]
            ];
            expect(resultMatrix).to.deep.equal(expectedMatrix);
        });
        it('should multiply matrix matrix by a scalar', () => {
            const resultMatrix = Mtrx.mul(m, 3);
            const expectedMatrix = [
                [ 3, 0, 0 ],
                [ 0, 3, 0 ],
                [ 0, 0, 3 ]
            ];
            expect(resultMatrix).to.deep.equal(expectedMatrix);
        });
        it('should multiply 2 matrix', () => {
            const resultMatrix = Mtrx.mul(m, n);
            const expectedMatrix = [
                [ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ]
            ];
            expect(resultMatrix).to.deep.equal(expectedMatrix);
        });
        it('should divide 2 matrix', () => {
            const resultMatrix = Mtrx.mul(n, m);
            const expectedMatrix = [
                [ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ]
            ];
            expect(resultMatrix).to.deep.equal(expectedMatrix);
        });
    });
    describe('Method operations', () => {
        it('should add two matrix', () => {
            const resultMatrix = m.add(n);
            const expectedMatrix = [
                [ 2, 2, 3 ],
                [ 4, 6, 6 ],
                [ 7, 8, 10 ]
            ];
            expect(Mtrx.isMtrx(resultMatrix)).to.be.true;
            expect(resultMatrix).to.deep.equal(expectedMatrix);
        });
        it('should multiply 2 matrix', () => {
            const resultMatrix = m.leftMul(n);
            const expectedMatrix = [
                [ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ]
            ];
            expect(Mtrx.isMtrx(resultMatrix)).to.be.true;
            expect(resultMatrix).to.deep.equal(expectedMatrix);
        });
        it('should divide 2 matrix', () => {
            const resultMatrix = m.rightMul(n);
            const expectedMatrix = [
                [ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ]
            ];
            expect(resultMatrix).to.deep.equal(expectedMatrix);
            expect(Mtrx.isMtrx(resultMatrix)).to.be.true;
        });
    });

});