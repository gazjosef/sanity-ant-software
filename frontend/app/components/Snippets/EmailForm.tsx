"use client";
export default function EmailForm() {
  return (
    <form
      action="/action_page.php"
      className="bg-white shadow-md rounded-lg p-8 grid gap-6 max-w-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fname" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="lname" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-400 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something..."
          rows={6}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-400 focus:outline-none"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
