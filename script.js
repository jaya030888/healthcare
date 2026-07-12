/* ==========================================
   AMITI SOCIAL WELFARE SOCIETY - INTERACTION ENGINE
   ========================================== */

// Project Data Store for Details Modal
const projectsData = {
    'swasthya-bharat': {
        title: 'Swasthya Bharat Camps',
        category: 'Healthcare Services',
        badgeClass: 'tag-healthcare',
        subtitle: 'Primary health camps in local schools & orphanages',
        description: 'Our Swasthya Bharat initiative targets structural disparities in early pediatric and adolescent health checks. We organize diagnostic checkups, general physician consultations, eye health evaluations, and primary health advice in Bhopal and Sehore government schools. By catching conditions early, we ensure proper development and prevent long-term complications.',
        outcomes: [
            '50+ diagnostic camps organized every year',
            'Over 30,000+ individuals provided with free prescription drugs',
            'Sponsorship links established for 120+ pediatric surgical cases'
        ],
        metric1Val: '500+',
        metric1Lbl: 'Total Camps Run',
        metric2Val: '15 Yrs',
        metric2Lbl: 'Project Lifespan'
    },
    'mobile-clinic': {
        title: 'Mobile Medical Clinic',
        category: 'Healthcare Services',
        badgeClass: 'tag-healthcare',
        subtitle: 'Roving checkups in remote Sehore pockets',
        description: 'For villages situated more than 15 kilometers away from any Primary Health Centre (PHC), seeking simple diagnostic checkups becomes a major economic cost. The Mobile Medical Clinic travels directly to these remote areas, staffed with a general doctor and a nurse. It provides checkups, distributes basic medicines, and carries diagnostic kits for sugar, malaria, and blood testing.',
        outcomes: [
            'Regular weekly coverage across 12 designated village clusters',
            'Pre-natal and maternal nutrition counsel provided on-site',
            'More than 12,000 rural residents served on-site with zero travels'
        ],
        metric1Val: '12',
        metric1Lbl: 'Villages Served Weekly',
        metric2Val: '12k+',
        metric2Lbl: 'Beneficiaries Served'
    },
    'eye-camp': {
        title: 'Vision & Eye Care Camps',
        category: 'Healthcare Services',
        badgeClass: 'tag-healthcare',
        subtitle: 'Refraction checks, free spectacles, and cataract tie-ups',
        description: 'Uncorrected refractive errors are a major reason for dropouts in local schools and loss of work productivity in urban slums. Our Eye Care Camps provide precise computerized refraction testing. We distribute high-quality custom glasses on-site and run screening for cataracts, which are then operated on at municipal partner hospitals.',
        outcomes: [
            '5,000+ children and adults screened for vision correction',
            '1,200+ free custom prescription eyeglasses distributed',
            '240+ cataract surgery referrals completed successfully'
        ],
        metric1Val: '5k+',
        metric1Lbl: 'Vision Screenings',
        metric2Val: '1,200+',
        metric2Lbl: 'Spectacles Distributed'
    },
    'sarva-mangal-bhojan': {
        title: 'Sarva Mangal Bhojan',
        category: 'Nutrition & Dignity',
        badgeClass: 'tag-nutrition',
        subtitle: 'Daily nutritious meals at Cancer Hospital Bhopal',
        description: 'For cancer patients traveling from rural towns to Bhopal, the costs of long chemotherapy schedules can deplete family savings. This often forces accompanying caretakers to compromise on food. Sarva Mangal Bhojan has run continuously for seven years, providing healthy, fresh daily lunches (consisting of wheat chapatis, pulses, rice, and fresh vegetables) prepared under hygienic standards.',
        outcomes: [
            'Continuous daily kitchen service for over 7 consecutive years',
            'More than 200,000+ hot, nutritious meals served with respect',
            'Direct dietary support to help chemotherapy patients maintain calorie counts'
        ],
        metric1Val: '7+ Yrs',
        metric1Lbl: 'Continuous Operation',
        metric2Val: '200k+',
        metric2Lbl: 'Meals Served'
    },
    'samman-campaign': {
        title: 'Samman Campaign',
        category: 'Community Welfare',
        badgeClass: 'tag-community',
        subtitle: 'Seasonal relief & winter clothing distribution',
        description: 'Extreme weather presents high health hazards for families living in temporary brick-kiln structures and tribal hamlets. The Samman Campaign provides relief packages to address seasonal vulnerability. During winters, we distribute thick blankets, kids sweaters, footwear, and emergency dry rations. The distribution is audited and executed with the help of community volunteers.',
        outcomes: [
            '10,000+ seasonal relief packages distributed directly on-site',
            'Thick warm sweaters provided to 3,500+ school-going children',
            'Immediate relief kits deployed to affected families during river floods'
        ],
        metric1Val: '10k+',
        metric1Lbl: 'Kits Distributed',
        metric2Val: '3.5k+',
        metric2Lbl: 'Sweaters Given'
    }
};

