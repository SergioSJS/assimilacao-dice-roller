const { Die } = foundry.dice.terms;

// Mapa global de imagens para reutilização
const IMAGE_PATHS = {
    d6: [
        'modules/assimilacao-dice-roller/images/vazio.png',
        'modules/assimilacao-dice-roller/images/vazio.png',
        'modules/assimilacao-dice-roller/images/D6_3.png',
        'modules/assimilacao-dice-roller/images/D6_4_5.png',
        'modules/assimilacao-dice-roller/images/D6_4_5.png',
        'modules/assimilacao-dice-roller/images/D6_6.png'
    ],
    d10: [
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
    d12: [
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
    ]
};

export class DieAssimilacaoD6 extends Die {
    constructor(termData) {
        termData.faces = 6; 
        super(termData);
    }

    /** @override */
    static DENOMINATION = "a";

    /** @override */
    getResultLabel(result) {
        const userColor = game.user.color.css || "#466555"; // Substitua com sua cor padrão

        const path = IMAGE_PATHS.d6[result.result - 1]; // Ajusta índice baseado no resultado
        return `
       <div class="dice-result assimilation-dice dieassimilacaod6" style="background-color: ${userColor};">
            <img src="${path}" alt="D6 - ${result.result}">
            <img src="modules/assimilacao-dice-roller/images/frame-d6.png" alt="Frame D6" class="dice-frame">
        </div>
    `;
    }
}

export class DieAssimilacaoD10 extends Die {
    constructor(termData) {
        termData.faces = 10; 
        super(termData);
    }

    /** @override */
    static DENOMINATION = "b";

    /** @override */
     getResultLabel(result) {
        const userColor = game.user.color.css || "#466555"; // Substitua com sua cor padrão

        const path = IMAGE_PATHS.d10[result.result - 1];
        return `
        <div class="dice-result assimilation-dice dieassimilacaod10" style="background-color: ${userColor};">
            <img src="${path}" alt="D10 - ${result.result}">
            <img src="modules/assimilacao-dice-roller/images/frame-d10.png" alt="Frame D10" class="dice-frame">
        </div>
    `;
    }
}

export class DieAssimilacaoD12 extends Die {
    constructor(termData) {
        termData.faces = 12;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "c";

    /** @override */
    getResultLabel(result) {
        const userColor = game.user.color.css || "#466555"; // Substitua com sua cor padrão

        const path = IMAGE_PATHS.d12[result.result - 1];
        return `
        <div class="dice-result assimilation-dice dieassimilacaod12" style="background-color: ${userColor};">
        <img src="${path}" alt="D12 - ${result.result}">
        <img src="modules/assimilacao-dice-roller/images/frame-d12.png" alt="Frame D12" class="dice-frame">
        </div>
    `;
    }
}
