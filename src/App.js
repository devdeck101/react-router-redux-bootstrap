import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { addItem, removeItem } from './actions';


const Card = props => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{props.name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.price} <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{props.description}</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary" disabled={!props.activeLikeIt} onClick={() => props.addItem(props.id)}>Like It! <br />Deixa Seu Like!</button>
      </div>
    </div>
  )
}

const ItemList = props => {
  return (
    <li className="list-group-item"><button type="button" className="btn btn-danger" onClick={() => props.removeItem(props.id)}>Delete</button> - {props.name}</li>
  )
}

class App extends Component {

  _handleCardList = items => {
    return items.map((item, index) => {
      let active = this.props.itemsList.find(shopped => item.id === shopped.id) === undefined
      return <Card key={index} {...item} addItem={this._addItem} activeLikeIt={active} />
    })
  }
  _handleItemList = items => {
    return items.map((item, index) => {
      return <ItemList key={index} {...item} removeItem={this._deleteItem} />
    })
  }

  _addItem = id => {
    this.props.onAddItem(this.props.items.find(item => item.id === id))
  }

  _deleteItem = id => {
    this.props.onRemoveItem(id)
  }


  render() {
    return (
      <div>





        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Should I Subscribe???     </h5>
                <h5 className="modal-title" id="exampleModalLabel2">Devo me inscrever???</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                If you learn something, Off course you should!<br/>
                Se você aprendeu algo, Com certeza!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">I will Subscribe!</button>
              </div>
            </div>
          </div>
        </div>


        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">DeveloperDeck101</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
            Subscribe! Se Inscreva!
          </button>
            <a className="p-2 text-dark" href="#"></a>
            <a className="p-2 text-dark" href="#"></a>
            <a className="p-2 text-dark" href="#"></a>
          </nav>
          <a className="btn btn-outline-primary" href="#">Enable notifications! Habilita as Notificações</a>
        </div>

        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">DeveloperDeck101 - Shopping Cart</h1>
          <p className="lead">Quickly build a React Redux Shopping Cart with DeveloperDeck101</p>
        </div>

        <div className="container">
          <div className="card-deck mb-4 text-center">
            {
              this._handleCardList(this.props.items)
            }
          </div>

          <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="column align-items-center">
              <ul className="list-group">
                {
                  this._handleItemList(this.props.itemsList)
                }
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    itemsList: state.itemsList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (item) => dispatch(addItem(item)),
    onRemoveItem: (id) => dispatch(removeItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
