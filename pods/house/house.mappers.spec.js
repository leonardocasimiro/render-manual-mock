import { mapHouseListFromApiToModel } from './house.mappers.js';
describe('house.mappers spec', () => {
    describe('mapHouseListFromApiToModel', () => {
        it('should return empty array when it feeds houseList equals undefined', () => {
            // Arrange
            const houseList = undefined;
            // Act
            const result = mapHouseListFromApiToModel(houseList);
            // Assert
            const expectedResult = [];
            expect(result).toEqual(expectedResult);
        });
    });
});
