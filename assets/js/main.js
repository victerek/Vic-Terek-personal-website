document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 140,
                density: {
                    enable: !0,
                    value_area: 600
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                circle: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 4,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 3,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 2,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 4,
                    size_min: .3,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1,
                distance: 50,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "top-right",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1,
                    mode: "bubble"
                },
                onclick: {
                    enable: !1,
                    mode: "repulse"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
}, !1);

//Get the button
var myButton = document.getElementById("to-the-top");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add aria-label to canvas on load for better accessibility 
function accessibleCanvas() {
    var canvas = document.getElementsByTagName("canvas")[0].setAttribute('aria-label', 'background-image');
    return canvas;
}

window.onload = accessibleCanvas;


// Image modal 

let modal = document.getElementsByClassName('rsa-modal')[0];

 // Get the image and insert it inside the modal - use its "alt" text as a caption
let firstRsaImage = document.getElementsByClassName('first-rsa-image')[0];
let secondRsaImage = document.getElementsByClassName('second-rsa-image')[0];
let modalImg = document.getElementsByClassName('rsa-modal-content')[0];
let modalCaption = document.getElementsByClassName('rsa-modal-caption')[0];

firstRsaImage.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML = this.alt;
}

secondRsaImage.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML = this.alt;
}

let responsiveRsaImages = window.matchMedia("(min-width: 500px)");

function matchMediaQuery(responsiveRsaImages) {
    if (responsiveRsaImages.matches) {
        secondRsaImage.onclick = function() {
            modalImg.style.width = "45%";
            modal.style.display = "block";
            modalImg.src = this.src;
        }
        firstRsaImage.onclick = function() {
            modalImg.style.width = "80%";
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    } 
    else {
        secondRsaImage.onclick = function() {
            this.style.width = "85%";
            modal.style.display = "block";
            modalImg.src = this.src;
        }
        firstRsaImage.onclick = function() {
            this.style.width = "95%";
            this.style.height = "35vh";
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }
}

matchMediaQuery(responsiveRsaImages);
responsiveRsaImages.addListener(matchMediaQuery);

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('rsa-modal-close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}