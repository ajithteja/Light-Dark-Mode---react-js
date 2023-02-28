import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    mode: 'Light',
    cartcontainer: 'cart-container cart-container-dark',
    heading: 'heading heading-dark',
  }

  onModeChange = () => {
    const {mode} = this.state
    if (mode === 'Light') {
      this.setState(() => ({
        mode: 'Dark',
        cartcontainer: 'cart-container',
        heading: 'heading',
      }))
    } else {
      this.setState(() => ({
        mode: 'Light',
        cartcontainer: 'cart-container cart-container-dark',
        heading: 'heading heading-dark',
      }))
    }
  }

  render() {
    const {mode, cartcontainer, heading} = this.state
    return (
      <div className="bg-container">
        <div className={cartcontainer}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button onClick={this.onModeChange} className="button" type="button">
            {mode} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
