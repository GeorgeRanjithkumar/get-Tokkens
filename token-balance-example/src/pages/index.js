import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connectors'
import TokenListRinkeby from '../assets/token-list-rinkeby.json'
import { useState } from 'react'
import useBalance from '../actions/useBalance'

export default function Home() {
  const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0])

  const { activate, account } = useWeb3React()

  const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
  )

  return (
    <div className={styles.maincontainer}>
      <h1 style={{textAlign:"center",padding:"5%",marginTop:""}}>
      Pyramidian Task
      </h1>
    <div className={styles.container}>
      <button className={styles.button30} onClick={() => activate(injected)}>Connect wallet</button>
      {account ? `Connected wallet: ${account}` : 'Wallet not connected'}
      <div className={styles.customselect}>
      <select className={styles.select} style={{marginTop:"19px",marginBottom:"19px"}} onChange={(e) => setSelectedToken(TokenListRinkeby[e.target.value])}>
        {TokenListRinkeby.map((token, index) => (
          <option value={index} key={token.address}>{token.name}</option>
        ))}
      </select>
      </div>
      {selectedToken.name} balance {balance}
    </div>
    </div>
  )
}

// <!-- HTML !-->
// <button class="button-30" role="button">Button 30</button>

/* CSS */
