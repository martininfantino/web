class SlideShow {
    constructor() {
        this.slideIndex = 1;
        this.generateSlides();
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    showSlides(n) {
        let i;
        let slides = $(".brand-slide");
        if (slides.length === 0) return; // Ensure slides array is not empty
        if (n > slides.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex - 1].style.display = "block";
    }

    generateSlides() {
        const brandsDir = 'images/brands';
        $(document).ready(function () {
            const brandSlideshow = $('.brand-slideshow');
            fetch(`${brandsDir}/brands.txt`)
                .then(response => response.text())
                .then(imagesList => {
                    const images = imagesList.split('\n');
                    images.forEach(image => {
                        const imageUrl = `${brandsDir}/${image}`;
                        let slide = document.createElement('div');
                        slide.classList.add('brand-slide');
                        slide.classList.add('fade');
                        brandSlideshow.append(slide);
                        let img = document.createElement('img');
                        img.style.width = 'auto';
                        img.style.maxWidth = '70vw';
                        img.style.maxHeight = '40vh';
                        img.src = imageUrl;
                        slide.appendChild(img);
                    });
                    const brandSlide = $('.brand-slide')[0].style.display = 'block';
                })
                .catch(error => {
                    console.error('Error fetching images:', error);
                });
        }
        );
        this.showSlides(1); // Initialize the slideshow
    }
}

// Initialize the slideshow
const slides = new SlideShow();