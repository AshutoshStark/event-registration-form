import React, { useState } from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import Preview from '../Components/Preview'

const EventForm = () => {

  const [name,setName] = useState<any>()
  const [email,setEmail] = useState<any>()
  const [Age,setAge] = useState<any>()
  const [iscoming,setComing] = useState<boolean>(false)
  const [Guest,setGuest] = useState<any>()
  const [preview,setPreview] = useState<boolean>(false)

  const handleAge=(age:any)=>{
    if(Number(age) <= 0){
      toast.error("Please insure the age")
      setAge('')
    }
    else{
      setAge(age)
    }
  }

  const HandleSubmit=(e:any)=>{
    setPreview(true)
    e.preventDefault();
  }

  return (
    <MainDiv>
     { preview === false &&  <Form>
      <ImageDeco>
        <div className="layer">
          <p>
            Join the Celebration -
          </p>
          <p>
            Register Now
          </p>
        </div>
        <img src="/assets/form_image.jpg" alt="" />
      </ImageDeco>
      <Register>
        <Head>
        Welcome to our Event
        <p>
        fill the bellow form to register in our event..!
        </p>
        </Head>
        <Field>
          Name
        <input type="text" name="" id="" placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required/>
        </Field>
        <Field>
          Email
        <input type="email" name="" id="" placeholder='email (eg.: abc@xyz.com)' onChange={(e)=>{setEmail(e.target.value)}} required/>
        </Field>
        <Field>
          Age
        <input type="number" name="" id="" placeholder='Age' onChange={(e)=>{handleAge(e.target.value)}} value={Age}/>
        </Field>
        <FieldQ>
        Are you going to attend the event ?
        <input type="checkbox" name="" id="" onChange={(e)=>setComing(e.target.checked)} />
        </FieldQ>
        {iscoming === true && <Field>
          Guest Name
        <input type="text" name="" id="" placeholder='Guest Name' onChange={(e)=>{setGuest(e.target.value)}} required/>
        </Field>}
        <button onClick={(e)=>{HandleSubmit(e)}}>Submit</button>
      </Register>
      </Form>}
      {preview === true && <Preview
        name = {name}
        email = {email}
        isComing = {iscoming}
        Age={Age}
        GuestName={Guest}
      />}
    </MainDiv>
  )
}

export const Head = styled.div`
    color: #f5f5f5f5;
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem 0 1.5rem 0;
    p{
      font-size: .8rem;
      margin: 10px 0 0 10px;
    }
`

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`
const ImageDeco = styled.div`
  position: relative;
  width: 25vw;
  height: 85vh;
  img{
    width: inherit;
    height: inherit;
    border-radius: 15px;
  }
  .layer{
    z-index: 2;
    height: inherit;
    width: inherit;
    position: absolute;
    background: rgba( 107, 55, 178, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 15px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: #f5f5f5f5;
    font-size: 2rem;
    p{
      font-weight:200 ;
      margin: 3rem 1rem;
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const Form = styled.div`
  border-radius: 15px;
  background: #2D292E;
  box-shadow:  -20px 20px 60px #262327,20px -20px 60px #342f35;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  width: 50vw;
  @media screen and (max-width: 900px) {
    width: 100vw;
  }
`
const Register = styled.form`
  width: 40vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    width: 90vw;
  }
  input[type=number] {
  -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  input{
    background-color: #2D292E;
    border: solid #494849 1px;
    padding: 10px;
    color: #f5f5f5f5;
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    width: 280px;
  }
  input:hover{
    border: solid #ffbaff 1px;
  }
  input:focus{
    background-color: #343435;
    border: solid #7330C6 1px;
    outline: none;
  }
  button {
  margin: 5px 0 0 0;
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  color: #f5f5f5f5;
  width: 10rem;
  height: 2rem;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  border-radius: 10px;
  z-index: 1;
}
`
const Field = styled.div`
  color: #f5f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`
const FieldQ = styled.div`
  color: #f5f5f5f5;
  display: flex;
  margin: 1rem;
  input[type=checkbox]{
    width: 25px;
  }
  gap: 5px;
`

export default EventForm
