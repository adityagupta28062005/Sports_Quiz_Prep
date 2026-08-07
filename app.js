/* ============================================
   Olympics Knowledge Base — Application Logic
   Cloud-synced via Firebase Firestore
   Secured via Firebase Authentication
   ============================================ */

// ─── Summer Olympics Master Dataset ───
const OLYMPICS_DATA = [
  { id: "1896-athens", year: 1896, city: "Athens", country: "Greece", flag: "🇬🇷", nations: 14, athletes: 241, sports: 9, cancelled: false },
  { id: "1900-paris", year: 1900, city: "Paris", country: "France", flag: "🇫🇷", nations: 24, athletes: 997, sports: 19, cancelled: false },
  { id: "1904-st-louis", year: 1904, city: "St. Louis", country: "USA", flag: "🇺🇸", nations: 12, athletes: 651, sports: 17, cancelled: false },
  { id: "1908-london", year: 1908, city: "London", country: "United Kingdom", flag: "🇬🇧", nations: 22, athletes: 2008, sports: 22, cancelled: false },
  { id: "1912-stockholm", year: 1912, city: "Stockholm", country: "Sweden", flag: "🇸🇪", nations: 28, athletes: 2407, sports: 14, cancelled: false },
  { id: "1916-berlin", year: 1916, city: "Berlin", country: "Germany", flag: "🇩🇪", nations: 0, athletes: 0, sports: 0, cancelled: true, cancelReason: "World War I" },
  { id: "1920-antwerp", year: 1920, city: "Antwerp", country: "Belgium", flag: "🇧🇪", nations: 29, athletes: 2626, sports: 22, cancelled: false },
  { id: "1924-paris", year: 1924, city: "Paris", country: "France", flag: "🇫🇷", nations: 44, athletes: 3089, sports: 17, cancelled: false },
  { id: "1928-amsterdam", year: 1928, city: "Amsterdam", country: "Netherlands", flag: "🇳🇱", nations: 46, athletes: 2883, sports: 14, cancelled: false },
  { id: "1932-los-angeles", year: 1932, city: "Los Angeles", country: "USA", flag: "🇺🇸", nations: 37, athletes: 1332, sports: 14, cancelled: false },
  { id: "1936-berlin", year: 1936, city: "Berlin", country: "Germany", flag: "🇩🇪", nations: 49, athletes: 3963, sports: 19, cancelled: false },
  { id: "1940-tokyo", year: 1940, city: "Tokyo", country: "Japan", flag: "🇯🇵", nations: 0, athletes: 0, sports: 0, cancelled: true, cancelReason: "World War II" },
  { id: "1944-london", year: 1944, city: "London", country: "United Kingdom", flag: "🇬🇧", nations: 0, athletes: 0, sports: 0, cancelled: true, cancelReason: "World War II" },
  { id: "1948-london", year: 1948, city: "London", country: "United Kingdom", flag: "🇬🇧", nations: 59, athletes: 4104, sports: 17, cancelled: false },
  { id: "1952-helsinki", year: 1952, city: "Helsinki", country: "Finland", flag: "🇫🇮", nations: 69, athletes: 4955, sports: 17, cancelled: false },
  { id: "1956-melbourne", year: 1956, city: "Melbourne", country: "Australia", flag: "🇦🇺", nations: 72, athletes: 3314, sports: 17, cancelled: false },
  { id: "1960-rome", year: 1960, city: "Rome", country: "Italy", flag: "🇮🇹", nations: 83, athletes: 5338, sports: 17, cancelled: false },
  { id: "1964-tokyo", year: 1964, city: "Tokyo", country: "Japan", flag: "🇯🇵", nations: 93, athletes: 5151, sports: 19, cancelled: false },
  { id: "1968-mexico-city", year: 1968, city: "Mexico City", country: "Mexico", flag: "🇲🇽", nations: 112, athletes: 5516, sports: 18, cancelled: false },
  { id: "1972-munich", year: 1972, city: "Munich", country: "West Germany", flag: "🇩🇪", nations: 121, athletes: 7134, sports: 21, cancelled: false },
  { id: "1976-montreal", year: 1976, city: "Montreal", country: "Canada", flag: "🇨🇦", nations: 92, athletes: 6084, sports: 21, cancelled: false },
  { id: "1980-moscow", year: 1980, city: "Moscow", country: "Soviet Union", flag: "🏳️", nations: 80, athletes: 5179, sports: 21, cancelled: false },
  { id: "1984-los-angeles", year: 1984, city: "Los Angeles", country: "USA", flag: "🇺🇸", nations: 140, athletes: 6829, sports: 21, cancelled: false },
  { id: "1988-seoul", year: 1988, city: "Seoul", country: "South Korea", flag: "🇰🇷", nations: 159, athletes: 8391, sports: 23, cancelled: false },
  { id: "1992-barcelona", year: 1992, city: "Barcelona", country: "Spain", flag: "🇪🇸", nations: 169, athletes: 9356, sports: 25, cancelled: false },
  { id: "1996-atlanta", year: 1996, city: "Atlanta", country: "USA", flag: "🇺🇸", nations: 197, athletes: 10318, sports: 26, cancelled: false },
  { id: "2000-sydney", year: 2000, city: "Sydney", country: "Australia", flag: "🇦🇺", nations: 199, athletes: 10651, sports: 28, cancelled: false },
  { id: "2004-athens", year: 2004, city: "Athens", country: "Greece", flag: "🇬🇷", nations: 201, athletes: 10625, sports: 28, cancelled: false },
  { id: "2008-beijing", year: 2008, city: "Beijing", country: "China", flag: "🇨🇳", nations: 204, athletes: 10942, sports: 28, cancelled: false },
  { id: "2012-london", year: 2012, city: "London", country: "United Kingdom", flag: "🇬🇧", nations: 204, athletes: 10568, sports: 26, cancelled: false },
  { id: "2016-rio", year: 2016, city: "Rio de Janeiro", country: "Brazil", flag: "🇧🇷", nations: 207, athletes: 11238, sports: 28, cancelled: false },
  { id: "2020-tokyo", year: 2020, city: "Tokyo", country: "Japan", flag: "🇯🇵", nations: 206, athletes: 11417, sports: 33, cancelled: false },
  { id: "2024-paris", year: 2024, city: "Paris", country: "France", flag: "🇫🇷", nations: 206, athletes: 10714, sports: 32, cancelled: false },
  { id: "2028-los-angeles", year: 2028, city: "Los Angeles", country: "USA", flag: "🇺🇸", nations: 0, athletes: 0, sports: 35, cancelled: false },
];

