import { DieAssimilacaoD6, DieAssimilacaoD10, DieAssimilacaoD12 } from './die.js';

Hooks.once("init", async function () {
    console.log("Assimilacao Dice Roller | Initializing...");

    // Registra os tipos de dados personalizados no CONFIG.Dice.terms
    CONFIG.Dice.terms["a"] = DieAssimilacaoD6;    // d6 personalizado
    CONFIG.Dice.terms["b"] = DieAssimilacaoD10; // d10 personalizado
    CONFIG.Dice.terms["c"] = DieAssimilacaoD12; // d12 personalizado
});


Hooks.once('diceSoNiceReady', (dice3d) => {
    console.log("Assimilacao Dice Roller | Configuring Dice So Nice...");

    // Adiciona o sistema personalizado "assimilacao"
    dice3d.addSystem({ id: "assimilacao", name: "Assimilacao" }, true);

    // Configuração do d6 personalizado
    dice3d.addDicePreset({
        type: "da",
        labels: [
            'modules/assimilacao-dice-roller/images/vazio.png',
            'modules/assimilacao-dice-roller/images/vazio.png',
            'modules/assimilacao-dice-roller/images/D6_3.png',
            'modules/assimilacao-dice-roller/images/D6_4_5.png',
            'modules/assimilacao-dice-roller/images/D6_4_5.png',
            'modules/assimilacao-dice-roller/images/D6_6.png'
        ],
        bumpMaps: [
            'modules/assimilacao-dice-roller/images/vazio_bump.png',
            'modules/assimilacao-dice-roller/images/vazio_bump.png',
            'modules/assimilacao-dice-roller/images/D6_3_bump.png',
            'modules/assimilacao-dice-roller/images/D6_4_5_bump.png',
            'modules/assimilacao-dice-roller/images/D6_4_5_bump.png',
            'modules/assimilacao-dice-roller/images/D6_6_bump.png'
        ],
        system: "assimilacao",
        shape: "d6"
    });

    // Configuração do d10 personalizado
    dice3d.addDicePreset({
        type: "db",
        labels: [
            'modules/assimilacao-dice-roller/images/vazio.png',
            'modules/assimilacao-dice-roller/images/vazio.png',
            'modules/assimilacao-dice-roller/images/D10_3.png',
            'modules/assimilacao-dice-roller/images/D10_4_5.png',
            'modules/assimilacao-dice-roller/images/D10_4_5.png',
            'modules/assimilacao-dice-roller/images/D10_6.png',
            'modules/assimilacao-dice-roller/images/D10_7.png',
            'modules/assimilacao-dice-roller/images/D10_8.png',
            'modules/assimilacao-dice-roller/images/D10_9.png',
            'modules/assimilacao-dice-roller/images/D10_10.png'
        ],
        bumpMaps: [
            'modules/assimilacao-dice-roller/images/vazio_bump.png',
            'modules/assimilacao-dice-roller/images/vazio_bump.png',
            'modules/assimilacao-dice-roller/images/D10_3_bump.png',
            'modules/assimilacao-dice-roller/images/D10_4_5_bump.png',
            'modules/assimilacao-dice-roller/images/D10_4_5_bump.png',
            'modules/assimilacao-dice-roller/images/D10_6_bump.png',
            'modules/assimilacao-dice-roller/images/D10_7_bump.png',
            'modules/assimilacao-dice-roller/images/D10_8_bump.png',
            'modules/assimilacao-dice-roller/images/D10_9_bump.png',
            'modules/assimilacao-dice-roller/images/D10_10_bump.png'
        ],
        system: "assimilacao",
        shape: "d10" // Modelo 3D correto para o dado d10
    });

    // Configuração do d12 personalizado
    dice3d.addDicePreset({
        type: "dc",
        labels: [
            'modules/assimilacao-dice-roller/images/vazio.png',
            'modules/assimilacao-dice-roller/images/vazio.png',
            'modules/assimilacao-dice-roller/images/D12_3.png',
            'modules/assimilacao-dice-roller/images/D12_4_5.png',
            'modules/assimilacao-dice-roller/images/D12_4_5.png',
            'modules/assimilacao-dice-roller/images/D12_6.png',
            'modules/assimilacao-dice-roller/images/D12_7.png',
            'modules/assimilacao-dice-roller/images/D12_8.png',
            'modules/assimilacao-dice-roller/images/D12_9.png',
            'modules/assimilacao-dice-roller/images/D12_10.png',
            'modules/assimilacao-dice-roller/images/D12_11.png',
            'modules/assimilacao-dice-roller/images/D12_12.png'
        ],
        bumpMaps: [
            'modules/assimilacao-dice-roller/images/vazio_bump.png',
            'modules/assimilacao-dice-roller/images/vazio_bump.png',
            'modules/assimilacao-dice-roller/images/D12_3_bump.png',
            'modules/assimilacao-dice-roller/images/D12_4_5_bump.png',
            'modules/assimilacao-dice-roller/images/D12_4_5_bump.png',
            'modules/assimilacao-dice-roller/images/D12_6_bump.png',
            'modules/assimilacao-dice-roller/images/D12_7_bump.png',
            'modules/assimilacao-dice-roller/images/D12_8_bump.png',
            'modules/assimilacao-dice-roller/images/D12_9_bump.png',
            'modules/assimilacao-dice-roller/images/D12_10_bump.png',
            'modules/assimilacao-dice-roller/images/D12_11_bump.png',
            'modules/assimilacao-dice-roller/images/D12_12_bump.png'
        ],
        system: "assimilacao",
        shape: "d12" // Modelo 3D correto para o dado d12
    });
});

Hooks.on("renderChatMessage", (message, html, data) => {
    // Verifica se a mensagem contém rolagens customizadas
    if (message.rolls && message.rolls.some(roll => roll.formula.match(/d[abc]/))) {
        const tooltip = html.find(".dice-tooltip");
        // Expande a tooltip automaticamente para rolagens customizadas
        tooltip.addClass("expanded").css("display", "block");

        const formulaElement = html.find(".dice-formula");
        // Substitui a fórmula original para cada tipo de dado personalizado
        let newFormula = message.rolls[0].formula
            .replace(/(\d+)da/g, "$1d6 ($1da)")
            .replace(/(\d+)db/g, "$1d10 ($1db)")
            .replace(/(\d+)dc/g, "$1d12 ($1dc)");
        // Atualiza o texto da fórmula no chat
        formulaElement.text(newFormula);

        // Atualiza as fórmulas em cada parte individual
        const partFormulas = html.find(".part-formula");
        partFormulas.each((_, element) => {
            const originalText = $(element).text();
            const updatedText = originalText
                .replace(/(\d+)da/g, "$1d6 ($1da)")
                .replace(/(\d+)db/g, "$1d10 ($1db)")
                .replace(/(\d+)dc/g, "$1d12 ($1dc)");
            $(element).text(updatedText);
        });
    }
});
