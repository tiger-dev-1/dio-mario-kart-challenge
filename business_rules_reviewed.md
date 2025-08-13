# Business Rules for Mario Kart Challenge with Node / Regras de Negócio

This document outlines the business rules for a project originally from DIO (Digital Innovation One), called the "Mario Kart Challenge with Node". The original instructor, Felipão, encouraged students to apply any improvements they saw fit. Taking this suggestion to heart, some of the original business rules have been subtly altered to enhance the gameplay experience.

---

Este documento descreve as regras de negócio para um projeto originalmente da DIO (Digital Innovation One), chamado "Desafio Mario Kart com Node". O instrutor original, Felipão, incentivou os alunos a aplicar as melhorias que julgassem necessárias. Levando essa sugestão a sério, algumas das regras de negócio originais foram sutilmente alteradas para aprimorar a experiência de jogo.

--------------------------------------------------------------------------------

## Reviewed Rules (Current Version) / Regras Revisadas (Versão Atual)

### English

**Improvement:** In the original project, parts of the code were in English and others in Portuguese. To follow best practices, the entire codebase is now in English, including variable names, functions, commits, and comments.

### Players
*   The program must receive two characters to compete in the race, each represented as an object.
*   **Improvement:** Originally, the main function would automatically select characters. In this version, for better user experience and interactivity, each player chooses their own character, with the constraint that they cannot select the same one.
*   For a complete list of characters and their attributes, see the [character list in the main README](./readme.md#characters).

### Tracks
*   The characters will race on a random track consisting of 5 rounds.
*   In each round, a track block will be randomly selected: **STRAIGHT**, **CURVE**, or **CLASH**.
    *   **STRAIGHT**: A player rolls a dice and adds the result to their **SPEED**. The winner gets one point.
        *   **Improvement:** Instead of hardcoding the number 6 for the random dice roll, a `dice` array `[1, 2, 3, 4, 5, 6]` was created. The logic now uses the array's `length` for the calculation. **Why?** This makes the game more extensible. If we want to change the type of dice (e.g., more faces, or only specific numbers), we only need to modify this specific array. The same principle was applied to the `trackBlocks` array.
    *   **CURVE**: A player rolls a dice and adds the result to their **HANDLING**. The winner gets one point.
        *   **Improvement:** For maintainability and clarity, the Portuguese attribute "Manobrabilidade" was replaced with its more common English equivalent in a racing context, **HANDLING**.
    *   **CLASH**: A player rolls a dice and adds the result to their **POWER**. The loser loses one point.
    *   **Improvement (Score):** The original rule preventing negative scores has been removed. Allowing negative scores reduces the probability of a tie, which is especially beneficial if the game is expanded in the future to support more players. It helps establish a clearer ranking.
    *   **Improvement (Tie-Breaker):** In the event of a tie, one or more extra rounds can be implemented as a tie-breaker mechanism.

### Win Condition
*   At the end of the race, the player with the **highest score** wins.

---

### Português
**Melhoria (Padronização):** No projeto original, o código mesclava português e inglês. Para seguir as melhores práticas de desenvolvimento, toda a base de código foi padronizada para o inglês, incluindo nomes de variáveis, funções, commits e comentários.

### Jogadores
*   O programa deve receber dois personagens para competir, cada um representado por um objeto.
    *   **Melhoria (Seleção Interativa):** Em vez da seleção automática de personagens do projeto original, esta versão implementa a escolha interativa. Cada jogador seleciona seu personagem, com a restrição de que o mesmo personagem não pode ser escolhido por ambos, melhorando a experiência do usuário.
*   Para a lista completa de personagens e seus atributos, veja a [lista de personagens no README principal](./readme.md#characters).

### Pistas
*   A corrida consiste em 5 rodadas em uma pista aleatória.
*   A cada rodada, um bloco de pista é sorteado: **RETA**, **CURVA** ou **CONFRONTO**.
    *   **RETA**: Jogadores rolam um dado e somam o resultado à **VELOCIDADE**. O vencedor da rodada ganha 1 ponto.
        *   **Melhoria (Extensibilidade):** Em vez de um valor fixo `6` para o dado, a lógica agora se baseia no `length` de um array `dice`. Isso torna o jogo mais extensível, permitindo alterar o tipo de dado (mais faces, valores específicos, etc.) modificando apenas um array. O mesmo princípio foi aplicado aos blocos de pista.
    *   **CURVA**: Jogadores rolam um dado e somam o resultado à **MANOBRABILIDADE**. O vencedor da rodada ganha 1 ponto.
        *   **Melhoria (Clareza):** O atributo "Manobrabilidade" foi substituído por **HANDLING**, seu equivalente em inglês mais comum em jogos de corrida, para melhorar a legibilidade e manutenção do código.
    *   **CONFRONTO**: Jogadores rolam um dado e somam o resultado ao **PODER**. O perdedor da rodada perde 1 ponto.
    *   **Melhoria (Pontuação):** A regra original que impedia pontuação negativa foi removida. Permitir scores negativos reduz a probabilidade de empates, o que é um benefício para a escalabilidade do jogo (caso mais jogadores sejam adicionados no futuro) e ajuda a criar um ranking mais claro.
    *   **Melhoria (Desempate):** Em caso de empate ao final da corrida, um mecanismo de rodadas extras pode ser implementado como critério de desempate.

### Condição de Vitória
*   Ao final, vence o jogador que acumulou a **maior pontuação**.


--------------------------------------------------------------------------------


## Original Rules (For Historical Reference) / Regras Originais (Para Referência Histórica)


### English
## Players
- The program must receive two characters to compete in the race, each represented as an object.

## Tracks
- The characters will race on a random track consisting of 5 rounds.
- In each round, a track block will be randomly selected, which can be a **STRAIGHT**, a **CURVE**, or a **CLASH**.
  - If the track block is a **STRAIGHT**: each player rolls a 6-sided die and adds the result to their **SPEED** attribute. The player with the higher total wins one point.
  - If the track block is a **CURVE**: each player rolls a 6-sided die and adds the result to their **HANDLING** attribute. The player with the higher total wins one point.
  - If the track block is a **CLASH**: each player rolls a 6-sided die and adds the result to their **POWER** attribute. The player with the lower total loses one point.
  - No player's score can be negative (i.e., it cannot go below 0).

## Win Condition
- At the end of the race, the player with the most points wins.


---

### Português
## Jogadores:
- O Computador deve receber dois personagens para disputar a corrida em um objeto cada.

## Pistas:
- Os personagens irão correr em uma pista aleatória de 5 rodadas.
- A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto.
  - Caso o bloco da pista seja uma **RETA**, o jogador deve jogar um dado de 6 lados e somar o atributo **VELOCIDADE**. Quem vencer ganha um ponto.
  - Caso o bloco da pista seja uma **CURVA**, o jogador deve jogar um dado de 6 lados e somar o atributo **MANOBRABILIDADE**. Quem vencer ganha um ponto.
  - Caso o bloco da pista seja um **CONFRONTO**, o jogador deve jogar um dado de 6 lados e somar o atributo **PODER**. Quem perder, perde um ponto.
  - Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).

## Condição de vitória:
- Ao final, vence quem acumulou mais pontos.
