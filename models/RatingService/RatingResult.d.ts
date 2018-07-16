import { RatingTypeEnum } from './RatingTypeEnum';
import { RatingItem } from './RatingItem';
export declare class RatingResult {
    rated: Date;
    referenceId?: number;
    ratingType: RatingTypeEnum;
    customerId: number;
    ratingResults: RatingItem[];
    metaData: object;
}
