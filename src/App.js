import React, { useReducer } from 'react';
import reducer, { initialState } from  './reducers/index';
import { applyNumber, changeOperator, clearDisplay, setMemory, applyMemory, clearMemory } from './actions/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = number => dispatch(applyNumber(number));
  const opClickHandler = operator => dispatch(changeOperator(operator));
  const ceClickHandler = () => dispatch(clearDisplay());
  const mClickHandler = () => dispatch(setMemory());
  const mrClickHandler = () => dispatch(applyMemory());
  const mcClickHandler = () => dispatch(clearMemory());

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={mClickHandler}/>
              <CalcButton value={"MR"} onClick={mrClickHandler}/>
              <CalcButton value={"MC"} onClick={mcClickHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => clickHandler(1)}/>
              <CalcButton value={2} onClick={() => clickHandler(2)}/>
              <CalcButton value={3} onClick={() => clickHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => clickHandler(4)}/>
              <CalcButton value={5} onClick={() => clickHandler(5)}/>
              <CalcButton value={6} onClick={() => clickHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => clickHandler(7)}/>
              <CalcButton value={8} onClick={() => clickHandler(8)}/>
              <CalcButton value={9} onClick={() => clickHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"*"} onClick={() => opClickHandler("*")}/>
              <CalcButton value={"+"} onClick={() => opClickHandler("+")}/>
              <CalcButton value={"-"} onClick={() => opClickHandler("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={ceClickHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
