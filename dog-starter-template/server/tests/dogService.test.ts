import { describe, test, expect, vi, beforeEach } from 'vitest';
import { getRandomDogImage } from '../services/dogService';

global.fetch= vi.fn()

//ei pakollinen
describe('DogService', () => {
    beforeEach(() =>{
        vi.clearAllMocks()
    })

test('Palautetaan kuvanUrl ja status', async() => {
    const mockedData= {
        message: 'https://images.dog.ceo/breeds/terrier-welsh/lycy.jpg',
        status: "success"
    };
    (fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockedData,
    });

    const result = await getRandomDogImage();

    expect(result.imageUrl).toBe(mockedData.message);
    expect(result.status).toBe('success');
    expect(fetch).toHaveBeenCalledOnce();
    });

    test('Heittää virheen ilmoituksen, kun API palauttaa 500', async () => {
        (fetch as any).mockResolvedValueOnce({
            ok: false,
            status:500,
        });
        await expect(getRandomDogImage()).rejects.toThrow(
            'Failed to fetch dog image: Dog API returned status 500'
        );
    });
})