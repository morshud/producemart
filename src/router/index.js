import { createRouter, createWebHistory } from "vue-router";

import Cookies from "../views/Cookies.vue";
import EmailVerify from "../views/EmailVerify.vue";
//User Auth
import Login from "../views/userAuth/Login.vue";
import ForgotPassword from "../views/userAuth/ForgotPassword.vue";
import ResetPassword from "../views/userAuth/ResetPassword.vue";
import Supplier from "../views/userAuth/Supplier.vue";
import Buyer from "../views/userAuth/Buyer.vue";
//Admin Login
import AdminLogin from "../views/adminLogin/Login.vue";

//////////Buyer Dashboard
import DashBuyerHome from "../views/buyerDashboard/Home.vue";
//notifications
import DashBuyerAllNotifications from "../views/buyerDashboard/AllNotifications.vue";
/*
import DashBuyerSentMail from "../views/buyerDashboard/SentMail.vue";
import DashBuyerTrashMail from "../views/buyerDashboard/TrashMail.vue";
import DashBuyerComposeMail from "../views/buyerDashboard/ComposeMail.vue";
import DashBuyerDraftMail from "../views/buyerDashboard/DraftMail.vue";
*/
//orders
import DashBuyerOrdersOpen from "../views/buyerDashboard/OrdersOpen.vue";
import DashBuyerOrdersClosed from "../views/buyerDashboard/OrdersClosed.vue";
import DashBuyerOrdersCancelled from "../views/buyerDashboard/OrdersCancelled.vue";
import DashBuyerOrderViewOpen from "../views/buyerDashboard/OrderViewOpen.vue";
import DashBuyerOrderReviewHere from "../views/buyerDashboard/OrderReviewHere.vue";
import DashBuyerOrderViewCompleted from "../views/buyerDashboard/OrderViewCompleted.vue";
//settings
import DashBuyerEditProfileDetails from "../views/buyerDashboard/EditProfileDetails.vue";
import DashBuyerProfile from "../views/buyerDashboard/Profile.vue";
import DashBuyerChangePassword from "../views/buyerDashboard/ChangePassword.vue";

//////////Supplier Dashboard
import DashSupplierHome from "../views/supplierDashboard/Home.vue";
//notifications
import DashSupplierAllNotifications from "../views/supplierDashboard/AllNotifications.vue";
/*
import DashSupplierDeletedNotifications from "../views/supplierDashboard/DeletedNotifications.vue";
import DashSupplierMailBox from "../views/supplierDashboard/MailBox.vue";
import DashSupplierSentMail from "../views/supplierDashboard/SentMail.vue";
import DashSupplierTrashMail from "../views/supplierDashboard/TrashMail.vue";
import DashSupplierComposeMail from "../views/supplierDashboard/ComposeMail.vue";
import DashSupplierDraftMail from "../views/supplierDashboard/DraftMail.vue";
*/
//orders
import DashSupplierOrdersOpen from "../views/supplierDashboard/OrdersOpen.vue";
import DashSupplierOrdersClosed from "../views/supplierDashboard/OrdersClosed.vue";
import DashSupplierOrdersCancelled from "../views/supplierDashboard/OrdersCancelled.vue";
import DashSupplierOrderViewOpen from "../views/supplierDashboard/OrderViewOpen.vue";
import DashSupplierOrderViewCancelled from "../views/supplierDashboard/OrderViewCancelled.vue";
//products
import DashSupplierProductUpload from "../views/supplierDashboard/ProductUpload.vue";
import DashSupplierProductPublished from "../views/supplierDashboard/ProductPublished.vue";
import DashSupplierProductPending from "../views/supplierDashboard/ProductPending.vue";
// import DashSupplierProductRejected from "../views/supplierDashboard/ProductRejected.vue";
import DashSupplierProductUnavailable from "../views/supplierDashboard/ProductUnavailable.vue";
import DashSupplierProductDraft from "../views/supplierDashboard/ProductDraft.vue";
import DashSupplierProductDraftContinue from "../views/supplierDashboard/ContinueProductUpload.vue";
import DashSupplierProductViewPublished from "../views/supplierDashboard/ProductViewPublished.vue";
//certifications
import DashSupplierRequestAudit from "../views/supplierDashboard/RequestAudit.vue";
//sales analytics
import DashSupplierSalesAnalytics from "../views/supplierDashboard/SalesAnalytics.vue";
//address
import DashSupplierAddNewAddress from "../views/supplierDashboard/AddNewAddress.vue";
import DashSupplierViewAllAddress from "../views/supplierDashboard/ViewAllAddress.vue";
import DashSupplierEditAddress from "../views/supplierDashboard/EditAddress.vue";
//settings
import DashSupplierEditProfileDetails from "../views/supplierDashboard/EditProfileDetails.vue";
import DashSupplierProfile from "../views/supplierDashboard/Profile.vue";
import DashSupplierChangePassword from "../views/supplierDashboard/ChangePassword.vue";

