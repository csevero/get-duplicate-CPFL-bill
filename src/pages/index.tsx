import { useState } from 'react'
import Head from 'next/head'
import { FormEvent } from 'react'
import { MainWrapper } from '../styles/pages'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { IBillCpfl } from '../interfaces/billCpfl'

export default function Home() {
  const [documentCpf, setDocumentCpf] = useState('')
  const [installation, setInstallation] = useState('')
  const [billInfo, setBillInfo] = useState<IBillCpfl>()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const getBill = await fetch(
      `/api/getCpflBill?document=${documentCpf}&installation=${installation}`
    ).then(response => response.json())

    setBillInfo(getBill)
  }

  return (
    <>
      <Head>
        <title>Segunda via CPFL</title>
      </Head>

      <MainWrapper>
        <h1>Consulte a segunda via da CPFL</h1>

        <section className="get-information">
          <form onSubmit={handleSubmit}>
            <div className="input-block">
              <p>Digite o CPF do dono da residência</p>
              <input
                value={documentCpf}
                required
                onChange={e => {
                  setDocumentCpf(e.target.value)
                }}
                type="number"
              />
            </div>
            <div className="input-block">
              <p>Digite o número da instalação</p>
              <sub>Pode ser encontrado em seu talão de energia</sub>
              <input
                value={installation}
                required
                onChange={e => {
                  setInstallation(e.target.value)
                }}
                type="number"
              />
            </div>
            <button type="submit">Consultar</button>
          </form>
        </section>
        <section className="show-information">
          {billInfo &&
            (billInfo.success ? (
              <div className="success-message">
                <h3>Valor da fatura: R${billInfo.TotalDebitos}</h3>
                {billInfo.ContasAberto.length > 0 ? (
                  billInfo.ContasAberto.map(conta => {
                    return (
                      <div className="pending-bill">
                        <p>
                          Valor: <b>R${conta.Valor}</b>
                        </p>
                        <sub>Clique no código de barras para copiá-lo</sub>
                        <p style={{ margin: 0 }}>
                          Código de barras:{' '}
                          <CopyToClipboard
                            text={conta.CodBarras}
                            onCopy={() => toast.success('Copiado com sucesso!')}
                          >
                            <b style={{ cursor: 'pointer' }}>
                              {conta.CodBarras}
                            </b>
                          </CopyToClipboard>
                        </p>
                        <p>
                          Mês de referência: <b>{conta.MesReferencia}</b>
                        </p>
                        <p>
                          Vencimento: <b>{conta.DTLimiteReaviso}</b>
                        </p>
                      </div>
                    )
                  })
                ) : (
                  <h3 className="no-pending-debt">
                    Não há débitos em aberto 🎉🎉
                  </h3>
                )}
              </div>
            ) : (
              <h3 className="error-message">{billInfo.message}</h3>
            ))}
        </section>
        <footer>
          Made with 🖤 by{' '}
          <a href="https://beacons.ai/carlossevero" target="_blank">
            Carlos Severo
          </a>
        </footer>
      </MainWrapper>
    </>
  )
}
