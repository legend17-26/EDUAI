/**
 * EDUPATH AI - ROADMAP FEATURE
 */
import { api } from '../api.js';

export class RoadmapRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  async loadAndRender(queryOrSlug) {
    if (!this.container) return;
    this.container.innerHTML = `<div class="card-glass">Loading universal roadmap...</div>`;

    try {
      const data = await api.searchCareers(queryOrSlug);
      this.render(data);
    } catch (err) {
      this.container.innerHTML = `<div class="card-glass">Failed to load roadmap. Please try again.</div>`;
    }
  }

  render(data) {
    const { domain, stages } = data;

    let html = `
      <div class="roadmap-header card-glass" style="margin-bottom: 2rem;">
        <span class="badge badge-primary">${domain.category || 'Universal Stream'}</span>
        <h1 style="font-size: 2.5rem; margin: 0.5rem 0;">${domain.title}</h1>
        <p style="color: var(--text-muted);">${domain.description}</p>
      </div>

      <div class="timeline">
    `;

    stages.forEach((stage, idx) => {
      html += `
        <div class="timeline-node">
          <div class="card-glass">
            <div class="flex justify-between items-center" style="margin-bottom: 1rem;">
              <h3 style="color: var(--accent-cyan);">Stage ${idx + 1}: ${stage.title}</h3>
              <span class="badge badge-success">${stage.duration}</span>
            </div>
            <p style="margin-bottom: 1rem;">${stage.summary}</p>
            
            <h4 style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">CORE TOPICS</h4>
            <div class="flex flex-wrap gap-sm">
              ${stage.topics.map(t => `<span class="badge badge-primary">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    this.container.innerHTML = html;
  }
}