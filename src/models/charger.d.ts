export interface ChargeStationIdDTO {
  id?: number
}

export interface ChargerDTO {
  id?: number
  plug: number
  state: number
  price: string
  chargeStation?: ChargeStationIdDTO
}
