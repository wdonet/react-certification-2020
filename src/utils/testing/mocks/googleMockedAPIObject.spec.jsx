import { youtubeMockedData, googleMockedAPIObject } from "../../"

const ERROR_OBJECT = {
    error: {
        code: 403,
        message: '',
        errors: [
        {
            message: '',
            domain: '',
            reason: '',
        },
        ],
    },
};

describe("Google API object", () => {
    it("'client' resolves successfully when passing 'true' as argument", async () => {
        const mockedObject = googleMockedAPIObject(true);
        const { result } = await mockedObject.client.request();
        expect(JSON.stringify(result)).toEqual(JSON.stringify(youtubeMockedData))
    })

    it("'client' rejects successfully when passing 'false' as argument",async () => {
        const mockedObject = googleMockedAPIObject(false);
        try{ await mockedObject.client.request(); } 
        catch(reason){ expect(reason).toEqual(ERROR_OBJECT); }
    })
});