import React, { Component } from 'react'
import './App.css'
import { Button, FormGroup, FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import { accounting } from 'accounting'
import $ from "jquery"

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      targetCurrency: '',
      targetAmount: 0
    }

    this.convert = this.convert.bind(this)
  }

  convert (e) {
    e.preventDefault()
    let form = e.target
    let amount = form.querySelectorAll('input')[0].value
    let currency = form.querySelectorAll('select')[0].value
    let date1 = '2017-03-31'
    let date2 = '2017-04-30'
    let date3 = '2017-05-31'

    $.get('https://openexchangerates.org/api/historical/' + date1 + '.json', {app_id: 'ab697b9ae5074602b77047f385367130'}, function(data) {
    console.log("On " + date1 + ", 1 US Dollar was worth " + data.rates.GBP + " GBP");
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
                  <option value='SGD'>SGD</option>
                  <option value='INR'>INR</option>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option>
                </FormControl>
              </InputGroup>
            </FormGroup>
            <Button type='submit'>Convert!</Button>
          </form>

        </div>
      </div>
    )
  }
}

export default App
