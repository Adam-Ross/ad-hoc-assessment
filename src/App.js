import React from 'react'
import Loading from './components/Loading'
import Products from './components/Products'
import Button from './components/Button'

import './App.css';

class App extends React.Component{

  state = {
    products: [
      {
        name: 'Bottle',
        price: '2.00',
        product_number: 1234,
        id: 1
      },
      {
        name: 'Pen',
        price: '1.00',
        product_number: 1235,
        id: 2
      },
      {
        name: 'NoteBook',
        price: '12.00',
        product_number: 1236,
        id: 3
      }
    ],
    loading: false
  }

  render() {

    const {products, loading} = this.state

    const changeLoadingState = () => {
      if(loading) {
        this.setState({loading: false})
      } else {
        this.setState({loading: true})
      }
    }


    if(loading) {
      return (
        <Loading changeLoadingState={changeLoadingState}/>
      )
    }

    return (
      <div className="App">
        <div className="container">
          <h1 className="logo">List of products</h1>
          <Products products={products} />
          <Button changeLoadingState={changeLoadingState} />
        </div>
      </div>
    );
  }

}

export default App;
