/* eslint-disable import/no-unused-modules */
import { Factory } from 'core'
import { constants, RpcProvider } from 'starknet'

export async function create() {
  const provider = new RpcProvider({
    nodeUrl: 'https://starknet-mainnet.public.blastapi.io',
  })

  const factory = new Factory({ provider, chainId: constants.StarknetChainId.SN_MAIN })

  try {
    await factory.getMemecoin('0x')
  } catch (e) {
    console.log('Error: shit happened')
  }

  console.log('create memecoin')
}
