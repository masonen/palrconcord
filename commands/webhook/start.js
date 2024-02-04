const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
// Helper function to format server information

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('Starts the server via configured webhook'),
    async execute(interaction){
        let output
        let response = await axios.get(`http://${process.env.PALWORLD_SERVER_IP_ADDRESS}:${process.env.PALWORLD_WEBHOOK_PORT}/hooks/start`)
        console.log(response)
        await interaction.reply('Start webhook has been executed!')
    }
};
