// Universal Popup/Modal Handler
function openDetailModal(title, description, categoryTag = "Overview") {
  const modalContainer = document.getElementById("info-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalTag = document.getElementById("modal-tag");

  if (modalContainer && modalTitle && modalDesc) {
    modalTitle.innerText = title;
    modalDesc.innerText = description;
    if (modalTag) modalTag.innerText = categoryTag;
    
    modalContainer.classList.remove("hidden");
  } else {
    // Basic fallback alert if modal HTML elements do not exist
    alert(`[${categoryTag.toUpperCase()}]\n\n${title}:\n${description}`);
  }
}

// Example Render Function mapping object arrays dynamically to clickable chips
function renderPills(containerId, itemsArray, categoryLabel) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = "";
  
  itemsArray.forEach(item => {
    const chip = document.createElement("button");
    chip.className = "chip-item transition-all duration-200 bg-slate-800 hover:bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full border border-slate-700 m-1 cursor-pointer";
    
    // Support both 'name' or 'title' property keys seamlessly
    const itemTitle = item.name || item.title;
    chip.innerText = itemTitle;

    // Attach click listener to show description modal
    chip.addEventListener("click", () => {
      openDetailModal(itemTitle, item.desc, categoryLabel);
    });

    container.appendChild(chip);
  });
}