import { expect } from 'chai'
import { BigNumber } from 'ethers'

const { ethers, network } = require('hardhat')

import { CommonStakeERC721EarnuShibaFactory, CommonStakeERC721EarnuShibaFactory__factory} from '../typechain'

const uShiba: { [name: string]: string } = {
  bsct: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  bsc: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
}

const commonStakeERC721EarnuShibaFactoryAddress: { [name: string]: string } = {
  bsct: '0x5138202750fB67b4f9D9316Ee7805F0cEC2Bd1E1',
  bsc: '0x5138202750fB67b4f9D9316Ee7805F0cEC2Bd1E1', // TODO
}

const defaultGetStakingPowerAddress: { [name: string]: string } = {
  bsct: '0x7ca5A0c78d2fB3bc9eCC68860c308DCbb18bD0fd',
  bsc: '0x7ca5A0c78d2fB3bc9eCC68860c308DCbb18bD0fd', // TODO
}

const earnuShibaMasterAddress: { [name: string]: string } = {
  bsct: '0x61d777dC41Bb391c491a644974C18fC069Ad3e62',
  bsc: '0x61d777dC41Bb391c491a644974C18fC069Ad3e62', // TODO
}

const uShibaMuskMixerAddress: { [name: string]: string } = {
  bsct: '0xd1B12D0DbeF4e725A59381F68ceA83014CdEf80b',
  bsc: '0x6EFdD0380C9DdE9c50ae99669d8FFd9439EFCDBd',
}

const uShibaMuskMixerCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0xB3561Dd2eeBc78E4C82B701aeE78400F5a9dcBa6',
  bsc: '0xB3561Dd2eeBc78E4C82B701aeE78400F5a9dcBa6', // TODO
}

const doggyEquipmentAddress: { [name: string]: string } = {
  bsct: '0x043E2Dd8C1059637B10131c01CD294A5d2C0fbdE',
  bsc: '0x15C7160F82DEF33AF05B7348843f3Ad647b4d012',
}

const doggyEquipmentCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0x2a39264488095Aa2c8196fA5d753C5b52AAB8544',
  bsc: '0x2a39264488095Aa2c8196fA5d753C5b52AAB8544', // TODO
}

const barkingNFTAddress: { [name: string]: string } = {
  bsct: '0x2042629F09193ef0e84Ce38f80d82d715E67378F',
  bsc: '0xa86Bd7C13C19CC4586dcb07CF06Fa1f9578a6212',
}

const barkingNFTCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0x6aea9F4dFd1e5e96d8AC914EdE09ED50f4F2aFd1',
  bsc: '0x6aea9F4dFd1e5e96d8AC914EdE09ED50f4F2aFd1', // TODO
}

const doggyNFTAddress: { [name: string]: string } = {
  bsct: '0xFc2198e0d4e6a5e65738C1f9E55F5A02c03B36cc',
  bsc: '0x2DcA8804DCA120085E9b511F18D8511F58FaA64C',
}

const doggyNFTCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0xB6E2b1ea5b095e126B9fb19ea104763dca3111Cc',
  bsc: '0xB6E2b1ea5b095e126B9fb19ea104763dca3111Cc', // TODO
}

const uShibaSoccerAddress: { [name: string]: string } = {
  bsct: '0xD48e0b6052A04d89D9FD80dF4563BDf736078fE0',
  bsc: '0xD48e0b6052A04d89D9FD80dF4563BDf736078fE0',
}

const uShibaSoccerCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0xdce54e2AA153699968553b1f856c029a74EC4Ac6',
  bsc: '0xdce54e2AA153699968553b1f856c029a74EC4Ac6', // TODO
}

const comboNFT: { [name: string]: string } = {
  bsct: '0xC3a7736b284cE163c45D92b75da4d4A34847be63',
  bsc: '0xa7463C3163962b12AEB623147c2043Bb54834962',
}

const getCarNFTStakingPowerAddress: { [name: string]: string } = {
  bsct: '0xC8eEDC71Cc45BC7B59b5E141374ac123cC0ba4C6',
  bsc: '0xC8eEDC71Cc45BC7B59b5E141374ac123cC0ba4C6', // TODO
}