// Donation calculator config
const donationCalculations = {
    '1500': {
        headline: 'Your donation of \u20B9 1,500 will fund:',
        description: 'Medical screening, basic blood pressure monitoring, and general medicines for 15 children at a village school health camp.'
    },
    '3000': {
        headline: 'Your donation of \u20B9 3,000 will fund:',
        description: 'Highly nutritious hot meals for 60 patients and caregivers at the Cancer Hospital through our Sarva Mangal Bhojan project.'
    },
    '7500': {
        headline: 'Your donation of \u20B9 7,500 will fund:',
        description: 'Computerized refraction checkups and custom-grade prescription spectacles for 10 elderly patients at our vision camps.'
    },
    '15000': {
        headline: 'Your donation of \u20B9 15,000 will fund:',
        description: 'A complete pediatric health camp setup in a remote village, supporting doctor travel, basic diagnostic equipment, and 200 prescription cards.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initial Routing Setup
    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);

    // Header Scroll Shadow
    window.addEventListener('scroll', handleHeaderScroll);

    // Mobile Menu Toggler
    initMobileMenu();

    // Stats Counters Animation Setup
    initStatsObserver();

    // Testimonial Slider Setup
    initTestimonialsSlider();

    // Programmes Filters Setup
    initProgrammesFilters();

    // Get Involved Calculator Setup
    initDonationCalculator();

    // Form inputs uppercase for PAN card
    const panInput = document.getElementById('donate-pan');
    if (panInput) {
        panInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase();
        });
    }

    // Custom simulated video player play/pause toggle
    initVideoPlayer();
});

/* ==========================================
   SPA NAVIGATION & HASH ROUTING
   ========================================== */
function handleHashRouting() {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash, false);
}

function navigateTo(viewId, updateHash = true) {
    // Scroll progress animation simulation
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '30%';
        setTimeout(() => progressBar.style.width = '100%', 150);
        setTimeout(() => progressBar.style.width = '0%', 400);
    }

    // Map view IDs to sections
    const pageViews = {
        'home': 'home-view',
        'about': 'about-view',
        'programmes': 'programmes-view',
        'get-involved': 'get-involved-view',
        'contact': 'contact-view'
    };

    const targetSectionId = pageViews[viewId] || 'home-view';
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
        // Toggle view containers
        document.querySelectorAll('.page-view').forEach(view => {
            view.classList.remove('active');
        });
        targetSection.classList.add('active');

        // Toggle active status on Nav Links (both Header & Footer)
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === viewId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Trigger animations when returning home
        if (viewId === 'home') {
            resetStatsCounters();
            triggerStatsCounters();
        }

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Update browser hash state
        if (updateHash) {
            window.location.hash = viewId === 'home' ? '' : `#${viewId}`;
        }
    }
}

// Special link route to open the programmes view under a specific filter tab
function navigateToProgram(programCategory) {
    navigateTo('programmes');
    const filterBtn = document.querySelector(`.filter-tab[data-filter="${programCategory}"]`);
    if (filterBtn) {
        filterBtn.click();
    }
}

/* ==========================================
   INTERACTIVE COMPONENT INITIALISERS
   ========================================== */

// Header scroll event
function handleHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

// Mobile navbar menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu on link click
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// Statistics animation observer
let countersRunOnce = false;

function initStatsObserver() {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersRunOnce) {
                    triggerStatsCounters();
                    countersRunOnce = true;
                }
            });
        }, { threshold: 0.2 });

        observer.observe(statsSection);
    }
}

function triggerStatsCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / target), 15);
        let start = 0;
        
        // Adjust stepping for large numbers like 50,000
        const stepVal = target > 1000 ? Math.ceil(target / 100) : 1;

        const timer = setInterval(() => {
            start += stepVal;
            if (start >= target) {
                counter.innerText = target.toLocaleString('en-IN');
                clearInterval(timer);
            } else {
                counter.innerText = start.toLocaleString('en-IN');
            }
        }, stepTime);
    });
}

function resetStatsCounters() {
    countersRunOnce = false;
    document.querySelectorAll('.counter').forEach(counter => {
        counter.innerText = '0';
    });
}

