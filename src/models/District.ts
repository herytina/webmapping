import { geolocation } from "./Geolocation"

export interface IDistrict {
    idDistrict ?: number
    idHabitant : number
    idHopital : number
    idEcole : number
    nomDistrict : string
    geoDistrict : geolocation
}