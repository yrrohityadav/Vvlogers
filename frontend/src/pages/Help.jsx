import React from 'react';

const Help = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Help & Support</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="faq-item">
            <h3 className="text-xl font-medium text-gray-700">How do I create a blog?</h3>
            <p className="text-gray-600">
              To create a blog, navigate to the "Create Blog" page from the navbar and fill in the necessary details. After submission, your blog will be added to the list.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-medium text-gray-700">How do I edit a blog?</h3>
            <p className="text-gray-600">
              Currently, editing a blog is not available. If you'd like to make changes to your blog, please contact support.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-medium text-gray-700">How do I delete a blog?</h3>
            <p className="text-gray-600">
              To delete a blog, visit the blog details page, and click on the "Delete" button (if available).
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-medium text-gray-700">What should I do if I encounter an error?</h3>
            <p className="text-gray-600">
              If you encounter any errors, please report the issue to us by clicking the "Contact Support" button on the Help page.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
        <p className="text-gray-600 mb-4">
          If you need further assistance or have any issues, feel free to contact our support team. You can email us at <a href="mailto:support@blogapp.com" className="text-blue-500">support@blogapp.com</a>.
        </p>
        <p className="text-gray-600">
          You can also reach us via our <a href="https://www.blogapp.com/contact" className="text-blue-500">contact form</a> on the website.
        </p>
      </section>
    </div>
  );
};

export default Help;
