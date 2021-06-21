let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// darken the sign up btn

timeline
    .to('.rock', 3, {y: -300})
    .to('.girl', 3, {y: -200}, '-=3')
    .fromTo('.bg1', 3, {y: -40}, {y: 0, duration:3}, '-=3')
    .to('.content', 3, {top: '0%'}, '-=3')
    .fromTo('.content-imgs', {opacity: .5}, {opacity: 1, duration: 2})

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '200%',
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)