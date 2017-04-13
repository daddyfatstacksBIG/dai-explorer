import React, { Component } from 'react';
import web3 from '../web3';

class Transfer extends Component {
  transfer = (e) => {
    e.preventDefault();
    const token = this.token.value;
    const to = web3.isAddress(this.to.value) ? this.to.value : false;
    const amount = this.amount.value

    if (token && to && amount) {
      this.props.transferToken(token, to, amount);
      this.transferForm.reset();
    }
  }

  render() {
    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Transfer</h3>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div>
                <form className="transfer" ref={(input) => this.transferForm = input} onSubmit={(e) => this.transfer(e)}>
                  <label>Token</label>
                  <select ref={(input) => this.token = input} >
                    <option value="gem">GEM</option>
                    <option value="skr">SKR</option>
                    <option value="sai">SAI</option>
                  </select>
                  <label>To</label>
                  <input ref={(input) => this.to = input} type="text" placeholder="0x" />
                  <label>Amount</label>
                  <input ref={(input) => this.amount = input} type="number" placeholder="0.00" step="0.001" />
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Transfer;