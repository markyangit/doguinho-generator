// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';
import './App.css';

function App({ isFetching, src, fetchDog }) {
  return (
      <div className="App">
        <h1>Doguinho Generator</h1>
        <button
          className="fetch-btn"
          onClick={fetchDog}
          type="button"
        >
          Novo Doguinho
        </button>
        <div className="dog-pic">
          {isFetching ? <p>Loading...</p> : <img src={src} alt="dog" /> }
        </div>
        <footer>
          <p>Versão beta 1.0 - by <a href="https://github.com/markyangit">Gabriel Markyan</a></p>
        </footer>
      </div>
  )
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(App);