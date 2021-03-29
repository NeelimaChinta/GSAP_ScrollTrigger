gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(Section => {
    ScrollTrigger.create({
        trigger: Section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    });
});