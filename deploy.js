const ethers = require('ethers')
const fs = require('fs-extra')
async function main() {
    const provider = new ethers.providers.JsonRpcSigner('HTTP://127.0.0.1:7545')

    const wallet = new ethers.wallet('a3726b28e71450bb56cf8f48d88e8e0123fa48639c4a222df6aa11f7804657f6',provider);
    const abi = fs.readFileSync('./simpleStorage_sol_SimpleStorage.abi','utf8')
    const binary = fs.readFileSync('./simpleStorage_sol_SimpleStorage.bin','utf8')
}

main().then(()=>{
    process.exit(0)
}).catch((error)=>{
    process.exit(1)
console.log(error)
})