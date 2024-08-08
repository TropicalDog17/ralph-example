import React from 'react'
import styles from '@/styles/Home.module.css'
import { AlephiumConnectButton, useWallet } from '@alephium/web3-react'
import PriceUpdater from '@/components/PriceUpdater'
import RandomValueUpdater from '@/components/RandomValueUpdater'

export default function Home() {
  const { connectionStatus } = useWallet()

  return (
    <>
      <div className={styles.container}>
        <AlephiumConnectButton />
        {connectionStatus === 'connected' && (
          <div>
            <PriceUpdater />
            <RandomValueUpdater />
          </div>
        )}
      </div>
    </>
  )
}
