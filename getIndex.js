const ethers = require("ethers")

const { address, abi } = require("./data")

const pk = "0x0351ba02862505d52ce2756b6864b67f4e844343b6df9530396a80624ca2c407"

const provider = new ethers.JsonRpcProvider("HTTP://192.168.19.20:7545")
const wallet = new ethers.Wallet(pk, provider)

const counter = new ethers.Contract(address, abi, wallet)

async function getIndex() {
  let index = await counter.getIndex()
  console.log(`Index is: ${index}`)
}

getIndex()
