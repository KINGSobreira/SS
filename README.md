# SS
Projeto Landing Page/
│
├── index.html # Página principal
│
└── src/
├── css/
│ ├── styles.css # Estilos principais e imports
│ ├── main.css # Estilos das seções principais
│ ├── navbar.css # Estilos da barra de navegação
│ └── variable.css # Variáveis CSS (cores e temas)
│
├── js/
│ └── script.js # Funcionalidades JavaScript
│
├── images/
│ ├── logo.png / logo.webp # Logo da empresa (WebP otimizado é o usado no site)
│ ├── logoR.png / logoR.webp # Logo redonda
│ ├── background-inite.webp # Textura de rede do topo (hero)
│ ├── favicon.png # Ícone da aba
│ └── apple-touch-icon.png # Ícone para iOS
│
└── videos/
└──  postado no YouTube # Vídeo demonstrativo



## 🚀 Como Usar

### Instalação Local

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Não é necessário servidor local, o projeto funciona diretamente no navegador

### Personalização

#### Alterar Cores
Edite o arquivo `src/css/variable.css` para modificar a paleta de cores:

:root {
    --color-primary: #8b5cf6;
    --color-primary-soft: #b895d4;
    --color-bg: #0d0a12;
    /* ... outras cores ... */
}#### Alterar Informações de Contato
Edite o arquivo `index.html` e substitua:
- Número do WhatsApp: ``
- Links de redes sociais
- Textos e descrições

#### Adicionar/Remover Serviços
Edite a seção `#service` no arquivo `index.html` para adicionar ou remover cards de serviços.

## 📱 Seções do Site

### 1. Home (Início)
- Apresentação da empresa
- Logo e vídeo demonstrativo
- Call-to-action para contato e navegação

### 2. Serviços
Apresenta os principais serviços oferecidos:
- Montagem e Upgrade de Computadores
- Limpeza e Manutenção Preventiva
- Formatação e Instalação de Sistemas Operacionais
- Instalação de Programas e Configurações Essenciais
- Diagnóstico e Correção de Problemas

### 3. Como Funciona
- Passo a passo do atendimento (contato, avaliação, solução)

### 4. Sobre Nós
- História da empresa
- Propósito e valores
- Informações sobre o fundador

### 5. Footer (Rodapé)
- Informações de contato
- Links para redes sociais
- Horário de atendimento

## 🎨 Funcionalidades JavaScript

- **Menu Mobile**: menu hambúrguer acessível (fecha com Esc ou clicando fora)
- **Navegação Ativa**: destaque do link da seção visível (IntersectionObserver)
- **Header Fixo**: header translúcido que muda de estilo ao rolar
- **Animações de entrada**: elementos aparecem ao rolar (respeita "reduzir movimento")
- **Vídeo sob demanda**: o YouTube só carrega ao clicar no play, deixando o site mais rápido
- **Botão flutuante do WhatsApp** e ano do rodapé atualizado automaticamente

## 📐 Responsividade

O site é totalmente responsivo com breakpoints para:
- **Telas pequenas**: até 480px
- **Mobile/Tablet**: até 899px (menu hambúrguer)
- **Desktop**: a partir de 900px

## 🌐 Compatibilidade de Navegadores

- Chrome (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Edge (últimas versões)

## 📞 Informações de Contato

- **WhatsApp**: (85) 98416-3358
- **Horário de Atendimento**: Segunda a Sábado

## 🔧 Melhorias Futuras

- [ ] Adicionar formulário de contato
- [ ] Implementar modo escuro/claro
- [ ] Adicionar galeria de projetos
- [ ] Integração com Google Maps
- [ ] Sistema de depoimentos/testemunhos
- [ ] Blog ou seção de notícias
- [x] Otimização de imagens (WebP)
- [x] Lazy loading para imagens e vídeos

## 📝 Licença

Este projeto é propriedade da SS Soluções em Tecnologia. Todos os direitos reservados.

## 👨‍💻 Desenvolvimento

Desenvolvido com foco em:
- Performance
- Acessibilidade
- SEO
- Experiência do usuário (UX)
- Design responsivo

---

**SS Soluções em Tecnologia** - A T.I que vai até você! 🚀
