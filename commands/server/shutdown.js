const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('Shuts down the server gracefully'),
        async execute(interaction){
            await interaction.reply('not implemented!')
        }
};
