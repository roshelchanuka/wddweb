<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velvet Vouge</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>


    <link rel="stylesheet" href="style.css"> 

    <style>
        
        .container {
            max-width: 400px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
        }
        input, textarea, select {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            margin-top: 15px;
            background-color: #28a745;
            color: white;
            padding: 10px;
            border: none;
            width: 100%;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
    </style>

</head>

  <body>


    <section id="header">
        <a herf="#"> <img src="./image/logo.avif" class="logo"  height="100"width="100" alt=""></a>
        <div> 
          <ul id="navbar">
             <li> <a href="index.html">Product categories</a></li>
             <li> <a href="shop.html">Shopping cart</a></li>
             <li> <a class="active" href="customer.php">customer support</a></li>
             <li> <a  href="blog.html">Blog</a></li>
             <li> <a   href="about.html">About</a></li>
             <li> 
                <a herf="cart.html"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
             </li>
             <li><a href="sign-up.php">Sign-up</a></li>
          </ul>
        </div>
     </section>


     <section id="pageheader" class="customer-header">
      <h2>#Let's_talk</h2>
      <p>Responsive customer support</p>
    </section> 
    
    </section>


    <section id="Contact-details" class="section-p1">
        <div class="details">
            <span>GET IN TOUCH</span>
            <H2>Visit one of our agency location or contact us TODAY</H2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>12 Kottawa,Main Street,Colombo.</p>
                </li>

                <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <p>velvetvouge@gmail.com</p>
                </li>

                <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>031-2345689 / +94-790815041</p>
                </li>
            </div>
        </div>


<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.6321540671!2d79.77380331342476!3d6.921831560922283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1740565529726!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </section>


    <!-- support form  -->
    <form action="submit_form.php" method="POST">
      <!-- //// -->

    <div class="container">
        <h2>Customer Support Form</h2>
        <form action="submit_form.php" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="reason">Reason for Contact:</label>
            <select id="reason" name="reason" required>
                <option value="">Select a reason</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
            </select>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
   


    <section id="newsletter" class="section-p1" class="section-m1">
        <div class="newstext">
           <h4> Sign up For Newsletters</h4>
          <b><p> Get E-mail updates about our latest shop and <span>special offers.</span></p></b> 
        </div>
     
        <div class="from">
           <input type="text" placeholder="Your email address">
           <button class="normal">Sign Up</button>
        </div>
     </section>
    
    
    
    <!-- footer start -->
    <footer class="section-p1">
       <div class="col">
          <img class="logo" src="./image/logo.avif" alt="" width="70" height="70">
          <h4>Contact</h4>
          <p> <strong>Address:</strong>12 Kottawa,Main Street,Colombo.</p>
          <p><strong>Phone:</strong> 031-2345689 / +94-790815041</p>
          <p><strong>Hours: </strong>10.00 AM. to 10.30PM. Mon - Sun</p>
          <div class="Follow">
             <h4>Follow us</h4>
             <div class="icon">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
             </div>
          </div>
       </div>
    
       <div class="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Contact Us</a>
       </div>
    
    
       <div class="col">
       <h4>My Account</h4>
       <a href="#">Sign In</a>
       <a href="#">View Chart</a>
       <a href="#">My Wish List</a>
       <a href="#">Track My Order</a>
       <a href="#">Help</a>
    </div>
    
    <div class="col install">
       <h4>From App Store or Google Play.</h4>
       <div class="row">
          <img src="./image/app3.jpg" alt="App Store" height="70" width="70">
          <img src="./image/play.png" alt="Google Play" height="70" width="70">
       </div>
       <p>Secured Payment Gateways.</p>
       <img src="./image/Payment Getways2.png" alt="Payment Gateways">
    </div>
    
    <div class="copyright">
       <p>© 2024 All rights reserved. - HTML-CSS Template</p>
    </div>
    
    </footer> 
    <!-- footer end -->

  </body>