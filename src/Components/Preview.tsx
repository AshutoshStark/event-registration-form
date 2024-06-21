import React from 'react'
import {  Head, MainDiv } from '../page/EventForm'
import styled from 'styled-components'

const Preview = ({name,email,isComing,Age,GuestName}:{name:string,email:string,isComing:boolean,Age:string,GuestName:string}) => {
  return (
    <MainDiv>
      <Form>
      <Head>
        Event Registration Preview
      </Head>
      <p>
        Name.: {name} 
      </p>
      <p>
        Email.: {email}
      </p>
        {isComing === true && <p>
          Guest Name.: {GuestName}
        </p>
          }
        {isComing === false && <p>
          You are not attending the event
        </p>
          }
          <p>
          Age.: {Age}
          </p>
          <p>Thanks for registering for the event..!</p>
          
      </Form>
    </MainDiv>
  )
}

const Form = styled.div`
  border-radius: 15px;
  background: #2D292E;
  box-shadow:  -20px 20px 60px #262327,20px -20px 60px #342f35;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50vw;
  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
  p{
    font-size: 1.5rem;
    color: #f5f5f5f5;
    font-weight: 300;
  }
`


export default Preview
