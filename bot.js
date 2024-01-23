const fs = require('fs');
const ytdl = require('ytdl-core');
const axios = require('axios');

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('colors');
//colores
const reset = '\x1b[0m';
const rojo = '\x1b[31m';
const verde = '\x1b[32m';
const amarillo = '\x1b[33m';
const azul = '\x1b[34m';
const magenta = '\x1b[35m';
const cyan = '\x1b[36m';

const textoMulticolor = "\n                                    ██████╗ ███████╗██████╗ ██████╗ ██╗████████╗ █████╗   ██████╗  █████╗ ████████╗\n                                    ██╔══██╗██╔════╝██╔══██╗██╔══██╗██║╚══██╔══╝██╔══██╗  ██╔══██╗██╔══██╗╚══██╔══╝\n                                    ██████╔╝█████╗  ██████╔╝██████╔╝██║   ██║   ██║  ██║  ██████╦╝██║  ██║   ██║   \n                                    ██╔═══╝ ██╔══╝  ██╔══██╗██╔══██╗██║   ██║   ██║  ██║  ██╔══██╗██║  ██║   ██║   \n                                    ██║     ███████╗██║  ██║██║  ██║██║   ██║   ╚█████╔╝  ██████╦╝╚█████╔╝   ██║   \n                                    ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚════╝   ╚═════╝  ╚════╝    ╚═╝   \n                                     ━━━━━━━━━━━━━━━━━━━━━━━━━━ [ Iniciando el bot ] ━━━━━━━━━━━━━━━━━━━━━━━━━━";


console.clear()


console.log(textoMulticolor.rainbow);








const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
qrcode.generate( qr, { small: true });
});

client.on('ready', () => {
   
const textoMulticolor = "\n                                    ██████╗ ███████╗██████╗ ██████╗ ██╗████████╗ █████╗   ██████╗  █████╗ ████████╗\n                                    ██╔══██╗██╔════╝██╔══██╗██╔══██╗██║╚══██╔══╝██╔══██╗  ██╔══██╗██╔══██╗╚══██╔══╝\n                                    ██████╔╝█████╗  ██████╔╝██████╔╝██║   ██║   ██║  ██║  ██████╦╝██║  ██║   ██║   \n                                    ██╔═══╝ ██╔══╝  ██╔══██╗██╔══██╗██║   ██║   ██║  ██║  ██╔══██╗██║  ██║   ██║   \n                                    ██║     ███████╗██║  ██║██║  ██║██║   ██║   ╚█████╔╝  ██████╦╝╚█████╔╝   ██║   \n                                    ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚════╝   ╚═════╝  ╚════╝    ╚═╝   \n                                 ━━━━━━━━━━━━━━━━━━━━━━━━━━ [ El bot ya esta acitivo ] ━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n\n\n\n\n";


console.clear()


console.log(textoMulticolor.rainbow);


});

// Array de preguntas y respuestas del bot



const { MessageMedia } = require('whatsapp-web.js');

client.on('message', async (msg) => {
    if (msg.body === '°menu') {
        const media = await MessageMedia.fromUrl('https://youtu.be/R1yW7h1_1ts?si=UnVuG9fQtliGucbk');
        await client.sendMessage(msg.from, media);
    }
});
 
  client.initialize();