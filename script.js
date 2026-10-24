/* =========================================
   MAISON DE PÂTISSERIE
   Interactive website
========================================= */

/*
  PENTING:
  Ganti nomor WhatsApp di bawah dengan nomor toko kamu.
  Gunakan kode negara 62, tanpa tanda + dan tanpa angka 0
  di depan nomor lokal.

  Contoh:
  081234567890 menjadi 6281234567890
*/

const WHATSAPP_NUMBER = "6281234567890";


/* =========================================
   DATA PASTRY
========================================= */

const pastries = [
  {
    id: 1,
    name: "Le Croissant",
    country: "Prancis",
    price: 28000,
    category: "Pastry klasik",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    description: "Pastry berlapis dengan bagian luar renyah dan bagian dalam lembut.",
    history: "Croissant modern sangat erat dengan tradisi bakery Prancis, dengan pengaruh dari kipferl Austria. Bentuk dan teknik pembuatannya berkembang selama bertahun-tahun hingga menjadi ikon sarapan yang dikenal sekarang.",
    ingredients: "Tepung terigu, mentega, susu, ragi, gula, dan garam.",
    fact: "Lapisan croissant terbentuk melalui proses melipat adonan dan mentega secara berulang. Teknik ini dikenal sebagai laminasi."
  },
  {
    id: 2,
    name: "Macaron",
    country: "Prancis",
    price: 22000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=85",
    description: "Kue mungil berwarna cantik dengan cangkang renyah dan isian lembut.",
    history: "Macaron memiliki sejarah panjang yang berkaitan dengan tradisi confectionery Eropa. Bentuk macaron modern yang populer di Prancis terdiri dari dua cangkang almond yang disatukan dengan ganache, krim, atau selai.",
    ingredients: "Tepung almond, putih telur, gula halus, dan isian berupa ganache atau krim.",
    fact: "Macaron berbeda dari macaroon. Macaron Prancis biasanya memakai tepung almond, sedangkan macaroon kelapa menggunakan kelapa parut sebagai bahan utama."
  },
  {
    id: 3,
    name: "Tiramisù",
    country: "Italia",
    price: 38000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",
    description: "Dessert berlapis dengan perpaduan kopi, krim lembut, dan cokelat.",
    history: "Tiramisù merupakan dessert Italia yang menjadi populer pada abad ke-20. Resepnya umumnya menggunakan ladyfinger yang dicelupkan ke dalam kopi, lapisan krim mascarpone, dan taburan bubuk kakao.",
    ingredients: "Mascarpone, telur, gula, kopi, ladyfinger, dan bubuk kakao.",
    fact: "Nama tiramisù berasal dari bahasa Italia dan sering dimaknai sebagai 'angkat semangatku'."
  },
  {
    id: 4,
    name: "Pastel de Nata",
    country: "Portugal",
    price: 25000,
    category: "Tart",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=85",
    description: "Tart mungil dengan kulit pastry renyah dan custard yang lembut.",
    history: "Pastel de nata terkenal sebagai kudapan khas Portugal. Salah satu versi paling terkenal berasal dari kawasan Belém di Lisboa, yang memiliki tradisi pembuatan custard tart sejak abad ke-19.",
    ingredients: "Pastry puff, susu, kuning telur, gula, dan terkadang kulit lemon atau kayu manis.",
    fact: "Bercak kecokelatan pada bagian atas custard merupakan ciri khas yang muncul saat tart dipanggang pada suhu tinggi."
  },
  {
    id: 5,
    name: "Éclair au Chocolat",
    country: "Prancis",
    price: 32000,
    category: "Pastry klasik",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=900&q=85",
    description: "Pastry memanjang berisi krim lembut dengan lapisan cokelat di atasnya.",
    history: "Éclair merupakan salah satu pastry klasik Prancis yang dibuat menggunakan pâte à choux. Adonan ini dipanggang hingga mengembang dan berongga, kemudian diisi krim dan diberi lapisan topping.",
    ingredients: "Tepung terigu, telur, mentega, air atau susu, krim pastry, dan cokelat.",
    fact: "Pâte à choux mengembang terutama karena uap air yang terbentuk selama proses pemanggangan."
  },
  {
    id: 6,
    name: "Apfelstrudel",
    country: "Austria",
    price: 34000,
    category: "Pastry klasik",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a1?auto=format&fit=crop&w=900&q=85",
    description: "Pastry berlapis tipis berisi apel, kayu manis, dan sedikit rasa manis.",
    history: "Apfelstrudel dikenal sebagai pastry tradisional Austria yang juga populer di kawasan Eropa Tengah. Hidangan ini dibuat dengan membungkus isian apel menggunakan adonan tipis, kemudian dipanggang hingga keemasan.",
    ingredients: "Apel, tepung terigu, mentega, gula, kismis, dan kayu manis.",
    fact: "Adonan strudel tradisional dibuat sangat tipis hingga hampir tembus pandang sebelum diisi dan digulung."
  }
];


