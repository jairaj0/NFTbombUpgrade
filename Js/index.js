const Battery = document.getElementById("battery");
const battery_graph = document.getElementById("battery_graph");

// call functions ------------------

if (window.innerWidth < 790) {
  window.addEventListener("scroll", function () {
    tabScrollFunc();
    if (mq700.matches) {
    close_menuFunc();
    }
  });
  this.document.querySelector(".footer_bar").style.background = "#070A15";
} else {
  this.document.querySelector(".footer_bar").style.background = "transparent";
  window.addEventListener("scroll", function () {
    scrollFunc();
  });
}

// Device Battery
navigator.getBattery().then(function (battery) {
  let battery_status = battery.level * 100;
  battery_status = battery_status.toFixed();
  Battery.innerText = battery_status + "%";
  battery_graph.style.width = `${(52 / 100) * battery_status}px`;
});

// --------------------------------

function resMenu(mq700) {
  if (mq700.matches) {
    Small()
  } else {
    Big()
  }
}

var mq700 = window.matchMedia("(max-width: 700px)");
resMenu(mq700); // Call listener function at run time
mq700.addListener(resMenu);

function Big() {
  document.querySelector('.left_nav').style.left= '0px';
  document.querySelector('nav .logo').innerHTML = '<i class="fas fa-palette"></i>'
  document.querySelector('.left_nav .logo').innerHTML= '<img src="./Img/nft_logo.png" width="95" alt="NFT LOGO">'
  document.querySelector('#closeMenu').style.display= 'none';
}

function Small() {
  document.querySelector('.left_nav').style.left= '-100px';
  document.querySelector('nav .logo').innerHTML = '<i id="openMenu" class="fas fa-bars"></i>'
  document.querySelector('.left_nav .logo').innerHTML= '<i id="menuClose" class="fas fa-times"></i>'
  document.querySelector(".footer_bar").style.background = "#070A15";
  document.querySelector('#openMenu').addEventListener('click' , function(){
    document.querySelector('.left_nav').style.left= '0px';
    document.querySelector('#closeMenu').style.display= 'block';
  })
  document.querySelector('#closeMenu').addEventListener('click' , function () {
    Small()
    document.querySelector('#closeMenu').style.display= 'none';
  })
  document.querySelector('#menuClose').addEventListener('click' , function () {
    Small()
    document.querySelector('#closeMenu').style.display= 'none';
  })
}

// -------------------------------

// menubar



function menubarFunc() {
  document.querySelector(".left_nav").style.left = "0px";
  document.querySelector("#closeMenu").style.display = "block";
}

function close_menuFunc() {
  document.querySelector(".left_nav").style.left = "-100px";
  document.querySelector("#closeMenu").style.display = "none";
}

// Live Time

setInterval(() => {
  TimeFunc();
}, 1000);

function TimeFunc() {
  var d = new Date();
  var n = d.toLocaleTimeString();
  document.getElementById("time").innerText = n;
}

// ------------ Hover Effect --------------

$(".nft_card").mousemove(function (e) {
  var offset = $(this).offset();
  var relativeX = e.pageX - offset.left;
  var relativeY = e.pageY - offset.top;

  if (relativeX >= $(this).width() / 2) {
    var rotateX = (((relativeX - 00) / 100) * -1) / 1.5;
  } else if (relativeX <= $(this).width() / 2) {
    var rotateX = ((relativeX - $(this).width()) * -1) / 100 / 1.5;
  }

  if (relativeY >= $(this).height() / 2) {
    var rotateY = (((relativeY - 00) / 100) * -1) / -1.5;
  } else if (relativeY <= $(this).height() / 2) {
    var rotateY = ((relativeY - $(this).height()) * 1) / 100 / 1.5;
  }

  var labelWidth = $(this).find("a").width();
  var labelHeight = $(this).find("a").height();

  if (
    relativeX >= $(this).width() / 2 - labelWidth / 2 &&
    relativeX <= $(this).width() / 2 + labelWidth / 2 &&
    relativeY >= $(this).height() - labelHeight
  )
    rotateX = 0;

  $(this).css(
    "-webkit-transform",
    "perspective(80px) rotateY(" +
      rotateX.toFixed(4) +
      "deg) rotateX(" +
      rotateY.toFixed(4) +
      "deg) scale(1.037)"
  );
});

