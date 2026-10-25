# 🎯 Pipeline DevOps: Node.js + Docker + GitHub Actions

[![🚀 Pipeline DevOps](https://github.com/carlosjc31/devops-app/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/carlosjc31/devops-app/actions/workflows/ci-cd.yml)

## 📋 Sobre o projeto

Uma lista de tarefas simples usada como base para praticar o ciclo DevOps completo: a aplicação é testada,
empacotada em Docker e validada automaticamente a cada push.

## 🚀 Tecnologias

- **Backend:** Node.js + Express
- **Frontend:** HTML, CSS e JavaScript
- **Contêiner:** Docker
- **CI/CD:** GitHub Actions

## 🔄 O que o pipeline faz

Disparado a cada push em `main`/`develop` e em pull requests para `main`:

1. Instala as dependências com `npm ci` (Node 18, com cache).
2. Sobe a aplicação e valida o endpoint `/health`.
3. Constrói a imagem Docker, marcada com o SHA do commit.
4. Roda o contêiner e testa `/health` e a página principal.
5. Remove o contêiner de teste.

## 🏃 Como executar

### Localmente
```bash
npm install
npm start
# Acesse http://localhost:3000
```

### Com Docker
```bash
docker build -t devops-app .
docker run -p 3000:3000 devops-app
```

## 👤 Autor

**José Carlos Carneiro** — [LinkedIn](https://www.linkedin.com/in/jose-carlos-carneiro/)
