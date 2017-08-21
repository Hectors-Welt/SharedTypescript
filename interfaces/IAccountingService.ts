import { ClubAccountInformation } from '../Models/AccountingService/ClubAccountInformation'

export interface IAccountingService {
  getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>
}