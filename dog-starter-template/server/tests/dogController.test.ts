import { describe, test, expect, vi, beforeEach } from 'vitest';
import { getDogImage } from '../controllers/dogController';
import * as dogService from '../services/dogService';

//ei pakollinen
describe('DogController', () => {
    beforeEach(() =>{
        vi.clearAllMocks()
    })

test('Palauttaa success true ja mockatun koiradatan', async() => {
    const mockedDog= {
        imageUrl: 'https://images.dog.ceo/breeds/terrier-welsh/lycy.jpg',
        status: "success"
    };
    //mockataan dogService funktio
    vi.spyOn(dogService, 'getRandomDogImage').mockResolvedValue(mockedDog);

    const req={};
    const res={ 
        json: vi.fn() 
    };

    await getDogImage(req as any, res as any);

    expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockedDog
    });
  });
});