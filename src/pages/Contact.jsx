import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL,
          to_name: 'Summit Software Works',
          from_name: `${formState.firstName} ${formState.lastName}`,
          from_email: formState.email,
          project_type: formState.projectType,
          budget: formState.budget,
          timeline: formState.timeline,
          message: formState.message,
        }
      );

      if (result.status === 200) {
        setSubmitted(true);
        // Send auto-response to client
        try {
          const autoResponseParams = {
            to_email: formState.email,
            to_name: formState.firstName,
            from_name: 'Summit Software Works',
            from_email: process.env.REACT_APP_EMAILJS_TO_EMAIL,
            reply_to: process.env.REACT_APP_EMAILJS_TO_EMAIL,
            recipient: formState.email,
            email: formState.email,
            name: formState.firstName,
            subject: 'Thank you for contacting Summit Software Works',
            message: `Dear ${formState.firstName}, thank you for reaching out...`
          };

          await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID,
            autoResponseParams
          );
        } catch (autoResponseError) {
          console.error('Error sending auto-response:', autoResponseError);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error sending your message. Please try again or email us directly at contact@summitsoftwareworks.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-transition">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center my-6 sm:my-12"
          >
            <h1 className="section-title">Let's Build Something Amazing Together</h1>
            <p className="text-xl text-mountain-400 mt-4">
              Schedule a free consultation to discuss how we can help you reach new heights.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-mountain-500">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md border-mountain-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-mountain-500">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          autoComplete="family-name"
                          required
                          className="block w-full rounded-md border-mountain-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-mountain-500">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-mountain-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="projectType" className="block text-sm font-medium text-mountain-500">
                        What type of project are you looking to build?
                      </label>
                      <div className="mt-1">
                        <select
                          id="projectType"
                          name="projectType"
                          value={formState.projectType}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-mountain-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                        >
                          <option value="">Select a project type</option>
                          <option value="web-development">Web Development</option>
                          <option value="software-design">Software Design</option>
                          <option value="web3">Web3 Integration</option>
                          <option value="seo">SEO Optimization</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="budget" className="block text-sm font-medium text-mountain-500">
                        Estimated Budget
                      </label>
                      <div className="mt-1">
                        <select
                          id="budget"
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-mountain-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                        >
                          <option value="">Select a budget range</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="timeline" className="block text-sm font-medium text-mountain-500">
                        When would you like to start?
                      </label>
                      <div className="mt-1">
                        <select
                          id="timeline"
                          name="timeline"
                          value={formState.timeline}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-mountain-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                        >
                          <option value="">Select a timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-plus-months">6+ months</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-mountain-500">
                        Tell us about your project
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={6}
                          required
                          placeholder="Please share any specific requirements, goals, or challenges you'd like to discuss..."
                          className="block w-full rounded-md border-mountain-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn btn-primary disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : 'Schedule Free Consultation'}
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-6 py-12"
              >
                <h2 className="text-2xl font-bold text-mountain-800">Thank you for reaching out!</h2>
                <p className="text-lg text-mountain-400">
                  We've received your message and will get back to you within 24 hours with next steps for your consultation.
                </p>
                <div className="mt-8 p-6 bg-forest-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-forest-700 mb-4">
                    What happens next?
                  </h3>
                  <ul className="text-left space-y-4 text-mountain-400">
                    <li className="flex items-start">
                      <span className="mr-3">1.</span>
                      <span>You'll receive an immediate confirmation email with helpful resources.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">2.</span>
                      <span>Our team will review your project requirements within 24 hours.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">3.</span>
                      <span>We'll send you a detailed response with available consultation times and a preliminary project assessment.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;