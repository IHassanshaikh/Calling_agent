import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "../css/DemoModal.css";

const initialFormState = { name: "", number: "" };

const sanitizePhoneDigits = (value) =>
  value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

const formatPhoneInput = (value) => {
  const digits = sanitizePhoneDigits(value);
  const area = digits.slice(0, 3);
  const mid = digits.slice(3, 6);
  const last = digits.slice(6, 10);

  let formatted = "";
  if (area) {
    formatted += `(${area}`;
    formatted += area.length === 3 ? ") " : "";
  }
  if (mid) {
    formatted += mid;
    formatted += mid.length === 3 ? (last ? "-" : "") : "";
  }
  if (last) {
    formatted += last;
  }
  return formatted;
};

const DemoButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  // Lock body scroll while modal is open so the centered panel stays in view
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = "";
    };
  }, [showForm]);

  const validateForm = () => {
    const currentErrors = {};
    if (!/^[a-zA-Z][a-zA-Z\s'-]{1,48}$/.test(formData.name.trim())) {
      currentErrors.name = "Use letters only (minimum 2 characters).";
    }

    const digits = sanitizePhoneDigits(formData.number);
    if (digits.length !== 10) {
      currentErrors.number = "Enter a 10-digit US number. +1 is auto-applied.";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      setFormData((prev) => ({ ...prev, number: formatPhoneInput(value) }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const digits = sanitizePhoneDigits(formData.number);
    const payload = {
      name: formData.name.trim(),
      number: `+1${digits}`,
    };

    try {
      const webhookURL =
        "https://teachers-corner.com/webhook/0ea71d39-59b1-4394-b55f-6135b121a9ea";
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      alert("Form submitted successfully!");
      setShowForm(false);
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="demo-modal">
      <button onClick={() => setShowForm(true)} className="demo-btn">
        Hear the Demo
      </button>

      {showForm &&
        // Render overlay as a portal to document.body so it's always positioned relative
        // to the viewport (fixes centering issues when parent elements have transforms).
        createPortal(
          <div
            className="demo-modal__overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-request-title"
          >
            <div className="demo-modal__panel">
              <button
                onClick={() => setShowForm(false)}
                className="demo-modal__close"
                aria-label="Close demo request form"
              >
                ×
              </button>

              <div className="demo-modal__header">
                <p className="demo-modal__eyebrow">Live voice preview</p>
                <h2 id="demo-request-title">Request Demo</h2>
                <p>
                  Share a direct line and we will trigger an AI receptionist call +
                  send a transcript to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="demo-form">
                <div className="demo-form__field">
                  <label htmlFor="demo-name" className="demo-form__label">
                    Full name
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dana Reynolds"
                    required
                    className="demo-form__input"
                  />
                  {errors.name && <span className="input-error">{errors.name}</span>}
                </div>

                <div className="demo-form__field">
                  <label htmlFor="demo-number" className="demo-form__label">
                    Callback number
                  </label>
                  <div className="demo-form__input-wrapper">
                    <span className="demo-form__prefix">+1</span>
                    <input
                      id="demo-number"
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="(555) 555-1212"
                      required
                      className="demo-form__input has-prefix"
                    />
                  </div>
                  {errors.number && (
                    <span className="input-error">{errors.number}</span>
                  )}
                  <p className="demo-form__hint">Currently routing US-based numbers.</p>
                </div>

                <button type="submit" className="demo-form__submit">
                  Send preview
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}

    </div>
  );
};

export default DemoButton;
