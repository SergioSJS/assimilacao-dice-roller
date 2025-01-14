// Importar o comando da nova macro
import { macroCommand } from './macros/roll-assimilacao.js';

Hooks.once("ready", async () => {
    const macroName = "Rolagem de Assimilação";

    console.log(`[Assimilação RPG] Atualizando macro "${macroName}"...`);

    const macroData = {
        name: macroName,
        type: "script",
        img: "modules/assimilacao-dice-roller/images/icon.jpeg",
        command: macroCommand,
        scope: "global",
        flags: { "assimilation-rpg": { version: "1.0.0" } }
    };

    const existingMacro = game.macros.find(m => m.name === macroName);
    if (existingMacro) {
        console.log(`[Assimilação RPG] Excluindo macro existente "${macroName}"...`);
        await existingMacro.delete();
    }

    const newMacro = await Macro.create(macroData);
    if (newMacro) {
        console.log(`[Assimilação RPG] Macro "${macroName}" recriada com sucesso.`);
    } else {
        console.error(`[Assimilação RPG] Falha ao recriar a macro "${macroName}".`);
    }
});
