# Projeto de Componentes React

Este projeto é um exercício prático para a criação de componentes em React, focando na construção de componentes reutilizáveis e na renderização de dados dinâmicos.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:


## Componentes Criados

### `<Header />`

O componente `<Header />` foi criado para renderizar um título na aplicação.

- **Localização:** `src/components/Header.js`
- **Uso:** Renderiza uma tag `h1` com o texto "Tô viajando?"

- O componente <Card /> foi criado para exibir informações de cidades.

### `<Card />`

O componente `<Card />` foi criado para exibir informações de cidades.

- **Localização:** `src/components/Card.js`

- **Props:**
 - `cityInfo` (obrigatório): Objeto contendo as chaves `city` (string), `country` (string), `imageUrl` (string) e `visited` (boolean, opcional).

- **Funcionalidade:**
 - Renderiza o nome da cidade e o país.
 - Renderiza a imagem com a prop `city`.
 - Exibe a mensagem `"Já Fui!"` se visited for true, caso contrário, `"Não Fui"`.

### `<CardList />`

O componente `<CardList />` foi criado para renderizar uma lista de três destinos diferentes.

- **Localização:** `src/components/CardList.js`
- **Funcionalidade:**
  - Renderiza três componentes `<Card />` com as informações das cidades: Rio de Janeiro, Cidade do Cabo e Acapulco. 
