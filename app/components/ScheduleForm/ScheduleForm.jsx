import React, { useState } from "react";
import { url } from "@/app/utils/urls";
const ScheduleForm = ({ propertyId }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contactMethod, setContactMethod] = useState("1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [spin, setSpin] = useState(false);
   const [ openTime, setOpenTime ] = useState(false);
    const toggleOpenTime = () => setOpenTime(!openTime);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpin(true);

    const formErrors = {};

    if (!name || name.trim() === "") {
      formErrors.name = "Name is required.";
    }
    if (!phone || phone.trim() === "") {
      formErrors.phone = "Phone number is required.";
    }
    if (!email || email.trim() === "") {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is not valid.";
    }

    if (!message || message.trim() === "") {
      formErrors.message = "Message is required.";
    }
    if (!date || date.trim() === "") {
      formErrors.date = "Date is required.";
    }
    if (!time || time.trim() === "") {
      formErrors.time = "Time is required.";
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});

    const formData = {
      name: name,
      phone: phone,
      email: email,
      property_id: propertyId,
      message: message,
      date: date,
      time: time,
      type: contactMethod,
    };

    try {
      const response = await fetch(url.SUBMITTOUR, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit the contact form");
      }
      const data = await response.json();

      if (data.status === "success") {
        setSpin(false);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setDate("");
        setTime("");
        setErrorType("success");
        setError(data.message);
        
        setTimeout(() => {
          setError("");
        }, 10000);
      } else {
        setSpin(false);
        setErrorType("error");
        setError(data.message);
        setTimeout(() => {
          setError("");
        }, 10000);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const times = [
    { value: "0900", label: "9 AM" },
    { value: "1000", label: "10 AM" },
    { value: "1100", label: "11 AM" },
    { value: "1200", label: "12 PM" },
    { value: "1300", label: "1 PM" },
    { value: "1400", label: "2 PM" },
    { value: "1500", label: "3 PM" },
    { value: "1600", label: "4 PM" },
    { value: "1700", label: "5 PM" },
  ];

  return (
    <form className="form-schedule" onSubmit={handleSubmit}>
      <div className="cols">
        <fieldset className="message">
          <input
            type="date"
            name="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => {
              setDate(e.target.value);
              setErrors((prevErrors) => ({
                ...prevErrors,
                date: "",
              }));
            }}
          />
          {errors?.date && (
            <span className="error text-danger">{errors?.date}</span>
          )}
        </fieldset>
        <fieldset>
        <div className={`nice-select ${openTime?"open":""} `} onClick={toggleOpenTime} tabIndex={0}>
          <span className="current">{time ? time : "Please Select Time"}</span>
          <ul className="list">
            {times.map((time) => (
              <li key={time.value} data-value={time.value}
                onClick={() => {
                  setTime(time.value); // Update the time state
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    time: "", // Reset the time error
                  }));
                }}
                className="option"
              >
                {time.label}
              </li>
            ))}
          </ul>
          <br />
        
        </div>
        {errors?.time && (
            <span className="error text-danger">{errors?.time}</span>
        )}
        </fieldset>
      </div>
      <div className="widget-tabs style-4">
        <ul className="widget-menu-tab">
          <li className={`item-title ${ contactMethod === "1" ? "active" : "" }`} onClick={() => setContactMethod("1")} >
            <span className="inner">In Person</span>
          </li>
          <li className={`item-title ${contactMethod === "2" ? "active" : ""}`} onClick={() => setContactMethod("2")} >
            <span className="inner">Video Chat</span>
          </li>
        </ul>
        <div className="widget-content-tab">
          <div className="widget-content-inner active">
            <div className="cols">
              <fieldset className="name has-top-title">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label>Name</label>
              </fieldset>
              <fieldset className="phone has-top-title">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <label>Phone</label>
              </fieldset>
              <fieldset className="email has-top-title">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
              </fieldset>
            </div>
            <fieldset className="message has-top-title">
              <textarea
                name="message"
                rows={4}
                placeholder="Your Comment"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <label>Your Comment</label>
            </fieldset>
          </div>
        </div>
      </div>
      {error && (
        <div className={`checkbox-item wow fadeInUp ${error ? "" : "d-none"}`}>
          <div className={`alert alert-${errorType} fade show`} role="alert">
            <strong style={{ textTransform: "capitalize" }}>{errorType}</strong>{" "}
            {error}
          </div>
        </div>
      )}
      <div className="button-submit">
        <button className="tf-button-primary w-full" type="submit" disabled={spin}>
        {spin ? (
              <>
                <span className="spinner"></span> Submitting...
              </>
            ) : (
              <>
                Submit a Tour Request
                <i className="icon-arrow-right-add" />
              </>
            )}
        </button>
      </div>
    </form>
  );
};

export default ScheduleForm;
