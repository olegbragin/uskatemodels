export interface ChargeHistoryItem {
  id?: number
  date: Date
  energyDelivered: number
  duration: number
  chargingSpeed: number
  totalCost: number
  chargeStationId?: number
}