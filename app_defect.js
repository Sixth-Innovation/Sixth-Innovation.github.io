let insidecard = document.querySelectorAll('.div-content');
let sidebarLinks = document.querySelectorAll('.pd---content-inside-card.template-pages---sidebar ul li a');

// Features data
const featureData = {
    'AI-Powered': {
        image: 'artificial_intelligence.jpg',
        title: 'AI-Powered Detection',
        description: 'Utilizes artificial intelligence algorithms to detect a wide range of paper plate defects—such as edge tears, pinholes, smudges, black dots, water marks, or fine particles—ensuring high detection precision beyond human capabilities.',
        bulletPoints: [
            'Advanced deep learning models',
            'High accuracy detection',
            'Multiple defect classification',
            'Continuous learning capabilities'
        ]
    },
    'Image Queue': {
        image: 'cctv.jpg',
        title: 'Smart Image Queue System',
        description: 'Efficient image processing pipeline that manages multiple plate images simultaneously, optimizing throughput while maintaining accurate defect detection and classification.',
        bulletPoints: [
            'Parallel image processing',
            'Real-time queue management',
            'Optimized resource allocation',
            'High throughput processing'
        ]
    },
    'Real-Time Defect': {
        image: 'real_time.jpg',
        title: 'Real-Time Detection System',
        description: 'Instantaneous defect detection and classification system that provides immediate feedback, allowing for quick decision-making and reduced production waste.',
        bulletPoints: [
            'Instant defect identification',
            'Live production monitoring',
            'Quick response system',
            'Automated alert mechanism'
        ]
    },
    'Modular & Scalable Architecture': {
        image: 'ai_generated.jpg',
        title: 'Modular System Design',
        description: 'Flexible system design that easily adapts to different production line sizes and can be customized for various inspection requirements while maintaining consistent performance.',
        bulletPoints: [
            'Scalable infrastructure',
            'Custom configuration options',
            'Easy integration',
            'Future-proof architecture'
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    // Function to update content based on selected feature
    function updateContent(featureTitle) {
        const data = featureData[featureTitle];
        if (!data) return;

        // Update image
        const featureImage = document.getElementById('featureImage');
        featureImage.src = data.image;
        featureImage.alt = featureTitle;

        // Update title and description
        document.getElementById('featureTitle').textContent = data.title;
        document.getElementById('featureDescription').textContent = data.description;

        // Update bullet points
        const featureList = document.querySelector('.feature-list');
        featureList.innerHTML = data.bulletPoints.map(point => `<li>${point}</li>`).join('');
    }

    // Function to update active tab and content
    function updateActiveTab(newIndex) {
        // Remove active class from all tabs
        tabItems.forEach(t => t.classList.remove('tab-active'));
        
        // Add active class to new tab
        tabItems[newIndex].classList.add('tab-active');
        
        // Update content based on selected feature
        const featureTitle = tabItems[newIndex].querySelector('.sub-title-f1').textContent;
        updateContent(featureTitle);
    }

    // Add click event listener to each tab
    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            updateActiveTab(index);
        });
    });

    // Add click events for arrows
    leftArrow.addEventListener('click', () => {
        const currentIndex = Array.from(tabItems).findIndex(tab => tab.classList.contains('tab-active'));
        const newIndex = currentIndex === 0 ? tabItems.length - 1 : currentIndex - 1;
        updateActiveTab(newIndex);
    });

    rightArrow.addEventListener('click', () => {
        const currentIndex = Array.from(tabItems).findIndex(tab => tab.classList.contains('tab-active'));
        const newIndex = currentIndex === tabItems.length - 1 ? 0 : currentIndex + 1;
        updateActiveTab(newIndex);
    });

    // Initialize with first feature
    updateActiveTab(0);
});

console.log("insidecard:", insidecard);
console.log("sidebarLinks:", sidebarLinks);

