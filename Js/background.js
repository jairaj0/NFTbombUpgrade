//tsParticles library - https://github.com/matteobruni/tsparticles

tsParticles.load("tsparticles", {
    fullScreen: {
      enable: true
    },
    detectRetina: true,
    background: {
      color: "#0C0E27"
    },
    fpsLimit: 60,
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1
      },
      rate: {
        delay: 0.15,
        quantity: 1
      },
      size: {
        width: 100,
        height: 00
      },
      position: {
        y: 100,
        x: 50
      }
    },
    particles: {
      number: {
        value: 0
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 1 / 3 },
          rate: {
            value: 100
          },
          particles: {
            stroke: {
              color: {
                value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
              },
              width: 1
            },
            number: {
              value: 0
            },
            collisions: {
              enable: false
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: true,
                startValue: "max",
                destroy: "min"
              }
            },
            size: {
              value: 75,
              animation: {
                enable: true,
                speed: 150,
                minimumValue: 1,
                destroy: "max",
                startValue: "min",
                sync: true
              }
            },
            life: {
              count: 1
            },
            move: {
              enable: true,
              gravity: {
                enable: false
              },
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              outMode: "destroy"
            }
          }
        }
      },
      life: {
        count: 1
      },
      shape: {
        type: "line"
      },
      size: {
        value: 50,
        animation: {
          enable: true,
          speed: 150,
          startValue: "max",
          destroy: "min"
        }
      },
      stroke: {
        color: {
          value: "#ffffff"
        },
        width: 1
      },
      rotate: {
        path: true
      },
      move: {
        enable: true,
        gravity: {
          acceleration: -15,
          enable: true,
          maxSpeed: 100
        },
        speed: 15,
        outModes: {
          default: "destroy",
          top: "none"
        },
        trail: {
          fillColor: "#0C0E27",
          enable: true,
          length: 4
        }
      }
    }
  });
  