// Testimonials Slider
function initTestimonialsSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-testi');
    const nextBtn = document.getElementById('next-testi');
    const dotsContainer = document.getElementById('slider-dots');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval;

    // Create Navigation Dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlides() {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            dots[idx].classList.remove('active');
        });
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlides();
        resetAutoSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
        resetAutoSlide();
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

    // Auto rotate every 6 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 6000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
}

// Programmes Catalog Filter Tabs
function initProgrammesFilters() {
    const filterButtons = document.querySelectorAll('.filter-tab');
    const catalogCards = document.querySelectorAll('.catalog-project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Switch active tab class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            catalogCards.forEach(card => {
                // Remove existing states
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.classList.add('hidden');
                    }
                }, 200);
            });
        });
    });
}

// Quick Donation Impact Calculator
function initDonationCalculator() {
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customInput = document.getElementById('custom-donation-amount');
    const headline = document.getElementById('calc-headline');
    const description = document.getElementById('calc-description');

    if (!headline || !description) return;

    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (customInput) customInput.value = '';

            const amt = btn.getAttribute('data-amount');
            updateCalculatorImpact(amt);
        });
    });

    if (customInput) {
        customInput.addEventListener('input', (e) => {
            amountBtns.forEach(b => b.classList.remove('active'));
            const customVal = e.target.value;
            if (customVal && parseInt(customVal) >= 100) {
                updateCalculatorImpact(customVal, true);
            } else {
                headline.innerText = 'Calculate Your Support Impact';
                description.innerText = 'Input or click a donation value above to see the diagnostic or nutrition outcomes.';
            }
        });
    }
}

function updateCalculatorImpact(amountStr, isCustom = false) {
    const headline = document.getElementById('calc-headline');
    const description = document.getElementById('calc-description');
    
    if (!headline || !description) return;

    const parsedAmt = parseInt(amountStr);
    headline.innerText = `Your donation of \u20B9 ${parsedAmt.toLocaleString('en-IN')} will fund:`;

    // Direct mapping match
    if (donationCalculations[amountStr]) {
        description.innerText = donationCalculations[amountStr].description;
    } else {
        // Dynamic extrapolation for arbitrary amounts
        if (parsedAmt < 500) {
            description.innerText = `Essential primary health checkup card and basic iron supplements for ${Math.floor(parsedAmt / 100)} children at our camps.`;
        } else if (parsedAmt < 2000) {
            description.innerText = `A full medical diagnostics checkup, basic pharmacy drugs, and early specialist screening referrals for ${Math.floor(parsedAmt / 100)} villagers.`;
        } else if (parsedAmt < 5000) {
            description.innerText = `Approximately ${Math.floor(parsedAmt / 50)} fresh, warm lunch meals distributed to recovering cancer patients at the hospital.`;
        } else {
            description.innerText = `Refraction checks and prescription vision eyeglasses for ${Math.floor(parsedAmt / 750)} elderly individuals, helping restore their livelihood agency.`;
        }
    }
}

// Direct button trigger from quick panel to open donate modal prefilled
function openQuickDonationPayment() {
    const activeBtn = document.querySelector('.amount-btn.active');
    const customInput = document.getElementById('custom-donation-amount');
    let amount = 1500;

    if (customInput && customInput.value) {
        amount = parseInt(customInput.value);
    } else if (activeBtn) {
        amount = parseInt(activeBtn.getAttribute('data-amount'));
    }

    openModal('donate-modal');
    
    // Set value inside modal form input
    const modalAmountInput = document.getElementById('donate-amount');
    if (modalAmountInput) {
        modalAmountInput.value = amount;
    }
}

// Simulated Video Documentary Player
function initVideoPlayer() {
    const videoPlaceholder = document.querySelector('.video-thumbnail-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            openModal('video-modal');
        });
    }

    const player = document.querySelector('.simulated-video-player');
    const playBtn = document.querySelector('.video-play-btn');
    const playBar = document.querySelector('.video-progress-filled');
    const timeIndicator = document.querySelector('.video-time-indicator');

    if (player && playBtn) {
        let isPlaying = false;
        let timer;
        let progressVal = 35;
        let seconds = 88; // 1:28 of 4:12

        player.addEventListener('click', togglePlay);
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlay();
        });

        function togglePlay() {
            isPlaying = !isPlaying;
            if (isPlaying) {
                playBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                `;
                timer = setInterval(() => {
                    seconds++;
                    if (seconds >= 252) { // 4:12 is 252s
                        clearInterval(timer);
                        isPlaying = false;
                        seconds = 0;
                        progressVal = 0;
                    }
                    progressVal = (seconds / 252) * 100;
                    playBar.style.width = `${progressVal}%`;
                    
                    const min = Math.floor(seconds / 60);
                    const sec = seconds % 60;
                    timeIndicator.innerText = `${min}:${sec < 10 ? '0' + sec : sec} / 4:12`;
                }, 1000);
            } else {
                playBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                `;
                clearInterval(timer);
            }
        }
    }
}

