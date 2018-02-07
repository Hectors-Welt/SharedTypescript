import { RatingItemType } from './RatingItemTypeEnum'

export class RatingItem {
  description: string;
  ratingItemType: RatingItemType;
  isRequired: boolean;
  allowComment: boolean;
  value: string;
  comment: string;
  subRatings: RatingItem[];
}