// ─── State ───
let isEditorMode = false;
let currentUser = null;
let quillEditor = null;
let autoSaveTimeout = null;
let notesData = {};
let firestoreAvailable = false;
const STORAGE_KEY = "olympics-kb-notes";
const FIRESTORE_COLLECTION = "olympics-notes";

// ─── Initialize ───
document.addEventListener("DOMContentLoaded", async () => {
  // Show loading state
  showLoadingState();

  // Load notes (Firestore → localStorage fallback)
  await loadAllNotes();

  // Hide loading, render page
  hideLoadingState();

  const page = detectPage();
  if (page === "home") {
    initHomePage();
  } else if (page === "detail") {
    initDetailPage();
  }

  // Listen for Firebase Auth state changes
  initAuthListener();
});

function detectPage() {
  const path = window.location.pathname;
  if (path.includes("olympics.html")) return "detail";
  return "home";
}

// ─── Auth Listener ───
function initAuthListener() {
  if (typeof auth === "undefined" || auth === null) return;

  auth.onAuthStateChanged((user) => {
    currentUser = user;

    // ── Home page UI update ──
    const editorModeBtn = document.getElementById("editor-mode-btn");
    if (editorModeBtn) {
      if (user) {
        editorModeBtn.textContent = "🔓 Signed In";
        editorModeBtn.classList.add("btn-gold");
        editorModeBtn.classList.remove("btn-ghost");
        document.querySelector(".admin-bar")?.classList.add("active");
      } else {
        editorModeBtn.textContent = "✏️ Editor Mode";
        editorModeBtn.classList.remove("btn-gold");
        editorModeBtn.classList.add("btn-ghost");
        document.querySelector(".admin-bar")?.classList.remove("active");
        isEditorMode = false;
      }
    }

    // ── Detail page UI update (on sign-out while editing) ──
    const editorToggleBtn = document.getElementById("editor-toggle-btn");
    if (editorToggleBtn && !user && isEditorMode) {
      isEditorMode = false;
      editorToggleBtn.textContent = "✏️ Edit";
      editorToggleBtn.classList.remove("btn-primary");
      editorToggleBtn.classList.add("btn-ghost");
      hideEditor();
      const params = new URLSearchParams(window.location.search);
      const olympicsId = params.get("id");
      const olympics = getOlympicsById(olympicsId);
      if (olympics) renderContent(olympics);
    }
  });
}