//////////Dashboard
import DashHome from "../views/dashboard/Home.vue";
import DashProfile from "../views/dashboard/Profile.vue";
//notifications
import DashAllNotifications from "../views/dashboard/AllNotifications.vue";
//products
import DashViewProductsActive from "../views/dashboard/ViewProductsActive.vue";
import DashEditProductStatus from "../views/dashboard/EditProductStatus.vue";
import DashViewProductsPending from "../views/dashboard/ViewProductsPending.vue";
import DashViewProductsDisable from "../views/dashboard/ViewProductsDisable.vue";
import AdminProductReview from "../views/dashboard/AdminProductReview.vue";
//orders
import DashViewOrders from "../views/dashboard/ViewOrders.vue";
//buyers
import DashViewBuyersActive from "../views/dashboard/ViewBuyersActive.vue";
import DashEditBuyerContent from "../views/dashboard/EditBuyerContent.vue";
import DashViewBuyersIncomplete from "../views/dashboard/ViewBuyersIncomplete.vue";
import DashViewBuyersDisable from "../views/dashboard/ViewBuyersDisable.vue";
//suppliers
import DashViewSuppliersActive from "../views/dashboard/ViewSuppliersActive.vue";
import DashEditSupplierContent from "../views/dashboard/EditSupplierContent.vue";
import DashViewSuppliersPending from "../views/dashboard/ViewSuppliersPending.vue";
import DashViewSuppliersIncomplete from "../views/dashboard/ViewSuppliersIncomplete.vue";
import DashViewSuppliersDisable from "../views/dashboard/ViewSuppliersDisable.vue";
//shipper
import DashAddShipper from "../views/dashboard/AddShipper.vue";
import DashViewShipper from "../views/dashboard/ViewShipper.vue";
import DashEditShipperContent from "../views/dashboard/EditShipperContent.vue";
//inspector
import DashAddInspector from "../views/dashboard/AddInspector.vue";
import DashViewInspector from "../views/dashboard/ViewInspector.vue";
import DashEditInspectorContent from "../views/dashboard/EditInspectorContent.vue";
//quotes
import DashViewQuotes from "../views/dashboard/ViewQuotes.vue";
import DashQuotes0001 from "../views/dashboard/Quotes0001.vue";
import DashEnterShippingPrice from "../views/dashboard/EnterShippingPrice.vue";
import EditDashEnterShippingPrice from "../views/dashboard/EditEnterShippingPrice.vue";
import DashEnterInspectionPrice from "../views/dashboard/EnterInspectionPrice.vue";
import EditDashEnterInspectionPrice from "../views/dashboard/EditEnterInspectionPrice.vue";
//blogs
import DashWriteBlog from "../views/dashboard/WriteBlog.vue";
import DashEditBlogContent from "../views/dashboard/EditBlogContent.vue";
import DashViewBlog from "../views/dashboard/ViewBlog.vue";
//emails
import DashEmailBuyer from "../views/dashboard/EmailBuyer.vue";
import DashEmailSupplier from "../views/dashboard/EmailSupplier.vue";
import DashEmailInspector from "../views/dashboard/EmailInspector.vue";
import DashEmailShipper from "../views/dashboard/EmailShipper.vue";
import EditBuyerEmail from "../views/dashboard/EditBuyerEmail.vue";
import EditSupplierEmail from "../views/dashboard/EditSupplierEmail.vue";
import EditShipperEmail from "../views/dashboard/EditShipperEmail.vue";
import EditInspectorEmail from "../views/dashboard/EditInspectorEmail.vue";
// import AddEmail from "../views/dashboard/AddEmail.vue";
//access level
import DashCreateAdmin from "../views/dashboard/CreateAdmin.vue";
import DashViewAdmin from "../views/dashboard/ViewAdmin.vue";
import DashManageAdmin from "../views/dashboard/ManageAdmin.vue";
//reports
import DashUserReports from "../views/dashboard/UserReports.vue";
import DashQuoteReports from "../views/dashboard/QuoteReports.vue";
import DashOrderReports from "../views/dashboard/OrderReports.vue";
import DashBuyerReports from "../views/dashboard/BuyerReports.vue";
import DashBuyer001 from "../views/dashboard/Buyer001.vue";
import DashSupplierReports from "../views/dashboard/SupplierReports.vue";
import DashSupplier001 from "../views/dashboard/Supplier001.vue";
import AddBlog from "../views/dashboard/addBlog.vue";
//settings
import DashEditProfileDetails from "../views/dashboard/EditProfileDetails.vue";
import DashChangePassword from "../views/dashboard/ChangePassword.vue";

