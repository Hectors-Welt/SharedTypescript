import { RatingResult } from '../models/RatingService/RatingResult';
import { RatingItemType } from '../models/RatingService/RatingItemTypeEnum';
import { IService } from './IService';

export interface IRatingService extends IService {
  addRatingResult(result: RatingResult): Promise<void>;

  getRatings(referenceId: number, ratingItemType: RatingItemType): Promise<RatingResult[]>;
}
