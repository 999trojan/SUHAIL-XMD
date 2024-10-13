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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_57_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRzOE0rODhtNTFWakd2cGJVWGoxaGR4VTc0cFVidFU5SDlVT1d5QjJ6Y009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlUtVzhzOGhFUWFtUkdnM1ZpMDR4a1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjkwODMwOGEtOGYxZS00MGNmLTlhODItODdkNTM2NWM2NWJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIwNCxcbiAgICAgIDE4LFxuICAgICAgMTUxLFxuICAgICAgNzksXG4gICAgICAxMTUsXG4gICAgICAxNDUsXG4gICAgICA4MSxcbiAgICAgIDIxMyxcbiAgICAgIDIyOCxcbiAgICAgIDIwNyxcbiAgICAgIDczLFxuICAgICAgMTU1LFxuICAgICAgMTM5LFxuICAgICAgODksXG4gICAgICAwLFxuICAgICAgMzQsXG4gICAgICAyMzcsXG4gICAgICAxNjMsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxNzIsXG4gICAgICA1NSxcbiAgICAgIDQ3LFxuICAgICAgMTg2LFxuICAgICAgNDcsXG4gICAgICAxOTUsXG4gICAgICAxMjEsXG4gICAgICAyMTIsXG4gICAgICAxNTEsXG4gICAgICAxMDMsXG4gICAgICA3MSxcbiAgICAgIDIxMyxcbiAgICAgIDIzOSxcbiAgICAgIDE1NyxcbiAgICAgIDE0NyxcbiAgICAgIDM2LFxuICAgICAgNjIsXG4gICAgICAxNTksXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDNDhLY0ZFT2YzcjdnR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUUk2VzNSazVVaEE1Qy9abEE0clN4QzJoc1V3SG12NWNPNUZLQ29jeUFTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2Lzl4S1V4QS83Q3ZiTWIvSEF6TEVhSjhqUE14Q09KVlc4ZDZjaEFoNXFjcG9CKy9FV1kwWGNkc1lhcVQ2WG02eWwvZUxCOUk5VThSNHI2UGdmaTdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhci9sUUJ1ZmVEekoxdm1mVTBDZ1NzWEtaRVFnSjg3UG5kbnVSRm1UU3QwZGNTUDVBZnRDdDhESkhSUi9CdElrQlRIM1FjYmR3dlgwOUxaL3M3Ui9pZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwODQxODA3MzozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRyb2phblwiLFxuICAgIFwibGlkXCI6IFwiMjA5NjkzNTA3MDcyMTQ5OjM3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA4NDE4MDczOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4ODM4NjM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS09MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLT0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYSnlWOUg1ckVkdFNnZXVBN29SdkpQUXVsVlVNaGtlbEtvUVZqWjNZVlc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjU4MDg0MTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtPSi5qc29uIjogIntcImtleURhdGFcIjpcIjltMlBiYjUyVVUrenNDSUszMmVNLzRNUGNHV20wTHBRWi8zRnBIRXpzb289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyNTgwODQxNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS09LLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUDFuV09BT0RqLy90eEY1ZVZmQlFCL2tjaTR3Uys4U3o0VEZoclhHZFZWTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI1ODA4NDE2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLT0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTMEd2b0NsMFZ2dnhFRW5yMGxXdFh4ODNHRi9KakxyQVBHV2ZPTFFGQkhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjU4MDg0MTYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtPTS5qc29uIjogIntcImtleURhdGFcIjpcIkFwK2VKdTBMRkh3QldpVW5tRTFNU0o1b0pNc3IvQ0ZrdS9ONlpVdlRucFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyNTgwODQxNixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS09OLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHlKNGY4d2FzZmJYMnhoSGdhdDU5dkYxZnU4YkgzNnBSV1NLZkZXbjdTOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI1ODA4NDE2LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLT08uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiWHBTT3BscCsxNExYcmJZL3NFbmJjdFFxUkp0MDRKUUNkQk9LOWRpM1NvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjU4MDg0MTYsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODgzODUzNTk5M1wifSIKfQ=="  // PUT your SESSION_ID 


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
