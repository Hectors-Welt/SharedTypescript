import { RatingTypeEnum } from './RatingTypeEnum';
import { RatingItem } from './RatingItem';

export class RatingResult {
  rated: Date = new Date();
  referenceId?: number;
  ratingType: RatingTypeEnum;
  customerId: number;
  ratingResults: RatingItem[];
  metaData: object;
}
