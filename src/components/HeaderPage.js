import React from "react"
import "./HeaderPage.css"
import Particles from "react-particles-js"

const particalsOption = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 12,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 0.02,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5772283419115882,
      width: 3.52750653390415,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

const HeaderPage = () => {
  const title = "React"

  return (
    <div className="headersecondpage">
      <div className="center">
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/abdullah-alsemairi/">
            <img
              className="linked2"
              src={process.env.PUBLIC_URL + "/linkedin.png"}
              width="100%"
              height="50%"
              alt="firstlogo"
              className="Header"
            />
          </a>
          <br />
          <br />
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/reemalmuaddi/">
              <img
                className="linked2"
                src={process.env.PUBLIC_URL + "/linkedin.png"}
                width="100%"
                height="50%"
                alt="firstlogo"
                className="Header"
              />
            </a>
          </div>
        </div>
      </div>

      <Particles className="particals" params={particalsOption} />
    </div>
  )
}

export default HeaderPage
