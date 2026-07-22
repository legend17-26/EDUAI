// ==========================================
// 1. UNIVERSAL POPUP / MODAL HANDLER
// ==========================================
function openDetailModal(title, description, categoryTag = "Overview") {
  // Check for roadmap.html modal structure first
  const detailModal = document.getElementById("detailModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  // Fallback to secondary info-modal layout
  const infoModal = document.getElementById("info-modal");
  const infoTitle = document.getElementById("modal-title");
  const infoDesc = document.getElementById("modal-description");
  const modalTag = document.getElementById("modal-tag");

  const safeTitle = title || "Details";
  const safeDesc = description || "No additional description available.";

  if (detailModal && modalTitle && modalBody) {
    modalTitle.textContent = `${categoryTag ? categoryTag + ': ' : ''}${safeTitle}`;
    modalBody.innerHTML = `<p class="leading-relaxed">${safeDesc}</p>`;
    detailModal.style.display = "flex";
  } else if (infoModal && infoTitle && infoDesc) {
    infoTitle.innerText = safeTitle;
    infoDesc.innerText = safeDesc;
    if (modalTag) modalTag.innerText = categoryTag;
    infoModal.classList.remove("hidden");
  } else {
    // Basic fallback alert if modal HTML elements do not exist
    alert(`[${categoryTag.toUpperCase()}]\n\n${safeTitle}:\n${safeDesc}`);
  }
}

// Helper to close modal if close button or overlay is used
function closeDetailModal() {
  const detailModal = document.getElementById("detailModal");
  if (detailModal) {
    detailModal.style.display = "none";
  }
  const infoModal = document.getElementById("info-modal");
  if (infoModal) {
    infoModal.classList.add("hidden");
  }
}


// Helper function to query element by primary or fallback ID
function getContainer(id, fallbackId) {
  return document.getElementById(id) || document.getElementById(fallbackId);
}


// ==========================================
// 2. PILL / CHIP RENDERER (Roles, Companies, Skills, Certs)
// ==========================================
function renderPills(containerId, fallbackId, itemsArray, categoryLabel) {
  const container = getContainer(containerId, fallbackId);
  if (!container || !Array.isArray(itemsArray)) return;

  container.innerHTML = "";

  itemsArray.forEach(item => {
    const chip = document.createElement("button");
    chip.className = "clickable-badge chip-item transition-all duration-200 bg-slate-800 hover:bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full border border-slate-700 m-1 cursor-pointer";

    // Safely extract title and description regardless of data type
    let itemTitle = "";
    let itemDesc = "No additional details available.";

    if (typeof item === "object" && item !== null) {
      itemTitle = item.name || item.title || "Unnamed Item";
      itemDesc = item.desc || item.overview || (item.provider ? `Provider: ${item.provider}` : itemDesc);
    } else {
      itemTitle = String(item);
    }

    chip.innerText = itemTitle;

    // Attach click listener to show modal popup
    chip.addEventListener("click", () => {
      openDetailModal(itemTitle, itemDesc, categoryLabel);
    });

    container.appendChild(chip);
  });
}


// ==========================================
// 3. COURSES RENDERER (Prevents 'undefined' platform/provider)
// ==========================================
function renderCourses(containerId, fallbackId, coursesArray) {
  const container = getContainer(containerId, fallbackId);
  if (!container || !Array.isArray(coursesArray)) return;

  container.innerHTML = "";

  coursesArray.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-item p-3 my-2 bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer hover:border-indigo-500 transition-colors";

    const title = course.name || course.title || "Course Name";
    const provider = course.provider || course.platform || "Self-Paced";
    const desc = course.desc || "No description provided.";
    const duration = course.duration ? ` • ${course.duration}` : "";

    courseCard.innerHTML = `
      <div class="font-medium text-slate-100">• ${title}</div>
      <div class="text-xs text-indigo-400 mt-0.5">(${provider}${duration})</div>
      ${desc ? `<div class="text-xs text-slate-400 mt-1">${desc}</div>` : ""}
    `;

    courseCard.addEventListener("click", () => {
      openDetailModal(title, `${desc}\n\nPlatform / Provider: ${provider}`, "Course");
    });

    container.appendChild(courseCard);
  });
}


// ==========================================
// 4. PROJECTS RENDERER
// ==========================================
function renderProjects(containerId, fallbackId, projectsArray) {
  const container = getContainer(containerId, fallbackId);
  if (!container || !Array.isArray(projectsArray)) return;

  container.innerHTML = "";

  projectsArray.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-item p-3 my-2 bg-slate-800/40 rounded-lg border border-slate-700/60 cursor-pointer hover:border-purple-500 transition-colors";

    const title = project.title || project.name || "Portfolio Project";
    const desc = project.desc || "No project description provided.";

    projectCard.innerHTML = `
      <h4 class="text-sm font-semibold text-indigo-300">${title}</h4>
      <p class="text-xs text-slate-300 mt-1 leading-relaxed">${desc}</p>
    `;

    projectCard.addEventListener("click", () => {
      openDetailModal(title, desc, "Project");
    });

    container.appendChild(projectCard);
  });
}


// ==========================================
// 5. MASTER RENDERER FOR A SUBDOMAIN
// ==========================================
function loadSubDomainData(subDomainData) {
  if (!subDomainData) return;

  // Render Pill Containers (Supports both 'rolesList' and 'roles-container')
  if (subDomainData.roles) renderPills("rolesList", "roles-container", subDomainData.roles, "Career Role");
  if (subDomainData.companies) renderPills("companiesList", "companies-container", subDomainData.companies, "Hiring Company");
  if (subDomainData.skills) renderPills("skillsList", "skills-container", subDomainData.skills, "Key Skill");
  if (subDomainData.certs) renderPills("certsList", "certs-container", subDomainData.certs, "Certification");

  // Render Detailed Cards
  if (subDomainData.courses) renderCourses("coursesList", "courses-container", subDomainData.courses);
  if (subDomainData.projects) renderProjects("projectsList", "projects-container", subDomainData.projects);
}


// Auto-bind close handlers on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const closeModalBtn = document.getElementById("closeModal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeDetailModal);
  }
});