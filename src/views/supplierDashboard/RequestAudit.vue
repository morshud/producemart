<template>
    <div>
        <title>Request Audit - Supplier Dashboard | Produce Mart</title>
        <dash-sidebar/>
        <section class="main_content dashboard_part large_header_bg">
            <dash-navbar/>
            <!--Main Content-->
            <div class="main_content_iner">
                <div class="container-fluid p-0">
                    <div class="row justify-content-center">
                        <!--Breadcrumb-->
                        <div class="col-12">
                            <div class="dashboard_header mb_50">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="dashboard_header_title">
                                        <h3>Why you need an audit?</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="dashboard_breadcam text-right">
                                            <p>
                                                <router-link to="/supplier-dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> Request Audit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--Request Audit-->
                        <div class="col-lg-12 certificationArea" @scroll.native="handleMouseScroll">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 noteArea mb-3 mt-2">
                                    <p>As a supplier on produce mart, you are required to have an audit to complete your registration. This indicates to buyers you aware of international standards around food safety and also show you have gone the extra mile to ensure you are certified which gives them the confidence to trade with your company. A study published in 2017 revealed that almost 90% of respodents felt becoming certified helps to address food safety concerns, and another 74% would undergo certification again even if their customers did not require it. An audit and certification will greatly improve your reputation and revenue.</p>
                                    <p>As a result, ProduceMart have partnered with <a style="color: #65b049;" href="https://www.sgs.com/en">SGS</a> for global testing, certification, and inspection. Please mention ProduceMart when requesting your audit/certification</p>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <h2>Choose a certification level you would like to acquire:</h2>
                                </div>
                                <div class="lefting">
                                    <div class="QA_table mb_30">
                                    <table class="table lms_table_active ">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">LEVEL 1</th>
                                                <th scope="col">LEVEL 2</th>
                                                <th scope="col">LEVEL 3 </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>

                                            </td>
                                            <td><b>
                                                SELF ASSESSMENT OF FOOD SAFETY CULTURE
                                            </b></td>
                                            <td><b>
                                                2ND PARTY AUDIT AND REPORT
                                            </b></td>
                                            <td><b>
                                                GFSI AUDIT E.G SQF,BRCGS,GLOBAL STANDARD, GLOBAL GAP ETC
                                            </b></td>
                                        </tr>
                                        <tr>
                                            <td>Certificate issued <a type="" style="cursor: pointer" data-toggle="tooltip" data-html="true" title="A non-comfirmance report (NCR) is a Issued to be supplier and it explicity found in order to help inform and begin changes or repairs to the problem.">
  <i class="bi bi-question-circle-fill"></i>
</a></td>
                                            <td><i class="bi bi-x-lg"></i></td>
                                            <td><i class="bi bi-x-lg"></i></td>
                                            <td><i class="bi bi-x-lg"></i></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Physical site Audit <a type="" style="cursor: pointer" data-toggle="tooltip" data-html="true" title="A non-comfirmance report (NCR) is a Issued to be supplier and it explicity found in order to help inform and begin changes or repairs to the problem.">
  <i class="bi bi-question-circle-fill"></i>
</a>
                                            </td>
                                            <td><i class="bi bi-x-lg"></i></td>
                                            <td><i class="bi bi-check-lg"></i></td>
                                            <td><i class="bi bi-check-lg"></i></td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Detailed Non Conformity Report Issued <a type="" style="cursor: pointer" data-toggle="tooltip" data-html="true" title="A non-comfirmance report (NCR) is a Issued to be supplier and it explicity found in order to help inform and begin changes or repairs to the problem.">
  <i class="bi bi-question-circle-fill"></i>
