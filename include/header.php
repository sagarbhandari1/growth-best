<!-- Header start -->
<style>
    body {
        overflow-x: hidden !important;
    }

    .open-button {
        background-color: #555;
        color: white;
        padding: 8px 7px;
        border: none;
        cursor: pointer;
        opacity: 0.8;
        position: fixed;
        bottom: 25px;
        right: 68px;
        width: 134px;
        z-index: 9;
    }

    /* The popup chat - hidden by default */
    .chat-popup {
        display: none;
        position: fixed;
        bottom: 0;
        right: 15px;
        border: 3px solid #f1f1f1;
        z-index: 9;
    }

    /* Add styles to the form container */
    .form-container {
        max-width: 300px;
        padding: 10px;
        background-color: white;
    }

    /* Full-width textarea */
    .form-container textarea {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        border: none;
        background: #f1f1f1;
        resize: none;
        min-height: 200px;
    }

    /* When the textarea gets focus, do something */
    .form-container textarea:focus {
        background-color: #ddd;
        outline: none;
    }

    /* Set a style for the submit/send button */
    .form-container .btn {
        background-color: #4CAF50;
        color: white;
        padding: 16px 20px;
        border: none;
        cursor: pointer;
        width: 100%;
        margin-bottom: 10px;
        opacity: 0.8;
    }

    /* Add a red background color to the cancel button */
    .form-container .cancel {
        background-color: red;
        z-index: 999;
    }

    /* Add some hover effects to buttons */
    .form-container .btn:hover,
    .open-button:hover {
        opacity: 1;
    }
</style>
<!-- <button class="open-button" onclick="openForm()">Live Chat</button> -->
<div class="chat-popup" id="myForm">
    <form action="/action_page.php" class="form-container">
        <h1>Live Chat</h1>
        <label for="msg"><b>Name</b></label>
        <input type="text" name="fname" style="width:80%" placeholder="" /><br>
        <label for="msg"><b>Email</b></label>&nbsp;
        <input type="email" name="email" style="width:80%" placeholder="" /><br>
        <label for="msg"><b>Message</b></label>
        <textarea placeholder="Type message.." name="msg" required></textarea>
        <button type="submit" class="btn">Send</button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
</div>
<script>
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
</script>
<header id="header" class="navbar header" role="banner" style="background:#7a1f1e; z-index:1;width:100%;">
    <div class="container-fluid" style="">
        <div class="row">
            <!-- Logo start -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <span style="color: #fff;padding-right:30px;padding-top: 10px;" class="pull-right"><i
                        class="fa fa-phone"></i> +91-8899788887</span>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="col-lg-3 col-md-2 col-sm-2 col-xs-2 mx-auto">
                    <img src="images/logo-123.jpeg" class="logo" alt="logo" style="">
                    <button type="button" class="navbar-toggle navbar-header" data-toggle="collapse"
                        data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!--/ Logo end -->
                </div>
                <!--/ Logo end -->
                <!--/ Logo end -->
                <div class="col-lg-9 col-md-10 col-sm-10 col-xs-10">
                    <nav class="collapse navbar-collapse clearfix" role="navigation" style="margin-top:20px;">
                        <ul class="nav navbar-nav navbar-right">
                            <li class=""><a href="index.php">Home</a></li>
                            <li class="dropdown ">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Samarth Harsh</a>
                                <div class="dropdown-menu" id="list-example">
                                    <ul>
                                        <li><a class="text-dark " href="about_samarthharsh.php#vision">Vision</a></li>
                                        <li><a class="text-dark " href="about_samarthharsh.php#mision">Mission</a></li>
                                        <li><a class="text-dark " href="about_samarthharsh.php#about_samarthharsh">About
                                                Me</a></li>
                                        <li><a href="about_samarthharsh.php#csrvision">CSR</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown ">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Training</a>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li><a class="text-dark " href="the_greatness_guide.php">The Greatness Guide</a>
                                        </li>
                                        <li><a class="text-dark " href="the-game-changers-blueprint.php">The Game
                                                Changer's Blueprint</a></li>
                                        <li><a class="text-dark " href="everyday_hero_method.php">Everyday Hero
                                                Method</a></li>
                                        <li><a href="learn_to_earn.php">Learn to Earn</a></li>
                                        <li class=""><a href="grow_more.php">Grow More</a></li>
                                        <li><a class="text-dark " href="career_counselling.php">Career Counselling</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <!-- <li class="dropdown ">FFF
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services</a>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li class=""><a href="digital_marketing.php">Digital Marketing</a></li>
                                        <li><a href="hr.php">Human Resources</a></li>
                                        <li><a href="franchise.php">Franchise Consultancy</a></li>
                                        <li><a href="event_planner.php">Event Management</a></li>
                                        <li><a href="buisness.php">New Business Setup</a></li>
                                        <li><a href="political.php">Political Consulting</a></li>
                                    </ul>
                                </div>
                            </li> -->

                            <li class="dropdown ">
                                <a href="" class="dropdown-toggle" data-toggle="dropdown">Services</a>
                                <div class="dropdown-menu" id="list-example1">
                                    <ul>
                                        <li class=""><a href="page1.php#Digital">Digital Marketing</a></li>
                                        <!-- <li class=""><a href="page1.php#Digital">Digital Marketing</a></li> -->
                                        <li><a class="text-dark " href="page1.php#hr">Human Resources</a></li>
                                        <li><a class="text-dark " href="page1.php#Franchise">Franchise Consultancy</a>
                                        </li>
                                        <li><a class="text-dark " href="page1.php#Event">Event Management</a></li>
                                        <li><a class="text-dark " href="page1.php#Business">New Business Setup</a></li>
                                        <li><a class="text-dark " href="page1.php#political">Political Consulting</a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown ">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">CSR</a>
                                <div class="dropdown-menu" id="list-example1">
                                    <ul>
                                        <li><a class="text-dark " href="csr.php#csr">Our CSR</a></li>
                                        <li><a class="text-dark " href="csr.php#vision">Vision</a></li>
                                        <li><a class="text-dark " href="csr.php#ourprocess">Our Process</a></li>
                                        <li><a class="text-dark " href="csr.php#whytrees">Why Trees ?</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="career.php">Career</a></li>
                            <li><a href="articles.php">Blog</a></li>
                            <li><a href="contact.php">Connect With Me</a></li>
                        </ul>
                    </nav>
                    <!--/ Navigation end -->
                </div>
                <!--/ Row end -->
            </div>
            <!--/ Container end -->
        </div>
        <!--/ Container end -->
    </div>
    <!--/ Container end -->
</header>
<!--/ Header end -->
<!-- <nav class="social11">
    <ul>
        <li class="linkedin"><a href="https://www.linkedin.com/feed/">LinkedIn<i class="fa fa-linkedin"
                    aria-hidden="true"></i></a></li>
        <li class="instagram"><a href="https://www.instagram.com/growthbest1/?hl=en">Instagram<i class="fa fa-instagram"
                    aria-hidden="true"></i></a></li>
        <li class="twitter"><a href="">Twitter<i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li class="facebook"><a href="https://www.facebook.com/TheGrowthBest/?ref=pages_you_manage">Facebook<i
                    class="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li class="pinterest"><a href="">Pinterest<i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
        <li class="quora"><a href="https://www.quora.com/">Quora<i class="fa fa-quora" aria-hidden="true"></i></a></li>

    </ul>
</nav> -->