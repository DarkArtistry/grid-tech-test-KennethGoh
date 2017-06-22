
# Show Me The Money Converter

## Disclosures

1. This is build based on https://docs.openexchangerates.org/ free account, I had only the historical records API to play around with.

E.g. of the API GET request

```
$.get('https://openexchangerates.org/api/historical/' + date2 + '.json', {app_id: 'ab697b9ae5074602b77047f385367130'}, function (data) {
  self.setState({
    GBP2: accounting.formatMoney(data.rates.GBP * amount),
    INR2: accounting.formatMoney(data.rates.INR * amount),
    SGD2: accounting.formatMoney(data.rates.SGD * amount),
    EUR2: accounting.formatMoney(data.rates.EUR * amount),
    USD2: accounting.formatMoney(data.rates.USD * amount)
  })
})
```

above is how i get the exchange rate and multiply it with the input amount in the input box via a queryselector

2. This App is built with react, Thus the page need not refresh, and the results will render as per the state of the main component App

```
<td>GBP</td><td>{this.state.GBP1}</td><td>{this.state.GBP2}</td><td>{this.state.GBP3}</td>
```
Example of what the data should display

## Demo

[Demo](https://polar-inlet-71534.herokuapp.com/)
