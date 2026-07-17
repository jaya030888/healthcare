/* ==========================================
   AMITI SOCIAL WELFARE SOCIETY - INTERACTION ENGINE
   ========================================== */

// Project Data Store for Details Modal
const projectsData = {
    'swasthya-bharat': {
        title: 'Swasthya Bharat Camps',
        category: 'Healthcare Services',
        badgeClass: 'tag-healthcare',
        subtitle: 'Community Health Camps',
        description: 'Amiti Healthcare conducts structured health camps in collaboration with partners such as Shreedhi Milk, Mittal Group of Colleges and local schools in and around Bhopal and nearby districts.<br><br>These camps strengthen early detection, promote health‑seeking behaviour, and demonstrate a replicable model for preventive healthcare outreach.',
        outcomes: [
            'Over 50 health check‑up camps organised with schools, colleges, workplaces and institutions',
            'Camps held at educational institutes, milk factories, petrol pumps, orphanages, old age homes, and special needs centers',
            'Process includes: Initial screening (Basic check-ups & baseline data) and Medical consultation (On-site partnering physicians)',
            'Follow-up: Tracking of referred cases and post-camp data to monitor outcomes',
            'Resource provision: Provision of essential aids such as corrective spectacles for those diagnosed with vision issues'
        ],
        metric1Val: '50+',
        metric1Lbl: 'Camps Organized',
        metric2Val: 'Bhopal/Sehore',
        metric2Lbl: 'Focus Districts'
    },
    'samman-campaign': {
        title: 'Samman Campaign',
        category: 'Relief & Welfare',
        badgeClass: 'tag-community',
        subtitle: 'Community Service and Relief',
        description: 'The “Samman Campaign” responds to acute seasonal and economic vulnerabilities in Bhopal and Sehore.<br><br>The campaign combines immediate relief with community solidarity, especially during periods of harsh weather, economic distress and emergencies.',
        outcomes: [
            'Distribution of essential items such as food, clothing, footwear and winter wear to under‑resourced families and individuals',
            'Community‑driven resource mobilisation, notably in partnership with Punjab Boot House and local citizens',
            'Collaboration with women’s collective Sheroes, ensuring that women’s voices and priorities shape the design and delivery of support'
        ],
        metric1Val: 'Punjab Boot',
        metric1Lbl: 'Resource Partner',
        metric2Val: 'Sheroes',
        metric2Lbl: 'Mobilisation lead'
    },
    'covid-relief': {
        title: 'COVID-19 Awareness & Education',
        category: 'Healthcare Services',
        badgeClass: 'tag-healthcare',
        subtitle: ' grassroots behaviour-change and vaccine facilitation',
        description: 'During the COVID‑19 pandemic, Amiti led comprehensive awareness and behaviour‑change efforts: improving health literacy and supporting government efforts to manage the pandemic at the last mile.',
        outcomes: [
            'Community sessions and workshops on mask usage, hand hygiene, respiratory etiquette and physical distancing',
            'Information on symptom recognition, home‑based care, timely testing and referral',
            'Facilitation of vaccination drives in partnership with local health authorities, helping to address misinformation and build trust in public health measures'
        ],
        metric1Val: 'NHM Aligned',
        metric1Lbl: 'Health Framework',
        metric2Val: 'Bhopal/Sehore',
        metric2Lbl: 'Campaign Areas'
    },
    'sarva-mangal-bhojan': {
        title: 'Sarva Mangal Bhojan Vitran Samiti',
        category: 'Nutrition & Dignity',
        badgeClass: 'tag-nutrition',
        subtitle: 'Nutrition and Dignity',
        description: 'For the past seven years, Amiti has run the Sarva Mangal Bhojan Vitran initiative at the Cancer Hospital in Bhopal.<br><br>The initiative reduces the economic and emotional burden on families already under stress and ensures that no one goes hungry while seeking life‑saving treatment.<br><br>This long‑term, volunteer‑ and donor‑supported intervention reflects Amiti’s commitment to combining healthcare with the basic human right to food.',
        outcomes: [
            'Nutritious, freshly prepared meals are regularly provided to cancer patients and their caregivers',
            'Reduces the economic and emotional burden on rural families visiting Bhopal',
            'Continuous operations for the past seven years at Cancer Hospital Bhopal'
        ],
        metric1Val: '7 Years',
        metric1Lbl: 'Continuous Service',
        metric2Val: 'Bhopal',
        metric2Lbl: 'Hospital Location'
    },
    'menses-project': {
        title: 'The MENSES Project',
        category: 'Women Empowerment',
        badgeClass: 'tag-women',
        subtitle: 'Preventive Health for Women and Girls',
        description: 'The MENSES Project is Amiti’s flagship upcoming initiative on women‑centred preventive healthcare, currently in the research and design phase.<br><br>Focus on menstrual health, reproductive health literacy, and overall well‑being of adolescent girls and women. Planned interventions include school‑ and community‑based sessions, counselling, linkages to public health services, and potential livelihood tie‑ins (e.g., production or distribution of menstrual hygiene products through women’s groups).<br><br>Strong alignment with SDG 3 (health) and SDG 5 (gender equality), and convergence possibilities with WCD and Health Ministry programmes around adolescent girls, maternal health and nutrition.',
        outcomes: [
            'Adolescent girl and reproductive health literacy focus',
            'School- and community-based counselling and interactive sessions',
            'Linkages to public primary health services',
            'Livelihood tie-ins: potential production or distribution of hygiene products through women\'s groups',
            'Convergence with WCD and Health Ministry programs'
        ],
        metric1Val: 'SDG 3 & 5',
        metric1Lbl: 'Core Alignment',
        metric2Val: 'Upcoming',
        metric2Lbl: 'Project Phase'
    },
    'health-lab': {
        title: 'The Health Lab',
        category: 'Healthcare Services',
        badgeClass: 'tag-healthcare',
        subtitle: 'Interactive Preventive Healthcare Awareness',
        description: 'The Health Lab is Amiti\'s flagship interactive community healthcare awareness programme designed to make preventive healthcare engaging, accessible and conversation-driven. Instead of traditional lecture-based sessions, the programme uses a mela-style (fair-style) format with activity stations, games, demonstrations and guided discussions.<br><br>Trained professionals, psychologists, and educators facilitate these sessions, creating a safe, inclusive and judgement-free space.',
        outcomes: [
            'Activity stations, games, and guided discussions focus on building health literacy around: Mental Health, Menstrual Health, Menopause, Nutrition & Lifestyle, and General Preventive Healthcare',
            'School Edition: adolescent focus (puberty, menstrual health, emotional well-being, nutrition, body literacy, healthy habits)',
            'Sports Edition: sports clubs/athletic focus (sports nutrition, mental resilience, menstrual health in athletes, injury prevention, body image)',
            'Menopause Edition: midlife focus (menopause awareness, hormonal changes, mental health, nutrition, bone health, healthy ageing)',
            'Interactive features: pre/post feedback, anonymous question corners, and take-home educational material'
        ],
        metric1Val: '3 Editions',
        metric1Lbl: 'Target Cohorts',
        metric2Val: 'Mela Format',
        metric2Lbl: 'Delivery Mode'
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
        'projects': 'projects-view',
        'gallery': 'gallery-view',
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

// Special link route to open the projects view under a specific filter tab
function navigateToProgram(programCategory) {
    navigateTo('projects');
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


/* ==========================================
   MODAL DIALOG OPERATIONS
   ========================================== */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflowY = 'hidden'; // Lock background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflowY = ''; // Unlock background scrolling
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
    document.getElementById('modal-project-desc').innerHTML = data.description;

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

    // Customise CTA box contextually
    const ctaBox = document.querySelector('#project-detail-modal .modal-cta-box');
    if (ctaBox) {
        if (projectKey === 'menses-project') {
            ctaBox.innerHTML = `
                <h4>Partner or Support</h4>
                <button class="btn-primary btn-full" onclick="closeModal('project-detail-modal'); openModal('menses-modal')">Express Interest</button>
            `;
        } else {
            ctaBox.innerHTML = `
                <h4>Directly support this project</h4>
                <button class="btn-primary btn-full" onclick="closeModal('project-detail-modal'); openModal('donate-modal')">Donate to this Project</button>
            `;
        }
    }

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
// Internship Modal Form Submission Handler
function handleInternshipModalSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('int-name-modal').value;

    closeModal('internship-detail-modal');
    document.getElementById('internship-modal-form').reset();

    triggerToast(
        'Application Logged!', 
        `Thank you ${name}. Your internship application has been successfully transmitted.`
    );
}

// Toggle Floating WhatsApp Chat Widget
function toggleWhatsAppChat() {
    const widget = document.getElementById('whatsapp-chat-widget');
    if (widget) {
        widget.classList.toggle('active');
    }
}


