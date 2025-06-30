import { ChargeStationDTO } from "./chargestation"

export interface ChargeHistoryItemDTO {
  id?: number
  date: string
  energyDelivered: number
  duration: number
  chargingSpeed: number
  totalCost: number
  chargeStation?: ChargeStationDTO
}