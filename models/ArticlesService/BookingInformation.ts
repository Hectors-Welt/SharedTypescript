export class BookingInformation {
  articleId: number
  articleName: string
  bookingMode: string
  error: string
  available: number
  toUse: number
  secondsTillNextBooking: number
  interval?: number
  originalAvailable?: number
}