window.onscroll = () => {
    // Check if window width is greater than 767 pixels
    if (window.innerWidth > 767) {
        insidecard.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop + 250;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            console.log("Top:", top);
            console.log("Offset:", offset);
            console.log("height:", height);
            console.log("id:", id);

            if (top >= offset && top < offset + height) {
                sidebarLinks.forEach(links => {
                    links.classList.remove('w--current');
                    document.querySelector('a[href*=' + id + ']').classList.add('w--current');
                });
            };
        });
    } else {
        // Remove 'w--current' class from sidebarLinks when window width is less than 767 pixels
        sidebarLinks.forEach(links => {
            links.classList.remove('w--current');
        });
    }
};

/*--------------------------- SHOW MENU ------------------------------*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','nav-menu')

const solutionDetails = [
    {
        title: "Intelligent Defect Detection",
        description: "AI-powered system that automatically identifies various defects on paper plates—including tears, stains, black spots, water marks, or tiny contaminants—improving inspection accuracy while reducing human labor dependency.",
        icon: "ri-search-eye-line",
        image: "AI.png"
    },
    {
        title: "Comprehensive Plate-Type",
        description: "Supports detection across 13 distinct paper plate types—including various compartment boxes, round, oval, rectangular plates, and bowls—ensuring reliable inspection regardless of shape or structure.",
        icon: "ri-focus-3-line",
        image: "detect_plate.png"
    },
    {
        title: "Real-Time Visual Inspection",
        description: "Camera-integrated system tiggered by conveyor sensors to capture and process images in real-time, allowing for immediate detection and classification of defects during the manufacturing process.",
        icon: "ri-time-line",
        image: "result_defect.png"
    },
    {
        title: "Extensive Defect Coverage",
        description: "Capable of identifying virtually all defect types found in paper plates—no matter how subtle—including black spots, scratches, tears, dark marks, holes, water stains, dents, wrinkles, color smears, and feather-like traces.",
        icon: "ri-image-edit-line",
        image: "defect_type.png"
    },
    {
        title: "Scalable AI Inspection Platform",
        description: "Modular system design that supports scaling across larger production lines or adaptation to other industries requiring fast and accurate visual quality inspection",
        icon: "ri-stack-line",
        image: "defect_plate_pp.png"
    },
    {
        title: "Labor Cost Reduction & Process Efficiency",
        description: "Minimizes the need for manual inspection, reducing operational costs while ensuring consistent defect detection that is unaffected by human fatigue or subjectivity",
        icon: "ri-bar-chart-line",
        image: "grap.png"
    }
];

function showDetails(index) {
    // Update active state for items
    const items = document.querySelectorAll('.content_item');
    items.forEach(item => item.classList.remove('content_active'));
    items[index].classList.add('content_active');

    // Update details
    const details = solutionDetails[index];
    document.getElementById('detailTitle').textContent = details.title;
    document.getElementById('detailDescription').textContent = details.description;
    document.getElementById('detailImage').src = details.image;
    
    // Update icon
    const detailIcon = document.querySelector('.right-title i');
    detailIcon.className = details.icon; // Remove all classes and set new icon class
    detailIcon.classList.add(details.icon); // Add the new icon class
}

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showDetails(0);
});

// Function to update feature content
function updateFeatureContent(featureTitle) {
    const data = featureData[featureTitle];
    if (!data) return;

    // Update image
    const featureImage = document.getElementById('featureImage');
    featureImage.src = data.image;
    featureImage.alt = featureTitle;

    // Update description
    document.getElementById('featureDescription').textContent = data.description;

    // Update title
    document.getElementById('featureTitle').textContent = data.title;

    // Update bullet points
    const featureList = document.querySelector('.feature-list');
    featureList.innerHTML = data.bulletPoints.map(point => `<li>${point}</li>`).join('');
}

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all tabs
            tabItems.forEach(t => t.classList.remove('tab-active'));
            
            // Add active class to clicked tab
            item.classList.add('tab-active');
            
            // Update content based on selected feature
            const featureTitle = item.querySelector('.sub-title-f1').textContent;
            updateFeatureContent(featureTitle);
        });
    });

    // Initialize with first feature
    updateFeatureContent('AI-Powered');
});