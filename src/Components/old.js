// import React from 'react'
// import '../Styles/RegisterStyle.css';
// import { Form, Input, message } from 'antd'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'


// const Register = () => {
//     const navigate = useNavigate();

//     //form handler
//     const onfinisHandler = async (values) => {
//         try {
//             const res = await axios.post('/api/v1/user/register', values)
//             if (res.data.success) {
//                 message.success('Registered Successfully')
//                 navigate('/login')
//             } else {
//                 message.error(res.data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             message.error("something went wrong")
//         }
//     }

//     return (
//         <>
//             <div className='form-container'>
//                 <Form layout='vertical' onFinish={onfinisHandler} className="register-form">
//                     <h5 className='text-center'>Register Form</h5>
//                     <Form.Item label="Name" name="name">
//                         <Input type="text" required />
//                     </Form.Item>
//                     <Form.Item label="Email" name="email">
//                         <Input type="text" required />
//                     </Form.Item>
//                     <Form.Item label="Password" name="password">
//                         <Input type="text" required />
//                     </Form.Item>
//                     <Link to="/login" className='m-2'>Already user login here</Link>
//                     <button className='btn btn-primary' type='submit'>Register</button>
//                 </Form>
//                 <p></p>
//             </div>
//         </>
//     )
// }

// export default Register;
