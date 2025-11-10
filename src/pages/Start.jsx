import React, { useMemo, useState } from "react";
import "../css/Start.css";

const baseTimes = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const createSlotMatrix = () => {
  const today = new Date();
  return Array.from({ length: 5 }).map((_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);

    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const isoDate = date.toISOString().split("T")[0];

    return {
      isoDate,
      label: `${dayName}, ${month} ${day}`,
      chip: index === 0 ? "Today" : index === 1 ? "Tomorrow" : null,
      times: baseTimes,
    };
  });
};

const sanitizeDigits = (value) => value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

const formatPhone = (value) => {
  const digits = sanitizeDigits(value);
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
    formatted += mid.length === 3 && last ? "-" : "";
  }
  if (last) {
    formatted += last;
  }
  return formatted;
};

export default function Start() {
  const slots = useMemo(() => createSlotMatrix(), []);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    activity: "outbound",
  });
  const [errors, setErrors] = useState({});

  const handleSlotPick = (day, time) => {
    setSelectedSlot({ id: `${day.isoDate}-${time}`, date: day.label, time });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhone(value) }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!selectedSlot) {
      nextErrors.slot = "Pick a day and time.";
    }
    if (!/^[a-zA-Z]{2,}$/.test(formData.firstName.trim())) {
      nextErrors.firstName = "First name must be at least 2 letters.";
    }
    if (!/^[a-zA-Z]{2,}$/.test(formData.lastName.trim())) {
      nextErrors.lastName = "Last name must be at least 2 letters.";
    }
    if (sanitizeDigits(formData.phone).length !== 10) {
      nextErrors.phone = "Enter a valid US number.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      ...formData,
      phone: `+1${sanitizeDigits(formData.phone)}`,
      slot: selectedSlot,
    };

    console.log("Booking payload", payload);
    alert("Call booked! Our sales associate will reach out soon.");
    setFormData({ firstName: "", lastName: "", phone: "", activity: "outbound" });
    setSelectedSlot(null);
    setErrors({});
  };

  return (
    <div className="start-page">
      <section className="start-hero">
        <div>
          <p className="eyebrow">Book a live walkthrough</p>
          <h1>
            Schedule a{" "}
            <span>
              human-guided <br /> AI receptionist demo
            </span>
          </h1>
          <p>
            Pick a time that works for you and our sales associate will call you with a
            personalized overview of HumanCall. Expect a 20-minute conversation plus a
            live voice preview.
          </p>
        </div>
      </section>

      <section className="start-booking">
        <div className="booking-calendar">
          <div className="booking-calendar__header">
            <h2>Select a date & slot</h2>
            <p>We hold times Monday through Friday, and can adjust if you need a custom window.</p>
          </div>

          <div className="booking-calendar__grid">
            {slots.map((day) => (
              <article key={day.isoDate} className="slot-card">
                <header>
                  <div>
                    <p className="slot-card__label">{day.label}</p>
                    {day.chip && <span className="slot-card__chip">{day.chip}</span>}
                  </div>
                </header>
                <div className="slot-card__times">
                  {day.times.map((time) => {
                    const isSelected = selectedSlot?.id === `${day.isoDate}-${time}`;
                    return (
                      <button
                        key={time}
                        type="button"
                        className={`slot-chip ${isSelected ? "is-selected" : ""}`}
                        onClick={() => handleSlotPick(day, time)}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          {errors.slot && <p className="input-error">{errors.slot}</p>}
        </div>

        <div className="booking-form">
          <h3>Tell us where to call</h3>
          {selectedSlot ? (
            <div className="booking-summary">
              <p>
                <strong>{selectedSlot.date}</strong> at <strong>{selectedSlot.time}</strong>
              </p>
              <span className="booking-summary__tag">{formData.activity} call</span>
            </div>
          ) : (
            <p className="booking-summary booking-summary--placeholder">
              Select a slot to see your confirmation.
            </p>
          )}

          <form className="start-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                First name
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Dana"
                  required
                />
                {errors.firstName && <span className="input-error">{errors.firstName}</span>}
              </label>
              <label>
                Last name
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Reynolds"
                  required
                />
                {errors.lastName && <span className="input-error">{errors.lastName}</span>}
              </label>
            </div>

            <label>
              Phone number
              <div className="phone-input">
                <span>+1</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-7788"
                  required
                />
              </div>
              {errors.phone && <span className="input-error">{errors.phone}</span>}
            </label>

            <label>
              Calling activity
              <select name="activity" value={formData.activity} onChange={handleChange}>
                <option value="outbound">Outbound calling</option>
                <option value="inbound">Inbound support</option>
              </select>
            </label>

            <button type="submit" className="start-form__submit">
              Book call
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
