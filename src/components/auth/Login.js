import React, { Fragment,Component } from 'react'
import { withTranslation } from 'react-i18next';
import logo from '../asset/images/icon/Robi-Logo.png';
import {PostData} from '../../services/ApiMethods'; 
import {Redirect} from 'react-router-dom';
import {LoginApi,forgetPassword} from '../../services/API';
import LoadingOverlay from 'react-loading-overlay';
import {Container,Row,Col,InputGroup,FormControl,Form } from 'react-bootstrap'
import decode from 'jwt-decode';
import { Modal, Button  } from 'antd';
import {Notify} from '../ComponentHelper'
import { ToastContainer, toast } from 'react-toastify';

import password_icon from '../asset/images/icon/ic_https_24px.png'
import { EyeInvisibleFilled,EyeFilled} from '@ant-design/icons'; 



class LogIn extends Component { 
    constructor(props) {
      super(props);
      this.state = {passType:'password',passshow:0,phone_number_for_reset_password:'',error2:null,isActive2:false,isActive1:false,username: '',password:'',redirect:false,error:false,error_msg:'',in_valid:{borderRight: 'none',backgroundColor: '#333645',color: '#A2A2A2'}};
    }
   

    handleChange = (event) =>this.setState({[event.target.name]: event.target.value});

    handleSubmit = (event) => {    
      this.setState({isActive1:true})
      const url =LoginApi;
      let data={UserId: this.state.username,Password:this.state.password};
       
        PostData(url,data).then( (result) => { 
          let responseJSON = result.data;
         if( responseJSON.success ){
           let {token,UserInfo} = responseJSON.data
            const {user_type} = decode(token)
            if(user_type===0 ||user_type===1||user_type===5||user_type===6){
               sessionStorage.setItem( 'userToken',token);
               sessionStorage.setItem( 'logo',UserInfo.logo||null);
               sessionStorage.setItem( 'userName',UserInfo.FullName);
              window.location.href ='/'
            }else{
               let in_valid = {...this.state.in_valid,border: '1px solid red'}
        this.setState({isActive1:false,error:true,error_msg:"You Have No Permission",in_valid:in_valid });
            }
  
       }
       else{
         let in_valid = {...this.state.in_valid,border: '1px solid red'}
        this.setState({isActive1:false,error:true,error_msg:responseJSON.message,in_valid:in_valid });
       }
          
        })
    
      event.preventDefault();
    }

    PasswordShow=()=>{this.state.passshow?this.setState({passshow:0,passType:'password'}):this.setState({passshow:1,passType:'text'})}

    showModal = () =>this.setState({visible:true})

    handleCancel = () => this.setState({visible:false})
 
    handleOk  = () => this.setState({visible:false})
    
    handleSubmitForResetPass = (event)=>{
     event.preventDefault();
     let {phone_number_for_reset_password=null} = this.state
     if(!phone_number_for_reset_password){this.setState({error2:true,error_msg2:'Must have phone no'});return 0}
      this.setState({isActive2:true})
 
     PostData(forgetPassword,{phone_number_for_reset_password}).then(result=>{
       if(result.data.success){
         Notify({success:result.data.message}); this.handleCancel()
         this.setState({repasssuccess:result.data.payload,isActive2:false,error_msg:'',error2:''})
       }
     }).catch(e=>{ Notify({success:e.data.message});this.setState({isActive2:false,error_msg:'',error2:e.data.message})})
 
 
    }
  
