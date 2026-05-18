// ============================================================
//  main.js — Render kartu anggota dengan biodata, keahlian & proyek
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");

  members.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 0.12}s`;

    // Keahlian items
    const keahlianHTML = m.keahlian
      .map(
        (k) => `
        <li class="skill-item">
          <span class="skill-icon">${k.icon}</span>
          <span>${k.label}</span>
        </li>`
      )
      .join("");

    // Tags proyek
    const tagsHTML = m.proyek.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <!-- ── Header foto + nama ── -->
      <div class="card-header">
        <div class="avatar-wrap">
          <img
            src="${m.photo}"
            alt="Foto ${m.name}"
            class="avatar"
            onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23334155%22 width=%22100%22 height=%22100%22 rx=%2250%22/><text y=%220.9em%22 x=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2248%22>👤</text></svg>'"
          />
          <span class="role-badge">${m.role}</span>
        </div>

        <div class="card-name-area">
          <h2 class="card-name">${m.name}</h2>

          <!-- Biodata -->
          <div class="biodata">
            <div class="bio-row">
              <span class="bio-label">🎓 Kelas</span>
              <span class="bio-value">${m.kelas}</span>
            </div>
            <div class="bio-row">
              <span class="bio-label">🎯 Hobi</span>
              <span class="bio-value">${m.hobi}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Divider ── -->
      <div class="section-divider">
        <span>⚡ Keahlian</span>
      </div>

      <!-- ── Keahlian ── -->
      <ul class="skill-list">${keahlianHTML}</ul>

      <!-- ── Divider ── -->
      <div class="section-divider">
        <span>🏆 Proyek Unggulan</span>
      </div>

      <!-- ── Proyek Unggulan ── -->
      <div class="project-box">
        <p class="project-title">${m.proyek.judul}</p>
        <p class="project-desc">${m.proyek.deskripsi}</p>
        <div class="project-tags">${tagsHTML}</div>
      </div>

      <!-- ── Sosial ── -->
      <div class="socials">
        <a href="${m.instagram}" target="_blank" rel="noopener" class="social-btn ig" title="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
          Instagram
        </a>
        <a href="${m.github}" target="_blank" rel="noopener" class="social-btn gh" title="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          GitHub
        </a>
        <a href="${m.whatsapp}" target="_blank" rel="noopener" class="social-btn wa" title="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
});