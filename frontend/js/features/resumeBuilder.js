/**
 * EDUPATH AI - RESUME BUILDER & PDF EXPORTER
 */
export class ResumeBuilder {
  constructor(formId, previewId) {
    this.form = document.getElementById(formId);
    this.preview = document.getElementById(previewId);
    this.bindEvents();
  }

  bindEvents() {
    if (!this.form) return;
    this.form.addEventListener('input', () => this.updatePreview());
    
    const exportBtn = document.getElementById('exportPdfBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportPDF());
    }
  }

  updatePreview() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    this.preview.innerHTML = `
      <div style="font-family: Arial; padding: 20px; color: #000; background: #fff; border-radius: 8px;">
        <h1 style="margin:0; font-size: 24px;">${data.fullName || 'Your Name'}</h1>
        <p style="margin: 5px 0; color: #555;">${data.email || 'email@example.com'} | ${data.phone || '+123456789'}</p>
        <hr style="margin: 15px 0;" />
        <h3>Professional Summary</h3>
        <p>${data.summary || 'Summary details will render here...'}</p>
      </div>
    `;
  }

  exportPDF() {
    if (window.jspdf) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text(this.preview.innerText, 10, 10);
      doc.save("EduPath_Resume.pdf");
    } else {
      alert('jsPDF library loading error.');
    }
  }
}