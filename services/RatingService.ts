import { IRatingService } from '../interfaces/IRatingService'
import { RatingResult } from '../models/RatingService/RatingResult'
import { RatingItemType } from '../models/RatingService/RatingItemTypeEnum'
import { ApiClient } from './ApiClient';

export class RatingService implements IRatingService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async addRatingResult(ratingResult: RatingResult): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/ratings`, ratingResult);
    } catch (err) {
      throw new Error('failed to send rating result to rating service');
    }
  }

  async getRatings(referenceId: number, ratingItemType: RatingItemType): Promise<RatingResult[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/ratings/${referenceId}/${ratingItemType}`);
    } catch (err) {
      throw new Error('failed to get rating results from rating service');
    }
  }
}