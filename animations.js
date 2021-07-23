'use strict';
gsap.registerPlugin(ScrollTrigger);

// Prevent useless warnings in console if class is not found
    gsap.config({
        nullTargetWarn: false,
    });

    // gsap.defaults({
    //     opacity: 0, 
    // })

// Hero Sections
    window.onload = function() {
        if (window.location.href.indexOf('stories.html') > -1) {
        // Stories
            gsap.to('.storiesAnimation', {x: 0, opacity: 1, duration: 2, delay: .5, ease: "sine.out"});
            gsap.to('.navInviteBtn', {x: 0, opacity: 1, duration: 2, ease: "back.out(1.8)"});

        } else {
        // Index, features, pricing
            gsap.to('.navInviteBtn', {x: 0, opacity: 1, duration: 2, ease: "back.out(1.8)"});
            gsap.from('.topImgContainer', {x: 2000, duration: 1.75, delay: 1.10, ease: "circ.out"});
            gsap.to('.topImgContainer', {opacity: 1}, "-=6"); // Delay the opacity on inital page visit
            gsap.from('.topTxtContainer', {x: -1000, duration: 1.75, delay: 1.15, ease: "circ.out"});
            gsap.to('.topTxtContainer', {opacity: 1}, "-=6"); // Delay the opacity on inital page visit
            gsap.to('.rainbowAnimation', {opacity: 1, duration: 2, delay: 3.10, ease: "circ.out"});
        
            let heroSection = gsap.timeline ({ defaults: {x: 0, opacity: 1, duration: 2, delay: 3.05, ease: "circ.out", }})
                .to('.headingXLargeWht', {})
                .to('.ctaAnimation', {}, "-=4.35")
                .to('.rowSml', {}, "-=4.35");
            return heroSection;
        };
    };

// Index stories images
    let imgContainerDefaults = { // Default values for "imgContainerBeautiful" , "imgContainerDesigned"
        opacity: 0,
        duration: 1.85,
        ease: "power1.out"
    }

    gsap.from('.imgContainerBeautiful', {
        scrollTrigger: {
            trigger: '.imgContainerBeautiful',
            start: "top center"
        },
        x: -1000,
        ...imgContainerDefaults
    });

    gsap.from('.imgContainerDesigned', {
        scrollTrigger: {
            trigger: '.imgContainerDesigned',
            start: "top center"
        },
        x: 1000,
        ...imgContainerDefaults
    });

// Stories
    let storiesDefaults = { // Default values for "storiesTl"
        y: -75, 
        opacity: 0, 
        ease: "sine.out",
        duration: .75
    }

    let storiesTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.topImgContainerFull',
            start: 'center center'
        },
    })

    storiesTl
        .from('.storiesMountainsContainer', {...storiesDefaults})
        .from('.storiesCityScapeContainer', {...storiesDefaults}, "+=.10")
        .from('.storiesDaysVoyageContainer', {...storiesDefaults}, "-=.90")
        .from('.storiesArchitecturalsContainer', {...storiesDefaults}, "+=.10")


// Index + Features svg images
    let indexSvgDefaults = { // Default values for "indexSvgTl"
        y: 100, 
        opacity: 0, 
        ease: "sine.out",
        duration: 1.05
    }

    let indexSvgTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contentWrapperSVG',
            start: "bottom bottom"
        },
    });
 
    indexSvgTl
        .from('.responsiveContainer', {...indexSvgDefaults})
        .from('.photoUploadContainer', {...indexSvgDefaults}, "-=.10")
        .from('.embedContainer', {...indexSvgDefaults}, "-=.20")
        .from('.domainContainer', {...indexSvgDefaults}, "+=0")
        .from('.boostExposureContainer', {...indexSvgDefaults}, "-=.10")
        .from('.dragDropContainer', {...indexSvgDefaults}, "-=.20");

// Pricing 
    let pricingDefaults = { // Default values for "pricingTl"
        y: 100, 
        opacity: 0, 
        ease: "sine.out",
        duration: 1.35
    }

    let pricingTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.basicPricePlanContainer',
            start: "center bottom"
        },
    });

    pricingTl
        .from('.basicPricePlanContainer', {...pricingDefaults})
        .from('.proPricePlanContainer', {...pricingDefaults}, "+=.15")
        .from('.businessPricePlanContainer', {...pricingDefaults}, "-=2.15")
        .from('.slideLeft', {x: 400, opacity: 0, ease: "sine.out"}, "-=.55");



