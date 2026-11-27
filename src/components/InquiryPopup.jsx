"use client";

import { useEffect, useRef, useState } from "react";
import { submitContact } from "@/lib/submitContact";

const sessionKey = "jawla-inquiry-popup-shown";
const inputClass = "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-600 focus:outline-red-600";

export default function InquiryPopup() {
  const dialogRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(sessionKey)) return;

    const timer = window.setTimeout(() => {
      dialogRef.current.showModal();
      sessionStorage.setItem(sessionKey, "1");
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const data = await submitContact(new FormData(event.currentTarget));

      if (data.success) {
        dialogRef.current.close();
        window.location.assign("/thank-you");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="inquiry-popup-title"
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-xl bg-white p-5 text-gray-900 shadow-xl backdrop:bg-black/60 sm:p-7"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id="inquiry-popup-title" className="text-2xl font-bold">Send an Enquiry</h2>
        <button
          type="button"
          aria-label="Close enquiry form"
          onClick={() => dialogRef.current.close()}
          className="grid size-9 shrink-0 place-items-center rounded-md text-2xl hover:bg-gray-100"
        >
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label>
            First name *
            <input name="firstName" autoComplete="given-name" required className={inputClass} />
          </label>
          <label>
            Last name
            <input name="lastName" autoComplete="family-name" className={inputClass} />
          </label>
        </div>
        <label className="block">
          Email *
          <input name="email" type="email" autoComplete="email" required className={inputClass} />
        </label>
        <label className="block">
          Phone number *
          <input name="numbers" type="tel" autoComplete="tel" required className={inputClass} />
        </label>
        <label className="block">
          Message
          <textarea name="message" rows={3} className={inputClass} />
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" required />
          I&apos;m not a robot
        </label>
        {error && <p role="alert" className="text-red-700">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-[#e53935] px-4 py-2.5 font-semibold text-white hover:bg-red-700 disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </dialog>
  );
}