// ─── Loading State ───
function showLoadingState() {
  const grid = document.getElementById("olympics-grid");
  const readerView = document.getElementById("reader-view");

  if (grid) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="loading-spinner"></div>
        <h3>Loading notes...</h3>
      </div>`;
  }
  if (readerView) {
    readerView.innerHTML = `
      <div class="loading-spinner"></div>
      <h3 style="color: var(--text-secondary); margin-top: 1rem;">Loading...</h3>
    `;
    readerView.classList.add("empty-state");
  }
}

function hideLoadingState() {
  // Loading state is replaced by the actual render calls
}

// ─── Notes Storage (Firestore + localStorage) ───
async function loadAllNotes() {
  // 1. Load from localStorage first (instant cache)
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      notesData = JSON.parse(stored);
    }
  } catch (e) {
    notesData = {};
  }

  // 2. Try loading from Firestore (cloud — overrides localStorage)
  if (typeof db !== "undefined" && db !== null) {
    try {
      const snapshot = await db.collection(FIRESTORE_COLLECTION).get();
      if (!snapshot.empty) {
        const cloudData = {};
        snapshot.forEach((doc) => {
          cloudData[doc.id] = doc.data();
        });
        // Cloud takes precedence
        notesData = { ...notesData, ...cloudData };
        // Update local cache
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
        } catch (e) {}
      }
      firestoreAvailable = true;
      console.log("☁️ Notes loaded from Firestore");
    } catch (e) {
      console.warn("⚠️ Firestore read failed, using localStorage:", e.message);
    }
  }
}

function getNotes(olympicsId) {
  return notesData[olympicsId] || null;
}

async function setNotes(olympicsId, htmlContent) {
  const noteData = {
    content: htmlContent,
    lastUpdated: new Date().toISOString(),
  };

  // Update memory
  notesData[olympicsId] = noteData;

  // Save to localStorage (cache)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
  } catch (e) {}

  // Save to Firestore (primary — so everyone sees it)
  if (firestoreAvailable) {
    try {
      await db.collection(FIRESTORE_COLLECTION).doc(olympicsId).set(noteData);
    } catch (e) {
      console.error("Firestore write failed:", e);
      showToast("Cloud save failed — saved locally only", "error");
    }
  }
}

function getOlympicsById(id) {
  return OLYMPICS_DATA.find((o) => o.id === id) || null;
}

// ─────────────────────────────────
// HOME PAGE
// ─────────────────────────────────
function initHomePage() {
  renderOlympicsGrid(OLYMPICS_DATA);
  initSearch();
  initFilterTabs();
  initEditorModeToggle();
  initAdminBar();
  updateStatsBar(OLYMPICS_DATA);
}

function renderOlympicsGrid(data) {
  const grid = document.getElementById("olympics-grid");
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No Olympics found</h3>
        <p>Try a different search term or filter</p>
      </div>`;
    return;
  }

  grid.innerHTML = data
    .map((o, i) => {
      const notes = getNotes(o.id);
      const hasNotes = notes && notes.content && notes.content.trim() !== "" && notes.content !== "<p><br></p>";
      const isCancelled = o.cancelled;

      return `
      <a href="olympics.html?id=${o.id}" 
         class="olympics-card ${isCancelled ? "cancelled-card" : ""}" 
         style="animation-delay: ${i * 0.04}s; --card-accent: ${getEraColor(o.year)};"
         ${isCancelled ? 'onclick="event.preventDefault()"' : ""}>
        <div class="card-header">
          <span class="card-year">${o.year}</span>
          <span class="card-flag">${o.flag}</span>
        </div>
        <div class="card-city">${o.city}</div>
        <div class="card-country">${o.country}</div>
        ${
          isCancelled
            ? `<span class="card-badge cancelled">❌ Cancelled — ${o.cancelReason}</span>`
            : `
          <div class="card-stats">
            <div class="card-stat">
              <span class="card-stat-value">${o.nations}</span>
              <span class="card-stat-label">Nations</span>
            </div>
            <div class="card-stat">
              <span class="card-stat-value">${o.athletes.toLocaleString()}</span>
              <span class="card-stat-label">Athletes</span>
            </div>
            <div class="card-stat">
              <span class="card-stat-value">${o.sports}</span>
              <span class="card-stat-label">Sports</span>
            </div>
          </div>
          <span class="card-badge ${hasNotes ? "has-notes" : "no-notes"}">
            ${hasNotes ? "📝 Notes written" : "📄 No notes yet"}
          </span>`
        }
      </a>`;
    })
    .join("");
}

