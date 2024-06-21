import React from 'react';
import styled from 'styled-components';
import EventForm from './page/EventForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
   <MainDiv>
    <Toaster/>
    <EventForm/>
   </MainDiv>
  );
}

const MainDiv = styled.div`

`

export default App;
