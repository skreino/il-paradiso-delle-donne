# Il Paradiso delle Donne

Sito Next.js per il centro estetico Il Paradiso delle Donne a Vimercate.

## Setup

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Docker

```bash
docker build -t il-paradiso-delle-donne .
docker run -p 3000:3000 il-paradiso-delle-donne
```

## Dati modificabili

Contatti, orari, servizi, recensioni placeholder, immagini e link sono in:

`src/config/site.ts`

Le immagini placeholder sono in `public/images/` e possono essere sostituite mantenendo gli stessi percorsi.
