const { SlashCommandBuilder } = require('discord.js');
const rconBuddy = require("../../utility/rconBuddy");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rstop')
        .setDescription('Stops the server via rcon command')
        .addNumberOption(timer =>
            timer.setName('timer')
                .setDescription('The time in s to shutdown the server (defaults to 60)')
                .setMinValue(10)
                .setMaxValue(300)
        ),
        async execute(interaction){
            let timer = interaction.options.getNumber('timer') ?? 10;
            let output
            await rconBuddy.postCommand(`Shutdown ${timer}`)
                .then( response => {
                    console.debug(response)
                    output = response.result
                })
                .catch(error => {
                    console.error(error)
                    output = 'Error!'
                })

            await interaction.reply(output)
        }
};
