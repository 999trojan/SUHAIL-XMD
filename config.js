const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://pixabay.com/music/" ;  
global.video= "https://www.youtube.com/" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708418073";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_10_10_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRUDhVWjEzeEgyWXpYT3YzMmliVS9mRE4waHBMV2M3ZCtJZzVhWFBCNit3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwT094b3NsMVQ0eUtLTGRrS1JLV19BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxZmFhYTkzLTg2OTgtNGI4MC05YzBmLTNjNDZiMWYwZWEyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICA2LFxuICAgICAgMTIsXG4gICAgICA2NSxcbiAgICAgIDYxLFxuICAgICAgMTY0LFxuICAgICAgMTI4LFxuICAgICAgMzMsXG4gICAgICAyNTQsXG4gICAgICAxNjcsXG4gICAgICAxNTYsXG4gICAgICAxMzYsXG4gICAgICAxNjQsXG4gICAgICAxMDYsXG4gICAgICAyNixcbiAgICAgIDE2MixcbiAgICAgIDcyLFxuICAgICAgMTMzLFxuICAgICAgMTE4LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMTA0LFxuICAgICAgMTYyLFxuICAgICAgNTksXG4gICAgICAxNyxcbiAgICAgIDg2LFxuICAgICAgMTIsXG4gICAgICAyMDYsXG4gICAgICAxOCxcbiAgICAgIDIzMSxcbiAgICAgIDIzMCxcbiAgICAgIDEzNCxcbiAgICAgIDEyMSxcbiAgICAgIDE3NCxcbiAgICAgIDg1LFxuICAgICAgMTk3LFxuICAgICAgMTUsXG4gICAgICAxMzYsXG4gICAgICAxODAsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQzQ4S2NGRUttUHBMZ0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFJNlczUms1VWhBNUMvWmxBNHJTeEMyaHNVd0htdjVjTzVGS0NvY3lBU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSjhNWG1mZGZSMkFpMHN4T0FPdytHL1c3amRqYUlOTm8rYk13dUxoQk9OSXdFazJ4K0ZGZUQ1eEpOUThVcVYwRnpsWjJUZnNQYjRvdXZBdXdreEluQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ3Y1RGtZQ0J1MWN1dXRqWnhEWUNIR1VKcnp3V3lsbmNVWklCUVQwWTlmSkJVellTM1hiUURqaytRWlZ3VWpRU08zZW1vb3FEL0tjUUVYcG5RTGlnaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDg0MTgwNzM6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUcm9qYW5cIixcbiAgICBcImxpZFwiOiBcIjIwOTY5MzUwNzA3MjE0OTozNUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODQxODA3MzozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODY0NTAzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtPTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS09JLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWEp5VjlINXJFZHRTZ2V1QTdvUnZKUFF1bFZVTWhrZWxLb1FWalozWVZXND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI1ODA4NDE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLT0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5bTJQYmI1MlVVK3pzQ0lLMzJlTS80TVBjR1dtMExwUVovM0ZwSEV6c29vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjU4MDg0MTYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtPSy5qc29uIjogIntcImtleURhdGFcIjpcIlAxbldPQU9Eai8vdHhGNWVWZkJRQi9rY2k0d1MrOFN6NFRGaHJYR2RWVk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyNTgwODQxNixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS09MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUzBHdm9DbDBWdnZ4RUVucjBsV3RYeDgzR0YvSmpMckFQR1dmT0xRRkJIQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI1ODA4NDE2LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLT00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBcCtlSnUwTEZId0JXaVVubUUxTVNKNW9KTXNyL0NGa3UvTjZaVXZUbnBRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjU4MDg0MTYsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODY0NDM4NjEwOFwifSIKfQ=="  // PUT your SESSION_ID 


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
