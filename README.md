# 📘 Aura-List v2

---

## 🧩 Sobre o projeto

O Aura-List v2 é uma aplicação web para gerenciar tarefas do dia a dia. 
O usuário pode adicionar, editar, excluir e completar tarefas, classificar cada uma 
por nível de dificuldade (Difícil, Médio ou Fácil) e filtrar a lista por 
dificuldade ou status (pendente/concluída). As informações são salvas 
automaticamente no navegador via localStorage.

A interface é minimalista, dark e responsiva — funciona bem tanto em 
desktop quanto em dispositivos móveis.

Este projeto é uma evolução técnica do [Aura-List v1](https://github.com/Caio-Dev0/aura-list), 
originalmente desenvolvido com JavaScript Vanilla. A v2 foi reconstruída 
do zero com React e TypeScript, trazendo uma arquitetura mais robusta, 
novas funcionalidades e um design completamente reformulado.

🔗 **[Acesse o projeto](https://aura-list-v2.vercel.app/)**

---
## 🖥️ Preview

**Desktop**

![Preview Desktop](./screenshots/desktop%20preview.webp)

**Mobile**

![Preview Mobile](./screenshots/mobile%20preview.webp)

---

## 🎯 Objetivo do projeto

O projeto tem como foco:

- Aplicar na prática os fundamentos de React
- Aprender e praticar TypeScript
- Evoluir a arquitetura em relação ao v1, separando responsabilidades com custom hooks e CSS Modules
- Adicionar features que ficaram de fora da versão anterior
- Reformular completamente o design, aplicando conceitos de UI/UX como hierarquia visual, paleta semântica e responsividade

---

## 📋 Funcionalidades

- Adicionar tarefas
- Editar nome e dificuldade da tarefa
- Remover tarefas
- Concluir tarefas
- Classificar tarefas por dificuldade (Difícil, Médio ou Fácil)
- Filtrar tarefas por dificuldade e status (todas, pendentes, concluídas)
- Ordenação automática por dificuldade (Dificil > Médio > Fácil)
- Validações com feedback visual via toast (adicionar e editar com campo vazio, e tentar editar sem mudar o nome)
- Armazenamento automático via localStorage
- Interface minimalista, dark e responsiva

---

## 🧠 Decisões técnicas

**Custom hooks**
A lógica das tarefas foi isolada no `useTasks` e a lógica de notificações 
no `useToast` — separando responsabilidades e mantendo os componentes 
focados apenas na camada visual.

**CSS Modules**
Cada componente tem seu próprio arquivo `.module.css`, evitando conflito 
de classes e facilitando manutenção. As cores, espaçamentos e tipografia 
foram centralizados em variáveis globais com dois níveis — paleta bruta 
e semântica.

**Estrutura de pastas por contexto**
`components/` para componentes React, `hooks/` para custom hooks, 
`types/` para tipagens TypeScript e `storage/` para a camada de 
persistência. Cada arquivo tem uma responsabilidade única.

**Estado derivado para filtros**
Criação da constante `filteredTasks` para facilitar a lógica de 
renderização das tarefas na filtragem. Calculada a partir do estado 
`tasks` e `activeFilter`, evita bugs de sincronização entre estados 
e garante que nenhuma tarefa seja perdida durante as filtragens.

**IDs com crypto.randomUUID()**
Garante IDs únicos independente de quantas tarefas foram adicionadas 
ou removidas, eliminando o bug de IDs duplicados que `tasks.length + 1` 
causaria.

---

## 🚀 Tecnologias utilizadas

- **React** 19.2
- **TypeScript** 5.9
- **Vite** 7.3
- **CSS Modules**
- **ESLint**
- **Git & GitHub**
- **Vercel** (deploy)
---

## 📁 Estrutura de pastas

```
📂 src/
 ┣ 📂 components/
 ┣  ┣ 📂 FormTask/
 ┣  ┣  ┣ 📜 FormTask.tsx
 ┣  ┣  ┗ 📜 FormTask.module.css
 ┣  ┣ 📂 ModalEdit/
 ┣  ┣  ┣ 📜 Modal.tsx
 ┣  ┣  ┗ 📜 Modal.module.css
 ┣  ┣ 📂 RenderTask/
 ┣  ┣  ┣ 📜 RenderTasks.tsx
 ┣  ┣  ┗ 📜 RenderTasks.module.css
 ┣  ┣ 📂 Toast/
 ┣  ┣  ┣ 📜 Toast.tsx
 ┣  ┣  ┗ 📜 Toast.module.css
 ┣ 📂 hooks/
 ┣  ┣ 📜 useTasks.ts
 ┣  ┗ 📜 useToast.ts
 ┣ 📂 storage/
 ┣  ┗ 📜 taskStorage.ts
 ┣ 📂 types/
 ┣  ┣ 📜 taskType.ts
 ┣  ┗ 📜 toastType.ts
 ┣ 📜 App.tsx
 ┣ 📜 globals.css
 ┗ 📜 main.tsx
```
---


## 🏗️ Arquitetura

A lógica da aplicação é concentrada nos custom hooks:

- **`useTasks`** — gerencia todo o estado e lógica das tarefas: criação, 
edição, exclusão, filtragem, ordenação e validações
- **`useToast`** — gerencia o estado e ciclo de vida das notificações, 
independente do contexto que as dispara

O **`App.tsx`** centraliza os dois hooks e distribui estados e funções 
via props para cada componente. Os componentes são responsáveis 
exclusivamente pela camada visual — recebem dados e funções como props 
e não gerenciam lógica própria.

---

## ⚙️ Como executar o projeto

### Acessar online
🔗 **[aura-list-v2.vercel.app](https://aura-list-v2.vercel.app/)**

### Rodar localmente

Clone o repositório:
```bash
git clone https://github.com/Caio-Dev0/aura-list-v2
```

Instale as dependências dentro do projeto:
```bash

npm install

```

Inicie o servidor de desenvolvimento:
```bash

npm run dev

```

---

## 🧠 Aprendizados

- **Arquitetura de projetos React** — aprender a organizar pastas e 
separar responsabilidades saindo do modelo de tudo em um arquivo só
- **Custom hooks** — isolar lógica fora dos componentes e entender 
como essa comunicação acontece via props
- **Tipagem com Typescript** — tipar funções, props e estados em um 
projeto real, entendendo a diferença entre `type` e `interface` e 
quando usar cada um
- **Mudança de mentalidade** — sair do pensamento de manipulação de 
DOM para pensar em estados, componentes e fluxo de dados
- **Design com intenção** — trabalhar tipografia, hierarquia visual 
e paleta de cores de forma consciente, mesmo em um projeto simples
- **Estado derivado** — entender quando uma variável não precisa ser 
um estado e pode ser calculada a partir de outros estados existentes

## 🧰 Próximos passos

O projeto cumpriu seu objetivo de consolidar os fundamentos de React 
e TypeScript. O desenvolvimento desta versão está pausado para dar 
lugar aos meus próximos projetos.

Uma possível evolução futura seria a integração com backend e banco 
de dados, substituindo o localStorage por uma API real quando 
esse conteúdo for abordado no roadmap de estudos.

---

## 👨‍💻 Autor

Feito com 💙 por **Caio Lucas**


🔗 [GitHub](https://github.com/lucas-devsss)
💼 [LinkedIn](https://www.linkedin.com/in/lucas-devsss/)
