const ethers = require('ethers')
const fs = require('fs-extra')
// console.log(fs)
async function main() {
    const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545')

    const wallet = new ethers.Wallet('5679d9b63ef9cf2f799bac86b87520b9cfdd37422c599a50d9814e7a06dccbbf',provider);
    const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi','utf8')
    const binary = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin','utf8')
    const contractFactory = new ethers.ContractFactory(abi,binary,wallet)
    console.log('deploying')
    const contract = await contractFactory.deploy() // contract deployment
    const transactionReciept = await contract.deployTransaction.wait(1) // transaction receipt
    console.log(transactionReciept)
}

main()
 .then(()=> process.exit(0))
 .catch((error)=> {
     console.log(error)
 }
// console.log(error)
)