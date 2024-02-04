const axios = require('axios');
const {RCON_BUDDY_BASEURL: baseurl, PORT: port} = process.env
class RconBuddy {
    constructor() {
        this.baseUrl = `http://${baseurl}:${port}`
        this.authToken = process.env.BEARER_TOKEN
    }

    async postCommand(command) {
        try {
            const response = await axios.post(
                `${this.baseUrl}/command`,
                { command },
                {
                    headers: {
                        Authorization: `Bearer ${this.authToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }

    async info() {
        try {
            const response = await axios.get(
                `${this.baseUrl}/info`,
                {
                    headers: {
                        Authorization: `Bearer ${this.authToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }
}

module.exports = new RconBuddy();