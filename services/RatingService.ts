import * as popsicle from 'popsicle'
import { IRatingService } from '../interfaces/IRatingService'
import { RatingResult } from '../models/RatingService/RatingResult'
import { RatingItemType } from '../models/RatingService/RatingItemTypeEnum'

export class RatingService implements IRatingService {
  constructor(private host: string, private port: number) {
  }

  addRatingResult(ratingResult: RatingResult): Promise<void> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/ratings`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: ratingResult
      })
      .then((result) => {
        if (result.status === 201) {
          resolve();
        } else {
          reject(new Error('failed to send rating result to rating service'))
        }
      })
      .catch((error) => {
        reject(new Error('failed to send rating result to rating service'));
      });
    })
  }

  getRatings(referenceId: number, ratingItemType: RatingItemType): Promise<RatingResult[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/ratings/${referenceId}/${ratingItemType}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status === 200) {
          resolve(result.body);
        } else {
          reject(new Error('failed to get rating results from rating service'))
        }
      })
      .catch((error) => {
        reject(new Error('failed to get rating results from rating service'));
      });
    })
  }
}