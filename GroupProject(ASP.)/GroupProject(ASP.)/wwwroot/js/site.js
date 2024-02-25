// JavaScript to enable sliding effect
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed here
    slider.scrollLeft = scrollLeft - walk;
});
    function searchStays() {
        var location = document.querySelector('#stays input[type="text"]').value;
    var date = document.querySelector('#stays input[type="date"]').value;
    var numTravelers = document.querySelector('#stays input[type="number"]').value;

    // Perform search based on location, date, and number of travelers
    console.log("Searching stays for location: " + location + ", date: " + date + ", travelers: " + numTravelers);
    }

    function showPage(pageId) {
        var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
            if (page.id === pageId + 'Page') {
        page.style.display = 'block';
            } else {
        page.style.display = 'none';
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContent = document.getElementById('tabContent');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetTab = document.getElementById(targetId);

            if (targetTab) {
                // Hide all tab content
                const allTabs = document.querySelectorAll('.tab-content');
                allTabs.forEach(tab => {
                    tab.style.display = 'none';
                });

                // Show the target tab content
                targetTab.style.display = 'block';

                // Update the URL hash
                window.location.hash = targetId;

                // Load content from an external source if needed
                // Example: loadContent(targetId);
            }
        });
    });

    // Function to load content from an external source
    // function loadContent(targetId) {
    //     const url = `content/${targetId}.html`;
    //     fetch(url)
    //         .then(response => response.text())
    //         .then(data => {
    //             tabContent.innerHTML = data;
    //         })
    //         .catch(error => console.error('Error fetching content:', error));
    // }

    // Initial loading based on the URL hash
    const initialTab = window.location.hash.substring(1);
    if (initialTab) {
        const targetTab = document.getElementById(initialTab);
    if (targetTab) {
        targetTab.style.display = 'block';
        }
    }
    });

