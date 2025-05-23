const Api = require('../../api');
const axios = require('axios');

 const redeemCode = async (code, discordId) => {
    jsonForm = {
        code: code,
        discordId: discordId
    }

    try {
        const response = await Api.post(`redeem/use`, jsonForm);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const statusCode = error.response?.status; // Códigos de status da resposta
            return statusCode
        } else {
            throw new Error('Erro inesperado');
        }
    }
}

module.exports =  redeemCode ;