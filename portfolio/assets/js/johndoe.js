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
});
$(document).ready(function () {
  var servicesContainer = $(".row");
  var services = servicesContainer.find(".opaco");

  // Imposta il numero di elementi da mostrare in base alla larghezza dello schermo
  function setDisplayCount() {
    var windowWidth = $(window).width();
    var displayCount;

    if (windowWidth >= 992) {
      // Desktop
      displayCount = 6;
    } else if (windowWidth >= 768) {
      // Tablet
      displayCount = 4;
    } else {
      // Mobile
      displayCount = 3;
    }

    // Nascondi tutti gli elementi e mostra solo quelli selezionati
    services.hide().slice(0, displayCount).show();
  }

  // Imposta il numero di elementi da mostrare all'avvio e al ridimensionamento della finestra
  setDisplayCount();
  $(window).resize(setDisplayCount);
});
