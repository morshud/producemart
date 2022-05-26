import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import RequestAProduct from "../views/RequestAProduct.vue";
import Products from "../views/Products.vue";
import InnerProductPage from "../views/InnerProductPage.vue";
import Faq from "../views/Faq.vue";
import Blog from "../views/Blog.vue";
import BlogContent from "../views/BlogContent.vue";
import Contact from "../views/Contact.vue";
import Terms from "../views/Terms.vue";
import Privacy from "../views/Privacy.vue";
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
import DashBuyerMailBox from "../views/buyerDashboard/MailBox.vue";
import DashBuyerSentMail from "../views/buyerDashboard/SentMail.vue";
import DashBuyerTrashMail from "../views/buyerDashboard/TrashMail.vue";
import DashBuyerComposeMail from "../views/buyerDashboard/ComposeMail.vue";
import DashBuyerDraftMail from "../views/buyerDashboard/DraftMail.vue";
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
import DashSupplierMailBox from "../views/supplierDashboard/MailBox.vue";
import DashSupplierSentMail from "../views/supplierDashboard/SentMail.vue";
import DashSupplierTrashMail from "../views/supplierDashboard/TrashMail.vue";
import DashSupplierComposeMail from "../views/supplierDashboard/ComposeMail.vue";
import DashSupplierDraftMail from "../views/supplierDashboard/DraftMail.vue";
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
import DashSupplierProductDisable from "../views/supplierDashboard/ProductDisable.vue";
import DashSupplierProductDraft from "../views/supplierDashboard/ProductDraft.vue";
import DashSupplierProductDraftContinue from "../views/supplierDashboard/ContinueProductUpload.vue";
import DashSupplierProductViewPublished from "../views/supplierDashboard/ProductViewPublished.vue";
//certifications
import DashSupplierRequestAudit from "../views/supplierDashboard/RequestAudit.vue";
//sales analytics
import DashSupplierSalesAnalytics from "../views/supplierDashboard/SalesAnalytics.vue";
//settings
import DashSupplierEditProfileDetails from "../views/supplierDashboard/EditProfileDetails.vue";
import DashSupplierProfile from "../views/supplierDashboard/Profile.vue";
import DashSupplierChangePassword from "../views/supplierDashboard/ChangePassword.vue";

//////////Dashboard
import DashHome from "../views/dashboard/Home.vue";
import DashProfile from "../views/dashboard/Profile.vue";
//products
import DashViewProductsActive from "../views/dashboard/ViewProductsActive.vue";
import DashViewProductsPending from "../views/dashboard/ViewProductsPending.vue";
import DashViewProductsDisable from "../views/dashboard/ViewProductsDisable.vue";
//orders
import DashViewOrders from "../views/dashboard/ViewOrders.vue";
//buyers
import DashViewBuyersActive from "../views/dashboard/ViewBuyersActive.vue";
import DashViewBuyersIncomplete from "../views/dashboard/ViewBuyersIncomplete.vue";
import DashViewBuyersDisable from "../views/dashboard/ViewBuyersDisable.vue";
//suppliers
import DashViewSuppliersActive from "../views/dashboard/ViewSuppliersActive.vue";
import DashViewSuppliersPending from "../views/dashboard/ViewSuppliersPending.vue";
import DashViewSuppliersIncomplete from "../views/dashboard/ViewSuppliersIncomplete.vue";
import DashViewSuppliersDisable from "../views/dashboard/ViewSuppliersDisable.vue";
//shipper
import DashAddShipper from "../views/dashboard/AddShipper.vue";
import DashViewShipper from "../views/dashboard/ViewShipper.vue";
//inspector
import DashAddInspector from "../views/dashboard/AddInspector.vue";
import DashViewInspector from "../views/dashboard/ViewInspector.vue";
//quotes
import DashViewQuotes from "../views/dashboard/ViewQuotes.vue";
import DashQuotes0001 from "../views/dashboard/Quotes0001.vue";
//blogs
import DashWriteBlog from "../views/dashboard/WriteBlog.vue";
import DashEditBlogContent from "../views/dashboard/EditBlogContent.vue";
import DashViewBlog from "../views/dashboard/ViewBlog.vue";
//emails
import DashEmailBuyer from "../views/dashboard/EmailBuyer.vue";
import DashEmailSupplier from "../views/dashboard/EmailSupplier.vue";
import DashEmailInspector from "../views/dashboard/EmailInspector.vue";
import DashEmailShipper from "../views/dashboard/EmailShipper.vue";
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
//settings
import DashEditProfileDetails from "../views/dashboard/EditProfileDetails.vue";
import DashChangePassword from "../views/dashboard/ChangePassword.vue";

//catchall 404
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  {
    path: "/request-a-product",
    name: "RequestAProduct",
    component: RequestAProduct,
  },
  { path: "/products", name: "Products", component: Products },
  {
    path: "/products/inner-product",
    name: "InnerProductPage",
    component: InnerProductPage,
  },
  { path: "/faq", name: "Faq", component: Faq },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog-content", name: "BlogContent", component: BlogContent },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/terms", name: "Terms", component: Terms },
  { path: "/privacy", name: "Privacy", component: Privacy },
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
    path: "/buyer-dashboard/mail-box",
    name: "DashBuyerMailBox",
    component: DashBuyerMailBox,
  },
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
    path: "/buyer-dashboard/view-open-order",
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
    path: "/supplier-dashboard/view-open-order",
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
  {
    path: "/supplier-dashboard/disable-products",
    name: "DashSupplierProductDisable",
    component: DashSupplierProductDisable,
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
    path: "/supplier-dashboard/view-products",
    name: "DashSupplierProductViewPublished",
    component: DashSupplierProductViewPublished,
  },
  //certifications
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
  //products
  {
    path: "/dashboard/active-products",
    name: "DashViewProductsActive",
    component: DashViewProductsActive,
  },
  {
    path: "/dashboard/pending-products",
    name: "DashViewProductsPending",
    component: DashViewProductsPending,
  },
  {
    path: "/dashboard/disable-products",
    name: "DashViewProductsDisable",
    component: DashViewProductsDisable,
  },
  //orders
  {
    path: "/dashboard/view-orders",
    name: "DashViewOrders",
    component: DashViewOrders,
  },
  //buyers
  {
    path: "/dashboard/active-buyers",
    name: "DashViewBuyersActive",
    component: DashViewBuyersActive,
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
    path: "/dashboard/pending-suppliers",
    name: "DashViewSuppliersPending",
    component: DashViewSuppliersPending,
  },
  {
    path: "/dashboard/incomplete-suppliers",
    name: "DashViewSuppliersIncomplete",
    component: DashViewSuppliersIncomplete,
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
  //quotes
  {
    path: "/dashboard/view-quotes",
    name: "DashViewQuotes",
    component: DashViewQuotes,
  },
  {
    path: "/dashboard/quotes/quotes0001",
    name: "DashQuotes0001",
    component: DashQuotes0001,
  },
  //blogs
  {
    path: "/dashboard/write-blog",
    name: "DashWriteBlog",
    component: DashWriteBlog,
  },
  {
    path: "/dashboard/edit-blog-content",
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
    path: "/dashboard/manage-admin",
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
