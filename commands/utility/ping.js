const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Test commands replies pong!'),
    async execute(interaction){
        await interaction.reply('Pong!')
    }
};
