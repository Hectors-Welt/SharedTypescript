import { RatingResult } from '../models/RatingService/RatingResult'
import { RatingItemType } from '../models/RatingService/RatingItemTypeEnum'

export interface IRatingService {
  addRatingResult(result: RatingResult): Promise<void>
  getRatings(referenceId: number, ratingItemType: RatingItemType): Promise<RatingResult[]>
}