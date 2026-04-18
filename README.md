# Assimilacao Dice Roller

Módulo para [Foundry VTT](https://foundryvtt.com) que adiciona dados customizados para o sistema **Assimilação RPG**, com integração 3D via [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice).

## Instalação

Cole a URL do manifesto no instalador de módulos do Foundry VTT:

```
https://raw.githubusercontent.com/SergioSJS/assimilacao-dice-roller/main/module.json
```

**Foundry VTT → Configurar Módulos → Instalar Módulo → colar URL acima**

## Compatibilidade

| Foundry VTT | Status |
|-------------|--------|
| v12         | ✅ Compatível |
| v13         | ✅ Verificado |
| v14         | ✅ Verificado |

**Dependência obrigatória:** [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice)

## Funcionalidades

- **3 tipos de dados personalizados** com faces e texturas exclusivas do Assimilação RPG:
  - `da` — D6 de Assimilação
  - `db` — D10 de Assimilação
  - `dc` — D12 de Assimilação
- **Integração com Dice So Nice!** — animações 3D com os dados do sistema
- **Macro de rolagem** criada automaticamente na primeira ativação do módulo
- **Exibição no chat** com imagens das faces dos dados

## Como usar

### Macro automática

Na primeira ativação, o módulo cria a macro **"Rolagem de Assimilação"** na sua lista de macros. Ela abre um diálogo para escolher a quantidade de cada dado.

### Rolagem manual

Use as fórmulas diretamente na barra de chat do Foundry:

```
/r 2da        → 2 dados D6 de Assimilação
/r 1db        → 1 dado D10 de Assimilação
/r 1dc        → 1 dado D12 de Assimilação
/r 2da+1db    → combinação de dados
```

## Créditos

Feito por fãs para fãs.

- **Autor:** Sérgio Sousa — [meioorc.com](https://meioorc.com)
- **Licença:** [CC0 1.0 Universal](LICENSE) (domínio público)

## Reportar problemas

Abra uma [issue no GitHub](https://github.com/SergioSJS/assimilacao-dice-roller/issues).
