import React, { Component } from 'react'
import './App.css'
import { Button, FormGroup, FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import { accounting } from 'accounting'
import $ from 'jquery'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      targetCurrency: '',
      targetAmount: 0,
      GBP1: 0,
      INR1: 0,
      SGD1: 0,
      EUR1: 0,
      USD1: 0,
      GBP2: 0,
      INR2: 0,
      SGD2: 0,
      EUR2: 0,
      USD2: 0,
      GBP3: 0,
      INR3: 0,
      SGD3: 0,
      EUR3: 0,
      USD3: 0
    }

    this.convert = this.convert.bind(this)
    this.setState = this.setState.bind(this)
  }

  convert (e) {
    e.preventDefault()
    let form = e.target
    let amount = form.querySelectorAll('input')[0].value
    let currency = form.querySelectorAll('select')[0].value
    let date1 = '2017-03-31'
    let date2 = '2017-04-30'
    let date3 = '2017-05-31'

    let self = this

    $.get('https://openexchangerates.org/api/historical/' + date1 + '.json', {app_id: 'ab697b9ae5074602b77047f385367130'}, function (data) {
      console.log('On ' + date1 + ', 1 US Dollar was worth ' + data.rates.GBP + ' GBP')

      self.setState({
        GBP1: accounting.formatMoney(data.rates.GBP * amount),
        INR1: accounting.formatMoney(data.rates.INR * amount),
        SGD1: accounting.formatMoney(data.rates.SGD * amount),
        EUR1: accounting.formatMoney(data.rates.EUR * amount),
        USD1: accounting.formatMoney(data.rates.USD * amount)
      })

    })

    $.get('https://openexchangerates.org/api/historical/' + date2 + '.json', {app_id: 'ab697b9ae5074602b77047f385367130'}, function (data) {
      self.setState({
        GBP2: accounting.formatMoney(data.rates.GBP * amount),
        INR2: accounting.formatMoney(data.rates.INR * amount),
        SGD2: accounting.formatMoney(data.rates.SGD * amount),
        EUR2: accounting.formatMoney(data.rates.EUR * amount),
        USD2: accounting.formatMoney(data.rates.USD * amount)
      })
    })

    $.get('https://openexchangerates.org/api/historical/' + date3 + '.json', {app_id: 'ab697b9ae5074602b77047f385367130'}, function (data) {

      self.setState({
        GBP3: accounting.formatMoney(data.rates.GBP * amount),
        INR3: accounting.formatMoney(data.rates.INR * amount),
        SGD3: accounting.formatMoney(data.rates.SGD * amount),
        EUR3: accounting.formatMoney(data.rates.EUR * amount),
        USD3: accounting.formatMoney(data.rates.USD * amount)
      })

    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={'https://mobilegamegraphics.com/wp-content/uploads/2015/06/Coin_spin.gif'} className='App-logo' alt='logo' />
          <h2>Show Me The Money</h2>
        </div>
        <div className='App-intro'>
          <form onSubmit={(e) => this.convert(e)}>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type='text' />
                <FormControl componentClass='select' placeholder='select'>
                  {/* <option value='SGD'>SGD</option>
                  <option value='INR'>INR</option> */}
                  <option value='USD'>USD</option>
                  {/* <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option> */}
                </FormControl>
              </InputGroup>
            </FormGroup>
            <Button type='submit'>Convert!</Button>
          </form>
          <table>
            <tr>
              <th></th>
              <th>2017-03-31</th>
              <th>2017-04-30</th>
              <th>2017-05-31</th>
            </tr>
            <tr>
              <td>GBP</td><td>{this.state.GBP1}</td><td>{this.state.GBP2}</td><td>{this.state.GBP3}</td>
            </tr>
            <tr>
              <td>INR</td><td>{this.state.INR1}</td><td>{this.state.INR2}</td><td>{this.state.INR3}</td>
            </tr>
            <tr>
              <td>SGD</td><td>{this.state.SGD1}</td><td>{this.state.SGD2}</td><td>{this.state.SGD3}</td>
            </tr>
            <tr>
              <td>EUR</td><td>{this.state.EUR1}</td><td>{this.state.EUR2}</td><td>{this.state.EUR3}</td>
            </tr>
            <tr>
              <td>USD</td><td>{this.state.USD1}</td><td>{this.state.USD2}</td><td>{this.state.USD3}</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default App
