import { TYPE_HOPITAL } from "../enums/HopitalType"
import { geolocation } from "./Geolocation"

export interface IHopital {
    idHopital ?: number
    nbHopital : number
    nomHopital : string
    typeHopital : TYPE_HOPITAL
    geoHopital : geolocation
}