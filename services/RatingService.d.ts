import { IRatingService } from '../interfaces/IRatingService';
import { RatingResult } from '../models/RatingService/RatingResult';
import { RatingItemType } from '../models/RatingService/RatingItemTypeEnum';
export declare class RatingService implements IRatingService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    addRatingResult(ratingResult: RatingResult): Promise<void>;
    getRatings(referenceId: number, ratingItemType: RatingItemType): Promise<RatingResult[]>;
}
