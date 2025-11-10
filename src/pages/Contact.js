import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // basic validation
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!message) {
      alert("Please enter a message");
      return;
    }

    setStatus("sending");

    // Fallback behaviour: open user's mail client with mailto and show a sent state
    const mailto = `mailto:${encodeURIComponent(
      email
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      message
    )}`;

    // give some feedback then open mailto
    setTimeout(() => {
      window.location.href = mailto;
      setStatus("sent");
      // reset status after a short delay so form can be used again
      setTimeout(() => setStatus("idle"), 2000);
    }, 400);
  };

  return (
    <div className="min-h-screen sm:w-[500px] w-full flex items-center justify-center bg-main text-text p-6">
      <div className="w-full max-w-2xl bg-surface rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm">Your email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded border border-border bg-main p-2 text-text"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm">Subject</span>
            <input
              name="subject"
              type="text"
              className="mt-1 block w-full rounded border border-border bg-main p-2 text-text"
              placeholder="Subject (optional)"
            />
          </label>

          <label className="block">
            <span className="text-sm">Message</span>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-1 block w-full rounded border border-border bg-main p-2 text-text"
              placeholder="Write your message here"
            />
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-accent text-main px-4 py-2 rounded font-medium hover:opacity-95"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>

            {status === "sent" && (
              <span className="text-accent">
                Message processed (mail client opened)
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
