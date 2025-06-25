import { useState } from "react";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="max-w-xl mx-auto p-6 mt-24">
      <p>To book Titan for an original show, please fill out the mail form below or reach out at info@titanvisionmusic.com directly.  We'll get in touch as soon as possible! Thank you!

Cheers!</p>
      <h2 className="text-4xl font-semibold mb-6 text-[#C5A880]">Contact Me</h2>
      <form
        action="https://postmail.invotes.com/send"
        method="post"
        onSubmit={() => setSubmitting(true)}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <label className="block">
          <span className="text-[#532E1C] font-semibold">Name *</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="mt-1 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
          />
        </label>

        <label className="block">
          <span className="text-[#532E1C] font-semibold">Email *</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
          />
        </label>

        <label className="block">
          <span className="text-[#532E1C] font-semibold">Subject *</span>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="mt-1 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
          />
        </label>

        <label className="block">
          <span className="text-[#532E1C] font-semibold">Message *</span>
          <textarea
            name="text"
            rows={6}
            required
            placeholder="Write your message here..."
            className="mt-1 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
          ></textarea>
        </label>

        <input
          type="hidden"
          name="access_token"
          value="mc6ml1rv6f0ynfv1nl0iop8c"
        />
        <input
          type="hidden"
          name="success_url"
          value=".?message=Email+Successfully+Sent%21&isError=0"
        />
        <input
          type="hidden"
          name="error_url"
          value=".?message=Email+could+not+be+sent.&isError=1"
        />

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded bg-[#C5A880] font-semibold text-black shadow hover:bg-yellow-500 transition ${
            submitting ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
