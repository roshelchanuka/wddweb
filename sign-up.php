<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">



    <title>Sign Up Form</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>


<link rel="stylesheet" href="style.css"> 

    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; }
        form { background: white; padding: 20px; width: 300px; margin: auto; border-radius: 5px; box-shadow: 0px 0px 10px gray; }
        input { width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; }
        button { background: blue; color: white; padding: 10px; border: none; width: 100%; border-radius: 5px; cursor: pointer; }
        button:hover { background: darkblue; }

    </style>
</head>


<body>


<section id="header">
        <a herf="#"> <img src="./image/logo.avif" class="logo"  height="100"width="100" alt=""></a>
        <div> 
          <ul id="navbar">
             <li> <a href="index.html">Product categories</a></li>
             <li> <a href="shop.html">Shopping cart</a></li>
             <li> <a href="customer.php">customer support</a></li>
             <li> <a  href="blog.html">Blog</a></li>
             <li> <a   href="about.html">About</a></li>
             <li> 
                <a herf="cart.html"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
             </li>
             <li><a class="active" href="sign-up.php">Sign-up</a></li>
          </ul>
        </div>
     </section>


    

</head>
<body>

    <div class="container">
        <h2>Sign Up</h2>
        <form action="register.php" method="post">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    </div>



 


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

</html>