function getEraColor(year) {
  if (year < 1920) return "linear-gradient(135deg, #8B7355, #D4A87C)";
  if (year < 1948) return "linear-gradient(135deg, #6B4C3B, #A67B5B)";
  if (year < 1972) return "linear-gradient(135deg, #0085C7, #6cb4ee)";
  if (year < 2000) return "linear-gradient(135deg, #F4C300, #FFE066)";
  return "linear-gradient(135deg, #009F3D, #4ade80)";
}

function updateStatsBar(data) {
  const bar = document.getElementById("stats-bar");
  if (!bar) return;
  const active = data.filter((o) => !o.cancelled);
  const withNotes = active.filter((o) => {
    const n = getNotes(o.id);
    return n && n.content && n.content.trim() !== "" && n.content !== "<p><br></p>";
  });
  const cloudLabel = firestoreAvailable ? " · ☁️ Cloud synced" : " · 💾 Local only";
  bar.textContent = `${active.length} editions · ${withNotes.length} with notes${cloudLabel}`;
}

// ─── Search ───
function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;

  input.addEventListener("input", () => {
    applyFilters();
  });
}

// ─── Filter Tabs ───
function initFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      applyFilters();
    });
  });
}

function applyFilters() {
  const searchTerm = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  const activeTab = document.querySelector(".filter-tab.active");
  const filter = activeTab?.dataset.filter || "all";

  let filtered = [...OLYMPICS_DATA];

  // Tab filters
  if (filter === "with-notes") {
    filtered = filtered.filter((o) => {
      const n = getNotes(o.id);
      return n && n.content && n.content.trim() !== "" && n.content !== "<p><br></p>";
    });
  } else if (filter === "no-notes") {
    filtered = filtered.filter((o) => {
      const n = getNotes(o.id);
      return !n || !n.content || n.content.trim() === "" || n.content === "<p><br></p>";
    });
  }

  // Search filter
  if (searchTerm) {
    filtered = filtered.filter(
      (o) =>
        o.year.toString().includes(searchTerm) ||
        o.city.toLowerCase().includes(searchTerm) ||
        o.country.toLowerCase().includes(searchTerm)
    );
  }

  renderOlympicsGrid(filtered);
  updateStatsBar(filtered);
}

// ─── Editor Mode Toggle (Home) ───
function initEditorModeToggle() {
  const toggleBtn = document.getElementById("editor-mode-btn");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (currentUser) {
      // Already signed in — sign out
      auth.signOut();
      showToast("Signed out", "info");
    } else if (typeof auth !== "undefined" && auth !== null) {
      // Not signed in — show login modal
      showLoginModal();
    } else {
      // Firebase not configured
      showToast("Firebase not configured — editing disabled", "error");
    }
  });
}

// ─── Login Modal (Firebase Auth) ───
function showLoginModal(onSuccess) {
  const overlay = document.getElementById("login-modal");
  if (!overlay) return;
  overlay.classList.add("active");

  const emailInput = overlay.querySelector('input[type="email"]');
  const passwordInput = overlay.querySelector('input[type="password"]');
  const errorEl = overlay.querySelector(".modal-error");
  emailInput.value = "";
  passwordInput.value = "";
  errorEl.style.display = "none";

  setTimeout(() => emailInput.focus(), 100);

  const submitBtn = overlay.querySelector(".modal-submit");
  const cancelBtn = overlay.querySelector(".modal-cancel");

  const handleSubmit = async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      errorEl.textContent = "Please enter email and password";
      errorEl.style.display = "block";
      return;
    }

    // Disable button while signing in
    submitBtn.disabled = true;
    submitBtn.textContent = "Signing in...";

    try {
      await auth.signInWithEmailAndPassword(email, password);
      overlay.classList.remove("active");
      showToast("Signed in — you can now edit ✏️", "success");
      if (onSuccess) onSuccess();
    } catch (e) {
      let message = "Sign in failed";
      if (e.code === "auth/user-not-found") message = "No account with this email";
      else if (e.code === "auth/wrong-password") message = "Incorrect password";
      else if (e.code === "auth/invalid-email") message = "Invalid email address";
      else if (e.code === "auth/invalid-credential") message = "Invalid email or password";
      else if (e.code === "auth/too-many-requests") message = "Too many attempts — try again later";
      errorEl.textContent = message;
      errorEl.style.display = "block";
      passwordInput.value = "";
      passwordInput.focus();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Sign In";
    }
  };

  // Remove old listeners by cloning
  const newSubmit = submitBtn.cloneNode(true);
  submitBtn.parentNode.replaceChild(newSubmit, submitBtn);
  newSubmit.addEventListener("click", handleSubmit);

  const newCancel = cancelBtn.cloneNode(true);
  cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
  newCancel.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") passwordInput.focus();
    if (e.key === "Escape") overlay.classList.remove("active");
  });

  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") overlay.classList.remove("active");
  });
}

