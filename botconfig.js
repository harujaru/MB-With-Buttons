module.exports = {
  Admins: ["668818456673779737"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/SchEbTFaNM", //Donot change..
  Token: process.env.Token || "MTAzNzYxMzMwNjQ1OTk3OTc3Nw.Gx-kov.RQX9VJCrLk7hEqDdcCNQrFDD0pk1GcHA1t1k1Q", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1037613306459979777", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "g49wae_jt3xAdfXF7sdwf9UjrDQFtg2N", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "ChangeIt", //Safety for your bot its like a password
  IconURL:
    "https://media.discordapp.net/attachments/892329976114864149/892424875082407976/image0.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass",
    // I have already Provided you with a lavalink Server. 😁
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "b7ea63053e734c22a8aa4c8803b4718f", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "5a417565c72545cf83711bbb84dd39f4", //Spotify Client Secret
    // I have Provided a Spotify Server too. 😁
  },
};
