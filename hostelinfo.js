import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Cart extends Component {
  state = {
    sub: false,
  }

  submitting = () => {
    this.setState({sub: true})
  }

  submitForm = async event => {
    event.preventDefault()

    this.submitting()
  }

  render() {
    const {sub} = this.state
    return (
      <>
        <Header />
        <div className="cart-container">
          <h1>Enter the reason for the NOC</h1>
          <textArea type="text" rows="10" cols="50" />
          <button
            className="submit-cart-button"
            type="button"
            onClick={this.submitForm}
          >
            Submit
          </button>
          {sub && <p>Your request is submitted</p>}
        </div>
      </>
    )
  }
}

export default Cart
