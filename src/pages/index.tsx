import { useState } from 'react'
import Head from 'next/head'
import { FormEvent } from 'react'
import { MainWrapper } from '../styles/pages'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { IBillCpfl } from '../interfaces/billCpfl'
import ReactLoading from 'react-loading'
import Image from 'next/image'

export default function Home() {
  const [documentCpf, setDocumentCpf] = useState('')
  const [installation, setInstallation] = useState('')
  const [billInfo, setBillInfo] = useState<IBillCpfl>()
  const [loading, setLoading] = useState(false)
  const [openModalImagePreview, setOpenModalImagePreview] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    return toast.warn(
      'A consulta de débitos não pode ser mais feita por aqui, acesse o site mostrado abaixo do botão, ou clique aqui nessa notificação pra ser redirecionado',
      {
        onClick() {
          window.open(
            'https://servicosonline.cpfl.com.br/agencia-webapp/#/via-pagamento'
          )
        }
      }
    )

    setLoading(true)
    const getBill = await fetch(
      `/api/getCpflBill?document=${documentCpf}&installation=${installation}`
    ).then(response => response.json())

    setBillInfo(getBill)
    setLoading(false)
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
                id="cpf"
                value={documentCpf}
                required
                onChange={e => {
                  setDocumentCpf(e.target.value)
                }}
                placeholder="Digite apenas os números (44433322211)"
                type="number"
              />
            </div>
            <div className="input-block">
              <div className="header-input-block">
                <p>Digite o número da instalação</p>
                <button
                  type="button"
                  onClick={() =>
                    setOpenModalImagePreview(!openModalImagePreview)
                  }
                >
                  ❔
                </button>
              </div>
              <sub>Pode ser encontrado em seu talão de energia</sub>
              <input
                id="installation"
                value={installation}
                required
                onChange={e => {
                  setInstallation(e.target.value)
                }}
                placeholder="Digite apenas os números (444333222)"
                type="number"
              />
            </div>
            <button disabled type="submit">
              Consultar
            </button>
          </form>
        </section>
        <section className="show-information">
          <div className="communication">
            <h3>
              Infelizmente a CPFL alterou a forma que a consulta de débitos é
              feita então não é mais possível fazê-la por aqui
            </h3>
            <a href="https://servicosonline.cpfl.com.br/agencia-webapp/#/via-pagamento">
              Clique aqui para buscar os débitos abertos pelo site da CPFL
            </a>
          </div>
          {loading && (
            <div className="loading">
              <h3>Carregando</h3>
              <ReactLoading color="#7556ea" type="spin" />
            </div>
          )}

          {billInfo &&
            (billInfo.success ? (
              <div
                style={{ display: loading ? 'none' : 'initial' }}
                className="success-message"
              >
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
                          Vencimento:{' '}
                          <b>
                            {conta.DTLimiteReaviso ||
                              new Date(conta.Vencimento).toLocaleDateString(
                                'pt-BR'
                              )}
                          </b>
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

        {openModalImagePreview && (
          <div className="modal-mask">
            <div className="modal-view-image">
              <div className="modal-content">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => {
                    setOpenModalImagePreview(!openModalImagePreview)
                  }}
                >
                  ✖
                </button>
                <span>
                  A imagem abaixo mostra onde você pode localizar o código da
                  sua instalação
                </span>
                <Image
                  className="preview-image"
                  src="/installation-code.jpg"
                  width="384px"
                  height="202px"
                />
              </div>
            </div>
          </div>
        )}
      </MainWrapper>
    </>
  )
}
