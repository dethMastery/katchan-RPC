let rpc = require('discord-rpc')
let cli = new rpc.Client({transport: 'ipc'})

let cliID = '942719157055655956'

rpc.register(cliID)

async function setActivity() {
  if (!cli) return;

  cli.setActivity({
    details: `In process of making new album`,
    state: `Pastel Delightful`,
    startTimestamp: new Date().now,
    endTimestamp: new Date().now + 200000000000, 
    largeImageKey: `katchan`,
    largeImageText: `hiya this is katchan`,
    smallImageKey: `none`,
    smallImageText: `nothing here`,

    buttons: [
      {
        label: `katsuragi.wav Homepage`,
        url: `https://katsuragi.cyou`
      },
      {
        label: `Latest Released`,
        url: `https://t.can-i.cyou/katz-wav/love-inlove-heartbroken/`
      }
    ],
  
    instance: true
  })
}

cli.on('ready', async () => {
  setActivity()

  setInterval(() => {
    setActivity()
  }, 60 * 1000)
})

cli.login({ clientId: cliID}).catch(err => console.error(err))