// ─── Admin Bar ───
function initAdminBar() {
  const backupBtn = document.getElementById("backup-btn");
  const signOutBtn = document.getElementById("sign-out-btn");

  if (backupBtn) {
    backupBtn.addEventListener("click", downloadBackup);
  }
  if (signOutBtn) {
    signOutBtn.addEventListener("click", () => {
      if (auth) auth.signOut();
      showToast("Signed out", "info");
    });
  }
}

function downloadBackup() {
  const dataStr = JSON.stringify(notesData, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `olympics-notes-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Backup downloaded 📥", "success");
}

// ─────────────────────────────────
// DETAIL PAGE
// ─────────────────────────────────
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const olympicsId = params.get("id");

  if (!olympicsId) {
    window.location.href = "index.html";
    return;
  }

  const olympics = getOlympicsById(olympicsId);
  if (!olympics) {
    window.location.href = "index.html";
    return;
  }

  renderDetailHeader(olympics);
  renderQuickFacts(olympics);
  renderContent(olympics);
  initDetailEditorToggle(olympics);
  initNavigation(olympics);
}

function renderDetailHeader(olympics) {
  const titleEl = document.getElementById("detail-title");
  const subtitleEl = document.getElementById("detail-subtitle");

  if (titleEl) {
    titleEl.innerHTML = `<span class="year">${olympics.year}</span> ${olympics.city}`;
  }
  if (subtitleEl) {
    subtitleEl.textContent = `${olympics.flag} ${olympics.country} · Summer Olympics`;
  }

  // Update page title
  document.title = `${olympics.year} ${olympics.city} — Olympics KB`;
}

function renderQuickFacts(olympics) {
  const container = document.getElementById("quick-facts");
  if (!container || olympics.cancelled) return;

  container.innerHTML = `
    <div class="quick-fact">
      <span class="quick-fact-icon">📍</span>
      <div class="quick-fact-content">
        <span class="quick-fact-value">${olympics.city}, ${olympics.country}</span>
        <span class="quick-fact-label">Host City</span>
      </div>
    </div>
    <div class="quick-fact">
      <span class="quick-fact-icon">🌍</span>
      <div class="quick-fact-content">
        <span class="quick-fact-value">${olympics.nations}</span>
        <span class="quick-fact-label">Nations</span>
      </div>
    </div>
    <div class="quick-fact">
      <span class="quick-fact-icon">🏃</span>
      <div class="quick-fact-content">
        <span class="quick-fact-value">${olympics.athletes.toLocaleString()}</span>
        <span class="quick-fact-label">Athletes</span>
      </div>
    </div>
    <div class="quick-fact">
      <span class="quick-fact-icon">🏅</span>
      <div class="quick-fact-content">
        <span class="quick-fact-value">${olympics.sports}</span>
        <span class="quick-fact-label">Sports</span>
      </div>
    </div>
  `;
}

function renderContent(olympics) {
  const readerView = document.getElementById("reader-view");
  const notes = getNotes(olympics.id);

  if (!readerView) return;

  if (notes && notes.content && notes.content.trim() !== "" && notes.content !== "<p><br></p>") {
    readerView.classList.remove("empty-state");
    readerView.innerHTML = `
      <div class="reader-content">${notes.content}</div>
      <div class="last-updated">Last updated: ${formatDate(notes.lastUpdated)}</div>
    `;
  } else {
    readerView.classList.add("empty-state");
    readerView.innerHTML = `
      <div class="empty-icon">📝</div>
      <h3>No notes yet for ${olympics.year} ${olympics.city}</h3>
      <p>Enter Editor Mode to start writing facts and trivia about this Olympics!</p>
    `;
  }
}

function initDetailEditorToggle(olympics) {
  const toggleBtn = document.getElementById("editor-toggle-btn");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (isEditorMode) {
      // Currently editing → switch to reader mode (save first)
      if (quillEditor) {
        const html = quillEditor.root.innerHTML;
        setNotes(olympics.id, html);
      }
      isEditorMode = false;
      toggleBtn.textContent = "✏️ Edit";
      toggleBtn.classList.remove("btn-primary");
      toggleBtn.classList.add("btn-ghost");
      hideEditor();
      renderContent(olympics);
    } else if (currentUser) {
      // Signed in → show editor immediately
      isEditorMode = true;
      toggleBtn.textContent = "📖 Read Mode";
      toggleBtn.classList.add("btn-primary");
      toggleBtn.classList.remove("btn-ghost");
      showEditor(olympics);
    } else if (typeof auth !== "undefined" && auth !== null) {
      // Not signed in → show login modal, then show editor on success
      showLoginModal(() => {
        isEditorMode = true;
        toggleBtn.textContent = "📖 Read Mode";
        toggleBtn.classList.add("btn-primary");
        toggleBtn.classList.remove("btn-ghost");
        showEditor(olympics);
      });
    } else {
      showToast("Firebase not configured — editing disabled", "error");
    }
  });
}

function showEditor(olympics) {
  const editorWrapper = document.getElementById("editor-wrapper");
  const readerView = document.getElementById("reader-view");
  if (!editorWrapper) return;

  editorWrapper.classList.add("active");
  if (readerView) readerView.style.display = "none";

  if (!quillEditor) {
    quillEditor = new Quill("#quill-editor", {
      theme: "snow",
      placeholder: `Start writing facts about ${olympics.year} ${olympics.city} Olympics...\n\nTip: Type # for H1, ## for H2, > for quote, - for bullet, or / for commands`,
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          ["link", "image"],
          ["clean"],
        ],
        keyboard: {
          bindings: {
            // ── Markdown Shortcuts ──
            // Type "# " at line start → Heading 1
            "md-h1": {
              key: " ",
              prefix: /^#$/,
              handler(range) {
                this.quill.formatLine(range.index, 1, "header", 1);
                this.quill.deleteText(range.index - 1, 1);
                return false;
              },
            },
            // Type "## " → Heading 2
            "md-h2": {
              key: " ",
              prefix: /^##$/,
              handler(range) {
                this.quill.formatLine(range.index, 1, "header", 2);
                this.quill.deleteText(range.index - 2, 2);
                return false;
              },
            },
            // Type "### " → Heading 3
            "md-h3": {
              key: " ",
              prefix: /^###$/,
              handler(range) {
                this.quill.formatLine(range.index, 1, "header", 3);
                this.quill.deleteText(range.index - 3, 3);
                return false;
              },
            },
            // Type "> " → Blockquote
            "md-blockquote": {
              key: " ",
              prefix: /^>$/,
              handler(range) {
                this.quill.formatLine(range.index, 1, "blockquote", true);
                this.quill.deleteText(range.index - 1, 1);
                return false;
              },
            },
            // Type "- " → Bullet list
            "md-bullet": {
              key: " ",
              prefix: /^-$/,
              handler(range) {
                this.quill.formatLine(range.index, 1, "list", "bullet");
                this.quill.deleteText(range.index - 1, 1);
                return false;
              },
            },
            // Type "1. " → Ordered list
            "md-ordered": {
              key: " ",
              prefix: /^1\.$/,
              handler(range) {
                this.quill.formatLine(range.index, 1, "list", "ordered");
                this.quill.deleteText(range.index - 2, 2);
                return false;
              },
            },
            // Type "```" → Code block
            "md-code": {
              key: "`",
              prefix: /^``$/,
              handler(range) {
                this.quill.formatLine(range.index, 1, "code-block", true);
                this.quill.deleteText(range.index - 2, 2);
                return false;
              },
            },
          },
        },
      },
    });

    // ── Slash Command Menu ──
    initSlashCommands(quillEditor);

    // Auto-save on edit (debounced) — saves to Firestore + localStorage
    quillEditor.on("text-change", () => {
      clearTimeout(autoSaveTimeout);
      updateSaveStatus("saving");
      autoSaveTimeout = setTimeout(async () => {
        const html = quillEditor.root.innerHTML;
        await setNotes(olympics.id, html);
        updateSaveStatus("saved");
      }, 800);
    });
  }

  // Load existing content
  const notes = getNotes(olympics.id);
  if (notes && notes.content) {
    quillEditor.root.innerHTML = notes.content;
  } else {
    quillEditor.root.innerHTML = "";
  }
  updateSaveStatus("saved");
}

