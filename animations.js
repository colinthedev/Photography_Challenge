'use strict';
gsap.registerPlugin(ScrollTrigger);

// // Hero Sections
//     window.onload = function() {
//         if (window.location.href.indexOf('stories.html') > -1) {
//         // Hero sec stories
//             gsap.to('.storiesAnimation', {ease: "sine.out", x:0, opacity: 1, duration: 2, delay: .5});
//         } else {
//         // Hero sec index, features, pricing
//             gsap.to('.navInviteBtn', {ease: "back.out(1.8)", x:0, opacity: 1, duration: 2});
//             gsap.to('.topImgContainer', {ease: "circ.out", x:0, opacity: 1, duration: 1.75, delay: 1.10});
//             gsap.to('.topTxtContainer', {ease: "circ.out", x:0, opacity: 1, duration: 1.75, delay: 1.15});
//             gsap.to('.rainbowAnimation', {ease: "circ.out", opacity: 1, duration: 2, delay: 3.10});
        
//             let heroSection = gsap.timeline ({ defaults: {x: 0, opacity: 1, duration: 2, delay: 3.05, ease: "circ.out", }})
//                 .to('.headingXLargeWht', {})
//                 .to('.summaryWhite', {}, "-=4.35")
//                 .to('.rowSml', {}, "-=4.35");
//             return heroSection;
//         }
//     }

// Hero Sections
window.onload = function() {
    if (window.location.href.indexOf('stories.html') > -1) {
    // Hero sec stories
        gsap.from('.storiesAnimation', {ease: "sine.out", x: 150, opacity: 0, duration: 2, delay: .5});
    } else {
    // Hero sec index, features, pricing
        gsap.from('.navInviteBtn', {ease: "back.out(1.8)", x: 200, opacity: 0, duration: 2});
        gsap.from('.topImgContainer', {ease: "circ.out", x: 1000, opacity: 0, duration: 1.75, delay: 1.10});
        gsap.from('.topTxtContainer', {ease: "circ.out", x: -1000, opacity: 0, duration: 1.75, delay: 1.15});
        gsap.from('.rainbowAnimation', {ease: "circ.out", opacity: 0, duration: 2, delay: 3.10});
    
        let heroSection = gsap.timeline ({ defaults: {x: 150, opacity: 0, duration: 2, delay: 3.05, ease: "circ.out", }})
            .from('.headingXLargeWht', {})
            .from('.summaryWhite', {}, "-=4.35")
            .from('.rowSml', {}, "-=4.35");
        return heroSection;
    }
}

// Index stories images
    gsap.from('.imgContainerBeautiful', {
        scrollTrigger: {
            trigger: '.imgContainerBeautiful',
            start: "top center"
        },
        x: -1000,
        opacity: 0,
        duration: 1.85,
        ease: "power1.out"
    })

    gsap.from('.imgContainerDesigned', {
        scrollTrigger: {
            trigger: '.imgContainerDesigned',
            start: "top center"
        },
        x: 1000,
        opacity: 0,
        duration: 1.85,
        ease: "power1.out"
    })

// Index svg images
    let indexSvgTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.indexSvgRowContainer',
            start: "center bottom"
        }
    });

    indexSvgTl
        .from('.responsiveContainer', {y: 100, opacity: 0, ease: "sine.out", duration: 1.5})
        .from('.photoUploadContainer', {y: 100, opacity: 0, ease: "sine.out", duration: 1.5}, "-=.75")
        .from('.embedContainer', {y: 100, opacity: 0, ease: "sine.out", duration: 1.5}, "-=.75")



