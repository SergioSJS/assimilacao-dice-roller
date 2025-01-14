// Importar o comando da nova macro
import { macroCommand } from './macros/roll-assimilacao.js';

// Função para criar ou recriar a macro
async function setupMacro() {
    const macroName = "Rolagem de Assimilação";

    console.log(`[Assimilação RPG] Verificando macro "${macroName}"...`);

    const macroData = {
        name: macroName,
        type: "script",
        img: "modules/assimilacao-dice-roller/images/icon.jpeg",
        command: macroCommand,
        scope: "global",
        flags: { "assimilation-rpg": { version: "1.0.0" } }
    };

    // Procurar por uma macro existente com o mesmo nome
    let existingMacro = game.macros.find(m => m.name === macroName);

    if (existingMacro) {
        console.log(`[Assimilação RPG] Excluindo macro existente "${macroName}"...`);
        await existingMacro.delete();
    }

    console.log(`[Assimilação RPG] Criando macro "${macroName}"...`);
    const newMacro = await Macro.create(macroData);

    if (newMacro) {
        console.log(`[Assimilação RPG] Macro "${macroName}" criada com sucesso.`);
    } else {
        console.error(`[Assimilação RPG] Falha ao criar a macro "${macroName}".`);
    }
}

// Hook `ready` para verificar ativação inicial do módulo
Hooks.once("ready", async () => {
    const isModuleJustActivated = game.settings.get("assimilation-rpg", "macro-setup-done");

    if (!isModuleJustActivated) {
        console.log(`[Assimilação RPG] Módulo ativado pela primeira vez. Configurando macro...`);
        await setupMacro();
        await game.settings.set("assimilation-rpg", "macro-setup-done", true);
    } else {
        console.log(`[Assimilação RPG] Macro já configurada anteriormente. Nenhuma ação necessária.`);
    }
});

// Configuração de uma flag no sistema para controlar se a macro já foi configurada
Hooks.once("init", () => {
    game.settings.register("assimilation-rpg", "macro-setup-done", {
        name: "Macro configurada",
        hint: "Indica se a macro do módulo já foi configurada.",
        scope: "world",
        config: false,
        type: Boolean,
        default: false
    });
});