// ─── Slash Command Menu ───
const SLASH_COMMANDS = [
  { label: "Heading 1", icon: "H1", desc: "Big section heading", action: (q, i) => { q.formatLine(i, 1, "header", 1); } },
  { label: "Heading 2", icon: "H2", desc: "Medium heading", action: (q, i) => { q.formatLine(i, 1, "header", 2); } },
  { label: "Heading 3", icon: "H3", desc: "Small heading", action: (q, i) => { q.formatLine(i, 1, "header", 3); } },
  { label: "Bullet List", icon: "•", desc: "Unordered list", action: (q, i) => { q.formatLine(i, 1, "list", "bullet"); } },
  { label: "Numbered List", icon: "1.", desc: "Ordered list", action: (q, i) => { q.formatLine(i, 1, "list", "ordered"); } },
  { label: "Quote", icon: "❝", desc: "Blockquote", action: (q, i) => { q.formatLine(i, 1, "blockquote", true); } },
  { label: "Code Block", icon: "</>", desc: "Monospace code", action: (q, i) => { q.formatLine(i, 1, "code-block", true); } },
  { label: "Divider", icon: "—", desc: "Horizontal rule", action: (q, i) => { q.insertText(i, "\n———————————————————\n"); } },
  { label: "Clear Format", icon: "✕", desc: "Remove formatting", action: (q, i) => { q.removeFormat(i, 1); } },
];

