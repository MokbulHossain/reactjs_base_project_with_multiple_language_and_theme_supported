import React,{Fragment} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBDataTable } from 'mdbreact';
import './asset/css/datatable_style.css'; 



const  Notify = ({success=false,error=false}) => {
      return  <Fragment><ToastContainer /> {success?toast.success(success, {position: toast.POSITION.TOP_RIGHT }):toast.error(error, {position: toast.POSITION.TOP_RIGHT  }) } </Fragment>
    }
   
const DatatablePage = ({columns,rows}) => {
     const data = { columns, rows }  
      return ( 
        <div className="datatable_wrapper"> 
        <MDBDataTable id="datatable2" style={{backgroundColor: '#333645',color:'rgb(150, 150, 150)',fontSize: '10px' }}
            responsive   fixed data={data} />
        </div>
      )
    
    }

const ImagePreview = ({imagePreviewUrl})=>{
    const imgPreview={textAlign: 'center',marginLeft: '30%', height:' 100px',width:'115px',borderRadius:'50%',borderLeft: '1px solid gray',
                      borderRight: '1px solid gray',borderTop: '5px solid gray',borderBottom: '5px solid gray',
                      overflow:'hidden'
                     }
     const img ={borderRadius:'50%', width: '100%', height: '100%'}
     const previewText={ width: '100%',marginTop: '20px',color:'white'}
     return <div style={imgPreview}>{imagePreviewUrl?<img src={imagePreviewUrl} style={img}/>:<div style={previewText}>Please select an Image for Preview</div>}</div>

}

const Getcheckboxid =(checkboxarr,id)=>{
    let r= -(~checkboxarr.indexOf(id))-1 //if exist then get current index Or -1
    r>-1?checkboxarr.splice(r,1):checkboxarr.push(id)
    return checkboxarr
} 


export {Notify,DatatablePage,ImagePreview,Getcheckboxid}