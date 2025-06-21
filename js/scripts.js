// Menu toggle for mobile
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Active menu link highlighting
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if(pageYOffset >= (sectionTop - sectionHeight/3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('text-primary');
                if(link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-primary');
                }
            });
        });

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.card-hover, .section-title');
            
            elements.forEach(el => {
                const elTop = el.getBoundingClientRect().top;
                const isVisible = (elTop < window.innerHeight - 100);
                
                if(isVisible) {
                    el.classList.add('animate-fadeInUp');
                }
            });
        }
        
        // Add animation class on load for initial elements in view
        window.addEventListener('load', function() {
            animateOnScroll();
        });
        
        // Add animation class on scroll
        window.addEventListener('scroll', function() {
            animateOnScroll();
        });
