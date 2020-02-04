const { expect } = require('chai');
const discountService = require('../../../src/services/discounts');
const { closeConnection } = require('../../../src/db');
const Song = require('../../../src/models/Song');

describe('discountService', () => {
    afterAll(closeConnection);
    
    it('should return an array, with discounted prices', async () => {
        let discountedSongs = await discountService.applyDiscountToSongList(10);

        expect(discountedSongs).to.be.an('array');
        expect(discountedSongs[0]).to.be.an.instanceof(Song);
    })
});
