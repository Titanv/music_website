import { useState } from "react";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const fullMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    (form.elements.namedItem("text") as HTMLInputElement).value = fullMessage;

    setSubmitting(true);
    form.submit();
  };

  return (
    <div className="pt-28 pb-20 px-6 bg-[#E6E6E6] text-[#532E1C] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-[#C5A880] mb-4">Contact Me</h1>
        <p className="text-lg mb-10 leading-relaxed">
          To book Titan for a show, project, or collaboration, please fill out
          the form below or reach out directly at{" "}
          <a
            href="mailto:info@titanvisionmusic.com"
            className="underline hover:text-[#C5A880]"
          >
            info@titanvisionmusic.com
          </a>
          .
        </p>

        <form
          action="https://postmail.invotes.com/send"
          method="post"
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-[#C5A880]/30"
        >
          <label className="block">
            <span className="text-[#532E1C] font-semibold">Name *</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="mt-2 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
            />
          </label>

          <label className="block">
            <span className="text-[#532E1C] font-semibold">Email *</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
            />
          </label>

          <label className="block">
            <span className="text-[#532E1C] font-semibold">Subject *</span>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="mt-2 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
            />
          </label>

          <label className="block">
            <span className="text-[#532E1C] font-semibold">Message *</span>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Write your message here..."
              className="mt-2 w-full p-3 border border-[#0F0F0F] rounded bg-[#E6E6E6] text-[#532E1C]"
            ></textarea>
          </label>

          {/* Hidden field for compiled text */}
          <input type="hidden" name="text" value="" />

          {/* PostMail required fields */}
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
    </div>
  );
}
