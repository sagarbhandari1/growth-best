<!-- Banner with a single image and black overlay -->
<div class="banner-container">
    <div class="banner-image">
        <img src="gallery-slider/images/banner-copy.jpg" class="d-block w-100" alt="Banner">
        <!-- <div class="overlay"></div> -->
    </div>
</div>

<!-- Bootstrap JS and dependencies (you can remove the carousel-related JS) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<style>
    /* Container for the banner */
    .banner-container {
        position: relative;
        width: 100%;
        height: 600px; /* Adjust container height as needed */
    }

    /* Image styling */
    .banner-image img {
        width: 100%;
        height: 600px; /* Adjust the height percentage as needed */
        object-fit: cover; /* Keeps the image covering the container */
    }

    /* Black overlay */
    /* .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(68, 63, 63, 0.5);
    } */
</style>

