$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  var servicesContainer = $(".row");
  var services = servicesContainer.find(".box");
  var showMoreButton = $("#show-more-button");
  var showLessButton = $("#show-less-button");

  // Initial display counts for different devices
  var desktopDisplayCount = 6;
  var tabletDisplayCount = 4;
  var mobileDisplayCount = 2;

  // Set initial display based on device type
  setInitialDisplay();

  // Function to set initial display based on device type
  function setInitialDisplay() {
    var windowWidth = $(window).width();
    var displayCount;

    if (windowWidth >= 992) {
      // Desktop
      displayCount = desktopDisplayCount;
    } else if (windowWidth >= 768) {
      // Tablet
      displayCount = tabletDisplayCount;
    } else {
      // Mobile
      displayCount = mobileDisplayCount;
    }

    services.hide().slice(0, displayCount).show();
    showMoreButton.show();
    showLessButton.hide();
  }

  // Update display on window resize
  $(window).resize(function () {
    setInitialDisplay();
  });

  // Handle click on "Mostra altri" button
  showMoreButton.on("click", function (e) {
    e.preventDefault();

    // Memorizza la posizione prima dell'operazione
    var currentPosition = $(window).scrollTop();

    // Interrompi eventuali animazioni in corso
    $("html, body").stop(true, true);

    services.slideDown();
    showMoreButton.hide();
    showLessButton.show();

    // Add style to center new services
    servicesContainer.find(".box:hidden").css({
      // Add styles necessary to center the new services
    });

    // Scroll down after showing more services
    $("html, body").animate(
      {
        scrollTop: currentPosition + servicesContainer.height(),
      },
      {
        duration: 500,
        easing: "swing",
        complete: function () {
          // Completa la tua logica qui se necessario
        },
      }
    );
  });

  // Handle click on "Mostra meno" button
  showLessButton.on("click", function (e) {
    e.preventDefault();

    // Ripristina l'animazione del "Mostra meno"
    services.slideUp(function () {
      setInitialDisplay();
    });
  });
});
