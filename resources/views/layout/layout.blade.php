<!DOCTYPE html>

<!-- =========================================================
* Sneat - Bootstrap 5 HTML Admin Template - Pro | v1.0.0
==============================================================

* Product Page: https://themeselection.com/products/sneat-bootstrap-html-admin-template/
* Created by: ThemeSelection
* License: You must have a valid license purchased in order to legally use the theme for your project.
* Copyright ThemeSelection (https://themeselection.com)

=========================================================
 -->
<!-- beautify ignore:start -->
<html
  lang="en"
  class="light-style layout-menu-fixed"
  dir="ltr"
  data-theme="theme-default"
  dadashboard-assets-path="dashboard/assets/"
  data-template="vertical-menu-template-free">
  <head>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <link href="https://cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sius012/dheracodelibrary@master/js/Timeliner/timeliner.css">
    <style>
      th,td{
        font-size: 8pt;
      }
        .board {
            display: flex;
        }

        .column {
            margin: 10px;
            padding: 10px;
            width: 600px;
            background-color: #e2e2e2;
            border: 1px solid #e6e6e6;
            border-radius: 5px;
        }

        .text-sm{
          font-size: 8pt;
        }

       
    .task-container {
        display: flex;
        flex-wrap: wrap;
    }

    .task-card {
        width: 300px;
        margin: 10px;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .task-card h2 {
        margin: 0;
    }

    .task-card p {
        margin-top: 10px;
    }

    .task-card .due-date {
        font-style: italic;
        font-size: 14px;
        color: #e7e7e7;
    }

    .task-card .status {
        margin-top: 10px;
    }

    .task-card .status span {
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;
    }

    .status-to-do {
        background-color: #ffffff;
    }

    .status-in-progress {
        background-color: #ebebeb;
    }

    .status-done {
        background-color: #d3f5d3;
    }

    .card-jurusan-dashboard{
      background-color: #369FFF;
      color: white;
      padding: 20px;
      border-radius: 20px;
      height: 180px;
      box-shadow: 0px 10px 30px 0px #8AC53E66;

    }

    

    .card-jurusan-dashboard h3{ 
      color: white;
      font-size: 15pt;
    }



.filter-bar, .search-bar {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: right;
}
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.filter-bar, .search-bar {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
}

.item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    width: 150px;
    text-align: center;
}


.list-item-search:hover{
  background-color: whitesmoke;
}

.list-item-search{
  padding: 3px;
}

    



</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
    />

    <title>RUBI</title>

    <meta name="description" content="" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/dashboard/assets/img/favicon/favicon.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/css/splide.min.css">
    <!-- Icons. Uncomment required icon fonts -->
    <link rel="stylesheet" href="/dashboard/assets/vendor/fonts/boxicons.css" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard/assets/vendor/css/core.css') }}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="/dashboard/assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="/dashboard/assets/css/demo.css" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="/dashboard/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

    <link rel="stylesheet" href="/dashboard/assets/vendor/libs/apex-charts/apex-charts.css" />

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="/dashboard/assets/vendor/js/helpers.js"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="/dashboard/assets/js/config.js"></script>
    {{--  css bootsrtrap  --}}
    <style>
      td,th{
        font-size: 8pt;
      }


      .container-pencarian{
        
        top: 90px;
      }

      .container-pencarian ul{
        display: block;
      }

      .container-pencarian li{
        display: block;
      }
    </style>

    
      @stack("css")
  </head>

  <body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar" >
      <div class="layout-container" >
        <!-- Menu -->

        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
          <img src="{{asset('img/logo/logo1.svg')}}" alt="" style="width: 80%">
            <a href="/index" class="app-brand-link">
              
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">

            <!-- -----------------------Dashboard------------------- -->
            <li class="menu-item ">
              <a href="/pages/dashboard" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>

            <!-- ---------------------Layouts as a project---------------------- -->
            @if(Auth::guard('web')->check())
            <li class="menu-item">
                <a href="/pages/projek" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Basic">Projek</div>
                </a>
              </li>
              <li class="menu-item">
                <a href="/pages/siswa" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-user"></i>
                  <div data-i18n="Basic">Siswa</div>
                </a>
              </li>
              <li class="menu-item">
                <a href="/pages/konfigurasi" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-cog"></i>
                  <div data-i18n="Basic">Konfigurasi</div>
                </a>
              </li>
            @endif
            <!-- ---------------------TaskBoard---------------------- -->
            @if(Auth::guard('student')->check())
            <li class="menu-item">
                <a href="/pages/taskboard" class="menu-link">
                    <i class="menu-icon tf-icons bi bi-list-task"></i>
                  <div data-i18n="Basic">Task Board</div>
                </a>
              </li>
              @endif

              <!-- ---------------------menu projek pakai drop down---------------------- -->
            
              <!-- <li class="menu-item">
                <a href="" class="menu-link menu-toggle" ">
                <i class="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">Projek </div>
              </a>

              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="" class="menu-link">
                    <div data-i18n="Without menu">PPLG</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="" class="menu-link">
                    <div data-i18n="Without navbar">DKV 1</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="" class="menu-link">
                    <div data-i18n="Container">DKV 2</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="" class="menu-link">
                    <div data-i18n="Fluid">TKP</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="" class="menu-link">
                    <div data-i18n="Blank">TP</div>
                  </a>
                </li>
                <li class="menu-item">
                    <a href="" class="menu-link">
                      <div data-i18n="Blank">KULINER</div>
                    </a>
                  </li>
              </ul>
            </li>  -->

            {{--  -----------------------setting akun---------------------- --}}
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Setting</span>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings" id='name-account'></div>
              </a>
              <ul class="menu-sub">
              @if(Auth::guard('student')->check())
                <li class="menu-item">
                  <a href="" class="menu-link">Profil</a>
                </li>
              @endif
                <li class="menu-item">
                  <a href="pages-account-settings-account.html" class="menu-link">
                    <form action="/logout" method="post">
                        @csrf
                          <button type="submit" class="btn">Keluar</button>
                    </form>
                
                  </a>
                </li>
              </ul>
            </li>

        </aside>
        <!-- / Menu -->

        <!-- Layout container -->
        <div class="layout-page">
          <!-- ---------------------Navbar-------------------- -->
          <nav
            class="layout-navbar  navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i class="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div class="navbar-nav-right align-items-center" id='pencarian-menu'>
              <!-- Search -->
              <div class="navbar-nav align-items-center">
                <div class="nav-item d-flex align-items-center" >
                  <i class="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    class="form-control border-0 shadow-none cari-sesuatu"
                    placeholder="Cari sesuatu..."
                    aria-label="Search..."

                  />
                 
                </div>
                <ul class='container-pencarian p-2 card' style="position:absolute;display:none"></ul>
                
              </div>
              <!-- /Search -->

              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <!-- Place this tag where you want the button to render. -->
                <li class="nav-item lh-1 me-3">
                 
                </li>

                <!--/ User -->
              </ul>
            </div>
          </nav>


          <!-- Content wrapper -->
          <div class="content-wrapper">

            <!-- -----------Content------- -->
            <div class="container-fluid p-3">
                <div class="container-fluid">
                @include("maincomponent.breadcrumb")
                </div>
                @yield('main-content')
            </div>
            <!-- ----------/Content------- -->


            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->

        </div>

        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
    <!-- / Layout wrapper -->


    <!-- Core JS -->
    <!-- build:dashboard assets/vendor/js/core.js -->
    <script src="/dashboard/assets/vendor/libs/jquery/jquery.js"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="/dashboard/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="/dashboard/assets/vendor/js/menu.js"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="/dashboard/assets/vendor/libs/apex-charts/apexcharts.js"></script>

    <!-- Main JS -->
    <script src="/dashboard/assets/js/main.js"></script>  
    
    <!-- Page JS -->
    <script src="/dashboard/assets/js/dashboards-analytics.js"></script>
    <script src="/admin/assets/js/plugins/chartjs.min.js"></script>
    <!-- Place this tag in your head or just before your close body tag. -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script src="{{ asset('js/Helper/Helper.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.min.js" integrity="sha512-L0Shl7nXXzIlBSUUPpxrokqq4ojqgZFQczTYlGjzONGTDAcLremjwaWv5A+EDLnxhQzY5xUZPWLOLqYRkY0Cbw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
      $(document).ready(function(){

      })
    </script>
    <style>
      .bg-ready {   
    background-color: #9944e3 !important;
}

.bg-review {
    background-color: #912a91 !important;
}
    </style>

<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js" integrity="sha512-aNMyYYxdIxIaot0Y1/PLuEu3eipGCmsEUBrUq+7aVyPGMFH8z0eTP0tkqAvv34fzN6z+201d3T8HPb1svWSKHQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    @stack('script')
    <script src="{{ asset('js/Pages/layout.js') }}" type="module"></script>
    <script src="{{asset('js/lib/Timeliner.js')}}"></script>
</body>
</html>