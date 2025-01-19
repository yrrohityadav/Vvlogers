import React from 'react';
import { FaQuestionCircle, FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Help & Support</h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <FaQuestionCircle className="text-indigo-600 text-2xl" />
              <h3 className="text-xl font-medium text-gray-700">How do I create a blog?</h3>
            </div>
            <p className="text-gray-600">
              To create a blog, navigate to the "Create Blog" page from the navbar and fill in the necessary details. After submission, your blog will be added to the list.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <FaQuestionCircle className="text-indigo-600 text-2xl" />
              <h3 className="text-xl font-medium text-gray-700">How do I edit a blog?</h3>
            </div>
            <p className="text-gray-600">
              Currently, editing a blog is not available. If you'd like to make changes to your blog, please contact support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <FaQuestionCircle className="text-indigo-600 text-2xl" />
              <h3 className="text-xl font-medium text-gray-700">How do I delete a blog?</h3>
            </div>
            <p className="text-gray-600">
              To delete a blog, visit the blog details page, and click on the "Delete" button (if available).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <FaQuestionCircle className="text-indigo-600 text-2xl" />
              <h3 className="text-xl font-medium text-gray-700">What should I do if I encounter an error?</h3>
            </div>
            <p className="text-gray-600">
              If you encounter any errors, please report the issue to us by clicking the "Contact Support" button on the Help page.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Support</h2>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all mb-6">
          <p className="text-gray-600 mb-4">
            If you need further assistance or have any issues, feel free to contact our support team. You can email us at{' '}
            <a href="mailto:support@blogapp.com" className="text-blue-500 hover:text-blue-700">support@blogapp.com</a>.
          </p>
          <p className="text-gray-600">
            You can also reach us via our <a href="https://www.blogapp.com/contact" className="text-blue-500 hover:text-blue-700">contact form</a> on the website.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Other Ways to Reach Us</h3>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaPhoneAlt className="text-indigo-600" />
              <span>Call Us: (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaRegEnvelope className="text-indigo-600" />
              <span>Email Support: support@blogapp.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
