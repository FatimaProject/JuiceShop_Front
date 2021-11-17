<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/login1.css">
    <title>LogIn</title>
</head>
<body>
    <section class=" content">
        <div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="username" class="label">Username</label>
                            <input id="username" type="text" class="input">
                            <div class=" red-text" id="usernameerror"></div>
                        </div>
                        <div class="group">
                            <label for="email" class="label">Email</label>
                            <input id="email" type="text" class="input">
                            <div class=" red-text" id="emailerror"></div>
                        </div>
                        <div class="group">
                            <label for="password" class="label">Password</label>
                            <input id="password" type="password" class="input" data-type="password">
                            <div class=" red-text" id="passworderror"></div>
                        </div>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked>
                            <label for="check"><span class="icon"></span> Keep me Signed in</label>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" id="SignIn" value="Sign In">
                        </div>
                        <!-- <div class="hr"></div>
                        <div class="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div> -->
                    </div>
                    <form action=""></form>
                    <div class="sign-up-htm">
                        <div class="group">
                            <label for="usernameReg" class="label">Username</label>
                            <input id="usernameReg" type="text" class="input">
                        </div>
                        <div class="group">
                            <label for="emailReg" class="label">Email Address</label>
                            <input id="emailReg" type="text" class="input">
                        </div>
                        <div class="group">
                            <label for="passwordReg" class="label">Password</label>
                            <input id="passwordReg" type="password" class="input" data-type="password">
                        </div>
                        <div class="group">
                            <label for="passwordCon" class="label">Repeat Password</label>
                            <input id="passwordCon" type="password" class="input" data-type="password">
                        </div>
                        <div class="group">
                            <input type="submit" class="button" id="SignUp" value="Sign Up">
                        </div>
                        <!-- <div class="hr"></div>
                        <div class="foot-lnk">
                            <label for="tab-1">Already Member?</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <!--===============================================================================================-->
    <script src="plugins/jquery/jquery.min.js"></script>
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

<script src="plugins/datatables/jquery.dataTables.min.js"></script>
<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="plugins/jszip/jszip.min.js"></script>
<script src="plugins/pdfmake/pdfmake.min.js"></script>
<script src="plugins/pdfmake/vfs_fonts.js"></script>
<script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="dist/js/lib/Juice-core.js"></script>
    <script src="dist/js/lib/Juice-webService.js"></script>
    <script src="dist/js/login.js"></script>
    <script src="dist/js/nav-bar.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
    
</body>
</html>