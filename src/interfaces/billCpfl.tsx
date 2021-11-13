export interface IBillCpfl {
  success: boolean
  TotalDebitos?: string
  message?: string
  ContasAberto?: [
    {
      Valor: string
      CodBarras: string
      MesReferencia: string
      DTLimiteReaviso: string
    }
  ]
}