const getComboStakingPowerAddress: { [name: string]: string } = {
  bsct: '0xEcB7877F445bC51C81F66C965B920316c984198f',
  bsc: '0xEcB7877F445bC51C81F66C965B920316c984198f', // TODO
}

const getPokerCardStakingPowerAddress: { [name: string]: string } = {
  bsct: '0xE8FDd6EFaC049c6FaA28031cCAf0F84513D6Dff9',
  bsc: '0xE8FDd6EFaC049c6FaA28031cCAf0F84513D6Dff9', // TODO
}

const carNFTAddress: { [name: string]: string } = {
  bsct: '0x272eAF0FbF902C1d83ce41555a76159f6bc1DCBD',
  bsc: '0x1D09fC4B295a2fa6F0E2E64a345BAE419EB04699',
}

const pokerCardAddress: { [name: string]: string } = {
  bsct: '0x95e81fc8cD65A95DB14DD55e22ab571134E86b8E',
  bsc: '0xaDb0Ae1cb9cD289271D8D1f7a9757A2997CF940d',
}

const carNFTCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0x95Ee9f566A40FC2419B9cC2caFD89c9c9EFDA503',
  bsc: '0x95Ee9f566A40FC2419B9cC2caFD89c9c9EFDA503', // TODO
}

const comboNFTCommonStakeERC721EarnuShiba: { [name: string]: string } = {
  bsct: '0x4D4fbF44F8db31A277D16430B7601dA5911948e2',
  bsc: '0x4D4fbF44F8db31A277D16430B7601dA5911948e2', // TODO
}

const pokerCardCommonStakeERC721EarnuShibaAddress: { [name: string]: string } = {
  bsct: '0xE7dDC412F226FDAF379F119334ce1f31C4AFD609',
  bsc: '0xE7dDC412F226FDAF379F119334ce1f31C4AFD609', // TODO
}

let commonStakeERC721EarnuShibaFactory: CommonStakeERC721EarnuShibaFactory