let slashMenu = null;
let slashMenuVisible = false;
let slashFilterText = "";
let slashStartIndex = -1;
let slashSelectedIdx = 0;

function initSlashCommands(quill) {
  // Create the menu element
  slashMenu = document.createElement("div");
  slashMenu.className = "slash-menu";
  slashMenu.innerHTML = renderSlashItems(SLASH_COMMANDS);
  document.body.appendChild(slashMenu);

  // Listen for text changes to detect "/"
  quill.on("text-change", (delta, oldDelta, source) => {
    if (source !== "user") return;

    const range = quill.getSelection();
    if (!range) return;

    // Check if "/" was just typed
    const inserted = delta.ops.find((op) => typeof op.insert === "string");
    if (inserted && inserted.insert === "/") {
      // Check it's at line start (only whitespace before it)
      const [line, offset] = quill.getLine(range.index);
      const lineText = line.domNode.textContent;
      const textBeforeSlash = lineText.substring(0, offset);
      if (textBeforeSlash.trim() === "" || textBeforeSlash === "/") {
        slashStartIndex = range.index - 1;
        slashFilterText = "";
        slashSelectedIdx = 0;
        showSlashMenu(quill, range.index);
        return;
      }
    }

    // If menu is visible, update filter
    if (slashMenuVisible && slashStartIndex >= 0) {
      const currentText = quill.getText(slashStartIndex, range.index - slashStartIndex);
      if (currentText.startsWith("/")) {
        slashFilterText = currentText.substring(1).toLowerCase();
        slashSelectedIdx = 0;
        updateSlashFilter();
      } else {
        hideSlashMenu();
      }
    }
  });

  // Handle keyboard navigation in the menu
  quill.root.addEventListener("keydown", (e) => {
    if (!slashMenuVisible) return;

    const visibleItems = getFilteredCommands();

    if (e.key === "ArrowDown") {
      e.preventDefault();
      slashSelectedIdx = Math.min(slashSelectedIdx + 1, visibleItems.length - 1);
      updateSlashSelection();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      slashSelectedIdx = Math.max(slashSelectedIdx - 1, 0);
      updateSlashSelection();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (visibleItems[slashSelectedIdx]) {
        executeSlashCommand(quill, visibleItems[slashSelectedIdx]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      hideSlashMenu();
    }
  });

  // Close menu on click outside
  document.addEventListener("click", (e) => {
    if (slashMenuVisible && !slashMenu.contains(e.target)) {
      hideSlashMenu();
    }
  });

  // Handle item clicks
  slashMenu.addEventListener("click", (e) => {
    const item = e.target.closest(".slash-item");
    if (!item) return;
    const idx = parseInt(item.dataset.index, 10);
    const cmd = getFilteredCommands()[idx];
    if (cmd) executeSlashCommand(quill, cmd);
  });
}

function showSlashMenu(quill, index) {
  const bounds = quill.getBounds(index);
  const editorRect = quill.container.getBoundingClientRect();

  slashMenu.style.top = `${editorRect.top + bounds.bottom + window.scrollY + 4}px`;
  slashMenu.style.left = `${editorRect.left + bounds.left + window.scrollX}px`;

  slashMenu.innerHTML = renderSlashItems(SLASH_COMMANDS);
  slashMenu.classList.add("active");
  slashMenuVisible = true;
}

function hideSlashMenu() {
  slashMenu.classList.remove("active");
  slashMenuVisible = false;
  slashStartIndex = -1;
  slashFilterText = "";
}

function getFilteredCommands() {
  if (!slashFilterText) return SLASH_COMMANDS;
  return SLASH_COMMANDS.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(slashFilterText) ||
      cmd.desc.toLowerCase().includes(slashFilterText)
  );
}

function updateSlashFilter() {
  const filtered = getFilteredCommands();
  slashMenu.innerHTML = renderSlashItems(filtered);
  if (filtered.length === 0) {
    slashMenu.innerHTML = '<div class="slash-empty">No commands found</div>';
  }
}

function updateSlashSelection() {
  slashMenu.querySelectorAll(".slash-item").forEach((el, i) => {
    el.classList.toggle("selected", i === slashSelectedIdx);
  });
}

function renderSlashItems(commands) {
  return commands
    .map(
      (cmd, i) => `
      <div class="slash-item ${i === slashSelectedIdx ? "selected" : ""}" data-index="${i}">
        <span class="slash-icon">${cmd.icon}</span>
        <div class="slash-text">
          <span class="slash-label">${cmd.label}</span>
          <span class="slash-desc">${cmd.desc}</span>
        </div>
      </div>`
    )
    .join("");
}

function executeSlashCommand(quill, cmd) {
  // Delete the slash command text (/ + filter text)
  const range = quill.getSelection();
  const deleteLen = range ? range.index - slashStartIndex : 1;
  quill.deleteText(slashStartIndex, deleteLen);
  quill.setSelection(slashStartIndex);

  // Apply the command
  cmd.action(quill, slashStartIndex);
  hideSlashMenu();
  quill.focus();
}

function hideEditor() {
  const editorWrapper = document.getElementById("editor-wrapper");
  const readerView = document.getElementById("reader-view");
  if (editorWrapper) editorWrapper.classList.remove("active");
  if (readerView) readerView.style.display = "";
}

function updateSaveStatus(status) {
  const statusEl = document.getElementById("save-status");
  if (!statusEl) return;

  if (status === "saving") {
    statusEl.innerHTML = '<span class="status-dot" style="background: var(--ring-yellow);"></span> Saving...';
  } else if (status === "saved") {
    const cloudIcon = firestoreAvailable ? "☁️" : "💾";
    statusEl.innerHTML = `<span class="status-dot" style="background: var(--ring-green);"></span> ${cloudIcon} All changes saved`;
  }
}

// ─── Navigation ───
function initNavigation(currentOlympics) {
  const prevBtn = document.getElementById("nav-prev");
  const nextBtn = document.getElementById("nav-next");

  const activeOlympics = OLYMPICS_DATA.filter((o) => !o.cancelled);
  const currentIndex = activeOlympics.findIndex((o) => o.id === currentOlympics.id);

  if (prevBtn) {
    if (currentIndex > 0) {
      const prev = activeOlympics[currentIndex - 1];
      prevBtn.title = `${prev.year} ${prev.city}`;
      prevBtn.addEventListener("click", async () => {
        if (quillEditor) {
          const html = quillEditor.root.innerHTML;
          await setNotes(currentOlympics.id, html);
        }
        window.location.href = `olympics.html?id=${prev.id}`;
      });
    } else {
      prevBtn.style.opacity = "0.3";
      prevBtn.style.pointerEvents = "none";
    }
  }

  if (nextBtn) {
    if (currentIndex < activeOlympics.length - 1) {
      const next = activeOlympics[currentIndex + 1];
      nextBtn.title = `${next.year} ${next.city}`;
      nextBtn.addEventListener("click", async () => {
        if (quillEditor) {
          const html = quillEditor.root.innerHTML;
          await setNotes(currentOlympics.id, html);
        }
        window.location.href = `olympics.html?id=${next.id}`;
      });
    } else {
      nextBtn.style.opacity = "0.3";
      nextBtn.style.pointerEvents = "none";
    }
  }
}

// ─── Utilities ───
function formatDate(isoString) {
  if (!isoString) return "Unknown";
  const d = new Date(isoString);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function showToast(message, type = "info") {
  // Remove existing toast
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  const icons = { success: "✅", error: "❌", info: "ℹ️" };
  toast.innerHTML = `<span>${icons[type] || ""}</span> ${message}`;
  
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