/* =========================================
   HELPER FUNCTIONS
========================================= */

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

function getElement(id) {
  return document.getElementById(id);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function(char) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[char];
  });
}

function showToast(message) {
  const toast = getElement("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);
}


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {
  const target = getElement(pageId);

  if (!target || !target.classList.contains("page")) {
    console.warn("Halaman tidak ditemukan:", pageId);
    return;
  }

  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach(function(link) {
    const isActive = link.dataset.page === pageId;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  closeMenu();

  /*
    Perbarui hash URL tanpa memuat ulang halaman.
    Pengunjung tetap bisa menggunakan tombol Back browser.
  */

  try {
    history.replaceState(null, "", "#" + pageId);
  } catch (error) {
    console.warn("URL tidak dapat diperbarui:", error);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageId === "catalog") {
    renderCatalog();
  }

  if (pageId === "order") {
    calculateTotal();
  }
}


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleMenu() {
  const navigation = getElement("navigation");
  const menuToggle = getElement("menuToggle");

  if (!navigation || !menuToggle) return;

  const isOpen = navigation.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
}

function closeMenu() {
  const navigation = getElement("navigation");
  const menuToggle = getElement("menuToggle");

  if (!navigation || !menuToggle) return;

  navigation.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka menu navigasi");
  menuToggle.textContent = "☰";
}


/* =========================================
   PRODUCT CARDS
========================================= */

function createPastryCard(pastry) {
  return `
    <article class="product-card">

      <img
        src="${escapeHTML(pastry.image)}"
        alt="${escapeHTML(pastry.name)}"
        loading="lazy"
      >

      <div class="product-info">

        <span class="country">
          ${escapeHTML(pastry.country.toUpperCase())}
        </span>

        <h3>${escapeHTML(pastry.name)}</h3>

        <p>${escapeHTML(pastry.description)}</p>

        <div class="product-bottom">

          <span class="price">
            ${formatRupiah(pastry.price)}
          </span>

          <button
            class="detail-button"
            type="button"
            onclick="showDetail(${pastry.id})"
          >
            Lihat detail ↗
          </button>

        </div>
      </div>

    </article>
  `;
}


/* =========================================
   FEATURED PRODUCTS
========================================= */

function renderFeatured() {
  const container = getElement("featuredProducts");

  if (!container) return;

  container.innerHTML = pastries
    .slice(0, 3)
    .map(createPastryCard)
    .join("");
}


/* =========================================
   CATALOG, SEARCH AND FILTER
========================================= */

function renderCatalog() {
  const container = getElement("allProducts");
  const emptyMessage = getElement("emptyMessage");
  const resultCount = getElement("resultCount");

  if (!container) return;

  const searchInput = getElement("searchInput");
  const countryFilter = getElement("countryFilter");

  const keyword = searchInput
    ? searchInput.value.trim().toLocaleLowerCase("id")
    : "";

  const country = countryFilter
    ? countryFilter.value
    : "";

  const filtered = pastries.filter(function(pastry) {
    const searchableText = [
      pastry.name,
      pastry.country,
      pastry.category,
      pastry.description,
      pastry.ingredients
    ].join(" ").toLocaleLowerCase("id");

    const matchesSearch = searchableText.includes(keyword);
    const matchesCountry = !country || pastry.country === country;

    return matchesSearch && matchesCountry;
  });

  container.innerHTML = filtered
    .map(createPastryCard)
    .join("");

  if (emptyMessage) {
    emptyMessage.hidden = filtered.length > 0;
  }

  if (resultCount) {
    resultCount.textContent =
      filtered.length + " pastry ditemukan";
  }
}

function resetFilters() {
  const searchInput = getElement("searchInput");
  const countryFilter = getElement("countryFilter");

  if (searchInput) searchInput.value = "";
  if (countryFilter) countryFilter.value = "";

  renderCatalog();
}


/* =========================================
   PRODUCT DETAIL
========================================= */

function showDetail(id) {
  const pastry = pastries.find(function(item) {
    return item.id === Number(id);
  });

  if (!pastry) {
    showToast("Pastry tidak ditemukan.");
    return;
  }

  const fields = {
    detailImage: pastry.image,
    detailCountry: pastry.country,
    detailName: pastry.name,
    detailDescription: pastry.description,
    detailPrice: formatRupiah(pastry.price),
    detailHistory: pastry.history,
    detailIngredients: pastry.ingredients,
    detailFact: pastry.fact
  };

  Object.entries(fields).forEach(function(entry) {
    const element = getElement(entry[0]);

    if (!element) return;

    if (entry[0] === "detailImage") {
      element.src = entry[1];
      element.alt = pastry.name;
    } else {
      element.textContent = entry[1];
    }
  });

  window.currentPastryId = pastry.id;

  showPage("detail");
}

function orderCurrentPastry() {
  const pastry = pastries.find(function(item) {
    return item.id === Number(window.currentPastryId);
  });

  if (!pastry) {
    showToast("Pilih pastry dari katalog terlebih dahulu.");
    showPage("catalog");
    return;
  }

  const productSelect = getElement("orderProduct");

  if (productSelect) {
    productSelect.value = String(pastry.id);
  }

  calculateTotal();
  showPage("order");
}


/* =========================================
   JOURNAL
========================================= */

function renderJournal() {
  const container = getElement("journalList");

  if (!container) return;

  container.innerHTML = pastries.map(function(pastry) {
    return `
      <article class="journal-item">

        <img
          src="${escapeHTML(pastry.image)}"
          alt="${escapeHTML(pastry.name)}"
          loading="lazy"
        >

        <div>

          <span class="country">
            ${escapeHTML(pastry.country.toUpperCase())}
          </span>

          <h2>${escapeHTML(pastry.name)}</h2>

          <p>${escapeHTML(pastry.history)}</p>

          <p>
            <strong>Bahan utama:</strong>
            ${escapeHTML(pastry.ingredients)}
          </p>

          <p>
            <strong>Fun fact:</strong>
            ${escapeHTML(pastry.fact)}
          </p>

          <button
            type="button"
            class="button button-outline"
            onclick="showDetail(${pastry.id})"
          >
            Kenali Pastry Ini ↗
          </button>

        </div>

      </article>
    `;
  }).join("");
}


/* =========================================
   ORDER FORM
========================================= */

function populateOrderOptions() {
  const select = getElement("orderProduct");

  if (!select) return;

  select.innerHTML = `
    <option value="">Pilih pastry favoritmu</option>
    ${pastries.map(function(pastry) {
      return `
        <option value="${pastry.id}">
          ${escapeHTML(pastry.name)} — ${formatRupiah(pastry.price)}
        </option>
      `;
    }).join("")}
  `;
}

function calculateTotal() {
  const select = getElement("orderProduct");
  const quantityInput = getElement("quantity");

  if (!select || !quantityInput) return;

  const selectedId = Number(select.value);

  const pastry = pastries.find(function(item) {
    return item.id === selectedId;
  });

  let quantity = Number(quantityInput.value);

  if (!Number.isFinite(quantity) || quantity < 1) {
    quantity = 1;
  }

  quantity = Math.min(Math.floor(quantity), 50);

  const summaryProduct = getElement("summaryProduct");
  const summaryUnitPrice = getElement("summaryUnitPrice");
  const summaryQuantity = getElement("summaryQuantity");
  const totalPrice = getElement("totalPrice");

  if (summaryProduct) {
    summaryProduct.textContent = pastry ? pastry.name : "Belum dipilih";
  }

  if (summaryUnitPrice) {
    summaryUnitPrice.textContent = pastry
      ? formatRupiah(pastry.price)
      : formatRupiah(0);
  }

  if (summaryQuantity) {
    summaryQuantity.textContent = String(quantity);
  }

  if (totalPrice) {
    totalPrice.textContent = pastry
      ? formatRupiah(pastry.price * quantity)
      : formatRupiah(0);
  }
}


/* =========================================
   WHATSAPP
========================================= */

function sendWhatsApp(message) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!phone || phone === "6281234567890") {
    alert(
      "Nomor WhatsApp toko masih berupa contoh.\n\n" +
      "Buka script.js, lalu ganti WHATSAPP_NUMBER " +
      "dengan nomor WhatsApp toko yang sebenarnya."
    );

    return;
  }

  const url =
    "https://wa.me/" + phone +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}


/* =========================================
   SUBMIT ORDER
========================================= */

function setupOrderForm() {
  const form = getElement("orderForm");

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = getElement("customerName").value.trim();
    const customerPhone = getElement("customerPhone").value.trim();
    const productId = Number(getElement("orderProduct").value);
    const quantity = Number(getElement("quantity").value);
    const date = getElement("orderDate").value;
    const method = getElement("orderMethod").value;
    const address = getElement("customerAddress").value.trim();
    const notes = getElement("orderNotes").value.trim();

    const pastry = pastries.find(function(item) {
      return item.id === productId;
    });

    if (!customerName || !customerPhone || !pastry || !date) {
      showToast("Lengkapi data pesanan terlebih dahulu.");
      return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) {
      showToast("Jumlah pesanan harus antara 1 sampai 50.");
      return;
    }

    if (method === "Delivery" && !address) {
      showToast("Masukkan alamat jika memilih delivery.");
      getElement("customerAddress").focus();
      return;
    }

    const total = pastry.price * quantity;

    const message = [
      "Bonjour, Maison de Pâtisserie! ♡",
      "",
      "Saya ingin melakukan pemesanan:",
      "",
      "Nama: " + customerName,
      "WhatsApp pelanggan: " + customerPhone,
      "Pastry: " + pastry.name,
      "Negara asal: " + pastry.country,
      "Harga satuan: " + formatRupiah(pastry.price),
      "Jumlah: " + quantity,
      "Estimasi total: " + formatRupiah(total),
      "Tanggal pesanan: " + date,
      "Metode penerimaan: " + method,
      "Alamat pengiriman: " + (address || "-"),
      "Catatan: " + (notes || "-"),
      "",
      "Mohon konfirmasi ketersediaan dan pesanan saya. Terima kasih!"
    ].join("\n");

    sendWhatsApp(message);
  });
}


