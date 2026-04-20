<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thakali Restaurant</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    scroll-behavior: smooth;
}

/* HEADER */
header {
    background: linear-gradient(to right, #8B0000, #b30000);
    color: white;
    text-align: center;
    padding: 25px;
}

/* NAV */
nav {
    background: #222;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

nav a {
    color: white;
    padding: 15px;
    text-decoration: none;
}

nav a:hover {
    background: #8B0000;
}

/* HERO */
.hero {
    height: 80vh;
    background: url('https://images.unsplash.com/photo-1604908811809-7b29d9f8e0b0') center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}

.hero h1 {
    font-size: 50px;
}

.hero button {
    margin-top: 20px;
    padding: 12px 25px;
    border: none;
    background: #FFD700;
    cursor: pointer;
    font-weight: bold;
}

/* SECTIONS */
section {
    padding: 50px 20px;
    text-align: center;
}

/* MENU */
.menu-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background: white;
    margin: 15px;
    width: 250px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    overflow: hidden;
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.card h3 {
    margin: 10px 0;
}

.card p {
    padding: 0 10px;
}

.price {
    color: #8B0000;
    font-weight: bold;
    margin: 10px;
}

/* GALLERY */
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.gallery img {
    width: 200px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
    object-fit: cover;
}

/* CONTACT */
form input, form textarea {
    width: 80%;
    margin: 10px;
    padding: 10px;
}

button {
    padding: 10px 20px;
    background: #8B0000;
    color: white;
    border: none;
}

/* FOOTER */
footer {
    background: #111;
    color: white;
    padding: 20px;
}

/* RESPONSIVE */
@media(max-width: 768px) {
    .hero h1 {
        font-size: 30px;
    }
}
</style>

</head>

<body>

<header>
    <h1>🍛 Thakali Restaurant</h1>
    <p>Authentic Taste of Nepal</p>
</header>

<nav>
    <a href="#home">Home</a>
    <a href="#menu">Menu</a>
    <a href="#gallery">Gallery</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
</nav>

<!-- HERO -->
<div class="hero" id="home">
    <div>
        <h1>Welcome to Thakali Restaurant</h1>
        <p>Experience traditional Nepali cuisine</p>
        <button onclick="orderNow()">Order Now</button>
    </div>
</div>

<!-- MENU -->
<section id="menu">
    <h2>Our Menu</h2>

    <div class="menu-container">

        <div class="card">
            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950">
            <h3>Samosa</h3>
            <p>Potato , flour</p>
            <div class="price">£12</div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec">
            <h3>Wings</h3>
            <p>fried chicken</p>
            <div class="price">£8</div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398">
            <h3>Chicken Curry</h3>
            <p>Traditional Nepali curry</p>
            <div class="price">£10</div>
        </div>

    </div>
</section>

<!-- GALLERY -->
<section id="gallery">
    <h2>Food Gallery</h2>

    <div class="gallery">
        <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0">
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092">
        <img src="https://images.unsplash.com/photo-1617196038435-6d6e6b8e2cbb">
    </div>
</section>

<!-- ABOUT -->
<section id="about">
    <h2>About Us</h2>
    <p>
        Thakali Restaurant brings authentic Nepali flavors using traditional cooking methods.
        We serve fresh, delicious, and cultural dishes.
    </p>
</section>

<!-- CONTACT -->
<section id="contact">
    <h2>Contact Us</h2>

    <p>Email: thakali@example.com</p>
    <p>Phone: +44 123 456 789</p>

    <form onsubmit="return sendMessage()">
        <input type="text" placeholder="Your Name" required><br>
        <input type="email" placeholder="Your Email" required><br>
        <textarea placeholder="Message" required></textarea><br>
        <button type="submit">Send</button>
    </form>
</section>

<footer>
    <p>© 2026 Thakali Restaurant | Designed for CW Assignment</p>
</footer>

<script>
function orderNow() {
    alert("Online ordering coming soon!");
}

function sendMessage() {
    alert("Message sent successfully!");
    return false;
}
</script>

</body>
</html>