$(".nft_card").mouseout(function () {
  $(this).css(
    "-webkit-transform",
    "perspective(50px) rotateY(0deg) rotateX(0deg)"
  );
});

$(".nft_card").mousedown(function (e) {
  var offset = $(this).offset();
  var relativeX = e.pageX - offset.left;
  var relativeY = e.pageY - offset.top;

  if (relativeX >= $(this).width() / 2) {
    var rotateX = (((relativeX - 00) / 100) * -1) / 1.5;
  } else if (relativeX <= $(this).width() / 2) {
    var rotateX = ((relativeX - $(this).width()) * -1) / 100 / 1.5;
  }

  if (relativeY >= $(this).height() / 2) {
    var rotateY = (((relativeY - 00) / 100) * -1) / -1.5;
  } else if (relativeY <= $(this).height() / 2) {
    var rotateY = ((relativeY - $(this).height()) * 1) / 100 / 1.5;
  }

  var labelWidth = $(this).find("a").width();
  var labelHeight = $(this).find("a").height();

  console.log(labelHeight);

  if (
    relativeX >= $(this).width() / 2 - labelWidth / 2 &&
    relativeX <= $(this).width() / 2 + labelWidth / 2 &&
    relativeY >= $(this).height() - labelHeight
  )
    rotateX = 0;

  $(this).css(
    "-webkit-transform",
    "perspective(115px) rotateY(" +
      rotateX.toFixed(4) +
      "deg) rotateX(" +
      rotateY.toFixed(4) +
      "deg) scale(1.037)"
  );
});

// ------------ Hover Effect --------------

// ----------- Nav Bar Change Color -------

function scrollFunc() {
  if (scrollY > 90) {
    this.document.querySelector("nav").style.background = "#070A15";
    this.document.querySelector(".footer_bar").style.background = "#070A15";
  } else {
    this.document.querySelector("nav").style.background = "transparent";
    this.document.querySelector(".footer_bar").style.background = "transparent";
  }
}

function tabScrollFunc() {
  if (scrollY > 90) {
    this.document.querySelector("nav").style.background = "#070A15";
  } else {
    this.document.querySelector("nav").style.background = "transparent";
  }
}

// ----------- Nav Bar Change Color -------


// ----------- whitepaper -------

const whitepaper_page = document.querySelector('.whitepaper_download')
const whitepaper_btn = document.querySelector('#whitepaper')
const whitepaper_close_btn = document.querySelector('#whitepaper_close_btn')
const download_wp = document.querySelector('#download_wp')
const whitepaper_closeBg = document.querySelector('.whitepaper_closeBg')

whitepaper_page.style.display= 'none';
whitepaper_closeBg.style.display= 'none';

whitepaper_btn.addEventListener('click' , function () {
  whitepaper()
})

whitepaper_close_btn.addEventListener('click' , function () {
  whitepaperClose()
})

whitepaper_closeBg.addEventListener('click' , function () {
  whitepaperClose()
})

download_wp.addEventListener('click' , function () {
  whitepaperDownload()
})



function whitepaper() {
  whitepaper_page.style.display= 'flex';
  whitepaper_closeBg.style.display= 'block';
  document.querySelector('body').style.overflow='hidden'
}

function whitepaperClose() {
  whitepaper_page.style.display= 'none';
  whitepaper_closeBg.style.display= 'none';
  document.querySelector('body').style.overflow='auto';
}

function whitepaperDownload() {
  download_wp.innerText = 'DOWNLOADING . . .'
  setTimeout(() => {
    whitepaper_page.style.display= 'none';
    whitepaper_closeBg.style.display= 'none';
  document.querySelector('body').style.overflow='auto';
  }, 500);
  download_wp.innerText = 'DOWNLOAD NOW'
}