</a></td>
                                            <td><i class="bi bi-check-lg"></i></td>
                                            <td><i class="bi bi-check-lg"></i></td>
                                            <td><i class="bi bi-check-lg"></i></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td><div class="btnDiv text-center">
                                            <button>
                                                <a target="_blank" href="https://www.sgs.co.uk/en-gb/contact?id=850fe91e62cc456091f0c00ca15ee166">Request a quote <i class="bi bi-arrow-right"></i></a>
                                            </button>
                                        </div></td>
                                        <td><div class="btnDiv text-center">
                                            <button>
                                                <a target="_blank" href="https://www.sgs.co.uk/en-gb/contact?id=850fe91e62cc456091f0c00ca15ee166">Request a quote <i class="bi bi-arrow-right"></i></a>
                                            </button>
                                        </div></td>
                                        <td><div class="btnDiv text-center">
                                            <button>
                                                <a target="_blank" href="https://www.sgs.co.uk/en-gb/contact?id=850fe91e62cc456091f0c00ca15ee166">Request a quote <i class="bi bi-arrow-right"></i></a>
                                            </button>
                                        </div></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                <!-- <div class="col-lg-4">
                                    <div class="certiBox">
                                        <h3>Level 1</h3>
                                        <h3 style="font-size: 13px;">Self Assessment of food safety culture</h3>
                                        <div class="lineHr"></div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-x-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Certificate issued.
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-x-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Physical site Audit.
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-x-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Detailed Non Conformity Report Issued
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        
                                        <div class="btnDiv text-center">
                                            <a target="_blank" href="https://www.sgs.co.uk/en-gb/contact?id=850fe91e62cc456091f0c00ca15ee166">Request a quote <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="certiBox">
                                        
                                        <h3>Level 2</h3>
                                        <h3 style="font-size: 13px;">2nd Party Audit and report</h3>
                                        <div class="lineHr"></div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-x-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Certificate issued.
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-check-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Physical site Audit.
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-check-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Detailed Non Conformity Report Issued
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        
                                        <div class="btnDiv text-center">
                                            <a target="_blank" href="https://www.sgs.co.uk/en-gb/contact?id=850fe91e62cc456091f0c00ca15ee166">Request a quote <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="certiBox">
                                        
                                        <h3>Level 3</h3>
                                        <h3 style="font-size: 13px;">GFSI Audit e.g SQF,BRCGS,global standard, global Gap etc</h3>
                                        <div class="lineHr"></div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-check-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Certificate issued.
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-check-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Physical site Audit.
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div class="detailsBoxArea">
                                            <div class="markIcon">
                                                <i class="bi bi-check-lg"></i>
                                            </div>
                                            <div class="textSpace">
                                                Detailed Non Conformity Report Issued
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div class="btnDiv text-center">
                                            <a target="_blank" href="https://www.sgs.co.uk/en-gb/contact?id=850fe91e62cc456091f0c00ca15ee166">Request a quote <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>

                        <!--Aduit Response-->
                        <!-- <div class="col-md-12">
                            <div class="white_card card_height_100 mb_30 pt-4">
                                <div class="white_card_body">
                                    <div class="QA_section">
                                        <div class="white_box_tittle list_header">
                                            <h4>Audit Response</h4>
                                        </div>
                                        <div class="fileDownloadOption mb-3">
                                            <button type="button" title="Download as CSV file">CSV</button>
                                            <button type="button" title="Download as PDF file">PDF</button>
                                        </div>
                                        <div class="QA_table mb_30">
                                            <table class="table lms_table_active ">
                                                <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Certification Type</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Gold</td>
                                                    <td>Paid</td>
                                                    <td>2022-04-01</td>
                                                    <td><a href="#" class="status_btn">Active</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

            <dash-footer/>
        </section>
    </div>
</template>
<style>
.lefting{
  text-align: center !important;
  border-radius: 5px;
}
.lefting td{
    border-left:1px solid #000;
}
.lefting th{
    border-top:1px solid #000 !important;
    border:1px solid #000;
}
.lefting .btnDiv i{
    color: #fff;
    font-size: 20px;
}
.lefting .btnDiv{
    font-size: 15px !important;
    color: #000;
}
.lefting .btnDiv button a{
    color: #fff !important;
}
.lefting .btnDiv button{
    border: none;
    border-radius: 8px;
    background: #7be066;
    color: #fff !;
    padding: 10px 20px 10px 20px;
}
.lefting .btnDiv button:focus{
    outline: none;
    border: none;
}
.lefting i{
    color: #7be066;
    font-size: 30px;
}
</style>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
    import DashSidebar from './dash-sidebar.vue'
    import DashNavbar from './dash-navbar.vue'
    import DashFooter from './dash-footer.vue'
    import Swal from 'sweetalert2'
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
      mounted(){
        window.scrollTo(0,0)
        //document.addEventListener('scroll', this.handleMouseScroll())
        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      },
      methods: {
        // handleMouseScroll(){
        //     Swal.fire({
        //         title: "Tips",
        //         text: 'A non-conformance report (NCR) is issued to the supplier and it explicitly details issues found in order to help inform and begin changes and or repairs to the problem. '
        //     })
        // }
      }
    }
</script>
<style>
    .swal2-styled.swal2-confirm {
      border: 0;
      border-radius: .25em;
      background: initial;
        background-color: initial;
        background-image: initial;
      background-color: #7be066 !important;
      color: #fff;
      font-size: 1em;
    }
</style>