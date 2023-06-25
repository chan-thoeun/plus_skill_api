<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="keywords" content="admin, dashboard">
	<meta name="author" content="DexignZone">
	<meta name="robots" content="index, follow">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Dompet : Payment Admin Template">
	<meta property="og:title" content="Dompet : Payment Admin Template">
	<meta property="og:description" content="Dompet : Payment Admin Template">
	<meta property="og:image" content="https://dompet.dexignlab.com/xhtml/social-image.png">
	<meta name="format-detection" content="telephone=no">
	
	<!-- PAGE TITLE HERE -->
	<title>Plus Skill</title>
	
	<!-- FAVICONS ICON -->
	<link rel="shortcut icon" type="image/png" href="images/favicon.png">
	
	<link href="../../assets1/vendor/jquery-nice-select/css/nice-select.css" rel="stylesheet">
	<link rel="stylesheet" href="../../assets1/vendor/nouislider/nouislider.min.css">
	<!-- Style css -->
    <link href="../../assets1/css/style.css" rel="stylesheet">
	
</head>
<body>
    <div id="preloader">
        <div class="waviy">
		   <span style="--i:1">L</span>
		   <span style="--i:2">o</span>
		   <span style="--i:3">a</span>
		   <span style="--i:4">d</span>
		   <span style="--i:5">i</span>
		   <span style="--i:6">n</span>
		   <span style="--i:7">g</span>
		   <span style="--i:8">.</span>
		   <span style="--i:9">.</span>
		   <span style="--i:10">.</span>
		</div>
    </div>
    <div id="main-wrapper">
        @include('includes.nav-header')
        @include('includes.header')
        @include('includes.sidebar')
       
        @yield('content')

        @include('includes.footer')
	</div>
    <!-- Required vendors -->
    <script src="../../assets1/vendor/global/global.min.js"></script>
	<script src="../../assets1/vendor/chart.js/Chart.bundle.min.js"></script>
	<script src="../../assets1/vendor/jquery-nice-select/js/jquery.nice-select.min.js"></script>
	
	<!-- Apex Chart -->
	<script src="../../assets1/vendor/apexchart/apexchart.js"></script>
	<script src="../../assets1/vendor/nouislider/nouislider.min.js"></script>
	<script src="../../assets1/vendor/wnumb/wNumb.js"></script>
	
	<!-- Dashboard 1 -->
	<script src="../../assets1/js/dashboard/dashboard-1.js"></script>

    <script src="../../assets1/js/custom.min.js"></script>
	<script src="../../assets1/js/dlabnav-init.js"></script>
	<script src="../../assets1/js/demo.js"></script>
    <script src="../../assets1/js/styleSwitcher.js"></script>
	<script src="{{asset('js/app.js') }}" defer></script>
</body>
</html>