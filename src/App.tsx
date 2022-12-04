import React, { useEffect } from 'react';
import { authorize } from './core';
import { useAppDispatch, useAppSelector, useTelegram } from './hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const { user, tg } = useTelegram();

  const { isLoading, userContext, error } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    tg.ready();
    
    console.log(user);
    dispatch(authorize(Number(process.env.REACT_APP_TEST_ID)));
  }, [tg, user, user?.id, dispatch]);

  return <div style={{ display: 'flex', justifyContent: 'center' }}>{isLoading ? <div>Подождите</div> : <div>{userContext ? JSON.stringify(userContext) : null}</div>}{error}</div>
}

export default App;
