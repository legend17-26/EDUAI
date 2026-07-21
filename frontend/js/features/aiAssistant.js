/**
 * EDUPATH AI - GEMINI ASSISTANT FEATURE
 */
import { api } from '../api.js';

export class AIAssistant {
  constructor(chatBoxId) {
    this.chatBox = document.getElementById(chatBoxId);
    this.init();
  }

  init() {
    if (!this.chatBox) return;
    this.input = this.chatBox.querySelector('input');
    this.sendBtn = this.chatBox.querySelector('button');
    this.messagesContainer = this.chatBox.querySelector('.chat-messages');

    this.sendBtn.addEventListener('click', () => this.handleSend());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });
  }

  async handleSend() {
    const text = this.input.value.trim();
    if (!text) return;

    this.appendMessage(text, 'user');
    this.input.value = '';

    const loadingId = this.appendMessage('Thinking...', 'ai');

    try {
      const response = await api.askAI(text);
      const loadingEl = document.getElementById(loadingId);
      if (loadingEl) loadingEl.innerText = response.reply;
    } catch (err) {
      const loadingEl = document.getElementById(loadingId);
      if (loadingEl) loadingEl.innerText = "Sorry, I couldn't process your request right now.";
    }
  }

  appendMessage(text, sender) {
    const id = 'msg-' + Date.now();
    const bubble = document.createElement('div');
    bubble.id = id;
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerText = text;
    this.messagesContainer.appendChild(bubble);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    return id;
  }
}