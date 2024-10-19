const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://www.youtube.com/" ;  
global.video= "https://www.youtube.com/" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="worldwidetrojan@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_07_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImhnQ2xnaVpYVXJxZ2xOaGxkRHlKREREeFlrb2Y0dDQ3NkM0bnZFeExoY1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRiX0pISUFvVDktVmRjMUZzNXpENGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFiMGY4MjktMzMxNS00NzFhLThlY2UtMGI2MjlhMTE3MjdiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgOTksXG4gICAgICA2NixcbiAgICAgIDcwLFxuICAgICAgMTQyLFxuICAgICAgMjE1LFxuICAgICAgNTMsXG4gICAgICAxMjcsXG4gICAgICA4MCxcbiAgICAgIDE3MyxcbiAgICAgIDE1LFxuICAgICAgMjEyLFxuICAgICAgMjUwLFxuICAgICAgMjI4LFxuICAgICAgMjI5LFxuICAgICAgMTczLFxuICAgICAgMTQsXG4gICAgICAyMDgsXG4gICAgICAyLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDMxLFxuICAgICAgMTc4LFxuICAgICAgMTQ3LFxuICAgICAgMTYxLFxuICAgICAgMjM5LFxuICAgICAgMjE1LFxuICAgICAgMTk0LFxuICAgICAgMTk0LFxuICAgICAgNjMsXG4gICAgICAxNTMsXG4gICAgICAyMDcsXG4gICAgICAyMDIsXG4gICAgICA2NSxcbiAgICAgIDAsXG4gICAgICA0NixcbiAgICAgIDk2LFxuICAgICAgODgsXG4gICAgICAxMDUsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRzQ4S2NGRUx5SnpyZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFJNlczUms1VWhBNUMvWmxBNHJTeEMyaHNVd0htdjVjTzVGS0NvY3lBU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUW5xQnM4SDZmRHN2QXFKZ1ZacHl1Tmg5ZWdoRER4cHZlMFJqYWFmZU9wVFJWampWcm9yckNFbFJyUFBWcTZSQ1RBS2VxaWNoU0ZIVDRKYlpDNFpTQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSDgyNVNDMmRIcTFhOXBMMDF2Vkd4c1Ywa2dmK3o1cHJXNUUyVFlZUVNFY2ZpSloxTzI4RGRhQzB6TmxCNHN4K0U2dUF4S3pkOFBDOUluS1RxUTk2QlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDg0MTgwNzM6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUcm9qYW5cIixcbiAgICBcImxpZFwiOiBcIjIwOTY5MzUwNzA3MjE0OTozOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODQxODA3MzozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTMzMjQxOFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
