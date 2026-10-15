# Gerador de Senhas (Gera Aqui)

Aplicação web interativa para criação de chaves e senhas personalizadas a partir de dados fornecidos pelo usuário, com interface moderna e responsiva.

## Funcionalidades

- **Layout Centralizado:** Interface limpa construída com Flexbox, garantindo centralização e boa experiência visual em diferentes tamanhos de tela.
- **Validação de Formulário:** Verifica se todos os campos obrigatórios foram preenchidos antes de iniciar o processo.
- **Simulação de Processamento:** Utiliza funções assíncronas (`async/await` e `setTimeout`) para simular etapas de carregamento (*"Coletando dados..."* e *"Preparando senha..."*).
- **Embaralhamento Aleatório:** Processa as entradas, une os caracteres e utiliza `Math.random()` para gerar uma chave final segura e dinâmica.

## Tecnologias

- **HTML5:** Estrutura semântica e formulários.
- **CSS3:** Estilização modular, Flexbox, sombras e estados de interatividade (`:hover`).
- **JavaScript (ES6+):** Manipulação de DOM, tratamento de eventos e lógica assíncrona.

## Como rodar

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/gera-aqui.git](https://github.com/seu-usuario/gera-aqui.git)
   cd gera-aqui
