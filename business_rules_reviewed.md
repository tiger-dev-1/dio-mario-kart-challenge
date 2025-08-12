# Business Rules for Mario Kart Challenge with Node / Regras de Negócio

This document outlines the business rules for a project originally from DIO (Digital Innovation One), called the "Mario Kart Challenge with Node". The original instructor, Felipão, encouraged students to apply any improvements they saw fit. Taking this suggestion to heart, some of the original business rules have been subtly altered to enhance the gameplay experience.

---

Este documento descreve as regras de negócio para um projeto originalmente da DIO (Digital Innovation One), chamado "Desafio Mario Kart com Node". O instrutor original, Felipão, incentivou os alunos a aplicar as melhorias que julgassem necessárias. Levando essa sugestão a sério, algumas das regras de negócio originais foram sutilmente alteradas para aprimorar a experiência de jogo.

--------------------------------------------------------------------------------

## Reviewed Rules (Current Version) / Regras Revisadas (Versão Atual)

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

## Jogadores
- O programa deve receber dois personagens para competir na corrida, cada um representado por um objeto.

## Pistas:
- Os personagens irão correr em uma pista aleatória de 5 rodadas.
- A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto.
  - Caso o bloco da pista seja uma **RETA**, o jogador deve jogar um dado de 6 lados e somar o atributo **VELOCIDADE**. Quem vencer ganha um ponto.
  - Caso o bloco da pista seja uma **CURVA**, o jogador deve jogar um dado de 6 lados e somar o atributo **MANOBRABILIDADE**. Quem vencer ganha um ponto.
  - Caso o bloco da pista seja um **CONFRONTO**, o jogador deve jogar um dado de 6 lados e somar o atributo **PODER**. Quem perder, perde um ponto.
  - Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).

## Condição de vitória:
- Ao final, vence quem acumulou mais pontos.


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

