import { geolocation } from "./Geolocation"

export interface ICommune {
    idCommune ?: number
    idDistrict : number
    nomCommune : string
    geoCommune : geolocation
}