describe('CommonStakeERC721EarnuShibaFactory', () => {
  beforeEach(async () => {
    const commonStakeERC721EarnuShibaFactoryFactory: CommonStakeERC721EarnuShibaFactory__factory = await ethers.getContractFactory(
      'CommonStakeERC721EarnuShibaFactory'
    )
    commonStakeERC721EarnuShibaFactory = commonStakeERC721EarnuShibaFactoryFactory.attach(commonStakeERC721EarnuShibaFactoryAddress[network.name])
  })

  it('createuShibaMuskMixerCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'uShibaMuskMixerStakingPower',
        'uShibaMuskMixerStakingPower',
        earnuShibaMasterAddress[network.name],
        uShibaMuskMixerAddress[network.name],
        defaultGetStakingPowerAddress[network.name],
        false,
    )
    console.log(`createuShibaMuskMixerCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createuShibaMuskMixerCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0xB3561Dd2eeBc78E4C82B701aeE78400F5a9dcBa6
     createuShibaMuskMixerCommonStakeERC721EarnuShiba 0x11cb73eb5a0f153e6059f9853f39ec88970babe2dfe58eab1106927a74c2579d
     createuShibaMuskMixerCommonStakeERC721EarnuShiba done
     */
  })

  it('createDoggyEquipmentCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'DoggyEquipmentStakingPower',
        'DoggyEquipmentStakingPower',
        earnuShibaMasterAddress[network.name],
        doggyEquipmentAddress[network.name],
        defaultGetStakingPowerAddress[network.name],
        false,
    )
    console.log(`createDoggyEquipmentCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createDoggyEquipmentCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0x2a39264488095Aa2c8196fA5d753C5b52AAB8544
     createDoggyEquipmentCommonStakeERC721EarnuShiba 0xf420ee6cbb8f0b049b250da639962f66fc6f783ec22873694c665ce7f02cab75
     createDoggyEquipmentCommonStakeERC721EarnuShiba done
     */
  })

  it('createBarkingNFTCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'BarkingNFTStakingPower',
        'BarkingNFTStakingPower',
        earnuShibaMasterAddress[network.name],
        barkingNFTAddress[network.name],
        defaultGetStakingPowerAddress[network.name],
        false,
    )
    console.log(`createBarkingNFTCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createBarkingNFTCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0x6aea9F4dFd1e5e96d8AC914EdE09ED50f4F2aFd1
     createBarkingNFTCommonStakeERC721EarnuShiba 0x80b891ca302d066dc83536b7599562d56bfa2ed76a5ccdfe3fd3ec72615c1f79
     createBarkingNFTCommonStakeERC721EarnuShiba done
     */
  })

  it('createDoggyNFTCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'DoggyNFTStakingPower',
        'DoggyNFTStakingPower',
        earnuShibaMasterAddress[network.name],
        doggyNFTAddress[network.name],
        defaultGetStakingPowerAddress[network.name],
        false,
    )
    console.log(`createDoggyNFTCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createDoggyNFTCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0xB6E2b1ea5b095e126B9fb19ea104763dca3111Cc
     createDoggyNFTCommonStakeERC721EarnuShiba 0x3aa072802141e294666e0a3b7b272c7316d00f8175c9d74698f065634757c422
     createDoggyNFTCommonStakeERC721EarnuShiba done
     */
  })

  it('createuShibaSoccerCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'uShibaSoccerStakingPower',
        'uShibaSoccerStakingPower',
        earnuShibaMasterAddress[network.name],
        uShibaSoccerAddress[network.name],
        defaultGetStakingPowerAddress[network.name],
        false,
    )
    console.log(`createuShibaSoccerCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createuShibaSoccerCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0xdce54e2AA153699968553b1f856c029a74EC4Ac6
     createuShibaSoccerCommonStakeERC721EarnuShiba 0x60197558c3256fa4ec83f48b9a1d89873372c10381b6854c8c16df73b1820803
     createuShibaSoccerCommonStakeERC721EarnuShiba done
     */
  })


  it('createCarNFTCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'CarNFTStakingPower',
        'CarNFTStakingPower',
        earnuShibaMasterAddress[network.name],
        carNFTAddress[network.name],
        getCarNFTStakingPowerAddress[network.name],
        true,
    )
    console.log(`createCarNFTCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createCarNFTCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0x95Ee9f566A40FC2419B9cC2caFD89c9c9EFDA503
     createCarNFTCommonStakeERC721EarnuShiba 0xfb0fcbc6a5eb4eaab05c94dba353e018a1ed2d2a93aa93f7fe87a4b14c1322d7
     createCarNFTCommonStakeERC721EarnuShiba done
     */
  })


  it('createComboNFTCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'ComboStakingPower',
        'ComboStakingPower',
        earnuShibaMasterAddress[network.name],
        comboNFT[network.name],
        getComboStakingPowerAddress[network.name],
        false,
    )
    console.log(`createComboNFTCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createComboNFTCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0x4D4fbF44F8db31A277D16430B7601dA5911948e2
     createComboNFTCommonStakeERC721EarnuShiba 0xb2d6043f2d0601934258fe6f6212fb7c26d822c1ffe1d5bb7424560d16d3ea20
     createComboNFTCommonStakeERC721EarnuShiba done
     */
  })


  it('createPokerCardCommonStakeERC721EarnuShiba', async () => {
    const createCommonStakeERC721EarnuShibaTx = await commonStakeERC721EarnuShibaFactory.createCommonStakeERC721EarnuShiba(
        'PokerCardStakingPower',
        'PokerCardStakingPower',
        earnuShibaMasterAddress[network.name],
        pokerCardAddress[network.name],
        getPokerCardStakingPowerAddress[network.name],
        false,
    )
    console.log(`createPokerCardCommonStakeERC721EarnuShiba ${createCommonStakeERC721EarnuShibaTx.hash}`)
    await createCommonStakeERC721EarnuShibaTx.wait()
    console.log(`createPokerCardCommonStakeERC721EarnuShiba done`)
    /**
     // bsct 0xE7dDC412F226FDAF379F119334ce1f31C4AFD609
     createPokerCardCommonStakeERC721EarnuShiba 0x4cf4f151264b0356dd1c0ec8ddfbdcecec4c1f24a1ec8c5af739ecb809520c57
     createPokerCardCommonStakeERC721EarnuShiba done
     */
  })

})
