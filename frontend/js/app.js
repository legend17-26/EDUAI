/**
 * EDUPATH AI - MAIN APP INITIALIZER & ROUTER
 */
class App {
  constructor() {
    this.initGlobalListeners();
  }

  initGlobalListeners() {
    // Dynamic Toast Controller
    window.showToast = (message, type = 'info') => {
      let container = document.querySelector('.toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.innerText = message;
      container.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 4000);
    };

    // Global Search Interceptor
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
          const query = encodeURIComponent(input.value.trim());
          window.location.href = `/pages/roadmap.html?q=${query}`;
        }
      });
    });
  }
}

window.app = new App();