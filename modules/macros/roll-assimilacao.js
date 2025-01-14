export const macroCommand = `
new Dialog({
    title: "Rolagem Assimilação RPG",
    content: \`
        <form>
            <div class="form-group">
                <label for="d6">Quantidade de D6:</label>
                <div style="display: flex; gap: 5px; align-items: center;">
                    <button type="button" id="decrement-d6">-</button>
                    <input type="number" id="d6" name="d6" value="0" min="0" style="width: 50px; text-align: center;" />
                    <button type="button" id="increment-d6">+</button>
                </div>
            </div>
            <div class="form-group">
                <label for="d10">Quantidade de D10:</label>
                <div style="display: flex; gap: 5px; align-items: center;">
                    <button type="button" id="decrement-d10">-</button>
                    <input type="number" id="d10" name="d10" value="0" min="0" style="width: 50px; text-align: center;" />
                    <button type="button" id="increment-d10">+</button>
                </div>
            </div>
            <div class="form-group">
                <label for="d12">Quantidade de D12:</label>
                <div style="display: flex; gap: 5px; align-items: center;">
                    <button type="button" id="decrement-d12">-</button>
                    <input type="number" id="d12" name="d12" value="0" min="0" style="width: 50px; text-align: center;" />
                    <button type="button" id="increment-d12">+</button>
                </div>
            </div>
        </form>
    \`,
    buttons: {
        roll: {
            label: "Rolar",
            callback: async (html) => {
                const d6 = parseInt(html.find("#d6").val()) || 0;
                const d10 = parseInt(html.find("#d10").val()) || 0;
                const d12 = parseInt(html.find("#d12").val()) || 0;

                if (d6 === 0 && d10 === 0 && d12 === 0) {
                    ui.notifications.warn("Por favor, insira ao menos um dado para rolar.");
                    return;
                }

                const formula = [
                    d6 > 0 ? \`\${d6}da\` : "",
                    d10 > 0 ? \`\${d10}db\` : "",
                    d12 > 0 ? \`\${d12}dc\` : ""
                ].filter(Boolean).join(" + ");

                const roll = new Roll(formula);
                await roll.evaluate(); // Avaliação assíncrona válida
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker(),
                });
            }
        }
    },
    default: "roll",
    render: (html) => {
        html.find("#increment-d6").click(() => {
            const input = html.find("#d6");
            input.val(parseInt(input.val()) + 1);
        });
        html.find("#decrement-d6").click(() => {
            const input = html.find("#d6");
            if (parseInt(input.val()) > 0) input.val(parseInt(input.val()) - 1);
        });
        html.find("#increment-d10").click(() => {
            const input = html.find("#d10");
            input.val(parseInt(input.val()) + 1);
        });
        html.find("#decrement-d10").click(() => {
            const input = html.find("#d10");
            if (parseInt(input.val()) > 0) input.val(parseInt(input.val()) - 1);
        });
        html.find("#increment-d12").click(() => {
            const input = html.find("#d12");
            input.val(parseInt(input.val()) + 1);
        });
        html.find("#decrement-d12").click(() => {
            const input = html.find("#d12");
            if (parseInt(input.val()) > 0) input.val(parseInt(input.val()) - 1);
        });
    }
}).render(true);
`;