//catchall 404
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: () => import('@/views/Home') },
  { path: "/about", name: "About", component: () => import('@/views/About') },
  {
    path: "/request-a-product",
    name: "RequestAProduct",
    component: () => import('@/views/RequestAProduct'),
  },
  { path: "/products", name: "Products", component: () => import('@/views/Products') },
  {
    path: "/products/inner-product/:id",
    name: "InnerProductPage",
    component: () => import('@/views/InnerProductPage'),
  },

  { path: "/faq", name: "Faq", component: () => import('@/views/Faq') },
  { path: "/blog", name: "Blog", component: () => import('@/views/Blog') },
  { path: "/blog-content/:title", name: "BlogContent", component: () => import('@/views/BlogContent') },
  { path: "/contact", name: "Contact", component: () => import('@/views/Contact') },
  { path: "/terms", name: "Terms", component: () => import('@/views/Terms') },
  { path: "/privacy", name: "Privacy", component: () => import('@/views/Privacy') },
  { path: "/cookies", name: "Cookies", component: Cookies },
  { path: "/verify-email", name: "EmailVerify", component: EmailVerify },
  //User Auth
  { path: "/login", name: "Login", component: Login },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
  { path: "/supplier-registration", name: "Supplier", component: Supplier },
  { path: "/buyer-registration", name: "Buyer", component: Buyer },

  //////////Buyer Dashboard
  {
    path: "/buyer-dashboard/home",
    name: "DashBuyerHome",
    component: DashBuyerHome,
  },
  //redirect to dashboard page
  { path: "/buyer-dashboard", redirect: "/buyer-dashboard/home" },
  //notifications
  {
    path: "/buyer-dashboard/all-notifications",
    name: "DashBuyerAllNotifications",
    component: DashBuyerAllNotifications,
  },
  /*
  {
    path: "/buyer-dashboard/sent-mail",
    name: "DashBuyerSentMail",
    component: DashBuyerSentMail,
  },
  {
    path: "/buyer-dashboard/trash-mail",
    name: "DashBuyerTrashMail",
    component: DashBuyerTrashMail,
  },
  {
    path: "/buyer-dashboard/compose-mail",
    name: "DashBuyerComposeMail",
    component: DashBuyerComposeMail,
  },
  {
    path: "/buyer-dashboard/draft-mail",
    name: "DashBuyerDraftMail",
    component: DashBuyerDraftMail,
  },
  */
  //orders
  {
    path: "/buyer-dashboard/open-orders",
    name: "DashBuyerOrdersOpen",
    component: DashBuyerOrdersOpen,
  },
  {
    path: "/buyer-dashboard/closed-orders",
    name: "DashBuyerOrdersClosed",
    component: DashBuyerOrdersClosed,
  },
  {
    path: "/buyer-dashboard/cancelled-orders",
    name: "DashBuyerOrdersCancelled",
    component: DashBuyerOrdersCancelled,
  },
  {
    path: "/buyer-dashboard/view-open-order/:id",
    name: "DashBuyerOrderViewOpen",
    component: DashBuyerOrderViewOpen,
  },
  {
    path: "/buyer-dashboard/order-review/review",
    name: "DashBuyerOrderReviewHere",
    component: DashBuyerOrderReviewHere,
  },
  {
    path: "/buyer-dashboard/view-order/completed",
    name: "DashBuyerOrderViewCompleted",
    component: DashBuyerOrderViewCompleted,
  },

  //Product Request
  {
    path: "/buyer-dashboard/product-request",
    name: "DashBuyerProductRequest",
    component: () => import('@/views/buyerDashboard/productRequest'),
  },

  {
    path: "/buyer-dashboard/product-request/:id",
    name: "DashBuyerProductRequestDetails",
    component: () => import('@/views/buyerDashboard/productRequestDetails'),
  },


  //settings
  {
    path: "/buyer-dashboard/edit-profile-details",
    name: "DashBuyerEditProfileDetails",
    component: DashBuyerEditProfileDetails,
  },
  {
    path: "/buyer-dashboard/profile",
    name: "DashBuyerProfile",
    component: DashBuyerProfile,
  },
  {
    path: "/buyer-dashboard/change-password",
    name: "DashBuyerChangePassword",
    component: DashBuyerChangePassword,
  },

  //////////Supplier Dashboard
  {
    path: "/supplier-dashboard/home",
    name: "DashSupplierHome",
    component: DashSupplierHome,
  },
  //redirect to dashboard page
  { path: "/supplier-dashboard", redirect: "/supplier-dashboard/home" },
  //notifications
  {
    path: "/supplier-dashboard/all-notifications",
    name: "DashSupplierAllNotifications",
    component: DashSupplierAllNotifications,
  },
  /*
  {
    path: "/supplier-dashboard/deleted-notifications",
    name: "DashSupplierDeletedNotifications",
    component: DashSupplierDeletedNotifications,
  },
  {
    path: "/supplier-dashboard/mail-box",
    name: "DashSupplierMailBox",
    component: DashSupplierMailBox,
  },
  {
    path: "/supplier-dashboard/sent-mail",
    name: "DashSupplierSentMail",
    component: DashSupplierSentMail,
  },
  {
    path: "/supplier-dashboard/trash-mail",
    name: "DashSupplierTrashMail",
    component: DashSupplierTrashMail,
  },
  {
    path: "/supplier-dashboard/compose-mail",
    name: "DashSupplierComposeMail",
    component: DashSupplierComposeMail,
  },
  {
    path: "/supplier-dashboard/draft-mail",
    name: "DashSupplierDraftMail",
    component: DashSupplierDraftMail,
  },
  */

  //Bid Product
  {
    path: "/supplier-dashboard/bid-product",
    name: "DashSupplierBidProduct",
    component: () => import('@/views/supplierDashboard/bidProduct'),
  },
  {
    path: "/supplier-dashboard/bid-product/:id",
    name: "DashSupplierBidProductDetails",
    component: () => import('@/views/supplierDashboard/bidProductDetails'),
  },


  //orders
  {
    path: "/supplier-dashboard/open-orders",
    name: "DashSupplierOrdersOpen",
    component: DashSupplierOrdersOpen,
  },
  {
    path: "/supplier-dashboard/closed-orders",
    name: "DashSupplierOrdersClosed",
    component: DashSupplierOrdersClosed,
  },
  {
    path: "/supplier-dashboard/cancelled-orders",
    name: "DashSupplierOrdersCancelled",
    component: DashSupplierOrdersCancelled,
  },
  {
    path: "/supplier-dashboard/view-open-order/:id",
    name: "DashSupplierOrderViewOpen",
    component: DashSupplierOrderViewOpen,
  },
  {
    path: "/supplier-dashboard/view-cancelled-order",
    name: "DashSupplierOrderViewCancelled",
    component: DashSupplierOrderViewCancelled,
  },
  //products
  {
    path: "/supplier-dashboard/upload-product",
    name: "DashSupplierProductUpload",
    component: DashSupplierProductUpload,
  },

  {
    path: "/supplier-dashboard/published-products",
    name: "DashSupplierProductPublished",
    component: DashSupplierProductPublished,
  },
  {
    path: "/supplier-dashboard/pending-products",
    name: "DashSupplierProductPending",
    component: DashSupplierProductPending,
  },
  // {
  //   path: "/supplier-dashboard/rejected-products",
  //   name: "DashSupplierProductRejected",
  //   component: DashSupplierProductRejected,
  // },
  {
    path: "/supplier-dashboard/unavailable-products",
    name: "DashSupplierProductUnavailable",
    component: DashSupplierProductUnavailable,
  },
  {
    path: "/supplier-dashboard/draft-products",
    name: "DashSupplierProductDraft",
    component: DashSupplierProductDraft,
  },
  {
    path: "/supplier-dashboard/continue-product-upload",
    name: "DashSupplierProductDraftContinue",
    component: DashSupplierProductDraftContinue,
  },
  {
    path: "/supplier-dashboard/view-products/:id",
    name: "DashSupplierProductViewPublished",
    component: DashSupplierProductViewPublished,
  },
  //certifications
  {
    path: "/supplier-dashboard/certification",
    name: "DashSupplierCertification",
    component: () => import('@/views/supplierDashboard/certification'),
  },
  {
    path: "/supplier-dashboard/uploadCertificate",
    name: "DashSupplierUploadCertification",
    component: () => import('@/views/supplierDashboard/uploadCertificate'),
  },
  {
    path: "/supplier-dashboard/view-supplier-audit",
    name: "DashSupplierViewAudit",
    component: () => import('@/views/supplierDashboard/viewSupplierAudit'),
  },
  {
    path: "/supplier-dashboard/view-audit-content/:id",
    name: "DashSupplierViewAuditContent",
    component: () => import('@/views/supplierDashboard/viewSupplierAuditContent'),
  },
  {
    path: "/supplier-dashboard/edit-audit/:id",
    name: "DashSupplierEditAudit",
    component: () => import('@/views/supplierDashboard/editAuditCertificate'),
  },
  {
    path: "/supplier-dashboard/request-audit",
    name: "DashSupplierRequestAudit",
    component: DashSupplierRequestAudit,
  },
  //sales analytics
  {
    path: "/supplier-dashboard/sales-analytics",
    name: "DashSupplierSalesAnalytics",
    component: DashSupplierSalesAnalytics,
  },
  //addresses
  {
    path: "/supplier-dashboard/add-new-address",
    name: "DashSupplierAddNewAddress",
    component: DashSupplierAddNewAddress,
  },
  {
    path: "/supplier-dashboard/view-address",
    name: "DashSupplierViewAllAddress",
    component: DashSupplierViewAllAddress,
  },
  {
    path: "/supplier-dashboard/edit-address/:id",
    name: "DashSupplierEditAddress",
    component: DashSupplierEditAddress,
  },
  //settings
  {
    path: "/supplier-dashboard/edit-profile-details",
    name: "DashSupplierEditProfileDetails",
    component: DashSupplierEditProfileDetails,
  },
  {
    path: "/supplier-dashboard/profile",
    name: "DashSupplierProfile",
    component: DashSupplierProfile,
  },
  {
    path: "/supplier-dashboard/change-password",
    name: "DashSupplierChangePassword",
    component: DashSupplierChangePassword,
  },

  //////////Dashboard
  { path: "/admin/login", name: "AdminLogin", component: AdminLogin },
  { path: "/dashboard/home", name: "DashHome", component: DashHome },
  { path: "/dashboard/profile", name: "DashProfile", component: DashProfile },
  //notifications
  {
    path: "/dashboard/all-notifications",
    name: "DashAllNotifications",
    component: DashAllNotifications,
  },
  //products
  {
    path: "/dashboard/active-products",
    name: "DashViewProductsActive",
    component: DashViewProductsActive,
  },
  {
    path: "/dashboard/edit-product-status",
    name: "DashEditProductStatus",
    component: DashEditProductStatus,
  },
  {
    path: "/dashboard/pending-products",
    name: "DashViewProductsPending",
    component: DashViewProductsPending,
  },
  {
    path: "/dashboard/supplierReportDetails/:id",
    name: "DashSupplierReportDetails",
    component: () => import('@/views/dashboard/Supplier001')
  },
  {
    path: "/dashboard/buyerReportDetails/:id",
    name: "DashBuyerReportDetails",
    component: () => import('@/views/dashboard/Buyer001')
  },
  {
    path: "/dashboard/disable-products",
    name: "DashViewProductsDisable",
    component: DashViewProductsDisable,
  },
  {
    path: "/dashboard/product-review/:id",
    name: "AdminProductReview",
    component: AdminProductReview,
  },
  //Transaction 
  {
    path: "/dashboard/transaction",
    name: "DashTranaction",
    component: () => import('@/views/dashboard/transaction'),
  },
  {
    path: "/dashboard/transactionDetails/:id",
    name: "DashTransactionDetails",
    component: () => import('@/views/dashboard/transactionDetails'),
  },
  //orders
  {
    path: "/dashboard/view-orders",
    name: "DashViewOrders",
    component: DashViewOrders,
  },
  {
    path: "/dashboard/view-order/:id",
    name: "DashViewOrderSingleOrder",
    component: () => import('@/views/dashboard/view-order'),
  },
  //buyers
  {
    path: "/dashboard/active-buyers",
    name: "DashViewBuyersActive",
    component: DashViewBuyersActive,
  },
  {
    path: "/dashboard/edit-buyer-content",
    name: "DashEditBuyerContent",
    component: DashEditBuyerContent,
  },
  {
    path: "/dashboard/incomplete-buyers",
    name: "DashViewBuyersIncomplete",
    component: DashViewBuyersIncomplete,
  },
  {
    path: "/dashboard/disable-buyers",
    name: "DashViewBuyersDisable",
    component: DashViewBuyersDisable,
  },
  //suppliers
  {
    path: "/dashboard/active-suppliers",
    name: "DashViewSuppliersActive",
    component: DashViewSuppliersActive,
  },
  {
    path: "/dashboard/edit-supplier-content/:id",
    name: "DashEditSupplierContent",
    component: DashEditSupplierContent,
  },
  {
    path: "/dashboard/view-supplier-content/:id",
    name: "DashViewSupplierContent",
    component: () => import('@/views/dashboard/viewSupplierContent'),
  },
  {
    path: "/dashboard/view-buyer-content/:id",
    name: "DashViewBuyerContent",
    component: () => import('@/views/dashboard/viewBuyerContent'),
  },
  {
    path: "/dashboard/view-audit/:id",
    name: "DashViewAudit",
    component: () => import('@/views/dashboard/viewAudit'),
  },
  {
    path: "/dashboard/addSupplierAudit/:id",
    name: "DashAddSupplierAudit",
    component: () => import('@/views/dashboard/addSupplierAudit'),
  },
  {
    path: "/dashboard/pending-suppliers",
    name: "DashViewSuppliersPending",
    component: DashViewSuppliersPending,
  },
  {
    path: "/dashboard/incomplete-suppliers",
    name: "DashViewSuppliersIncomplete",
    component: () => import('@/views/dashboard/ViewSuppliersIncomplete'),
  },
  {
    path: "/dashboard/disable-suppliers",
    name: "DashViewSuppliersDisable",
    component: DashViewSuppliersDisable,
  },
  //shipper
  {
    path: "/dashboard/add-shipper",
    name: "DashAddShipper",
    component: DashAddShipper,
  },
  {
    path: "/dashboard/view-shipper",
    name: "DashViewShipper",
    component: DashViewShipper,
  },
  {
    path: "/dashboard/edit-shipper-content/:id",
    name: "DashEditShipperContent",
    component: DashEditShipperContent,
  },
  //inspector
  {
    path: "/dashboard/add-inspector",
    name: "DashAddInspector",
    component: DashAddInspector,
  },
  {
    path: "/dashboard/view-inspectors",
    name: "DashViewInspector",
    component: DashViewInspector,
  },
  {
    path: "/dashboard/edit-inspector-content/:id",
    name: "DashEditInspectorContent",
    component: DashEditInspectorContent,
  },
  //quotes
  {
    path: "/dashboard/view-quotes",
    name: "DashViewQuotes",
    component: DashViewQuotes,
  },
  {
    path: "/dashboard/quotes/:id",
    name: "DashQuotes0001",
    component: DashQuotes0001,
  },
  {
    path: "/dashboard/shipping-price/:id",
    name: "DashEnterShippingPrice",
    component: DashEnterShippingPrice,
  },
  {
    path: "/dashboard/edit-shipping-price/:id",
    name: "EditDashEnterShippingPrice",
    component: EditDashEnterShippingPrice,
  },
  {
    path: "/dashboard/inspection-price/:id",
    name: "DashEnterSInspectionPrice",
    component: DashEnterInspectionPrice,
  },
  {
    path: "/dashboard/edit-inspection-price/:id",
    name: "EditDashEnterSInspectionPrice",
    component: EditDashEnterInspectionPrice,
  },
  //blogs
  {
    path: "/dashboard/write-blog",
    name: "DashWriteBlog",
    component: DashWriteBlog,
  },
  {
    path: "/dashboard/edit-blog-content/:id",
    name: "DashEditBlogContent",
    component: DashEditBlogContent,
  },
  {
    path: "/dashboard/view-blog",
    name: "DashViewBlog",
    component: DashViewBlog,
  },
  //emails
  {
    path: "/dashboard/buyer-email",
    name: "DashEmailBuyer",
    component: DashEmailBuyer,
  },
  {
    path: "/dashboard/supplier-email",
    name: "DashEmailSupplier",
    component: DashEmailSupplier,
  },
  {
    path: "/dashboard/inspector-email",
    name: "DashEmailInspector",
    component: DashEmailInspector,
  },
  {
    path: "/dashboard/shipper-email",
    name: "DashEmailShipper",
    component: DashEmailShipper,
  },
  {
    path: "/dashboard/edit-buyer-email/:id",
    name: "EditBuyerEmail",
    component: EditBuyerEmail,
  },
  {
    path: "/dashboard/edit-supplier-email/:id",
    name: "EditSupplierEmail",
    component: EditSupplierEmail,
  },
  {
    path: "/dashboard/edit-shipper-email/:id",
    name: "EditShipperEmail",
    component: EditShipperEmail,
  },
  {
    path: "/dashboard/edit-inspector-email/:id",
    name: "EditInspectorEmail",
    component: EditInspectorEmail,
  },
  // {
  //   path: "/dashboard/add-email",
  //   name: "AddEmail",
  //   component: AddEmail,
  // },
  //access level
  {
    path: "/dashboard/create-admin",
    name: "DashCreateAdmin",
    component: DashCreateAdmin,
  },
  {
    path: "/dashboard/view-admin",
    name: "DashViewAdmin",
    component: DashViewAdmin,
  },
  {
    path: "/dashboard/manage-admin/:id",
    name: "DashManageAdmin",
    component: DashManageAdmin,
  },
  //reports
  {
    path: "/dashboard/user-reports",
    name: "DashUserReports",
    component: DashUserReports,
  },
  {
    path: "/dashboard/quote-reports",
    name: "DashQuoteReports",
    component: DashQuoteReports,
  },
  {
    path: "/dashboard/order-reports",
    name: "DashOrderReports",
    component: DashOrderReports,
  },
  {
    path: "/dashboard/buyer-reports",
    name: "DashBuyerReports",
    component: DashBuyerReports,
  },
  {
    path: "/dashboard/buyer001",
    name: "DashBuyer001",
    component: DashBuyer001,
  },
  {
    path: "/dashboard/supplier-reports",
    name: "DashSupplierReports",
    component: DashSupplierReports,
  },
  {
    path: "/dashboard/supplier001",
    name: "DashSupplier001",
    component: DashSupplier001,
  },
  //Blog
  {
    path: "/dashboard/add-blog",
    name: "AddBlog",
    component: AddBlog,
  },
  //settings
  {
    path: "/dashboard/edit-profile-details",
    name: "DashEditProfileDetails",
    component: DashEditProfileDetails,
  },
  {
    path: "/dashboard/change-password",
    name: "DashChangePassword",
    component: DashChangePassword,
  },

  //catchall 404
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
