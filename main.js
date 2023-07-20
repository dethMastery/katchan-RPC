let rpc = require('discord-rpc')
let cli = new rpc.Client({transport: 'ipc'})

let cliID = '1131656141227700245'

rpc.register(cliID)

async function setActivity() {
  if (!cli) return;

  cli.setActivity({
    state: `@pompommuu_`,
    details: `I'm in loving my girl`,
    startTimestamp: new Date('Jul 7, 2023'),
    endTimestamp: new Date('Jul 7, 2024'), 
    largeImageKey: `katchan-crop`,
    largeImageText: `..`,
    smallImageKey: `none`,
    smallImageText: `..`,

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
  console.log("katzRPC Online");

  setInterval(() => {
    setActivity()
  }, 60 * 1000)
})

cli.login({ clientId: cliID}).catch(err => console.error(err))