/**
 * EDUPATH AI - AUTHENTICATION MANAGER
 */
import { api } from './api.js';

export class AuthManager {
  static init() {
    this.bindUIEvents();
    this.checkSession();
  }

  static checkSession() {
    const user = JSON.parse(localStorage.getItem('edupath_user'));
    const token = localStorage.getItem('edupath_token');
    
    if (user && token) {
      this.updateUIForAuthenticatedUser(user);
    } else {
      this.updateUIForGuest();
    }
  }

  static updateUIForAuthenticatedUser(user) {
    const authBtns = document.querySelectorAll('.auth-btn-group');
    authBtns.forEach(group => {
      group.innerHTML = `
        <a href="/pages/dashboard.html" class="btn btn-secondary">Dashboard</a>
        <button id="logoutBtn" class="btn btn-primary">Logout</button>
      `;
    });

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.logout());
    }
  }

  static updateUIForGuest() {
    const authBtns = document.querySelectorAll('.auth-btn-group');
    authBtns.forEach(group => {
      group.innerHTML = `
        <a href="/pages/auth.html" class="btn btn-secondary">Log In</a>
        <a href="/pages/auth.html?mode=register" class="btn btn-primary">Get Started</a>
      `;
    });
  }

  static logout() {
    localStorage.removeItem('edupath_token');
    localStorage.removeItem('edupath_user');
    window.location.href = '/pages/index.html';
  }
}

document.addEventListener('DOMContentLoaded', () => AuthManager.init());