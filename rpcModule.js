const rpc = require('discord-rpc')
const rpcClient = new rpc.Client({
    transport: 'ipc'
})

class RPC {
    run() {
        rpcClient.on('ready', () => {
            rpcClient.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: "are you ready to die?",
                    state: 'youtube.com/kauescriptz',
                    assets: {
                        large_image: "logo",
                        large_text: "@gxth.kaue"
                    },
                    buttons: [{
                        label: "Download",
                        url: "https://www.youtube.com/kauescriptz"
                    }]
                }
            })
        })

        rpcClient.login({
            clientId: '893619290341777450'
        }).catch(() => {}).then(() => console.log('RPC connected!'))
    }
}

module.exports = RPC
