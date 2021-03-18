import youtubeSearchService from './youtubeSearchService'
import { googleMockedAPIObject, youtubeMockedData } from '../utils/'

const createExpectedURL = (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&maxResults=12&regionCode=MX&key=${process.env.REACT_APP_YOUTUBE_KEY}`

describe('Search service', () => {
    it("returns video items after successful fetch", async () => {
        global.gapi = googleMockedAPIObject();
        const QUERY = "Kittens";
        const EXPECTED_SERVICE_ARGUMENT_CALL = { path: createExpectedURL(QUERY) };
        let serviceResponse = await youtubeSearchService.search(QUERY);

        expect(serviceResponse).toHaveLength(youtubeMockedData.items.length);
        expect(global.gapi.client.request).toHaveBeenCalledTimes(1);
        expect(global.gapi.client.request).toHaveBeenCalledWith(EXPECTED_SERVICE_ARGUMENT_CALL);
    })

    it("returns error cause after falied fetch", async () => {
        global.gapi = googleMockedAPIObject(false);
        const QUERY = "Kittens";
        const EXPECTED_SERVICE_ARGUMENT_CALL = { path: createExpectedURL(QUERY) };
        let serviceResponse = await youtubeSearchService.search(QUERY);

        expect(serviceResponse).toHaveProperty('error');
        expect(global.gapi.client.request).toHaveBeenCalledTimes(1);
        expect(global.gapi.client.request).toHaveBeenCalledWith(EXPECTED_SERVICE_ARGUMENT_CALL);
    })
})