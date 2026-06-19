# UGC Free — Roblox UGC Community

  Site de showcase de itens UGC gratuitos do Roblox, com tema dark/crimson e animações.

  ## Deploy no Vercel (passo a passo)

  ### 1. Faça login no Vercel
  Acesse [vercel.com](https://vercel.com) e entre com sua conta GitHub.

  ### 2. Importe o repositório
  - Clique em **Add New Project**
  - Selecione o repositório `New-ugc-FREE`
  - Clique em **Import**

  ### 3. Configure o projeto
  O Vercel detecta automaticamente que é um app Vite. Confirme as configurações:

  | Campo | Valor |
  |---|---|
  | Framework Preset | Vite |
  | Build Command | `vite build` |
  | Output Directory | `dist` |
  | Install Command | `npm install` |

  ### 4. Variáveis de ambiente (opcional)
  Se quiser ativar os logs no Discord, vá em **Environment Variables** e adicione:

  ```
  VITE_DISCORD_WEBHOOK_URL = https://discord.com/api/webhooks/SEU_ID/SEU_TOKEN
  ```

  ### 5. Deploy
  Clique em **Deploy** — o site fica no ar em menos de 1 minuto.

  ## Tecnologias

  - React 18 + Vite
  - Tailwind CSS v4
  - Framer Motion (animações)
  - shadcn/ui (componentes)
  - Wouter (rotas)

  ## Estrutura

  ```
  src/
    assets/        # Imagens dos itens UGC
    components/    # Navbar, Footer, seções e UI
    lib/           # Dados dos itens e utilitários
    pages/         # Home e 404
  ```
  