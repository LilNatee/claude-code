(function () {
  var S = window.STORE;
  var euro = function (n) {
    return n.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
  };

  // Texte et e-mail depuis la config
  document.querySelectorAll("[data-store]").forEach(function (el) {
    var v = S[el.getAttribute("data-store")];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-store-email]").forEach(function (el) {
    el.textContent = S.email;
    el.href = "mailto:" + S.email;
  });
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Galerie
  var main = document.getElementById("mainImg");
  document.querySelectorAll(".thumb").forEach(function (t) {
    t.addEventListener("click", function () {
      main.src = t.getAttribute("data-src");
      document.querySelectorAll(".thumb").forEach(function (x) { x.classList.remove("is-active"); });
      t.classList.add("is-active");
    });
  });

  // Offres
  var form = document.getElementById("offerForm");
  var single = S.offers[0].price;
  var selected = S.offers.find(function (o) { return o.badge === "Le plus choisi"; }) || S.offers[0];

  form.innerHTML = S.offers.map(function (o) {
    var unit = o.price / o.qty;
    var saving = single * o.qty - o.price;
    return (
      '<label class="offer' + (o.id === selected.id ? " is-selected" : "") + '">' +
        '<input type="radio" name="offer" value="' + o.id + '"' + (o.id === selected.id ? " checked" : "") + ">" +
        (o.badge ? '<span class="offer__badge">' + o.badge + "</span>" : "") +
        '<span class="offer__main"><strong>' + o.title + "</strong><small>" + o.subtitle + "</small></span>" +
        '<span class="offer__price"><strong>' + euro(o.price) + "</strong>" +
          (o.qty > 1 ? "<small>soit " + euro(unit) + " / brosse</small>" : "<small>Livraison offerte</small>") +
          (saving > 0.01 ? '<em>Économisez ' + euro(saving) + "</em>" : "") +
        "</span>" +
      "</label>"
    );
  }).join("");

  var stickyPrice = document.getElementById("stickyPrice");
  function refresh() {
    form.querySelectorAll(".offer").forEach(function (l) {
      l.classList.toggle("is-selected", l.querySelector("input").checked);
    });
    stickyPrice.textContent = selected.title + " — " + euro(selected.price);
  }
  form.addEventListener("change", function (e) {
    selected = S.offers.find(function (o) { return o.id === e.target.value; });
    refresh();
  });
  refresh();

  function buy() {
    var link = selected.paymentLink || "";
    if (link.indexOf("REMPLACER") !== -1 || !/^https:\/\//.test(link)) {
      var msg = document.getElementById("buyMsg");
      msg.hidden = false;
      msg.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    window.location.href = link;
  }
  document.getElementById("buyBtn").addEventListener("click", buy);
  document.getElementById("stickyBtn").addEventListener("click", buy);

  // Barre collante : visible quand le bouton principal n'est plus à l'écran
  var sticky = document.getElementById("stickyBuy");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      sticky.classList.toggle("is-visible", !entries[0].isIntersecting);
    }).observe(document.getElementById("buyBtn"));
  }

  // Avis
  var box = document.getElementById("reviews");
  var ratingLine = document.getElementById("ratingLine");
  var reviews = S.reviews || [];
  var stars = function (n) { return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  if (!reviews.length) {
    ratingLine.textContent = "Nouveau — lancement " + new Date().getFullYear();
    box.innerHTML =
      '<div class="reviews-empty">' +
        "<p><strong>Soyez parmi les premiers à donner votre avis.</strong></p>" +
        "<p>Novéa vient d'être lancé. Chaque avis publié ici provient d'un client ayant réellement acheté et reçu sa brosse. " +
        "Après votre commande, vous recevrez une invitation à partager votre expérience.</p>" +
      "</div>";
    return;
  }

  var avg = reviews.reduce(function (s, r) { return s + r.rating; }, 0) / reviews.length;
  var avgTxt = avg.toFixed(1).replace(".", ",");
  ratingLine.innerHTML = '<span class="stars">' + stars(Math.floor(avg)) + "</span> " + avgTxt + "/5 · " +
    reviews.length + " avis clients";
  box.innerHTML =
    '<p class="reviews-summary"><span class="stars">' + stars(Math.floor(avg)) + "</span> <strong>" + avgTxt +
      "/5</strong> sur " + reviews.length + " avis clients</p>" +
    '<div class="reviews-grid">' +
    reviews.map(function (r) {
      return (
        '<article class="review">' +
          '<div class="stars">' + stars(r.rating) + "</div>" +
          "<p>" + esc(r.text) + "</p>" +
          "<footer><strong>" + esc(r.name) + "</strong>" + (r.city ? " · " + esc(r.city) : "") +
            (r.verified ? ' <span class="verified">✓ Achat vérifié</span>' : "") +
            (r.date ? "<br><small>" + new Date(r.date).toLocaleDateString("fr-FR") + "</small>" : "") +
          "</footer>" +
        "</article>"
      );
    }).join("") +
    "</div>";
})();
