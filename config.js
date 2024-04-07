const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_38_04_07_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0xhc0xSR0ZPWDhwK3lJbjNwdlYvUEVaTXI0RzBDSUM3TU5IK1RRNTdYcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFWM1lYam5VSExGdzhKTEp1QmFjbS8xTE1mOFNBd2x0VE5ISm83S0VmMTA9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieVBTQy96bktmN2pKd0JZbzlBRnkydGNNUW5TY01IOXkrbXkzbS9MaVhIQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlppR00xM3ovYXdCS254Tkl1ellTRzNxTjdoOWFLTnFac1p4dmZKV0pKVnM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieU5wMTUrTS9YOHV5bGs5OEhta1VRSzVKYlVHYmVrL3ZnRit5Uk9CVzJuMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlByTnpoRU9GS1NFR2VwdDBiaXd6OFdtZlRRaUVXOUQwVjhaUStNZEROMWc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI0RG96SWxqREZvM2E5TVJFTjVLazFkaEJvTFcrc2JGaDFGN3BzeDU0RjJJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRmlKMkh1Q2EyRk1ScVU4SUlsaytqdWhjMkhaU2dLMVlGRXd0aDB1UW93RT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDakM1NmNQK0ROejM1SEJvSkhOWjFoV2VIeWt0cnVlcmRuVmFha2l3SlY5Nit0cUVlNjRPVEhQaWZFd0dzRzFqL2tBTzhQR0R0REVrY3BwaUJUL0lqdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NDcsXCJhZHZTZWNyZXRLZXlcIjpcIjJZN0dvZ1R6UExsYmRWNzBYNndEUEZkazFpSWNYcU5rK3BxVjV6eURRYW89XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI1NTYxODYyNDI5NTRAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMjRBMDhCQzEwOEQxQjJFMUE4QjNDQkIyQTQxRTg1RTNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjUyMjI4NX0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI1NTYxODYyNDI5NTRAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQ0I2NjEzMUYzQzY4MUUwMDYyQTUwMUFFNzIyQTc5MERcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjUyMjI4Nn1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIkpXYkt0X0xxU0RlYjQ2dVlURjh1TWdcIixcInBob25lSWRcIjpcImYzNjM0ZTNjLWE5OTItNGYzNy05NGRkLTEyZDQ3ODU4NDE5NVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaXVPenBCN0N1YmUwTG5RQ2RaYlBBNGdaazhFPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHYjBxbUVWTm1BTDRGMUZNL0VWbTlYQ3hrTjg9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0tIYzJJVUdFS2lJekxBR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJqdEE0Z1lBTDlHdXNFR1BTVmFYVk1JWG4xek5mcVQzVXpKZ0YwSVhUZXlNPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiNXBvMFg1OTUxQ0pHbzJwZ3FLZU9BR0U3V0VUSEFUMVRTa1drOEtOZUtBVzdDam1ESU1ySTdmQkp4cG5uclhLRTJ6d1Rpa1d0ajhNTEtONFpPdC93REE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJPeHM4UStETU9IM1RpNVhwMWVEdmdYUDFsUWpSZmMyb3QwaWkyMVI1UTFOOVppTjQzRE9rRnJ3QVhpVjJBOWdpYUdvUGFCd2VEV1pNMVdOTzFIZTNnQT09XCJ9LFwibWVcIjp7XCJpZFwiOlwiNTU2MTg2MjQyOTU0OjdAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjMwNTMyNDM2NzQ2NDUxOjdAbGlkXCIsXCJuYW1lXCI6XCJRdWVyIGFqdWRhPyDwn5GEXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiNTU2MTg2MjQyOTU0OjdAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWTdRT0lHQUMvUnJyQkJqMGxXbDFUQ0Y1OWN6WDZrOTFNeVlCZENGMDNzalwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTI1MjIyODMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBQ0g2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0g2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkFGN2dnRjUxLytCZWcwZUVWRkNrdXNTSUpwZitnM0Mra0JvVE9xOGNjTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjIyNTUyMDk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI1MjIyODU1NjFcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
