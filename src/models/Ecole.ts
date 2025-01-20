import { TYPE_ECOLE } from "../enums/EcoleType"
import { geolocation } from "./Geolocation"

export interface IEcole {
    idEcole ?: number
    nomEcole : string
    typeEcole : TYPE_ECOLE
    geoEcole : geolocation
}