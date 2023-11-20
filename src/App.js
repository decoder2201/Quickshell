import React, { useEffect } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import { useDispatch, useSelector } from "react-redux";
import { fetchDataApi } from './service/action';
import NoInternet from './assets/images/noInternet.gif'
function App() {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);
  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);

  return (
    <React.Fragment>
      {tickets.length===0 ?
        <img src={NoInternet} alt="no internet" className='no_internet' />
        :
        <div className='app_container'>
          <Header />
          <KanbanBoard />
        </div>
      }
    </React.Fragment>
  );
}

export default App;