 render() {

    const   t = this.props.t
 
     const InputStyle = this.state.in_valid
     const InputlabelStyle = {fontSize:'12.5px',color:'grey'}
   return (
 
     <Container> <ToastContainer />
   <Row >
     <Col md={{ span: 5 }} xs={{ span: 12}} lg={{ span: 5 }} style={{transform:'translate(-50%, -50%)',left:'50%',top:'50%',height:'460px',position:'absolute',paddingBottom: '80px',paddingTop: '20px',textAlign:'center',backgroundColor: '#2f303c'}}>
     <img style={{height:'60px'}} src={logo} alt=""/>
     <h2 style={{color:'rgb(95, 95, 95)',marginTop:'2%'}} className="wellcomeh1tag">WELCOME TO APEX</h2>
     <p className="wellcomeptag" style={{color:'rgb(155, 154, 154)',marginTop:'2%'}}>Sign in to get started</p>
    
     <form onSubmit={this.handleSubmit}  style={{width:'70%',margin:'0 auto'}}>
              
          {this.state.error ? ( <p style={{color:'red'}}>{this.state.error_msg}</p> ):''} 
 
          <p style={{color:'green'}}>{this.state.repasssuccess||null}</p>
 
               <InputGroup className="mb-3">
                     <InputGroup.Prepend>
                       <InputGroup.Text id="basic-addon1" style={{fontSize:'11px'}}>{t(window.PHONE_PREFIX)}</InputGroup.Text>
                     </InputGroup.Prepend>
                     <FormControl
                       placeholder={t('phone.placeholder')}
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       value={this.state.username} 
                       onChange={this.handleChange} 
                        name="username" 
                       required  
                       style={InputStyle}
                     />
               </InputGroup>
 
               <InputGroup className="mb-3">
                     <InputGroup.Prepend>
                       <InputGroup.Text id="basic-addon1">&nbsp;<img src={password_icon} />&nbsp;
                      </InputGroup.Text>
                     </InputGroup.Prepend>
                     <FormControl
                     placeholder="Password"
                       aria-label="Passsword"
                       aria-describedby="basic-addon1"
                       value={this.state.password} 
                       onChange={this.handleChange} 
                       name="password" type={this.state.passType}
                       required  
                       style={InputStyle}
                     
                     />
                     <InputGroup.Prepend>
                       <InputGroup.Text id="basic-addon1" style={{background:'#e8f0fe',border: 'none',cursor:'pointer'}} onClick={this.PasswordShow}>{this.state.passshow?<EyeFilled/>:<EyeInvisibleFilled/>}
                      </InputGroup.Text>
                     </InputGroup.Prepend>
               </InputGroup>
         
                 <LoadingOverlay active={this.state.isActive1} spinner></LoadingOverlay>
 
            {
              this.state.isActive1 === false ? <button
              style={{borderRadius:'3px',color:'black',fontWeight: 'bold',backgroundColor: 'rgb(249, 210, 95)',border:'none',height:'50px',width:'100%',marginBottom:'2%',marginTop:'9%',fontFamily: 'Robi-bold',fontSize:'18px',cursor: 'pointer'}}
              type="submit">SIGN IN
          </button> :
          <button
          style={{borderRadius:'3px',color:'black',fontWeight: 'bold',backgroundColor: 'rgb(249, 210, 95)',border:'none',height:'50px',width:'100%',marginBottom:'2%',marginTop:'9%',fontFamily: 'Robi-bold',fontSize:'18px',cursor: 'pointer'}}
          type="submit" disabled={true}>SIGN IN
      </button>
            }
       </form>
 
       <Row>
       <Col md={6}><a style={{color:'white',textDecoration:'underline',fontSize:'13px'}} href={window.BASE_URL+'supplier_account_create'}>Create an Account</a></Col>
      
       <Col md={6}><a style={{color:'white',textDecoration:'underline',cursor:'pointer',fontSize:'13px'}} onClick={this.showModal} >Forget Password?</a></Col>
       
       </Row>
 
 
     </Col>
   </Row>
    
 
   <Modal
            visible={this.state.visible}
           onOk={this.handleSubmitForResetPass}
           onCancel={this.handleCancel}
            centered className="forgetpassmodal"
           title="Recovery Your password"
            >
         <LoadingOverlay active={this.state.isActive2} spinner text='information is submitting...'>
         <Form onSubmit={this.handleSubmitForResetPass}>
                 <Form.Row>
                 <Form.Group as={Col} controlId="formGridPgharsswrorfd4">
                  
                 <Form.Label style={InputlabelStyle}>Enter your phone number {this.state.error2 ? ( <span style={{color:'red'}}>{this.state.error_msg2}</span> ):''}</Form.Label>
                
                 <InputGroup className="mb-3">
                       <InputGroup.Prepend>
                         <InputGroup.Text id="basic-addon1">{window.PHONE_PREFIX}</InputGroup.Text>
                       </InputGroup.Prepend>
                       <FormControl
                         placeholder="Phone No"
                         aria-label="Username"
                         aria-describedby="basic-addon1"
                         onChange={this.handleChange} 
                          name="phone_number_for_reset_password" 
                         required  
                         style={{border: '1px solid grey',backgroundColor: 'rgb(41, 42, 49)',color: 'rgb(162, 162, 162)'}}
                       />
                 </InputGroup>
                
                   </Form.Group>
                 </Form.Row>
         </Form>
 
         </LoadingOverlay>
           
         </Modal>
 
   
 </Container>
 
   );
 }


}

export default withTranslation()(LogIn);
//export default LogIn;