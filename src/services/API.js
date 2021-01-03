


const api_base_url = window.API_BASE_URL;
const pms_vietnam2_base_url = window.PMS_VIETNAM2_BASE_URL;
const pms_vietnam_base_url = window.PMS_VIETNAM_BASE_URL;

//for all users......

export const LoginApi=api_base_url+'/api/auth/userlogin';
export const forgetPassword=api_base_url+'/api/auth/forgetPassword';
export const ChangePassword=api_base_url+'/api/ChangePassword';

//get uk address from postcode...
export const GetAddressByPostCode = api_base_url+'/api/GetAddressByPostCode';

export const GetDeliveryPartyList = api_base_url+'/api/GetDeliveryPartyList';

//supplier registration ...
export const supplier_registration = api_base_url+'/api/auth/supplier_registration';
//customer registration...
export const retailer_registration = api_base_url+'/api/auth/retailer_registration';

//admin supper admin....

export const AdminInfo=api_base_url+'/api/admin';

export const ZoneInfo =api_base_url+'/api/zone'

export const DeliveryManInfo =api_base_url+'/api/deliveryman'

export const SupplierInfo = api_base_url+'/api/supplier'

export const OperationUserInfo = api_base_url+'/api/operationUser'

export const TerritoriOfficerInfo = api_base_url+'/api/territoriOfficer'

export const RetailerInfo = api_base_url+'/api/retailer'

export const WarehouselistWithServingZone = api_base_url+'/api/WarehouselistWithServingZone'

export const WarehouseInfo = api_base_url+'/api/warehouse'

export const SupplierProductList = api_base_url+'/api/SupplierProductList'

export const SupplierAddNewProduct = api_base_url+'/api/SupplierAddNewProduct'

export const CategorySubCategoryList = api_base_url+'/api/categorySubCategoryList'

export const ShopOpenClose = api_base_url+'/api/ShopOpenClose'

export const RequestList = api_base_url+'/api/RequestList'

export const RequestListSpecifyWithStatus = api_base_url+'/api/RequestListSpecifyWithStatus'

export const AcceptRequest = api_base_url+'/api/AcceptRequest'

export const CancleRequest = api_base_url+'/api/CancleRequest'

export const PreparedRequest = api_base_url+'/api/PreparedRequest'

export const DispatchOrder = api_base_url+'/api/DispatchOrder'

export const OrderDeliveryComplete = api_base_url+'/api/OrderComplete'

export const UpdateUserLocation = api_base_url+'/api/UpdateUserLocation'

export const StockRequest = api_base_url+'/api/StockRequest'

export const StockRequestApprove = api_base_url+'/api/StockRequestApprove'

export const AllcategorySubCategoryList = api_base_url+'/api/AllcategorySubCategoryList'
export const AddCategory = api_base_url+'/api/AddCategory'
export const AddSubCategory = api_base_url+'/api/AddSubCategory'
export const ApproveSubCategory = api_base_url+'/api/ApproveSubCategory'
export const DeleteSubCategory = api_base_url+'/api/DeleteSubCategory'
export const AddSupplierSubCategory = api_base_url+'/api/AddSupplierSubCategory'

//supplier certificte....
export const ApplyForCertificate = api_base_url+'/api/ApplyForCertificate'
export const ViewCertificate = api_base_url+'/api/ViewCertificate'
export const UploadCertificate = api_base_url+'/api/UploadCertificate'

export const ViewSupplierCertificate = api_base_url+'/api/ViewSupplierCertificate'
export const ApproveUploadedCertificate = api_base_url+'/api/ApproveUploadedCertificate'

//supplier expense managment....
export const GetExpenseCategoryList = api_base_url+'/api/GetExpenseCategoryList'
export const GetExpenseList = api_base_url+'/api/GetExpenseList'
export const AddNewExpense = api_base_url+'/api/AddNewExpense'


//supplier configuration...
export const GlobalConfiguration = api_base_url+'/api/GlobalConfiguration'
export const DeliverySetting = api_base_url+'/api/DeliverySetting'





export const RolesInfo = api_base_url+'/api/roles'
export const CompanyList = api_base_url+'/api/companyList'
export const ZoneList = api_base_url+'/api/zoneList'
export const NotificationHistoryList = api_base_url+'/api/NotificationHistoryList'


export const GetMyProfileInfo = api_base_url+'/api/GetMyProfileInfo'
export const UpdateMyProfileInfo = api_base_url+'/api/UpdateMyProfileInfo'

//supplier dashboard apis....
export const SupplierCounterSummary = api_base_url+'/api/SupplierCounterSummary'
export const OrderVsOrderAmount = api_base_url+'/api/OrderVsOrderAmount'
export const RecentOrderInfo = api_base_url+'/api/RecentOrderInfo'
export const RevenueVsIncomeVsExpensesInfo = api_base_url+'/api/RevenueVsIncomeVsExpensesInfo'
export const TotalRevenueVsTotalIncomeVsTotalExpensesInfo = api_base_url+'/api/TotalRevenueVsTotalIncomeVsTotalExpensesInfo'
export const PendingOrderCount = api_base_url+'/api/PendingOrderCount'
//supplier Transection Reports....
export const GetTransectionReport = api_base_url+'/api/GetTransectionReport'

//admin dashboard summary... 
export const TotalSupplierVsCustomerInfo = api_base_url+'/api/TotalSupplierVsCustomerInfo'
export const DashboardCounter = api_base_url+'/api/DashboardCounter'


//pms vietnam....
export const Vouchers = pms_vietnam_base_url+'/vouchers'
export const voucherDetail = pms_vietnam_base_url+'/voucherDetail'
export const getPendingVouchersBySpecificMerchent = pms_vietnam_base_url+'/getPendingVouchersBySpecificMerchent'

//pms vietnam2....
export const GetAccessToken = pms_vietnam2_base_url+'/token/getAccessToken'
export const VoucherCreate = pms_vietnam2_base_url+'/voucher/create'
export const VoucherApprove= pms_vietnam2_base_url+'/voucher/approve'
export const VoucherUpdate= pms_vietnam2_base_url+'/voucher/update'

//pms vietnam2..point rule...product wise...
export const GetMyRules= pms_vietnam2_base_url+'/GetMyRules'
export const updateMyRules= pms_vietnam2_base_url+'/updateMyRules'
export const deleteMyRules= pms_vietnam2_base_url+'/deleteMyRules'
export const SetMyRules= pms_vietnam2_base_url+'/SetMyRules'
//pms vietnam2..point rule... overall..
export const GetMyOverallRules= pms_vietnam2_base_url+'/GetMyOverallRules'
export const updateMyOverallRules= pms_vietnam2_base_url+'/updateMyOverallRules'
export const deleteMyOverallRules= pms_vietnam2_base_url+'/deleteMyOverallRules'
export const SetMyOverallRules= pms_vietnam2_base_url+'/SetMyOverallRules'

export const CdrType=''


export const LogOut= api_base_url+'/api/auth/logout'




