export interface ChargeHistoryItem {
  id?: number
  date: string
  energyDelivered: number
  duration: number
  chargingSpeed: number
  totalCost: number
  chargeStationId?: number
}