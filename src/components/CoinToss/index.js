// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImageResult: HEADS_IMG_URL,
    heads: 0,
    tails: 0,
  }

  tossTheCoin = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let headsCount = heads
    let tailsCount = tails

    if (toss === 0) {
      tossImage = HEADS_IMG_URL

      headsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      tailsCount += 1
    }
    this.setState({
      tossImageResult: tossImage,
      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {heads, tails, tossImageResult} = this.state
    const totalCount = heads + tails

    return (
      <div className="coins-bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="choose-coin">Heads (or) Tails</p>
          <img src={tossImageResult} alt="toss result" className="coin-image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.tossTheCoin}
          >
            Toss Coin
          </button>
          <div className="coin-count-container">
            <p className="coin">Total: {totalCount}</p>
            <p className="coin">Heads: {heads}</p>
            <p className="coin">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
