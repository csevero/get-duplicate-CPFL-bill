// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

export default async function getCpflBill(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let result = await fetch(
    'https://servicosonline.cpfl.com.br/agencia-webapi/api/via-pagamento/validar-situacao',
    {
      method: 'POST',
      body: JSON.stringify({
        Documento: req.query.document,
        Instalacao: req.query.installation
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(response => response.json())

  if (result.hasOwnProperty('CodMensagem')) {
    return res
      .status(200)
      .json({ success: false, message: 'Erro para localizar, verifique os dados digitados' })
  }

  res.status(200).json({ success: true, ...result })
}