/* ==========================================
   MODAL DIALOG OPERATIONS
   ========================================== */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Unlock background scrolling
    }
}

// Close modal when clicking on backdrop overlay
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Dynamic Project Details Populator
function openProjectDetails(projectKey) {
    const data = projectsData[projectKey];
    if (!data) return;

    document.getElementById('modal-project-category').innerText = data.category;
    
    // Switch class for color theme
    const catBadge = document.getElementById('modal-project-category');
    catBadge.className = 'project-modal-category badge';
    catBadge.classList.add(data.badgeClass);

    document.getElementById('modal-project-title').innerText = data.title;
    document.getElementById('modal-project-subtitle').innerText = data.subtitle;
    document.getElementById('modal-project-desc').innerText = data.description;

    // Populating outcomes
    const outcomesContainer = document.getElementById('modal-project-outcomes');
    let listHTML = '<ul>';
    data.outcomes.forEach(out => {
        listHTML += `<li>${out}</li>`;
    });
    listHTML += '</ul>';
    outcomesContainer.innerHTML = listHTML;

    document.getElementById('modal-metric-1-val').innerText = data.metric1Val;
    document.getElementById('modal-metric-1-lbl').innerText = data.metric1Lbl;
    document.getElementById('modal-metric-2-val').innerText = data.metric2Val;
    document.getElementById('modal-metric-2-lbl').innerText = data.metric2Lbl;

    openModal('project-detail-modal');
}

/* ==========================================
   FORM HANDLING & SIMULATED SUBMISSIONS
   ========================================== */

// Helper to trigger success notifications
function triggerToast(title, text) {
    const toast = document.getElementById('toast-notification');
    const toastTitle = document.getElementById('toast-title');
    const toastText = document.getElementById('toast-text');

    if (toast && toastTitle && toastText) {
        toastTitle.innerText = title;
        toastText.innerText = text;
        toast.classList.add('active');

        setTimeout(() => {
            toast.classList.remove('active');
        }, 5000);
    }
}

// Contact page message form
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    
    // Clear form
    document.getElementById('contact-form').reset();

    // Trigger Toast
    triggerToast(
        'Message Transmitted!', 
        `Thank you ${name}, our outreach liaison will contact you shortly.`
    );
}

// Donation Modal submission
function handleDonationSubmit(event) {
    event.preventDefault();
    const amount = document.getElementById('donate-amount').value;
    const name = document.getElementById('donate-name').value;
    
    // Close modal
    closeModal('donate-modal');
    document.getElementById('donation-modal-form').reset();

    // Trigger Success Toast
    triggerToast(
        'Intent Captured!', 
        `Thank you ${name} for pledging \u20B9 ${parseInt(amount).toLocaleString('en-IN')}. Receipt generated on verify.`
    );
}

// Volunteer Modal submission
function handleVolunteerSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('vol-name').value;

    closeModal('volunteer-modal');
    document.getElementById('volunteer-modal-form').reset();

    triggerToast(
        'Application Logged!', 
        `Thank you ${name}, we have scheduled your briefing application review.`
    );
}

// Partner Modal submission
function handlePartnerSubmit(event) {
    event.preventDefault();
    const company = document.getElementById('part-company').value;

    closeModal('partner-modal');
    document.getElementById('partner-modal-form').reset();

    triggerToast(
        'Proposal Inititated!', 
        `Thank you for initiating CSR contact. We will reply to ${company} within 48 hours.`
    );
}

// MENSES Initiative Express Interest submission
function handleMensesSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('men-name').value;

    closeModal('menses-modal');
    document.getElementById('menses-modal-form').reset();

    triggerToast(
        'Interest Registered!', 
        `Thank you ${name}. You have been added to our MENSES briefing newsletter.`
    );
}

// Simulated PDF Downloads
function simulateDownload(filename) {
    event.preventDefault();
    
    // Progress bar flash
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '20%';
        setTimeout(() => progressBar.style.width = '60%', 200);
        setTimeout(() => progressBar.style.width = '100%', 400);
        setTimeout(() => progressBar.style.width = '0%', 650);
    }

    setTimeout(() => {
        triggerToast(
            'Download Complete', 
            `Successfully saved ${filename} local copy.`
        );
    }, 600);
}
