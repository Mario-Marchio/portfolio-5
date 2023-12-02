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
  var mobileDisplayCount = 3;

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

$(document).ready(function () {
  var showMoreButton = $("#show-more-button");
  var showLessButton = $("#show-less-button");

  // Funzione per controllare se la larghezza della finestra è inferiore a 768px (modalità telefono)
  function isMobile() {
    return $(window).width() < 768;
  }

  // Imposta il margine del contenitore al caricamento della pagina in modalità telefono
  if (isMobile()) {
    showMoreButton.parent().css("margin-top", "-100px");
  }

  // Gestisci il click sul pulsante "Mostra altri"
  showMoreButton.on("click", function (e) {
    e.preventDefault();

    // Cambia il margine del contenitore solo in modalità telefono
    if (isMobile()) {
      showMoreButton
        .parent()
        .animate({ marginTop: "0" }, 500, "swing", function () {
          // Al termine dell'animazione (opzionale), puoi eseguire ulteriori azioni qui
        });
    }

    // Puoi nascondere il pulsante "Mostra altri" se necessario
    showMoreButton.hide();
    // Mostra il pulsante "Mostra meno"
    showLessButton.show();
  });

  // Gestisci il click sul pulsante "Mostra meno"
  showLessButton.on("click", function (e) {
    e.preventDefault();

    // Nascondi il pulsante "Mostra meno"
    showLessButton.hide();
    // Mostra il pulsante "Mostra altri"
    showMoreButton.show();

    // Cambia il margine del contenitore solo in modalità telefono
    if (isMobile()) {
      showMoreButton
        .parent()
        .animate({ marginTop: "-100px" }, 500, "swing", function () {
          // Al termine dell'animazione (opzionale), puoi eseguire ulteriori azioni qui
        });
    }
  });

  // Aggiungi un evento di ridimensionamento per gestire la larghezza della finestra
  $(window).resize(function () {
    // Puoi aggiornare il comportamento in base alla larghezza della finestra qui, se necessario
  });
});
