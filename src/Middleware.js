import React from 'react';
import { Route,Redirect} from 'react-router-dom';
import decode from 'jwt-decode';

const UserPathList={
    "1":[{
	              "pathid":24,
	              "path_type":"User account manage",
	               "pathlist":[ "user","add_user","edit_user" ]
              },
              {
	              "pathid":18,
	              "path_type":"Supplier account manage",
                "pathlist":[ "supplier","add_supplier","edit_supplier_info" ]
              },
              {
	              "pathid":19,
	              "path_type":"Operation user account manage",
                "pathlist":[ "operation_user","add_operation_user","edit_operation_user_info" ]
              },
              {
	              "pathid":20,
	              "path_type":"Territory Officer account manage",
                "pathlist":[ "territory_officer","add_territori_officer","edit_territori_officer_info" ]
              },
              {
	              "pathid":21,
	              "path_type":"Retailer account manage",
                "pathlist":[ "retailer","add_retailer","edit_retailer_info" ]
              },
               {
	              "pathid":22,
	              "path_type":"Delivery Man account manage",
                "pathlist":[ "deliveryman","add_delivery_man","edit_delivery_man_info" ]
              },
          ],

    "5":[ 
          {
            "pathid":4,
            "path_type":"Stock Manage",
            "pathlist":[ "warehouse","add_warehouse","edit_warehouse_info","products","add_product","edit_product_info",
                           "category_subcategory" ]
          },
          {
            "pathid":5,
            "path_type":"Order Manage",
            "pathlist":[ "invoices" ]
          },
          {
            "pathid":1,
            "path_type":"Operation user account manage",
            "pathlist":[ "operation_user","add_operation_user","edit_operation_user_info" ]
          },
          {
            "pathid":2,
            "path_type":"Territory Officer account manage",
            "pathlist":["territory_officer","add_territori_officer","edit_territori_officer_info" ]
          },
          {
            "pathid":17,
            "path_type":"Delivery Man account manage",
            "pathlist":["deliveryman","add_delivery_man","edit_delivery_man_info" ]
          },
          {
            "pathid":3,
            "path_type":"Retailer account manage",
            "pathlist":[ "retailer","add_retailer","edit_retailer_info" ]
          }
      ],

    "6":[ 
          {
             "pathid":9,
             "path_type":"Stock Manage",
             "pathlist":[ "warehouse","add_warehouse","edit_warehouse_info","products","add_product","edit_product_info" ,
                           "category_subcategory"]
         },
         {
          "pathid":10,
          "path_type":"Order Manage",
          "pathlist":[ "invoices" ]
        },
        
          {
            "pathid":7,
            "path_type":"Territory Officer account manage",
            "pathlist":["territory_officer","add_territori_officer","edit_territori_officer_info" ]
          },
          {
            "pathid":16,
            "path_type":"Delivery Man account manage",
            "pathlist":[ "deliveryman","add_delivery_man","edit_delivery_man_info" ]
          },
          {
            "pathid":8,
            "path_type":"Retailer account manage",
            "pathlist":[ "retailer","add_retailer","edit_retailer_info" ]
          }
      ],

    "4":[]
}

let basePath = "/"
const supperadmin_admin_items ={
  "18":{name:"Supplier",url:`${basePath}supplier`},
 // "19":{name:"Operation User",url:`${basePath}operation_user`},
  "21":{name:"Customer",url:`${basePath}retailer`},
  /*"20":{name:"Territory Officer",url:`${basePath}territory_officer`},
  "22":{name:"Delivery Man",url:`${basePath}deliveryman`},*/
  "24":{name:"Employee",url:`${basePath}user`},
  "others":{ "23":{name:"Reports",url:`${basePath}supplier`} }
}

export const NavbarItems = {
  
  "0":{...supperadmin_admin_items},
  "1":{...supperadmin_admin_items},

}

const PermissionCheck =(props)=>{  
   let {user_type,permissions} = decode(sessionStorage.getItem('userToken'))  
   if(user_type ===0) return true;
  let pathname =props.match.path.split(':')[0].slice(1)
      pathname = pathname.slice(-1)==='/'?pathname.slice(0,-1):pathname 
      permissions=permissions.split(',').map(Number)

	     let pathid=null
		    UserPathList[user_type].some(item=>{ let p=item.pathlist.some(innerItem=>{ return (innerItem === pathname) });if(p){pathid=item.pathid} else{return false } })

	     if(pathid && permissions.includes(pathid)) return true; 
	     else return false
}
 

export const RoleBaseMiddleWare = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
    PermissionCheck(props) ? <Component {...props} />: <Redirect to='/403Forbidden' />
  )
  } />
)
