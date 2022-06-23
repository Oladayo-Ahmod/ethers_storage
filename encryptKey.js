const ethers = require("ethers")
const fs = require('fs-extra')
require("dotenv").config()
// const dotenv = require('')

async function main(){
    const wallet = await new ethers.Wallet(process.env.PRIVATE_KEY)
    const encrypted_key = await wallet.encrypt(process.env)
}

main()
 .then(()=> process.exit(0))
 .catch((error)=> {
     console.log(error)
 }
// console.log(error)
)