import React from 'react';
import AnimatedNumber from '../AnimatedNumber';
import { formatNumber, copyToClipboard } from '../helpers';

const Token = (props) => {
  const tubBalance = props.token === 'sai' ? props.sai[props.token].tubBalance.add(props.sai.sin.issuerFee) : props.sai[props.token].tubBalance;
  const potBalance = props.token === 'sin' ? props.sai[props.token].potBalance.add(props.sai.sin.issuerFee) : props.sai[props.token].potBalance;
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="info-box">
        <span className={`info-box-icon ${props.color}`}>
          { props.token === 'gem' ? 'WETH' : props.token }
        </span>
        <div className="info-box-content">
          <span className="info-box-number">
            <span>Total</span>
            <AnimatedNumber
              value={ props.sai[props.token].totalSupply }
              title={ formatNumber(props.sai[props.token].totalSupply, 18) }
              formatValue={ n => formatNumber(n, 3) }
              className="printedNumber"
              onClick = { copyToClipboard } />
          </span>
          <span className="info-box-number">
            <span>Mine</span>
            <AnimatedNumber
              value={ props.sai[props.token].myBalance }
              title={ formatNumber(props.sai[props.token].myBalance, 18) }
              formatValue={ n => formatNumber(n, 3) }
              className="printedNumber"
              onClick = { copyToClipboard } />
          </span>
          {
            props.sai[props.token].tubBalance
            ?
              <span className="info-box-number">
                <span>Tub</span>
                <AnimatedNumber
                  value={ tubBalance }
                  title={ formatNumber(tubBalance, 18) }
                  formatValue={ n => formatNumber(n, 3) }
                  className="printedNumber"
                  onClick = { copyToClipboard } />
              </span>
            :
              ''
          }
          {
            props.sai[props.token].tubBalance
            ?
              <span className="info-box-number">
                <span>Pot</span>
                <AnimatedNumber
                  value={ potBalance }
                  title={ formatNumber(potBalance, 18) }
                  formatValue={ n => formatNumber(n, 3) }
                  className="printedNumber"
                  onClick = { copyToClipboard } />
              </span>
            :
              ''
          }
          {
            props.sai[props.token].lpcBalance
            ?
              <span className="info-box-number">
                <span>Lpc</span>
                <AnimatedNumber
                  value={ props.sai[props.token].lpcBalance }
                  title={ formatNumber(props.sai[props.token].lpcBalance, 18) }
                  formatValue={ n => formatNumber(n, 3) }
                  className="printedNumber"
                  onClick = { copyToClipboard } />
              </span>
            :
              ''
          }
        </div>
      </div>
    </div>
  )
}

export default Token;
