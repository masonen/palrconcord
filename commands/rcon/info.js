const { SlashCommandBuilder } = require('discord.js');
const rconBuddy = require('../../utility/rconBuddy')

// Helper function to format server information
function formatServerInfo(response) {
    const playerCount = response.players.length;
    const playerNames = response.players.map(player => player.name).join('\n');
    const serverName = response.serverName;
    const serverVersion = response.serverVersion;

    return `**Server Name:** \`${serverName}\`\n**Server Version:** \`${serverVersion}\`\n\n**Players online**: ${playerCount}\n\`\`\`${playerNames}\`\`\`\n\n`;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rinfo')
        .setDescription('Outputs Serverinfo'),
        async execute(interaction){
            let output
            await rconBuddy.info()
                .then( response => {
                    console.debug(response)
                    output = formatServerInfo(response)
                })
                .catch(error => {
                    console.error(error)
                    output = 'Error!'
                })

            await interaction.reply(output)
        }
};
