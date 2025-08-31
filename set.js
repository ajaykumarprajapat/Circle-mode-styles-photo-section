 const searchContainer = document.getElementById('searchContainer');
        const searchIcon = document.getElementById('searchIcon');
        
        searchIcon.addEventListener('click', function() {
            searchContainer.classList.toggle('minimized');
        });

        // photo ke liye

        document.addEventListener('DOMContentLoaded', function() {
            const photoItems = document.querySelectorAll('.photo-item');
            const overlay = document.querySelector('.overlay');
            const closeBtn = document.querySelector('.close-btn');
            const toggleBtn = document.getElementById('toggleBtn');
            const photoSection = document.querySelector('.photo-section');
            
            // Photo click event for zoom
            photoItems.forEach(item => {
                item.addEventListener('click', function() {
                    this.classList.add('zoomed');
                    overlay.classList.add('active');
                    closeBtn.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Close zoom function
            function closeZoom() {
                photoItems.forEach(item => {
                    item.classList.remove('zoomed');
                });
                overlay.classList.remove('active');
                closeBtn.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            overlay.addEventListener('click', closeZoom);
            closeBtn.addEventListener('click', closeZoom);
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeZoom();
                }
            });
            
            // Toggle between stack and circle mode
            toggleBtn.addEventListener('click', function() {
                if (photoSection.classList.contains('circle-mode')) {
                    // Reset to stack mode
                    photoSection.classList.remove('circle-mode');
                    this.textContent = 'Circle Mode';
                    this.classList.remove('reset-mode');
                } else {
                    // Switch to circle mode
                    photoSection.classList.add('circle-mode');
                    this.textContent = 'Reset';
                    this.classList.add('reset-mode');
                }
            });
        });