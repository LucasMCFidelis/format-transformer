# Format Transformer

Um projeto full stack simples para upload e conversão de arquivos `.txt` em `.pdf`. Utiliza JavaScript puro no frontend com Vite, Express no backend e organização via npm workspaces.

---

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração de Ambiente](#configuração-de-ambiente)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Versionamento](#versionamento)

---

## Sobre

Este projeto permite ao usuário enviar um arquivo `.txt` pelo frontend, que envia para o backend. O backend converte o arquivo em PDF e retorna para download. O projeto foi desenvolvido com foco em:

- Separação clara entre frontend e backend usando npm workspaces.
- Uso do Vite para o frontend, facilitando desenvolvimento e gerenciamento de variáveis de ambiente.
- Backend em Express para manipulação de uploads e conversão de arquivos.
- Uso de scripts npm para rodar backend e frontend em paralelo.

---

## Tecnologias

- **Frontend:** JavaScript puro, Vite, Axios
- **Backend:** Node.js, Express, Multer, pdfkit (ou outra lib para PDF)
- **Gerenciamento:** npm workspaces, npm-run-all

---

## Estrutura do Projeto

```plaintext
format-transformer/
├── backend/
│   ├── index.js
│   ├── src/
│       ├── routes/
│       ├── controllers/
│       └── uploads/
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── .env
├── package.json
├── vite.config.js
```

---

## Instalação

Na raiz do projeto, rode:

```bash
npm install
```

Para instalar dependências do workspace (backend e frontend).

---

## Configuração de Ambiente

No frontend, crie um arquivo `.env` com a variável de ambiente:

```env
VITE_BACKEND_URL=http://localhost:3000
```

O frontend utiliza essa variável para fazer requisições ao backend.

---

## Uso

Inicie o backend e frontend simultaneamente:

```bash
npm run dev
```

Acesse o frontend no navegador (geralmente `http://localhost:5173`).

Use o formulário para enviar um arquivo `.txt`.

Após processamento, baixe o PDF gerado.

---

## Scripts Disponíveis

Na raiz do projeto:

```json
"scripts": {
    "dev": "npm-run-all --parallel dev:*",
    "dev:frontend": "npm run dev -w frontend",
    "dev:backend": "npm run dev -w backend"
}
```

- `npm run dev` — executa backend e frontend em paralelo (requer `npm-run-all`)
- `npm run dev:backend` — executa somente o backend
- `npm run dev:frontend` — executa somente o frontend

---

## Versionamento

O projeto segue [SemVer](https://semver.org/lang/pt-BR/) e utiliza `standard-version` para gerenciamento automático de versões e changelogs.

Para criar uma nova release, execute:

```bash
npm run release
```

Isso atualiza a versão, gera changelog e cria tag git.

---
