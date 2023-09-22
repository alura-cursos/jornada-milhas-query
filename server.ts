import express, { Request } from 'express';
import server from './assets/server';
import path from 'node:path';
import { Viagem } from 'src/types/viagem';

const app = express();

app.use('/images', express.static(path.join(__dirname, 'assets' )));

app.get('/usuarios', (req, res) => {
  res.send(server.usuarios);
})

app.get('/viagens', async (req: Request<{}, {}, {}, { pagina: string, limite?: string }>, res) => {
  const viagens = server.viagens;
  const totalViagens = server.viagens.length;
  const paginaAtual = parseInt(req.query.pagina || '1');
  const limiteAtual = parseInt(req.query.limite || '5');
  const primeiraViagem = (paginaAtual - 1) * limiteAtual;
  const ultimaViagem = paginaAtual * limiteAtual;

  const results: { viagens: Viagem[], paginaAtual: number, totalPaginas: number } = await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          viagens: [...viagens.slice(primeiraViagem, ultimaViagem)],
          paginaAtual,
          totalPaginas: Math.ceil(totalViagens / limiteAtual),
        }),
      10000
    )
  );
  
  res.json(results);
})

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
})