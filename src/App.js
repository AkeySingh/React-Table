import React, { useState } from 'react'
// import SimpleForm from './formComponents/simpleForm'
// import FormValidation from './formComponents/formValidation'
// import Formik_Form from './formComponents/formik_form'
// import Signup from './formComponents/form01'
import './App.css'
import Comp01 from './contextComponents/Comp01'
// import OneType from './componentRendering/OneType'
// ----------pure component -----------------
// import PureComponent from './componentRendering/pureComponent'
// import NormalComponent from './componentRendering/normalComponent'

//-----------------Hoc --------------------------------------
// import EnhancedLikes from './HOC/Likes'
// import EnhancedComments from './HOC/Comments'
// import Form01 from './UseRefForms/form01'
// import Form02 from './UseRefForms/form02'

// -------------------------------------------------------  Context API  -------------------------------------------

/* ------------------------------------------------------USING USEREF FROM AND VALIDATION--------------------------- */

export default function App() {
  // const [userData, setUserData] = useState({ name: 'akey', age: 21 })

  return (
    <div className='p-nave'>
      {/* <h1>hello App file is here</h1> */}
      <ul className=' '>
        {/* <h3>From</h3>
        <li className='child-nav'>Simple Form</li>
        <li className='child-nav'>Form_01</li>
        <li className='child-nav'> Form_02</li>
        <li className='child-nav'>Form_03</li>
        <li className='child-nav'>Form_04</li> */}
      </ul>
      {/* <SimpleForm /> */}
      {/* <FormValidation /> */}

      {/* <Signup /> */}
      {/* 
      <PureComponent data={'name : Pure Component Data'} user={userData} />
      <br />
      <NormalComponent data={'name : Normal Component Data'} user={userData} /> */}
      {/* -------------------------HOC ----------------------------------------- */}

      {/* <EnhancedLikes />
      <EnhancedComments /> */}

      {/* <OneType /> */}

      {/* ------------------------------------------------------USING USEREF FROM AND VALIDATION--------------------------- */}

      {/* <Form01 /> */}

      {/* <Form02 /> */}

      {/* // -------------------------------------------------------  Context API  ------------------------------------------- */}

      <Comp01 />
    </div>
  )
}
