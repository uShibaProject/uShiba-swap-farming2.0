import { CommonStakeERC721EarnuShiba, CommonStakeERC721EarnuShiba__factory } from '../../typechain'
import { BigNumber } from 'ethers'
import { approveErc20, erc721SetApprovalForAll } from '../shared/utilities'
const { ethers, network, upgrades } = require('hardhat')
const uShibaMuskMixerAddress: { [name: string]: string } = {
  bsct: '0xd1B12D0DbeF4e725A59381F68ceA83014CdEf80b',
  bsc: '0x6EFdD0380C9DdE9c50ae99669d8FFd9439EFCDBd',
}

const uShibaMuskMixerCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0xC581a6e2Bc2066ab88093833e25552e224966548',
  bsc: '0xC581a6e2Bc2066ab88093833e25552e224966548', // TODO
}

let commonStakeERC721EarnuShiba: CommonStakeERC721EarnuShiba
describe('uShibaMuskMixerCommonStakeERC721EarnuShiba', () => {
  beforeEach(async () => {
    const factory: CommonStakeERC721EarnuShiba__factory = await ethers.getContractFactory('CommonStakeERC721EarnuShiba')
    commonStakeERC721EarnuShiba = factory.attach(uShibaMuskMixerCommonStakeERC721EarnuShibaAddress[network.name])
  })

  it('stake', async () => {
    await erc721SetApprovalForAll(uShibaMuskMixerAddress[network.name], commonStakeERC721EarnuShiba.address)
    const stakeTx = await commonStakeERC721EarnuShiba.stake(1)
    console.log(`stake ${stakeTx.hash}`)
    await stakeTx.wait()
    console.log(`stake done`)
    /**
     */
  })

  it('harvest', async () => {
    const harvestTx = await commonStakeERC721EarnuShiba.harvest()
    console.log(`harvest ${harvestTx.hash}`)
    await harvestTx.wait()
    console.log(`harvest done`)
    /**
     */
  })

  it('unstake', async () => {
    const unstakeTx = await commonStakeERC721EarnuShiba.unstake(1)
    console.log(`unstake ${unstakeTx.hash}`)
    await unstakeTx.wait()
    console.log(`unstake done`)
    /**
     */
  })
})