/* =========================================
   CONTACT FORM
========================================= */

function setupContactForm() {
  const form = getElement("contactForm");

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = getElement("contactName").value.trim();
    const email = getElement("contactCustomerEmail").value.trim();
    const subject = getElement("contactSubject").value;
    const messageText = getElement("contactMessage").value.trim();

    if (!name || !subject || !messageText) {
      showToast("Lengkapi nama, topik, dan pesan kamu.");
      return;
    }

    const message = [
      "Bonjour, Maison de Pâtisserie! ♡",
      "",
      "Saya ingin menghubungi toko.",
      "",
      "Nama: " + name,
      "Email: " + (email || "-"),
      "Topik: " + subject,
      "",
      "Pesan:",
      messageText
    ].join("\n");

    sendWhatsApp(message);
  });
}


/* =========================================
   STORE LOCATION
========================================= */

function setupStoreLocation() {
  /*
    Ganti alamat berikut sesuai lokasi toko.
    Tautan Google Maps akan menyesuaikan otomatis.
  */

  const storeAddress = "Kemang, Jakarta Selatan";

  const addressElement = getElement("storeAddress");
  const mapLink = getElement("mapLink");

  if (addressElement) {
    addressElement.textContent = storeAddress;
  }

  if (mapLink) {
    mapLink.href =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(storeAddress);
  }
}


/* =========================================
   DATE PICKER
========================================= */

function setupDatePicker() {
  const dateInput = getElement("orderDate");

  if (!dateInput) return;

  const now = new Date();

  const localDate = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");

  dateInput.min = localDate;

  if (!dateInput.value) {
    dateInput.value = localDate;
  }
}


/* =========================================
   BACK TO TOP
========================================= */

function setupBackToTop() {
  const button = getElement("backToTop");

  if (!button) return;

  window.addEventListener("scroll", function() {
    button.classList.toggle(
      "visible",
      window.scrollY > 350
    );
  });
}


/* =========================================
   INITIALIZE WEBSITE
=====================================
