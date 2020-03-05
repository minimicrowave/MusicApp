const { expect } = require('chai');
const discountsService = require('../../../src/services/discounts');
const { closeConnection } = require('../../../src/db/mysql');
const Song = require('../../../src/models/Song');

describe('discountsService', () => {
    afterAll(closeConnection);
    
    it('should return an array, with discounted prices', async () => {
        let discountedSongs = await discountsService.applyDiscountToSongList(10);

        expect(discountedSongs).to.be.an('array');
        expect(discountedSongs[0]).to.be.an.instanceof(Song);
    })
});
