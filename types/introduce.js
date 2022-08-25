window.addEventListener('DOMContentLoaded', function () {
  let cursor = document.getElementById("cursor");
  let close = document.getElementById("close");
  let body = document.body;
  let links = document.getElementsByTagName("a")



  // Load iFrames on demand & remove after modal is closed to reduce weight & smooth out transitions


  let cards = document.getElementsByClassName("inner");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mousemove", function (event) {
      if (cursor) {
        cursor.classList.add("active");
      }
    });
    cards[i].addEventListener("mouseover", function (event) {
      if (cursor) {
        cursor.classList.add("active");
      }
    });

    cards[i].addEventListener("mouseout", function (event) {
      if (cursor) {
        cursor.classList.remove("active");
      }
    });
    cards[i].addEventListener(
      "click",
      function (i) {
        body.classList.add("active");
      }.bind(null, i)
    );
  }

  // hover events for social links


  for (link of links) {
    link.addEventListener("mouseover", function (event) {
      if (cursor) {
        cursor.classList.add("linkhover");
      }
    });
    link.addEventListener("mousemove", function (event) {
      if (cursor) {
        cursor.classList.add("linkhover");
      }
    });
    link.addEventListener("mouseout", function (event) {
      if (cursor) {
        cursor.classList.remove("linkhover");
      }
    });
  }

  // Escape key option to exit active state

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      body.classList.remove("active");
      // setTimeout(() => {
      //   iframe.setAttribute("src", "");
      // }, 2000);
    }
  };

  if (close) {
    close.addEventListener("click", function (event) {
      body.classList.remove("active");
      // setTimeout(() => {
      //   iframe.setAttribute("src", "");
      // }, 2000);
    });
  }


  gsap.set("#cursor", {
    xPercent: -50,
    yPercent: -50
  });

  const pos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
  const mouse = {
    x: pos.x,
    y: pos.y
  };
  const speed = 0.35;

  const xSet = gsap.quickSetter(cursor, "x", "px");
  const ySet = gsap.quickSetter(cursor, "y", "px");

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  function gsapadd() {
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }
  gsapadd()

  Splitting();

  // Individual section scroll progress

  gsap.utils.toArray(".panel").forEach((section, index) => {
    gsap.to(this, {
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
        end: "bottom 25%",
        scrub: 0,
        onUpdate: (self) => {
          section.style.setProperty("--progress", self.progress);
        }
      }
    });
  });

  // Full page scroll progress

  gsap.to("body", {
    scrollTrigger: {
      trigger: "body",
      start: "top 100%",
      end: "50% 50%",
      scrub: 0,
      onUpdate: (self) => {
        body.style.setProperty("--progress", self.progress);
      }
    }
  });


  // Set a delay on Scrolltrigger recalculation to accommodate element transition times

  function refresh() {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 2500);
  }

  window.addEventListener("resize", refresh);

  // Pull out the preloader

  body.classList.add("loaded");

})