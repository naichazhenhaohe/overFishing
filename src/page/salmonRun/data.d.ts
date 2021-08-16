export interface PhaseType {
  EndDateTime: string
  RareWeaponID: number
  StageID: number
  StartDateTime: string
  WeaponSets: number[]
  GearID?: number
  GearKind?: string
}

export interface WeaponType {
  Id: number
  ModelName: string
  Name: string
}
