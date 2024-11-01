# Innovate Hub

## Descrição
O **Innovate Hub** é uma aplicação interativa de chat que permite aos usuários conversar de forma envolvente. Com uma interface intuitiva e recursos inovadores, o app não só proporciona uma experiência de chat rica e dinâmica, mas também conta com um modo exclusivo chamado **Modo Startup**. Este modo, acessível pelo menu lateral, coleta informações específicas do usuário para gerar ideias criativas e personalizadas de projetos para startups. A combinação perfeita de inteligência artificial e empreendedorismo!

## Funcionalidades
- **Chat interativo**: Converse com o ChatGPT sobre diversos temas e explore respostas intrigantes.
- **Modo Startup**: Coleta informações do usuário para oferecer sugestões personalizadas de projetos para startups.
- **Interface amigável**: Navegação fácil com um design responsivo.

## Instalação

### Pré-requisitos
- Node.js
- npm ou yarn

### Passo a passo para instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/knightoffcode/resumolab-gpt.git
2. Navegue até o repositório:
   ```bash
   cd resumolab-gpt
3. Instale as dependencias:
   ```bash
   npm install
4. Renomeio o arquivo dot.env para .env:
   ```bash
   mv dev.env .env
5. Abrir o arquivo com um editor de texto:
   ```bash
   nano .env
6. Substitua o conteúdo do seu token da API do ChatGPT:
   ```bash
   VITE_OPENAI_API_KEY=REPLACE-THIS-TEXT-FOR-YOUR-CHAT-GPT-KEY
   control + o && control + x
7. Inicialize a aplicação:
   ```bash
   npm run dev

### Dependências
Este projeto utiliza as seguintes bibliotecas:

- axios
- react com react-dom
- react-icons
- react-markdown
- react-router-dom
- sass

### Uso
Após iniciar a aplicação, você será recebido com uma interface de chat. Explore as funcionalidades e ative o Modo Startup através do menu lateral para começar a coletar suas ideias de projetos!

### FAQ
- O que é o Modo Startup? O Modo Startup é um recurso que coleta informações sobre o usuário para sugerir ideias de projetos personalizados.

- Como posso contribuir? Fique à vontade para abrir um pull request ou relatar problemas na seção de issues do repositório.

### Suporte
Para dúvidas ou suporte, entre em contato através do email: contateisaias@proton.me.

### Licença
Este projeto está licenciado sob a MIT License.

### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.