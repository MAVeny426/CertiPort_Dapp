import { Router } from 'express'
import { id, Interface, JsonRpcProvider } from 'ethers'
import details from '../Routes/deployed_addresses.json' assert { type: 'json' }
import Cert from '../Routes/Cert.json' assert { type: 'json' }
const router = Router()

const provider = new JsonRpcProvider('http://127.0.0.1:8545/')
const eventTopic = id('Issued(uint256,string,string,string,string)')
const iface = new Interface(Cert.abi)

router.get('/', async (req, res) => {
  let eventlogs = []

  BigInt.prototype.toJSON = function () {
    return this.toString()
  }

  await provider
    .getLogs({
      fromBlock: 'earliest',
      toBlock: 'latest',
      address: details['CertModule#Cert'],
      topics: [eventTopic],
    })
    .then((logs) => {
      logs.forEach((log) => {
        eventlogs.push(iface.parseLog(log))
      })
    })
    console.log(eventlogs);
    
  res.json(eventlogs)
})

export {router}