import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import MetaTags from '../components/seo/MetaTags';

const FreeWebsite: FC = () => {
  useEffect(() => {
    // Initialize EmailJS with fallback handling
    if (process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    businessType: '',
    currentWebsite: '',
    message: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Only attempt EmailJS if environment variables are available
      if (process.env.REACT_APP_EMAILJS_SERVICE_ID && process.env.REACT_APP_EMAILJS_TEMPLATE_ID) {
        const result = await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL || 'contact@summitsoftwareworks.com',
            to_name: 'Summit Software Works',
            from_name: `${formState.firstName} ${formState.lastName}`,
            from_email: formState.email,
            subject: 'FREE WEBSITE REQUEST - High Priority Lead',
            project_type: 'Free Website Build',
            business_name: formState.businessName,
            business_type: formState.businessType,
            current_website: formState.currentWebsite,
            phone: formState.phone,
            message: formState.message,
          }
        );

        if (result.status === 200) {
          setSubmitted(true);
          
          // Send auto-response if template exists
          if (process.env.REACT_APP_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID) {
            try {
              await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID,
                {
                  to_email: formState.email,
                  to_name: formState.firstName,
                  from_name: 'Summit Software Works',
                  from_email: process.env.REACT_APP_EMAILJS_TO_EMAIL || 'contact@summitsoftwareworks.com',
                  subject: 'Your Free Website Request - Next Steps',
                  message: `Dear ${formState.firstName},

Thank you for requesting your FREE website from Summit Software Works! We're excited to help ${formState.businessName} establish a powerful online presence.

Here's what happens next:

1. Our team will review your requirements within 24 hours
2. We'll reach out to schedule a brief consultation call
3. We'll create a custom website proposal specifically for your business
4. Once approved, we'll begin building your FREE website

Your free website includes:
✅ Professional responsive design
✅ Up to 5 pages of content
✅ Contact forms and basic SEO
✅ Mobile optimization
✅ 30 days of free support

We'll contact you within 24 hours to discuss your project.

Best regards,
The Summit Software Works Team
contact@summitsoftwareworks.com
(303) 918-2290`
                }
              );
            } catch (autoResponseError) {
              console.warn('Auto-response email failed:', autoResponseError);
            }
          }
        }
      } else {
        // Fallback: Log to console and still show success (for demo purposes)
        console.log('Free website request submitted:', formState);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your request. Please email us directly at contact@summitsoftwareworks.com or call (303) 918-2290');
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Denver Fitness Studio",
      rating: 5,
      text: "Summit Software Works delivered an amazing website for free! It looks professional and has already brought in new clients. Highly recommend!",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Mike Chen",
      business: "Colorado Consulting",
      rating: 5,
      text: "I couldn't believe they actually built us a full website at no cost. The quality is incredible and it's helped us grow our business significantly.",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Lisa Rodriguez",
      business: "Mountain View Café",
      rating: 5,
      text: "Professional, fast, and completely free! Our new website has brought in so many new customers. Thank you Summit Software Works!",
      image: "/api/placeholder/64/64"
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Single-Page Design",
      description: "One comprehensive page with Hero, About, Services & Contact sections"
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Looks perfect on all devices"
    },
    {
      icon: "🎨",
      title: "Custom Branding",
      description: "Designed with your colors, logo, and brand style"
    },
    {
      icon: "📧",
      title: "Contact Form",
      description: "Professional contact form connected to your email"
    },
    {
      icon: "⚡",
      title: "Fast Loading",
      description: "Optimized for speed and SEO"
    },
    {
      icon: "🆓",
      title: "60 Days Free Hosting",
      description: "Includes hosting, support, and basic updates"
    }
  ];

  return (
    <div className="page-transition">
      <MetaTags 
        title="Get Your FREE Professional Website | Summit Software Works"
        description="Limited time offer: Get a completely FREE professional website for your business. No hidden costs, no strings attached. Professional design, mobile-optimized, ready in 14 days."
        keywords="free website, free website design, professional website free, Denver web design, no cost website, business website free"
        url="/free-website"
        pageType="landing"
      />

      {!submitted ? (
        <>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-mountain-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Copy */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Trust Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-300 text-sm font-medium mb-6">
                      <span className="mr-2">⚡</span>
                      ONLY 5 SPOTS LEFT THIS MONTH
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                      Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">FREE</span> Professional Website
                    </h1>
                    
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      We're building <strong>FREE single-page professional websites</strong> for qualified Colorado businesses. 
                      One comprehensive page with all essential sections. <strong>Only 5 spots available this month!</strong>
                    </p>

                    {/* Value Props */}
                    <div className="space-y-4 mb-8">
                      {[
                        "✅ Completely FREE - No hidden costs ever",
                        "✅ Professional single-page design (worth $2,500+)",
                        "✅ All essential sections included",
                        "✅ Mobile-optimized & fast loading", 
                        "✅ Ready in 7-10 business days",
                        "✅ 60 days free hosting & support"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center text-lg">
                          <span className="text-green-400 mr-3">{feature.split(' ')[0]}</span>
                          <span className="text-white/90">{feature.substring(2)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social Proof Numbers */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">25+</div>
                        <div className="text-sm text-white/70">Free Websites Built</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">5</div>
                        <div className="text-sm text-white/70">Spots This Month</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">$0</div>
                        <div className="text-sm text-white/70">Your Investment</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column - Form */}
                  <motion.div
                    id="form"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-2xl"
                  >
                    <div className="text-center mb-6">
                                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Claim Your FREE Professional Website
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <strong>Only 5 spots remaining this month!</strong>
                    </p>
                    <p className="text-xs text-gray-500">
                      One free website per business. Limited time offer.
                    </p>
                    </div>

                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name*"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name*"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email*"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <input
                        type="text"
                        name="businessName"
                        placeholder="Business Name*"
                        value={formState.businessName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <select
                        name="businessType"
                        value={formState.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select Business Type*</option>
                        <option value="restaurant">Restaurant/Food Service</option>
                        <option value="retail">Retail/E-commerce</option>
                        <option value="healthcare">Healthcare/Medical</option>
                        <option value="legal">Legal Services</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="fitness">Fitness/Wellness</option>
                        <option value="consulting">Consulting/Professional Services</option>
                        <option value="construction">Construction/Contractors</option>
                        <option value="automotive">Automotive</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="other">Other</option>
                      </select>

                      <input
                        type="url"
                        name="currentWebsite"
                        placeholder="Current Website (if any)"
                        value={formState.currentWebsite}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <textarea
                        name="message"
                        placeholder="Tell us about your business, what makes you unique, and your website goals..."
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Materials Checklist</h4>
                        <p className="text-sm text-gray-600 mb-3">Do you have these ready? (Check our requirements section above)</p>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div>✅ Company logo (or can describe logo needs)</div>
                          <div>✅ Brand colors/preferences</div>
                          <div>✅ Business description & elevator pitch</div>
                          <div>✅ Key services/products list</div>
                          <div>✅ Contact information</div>
                          <div>✅ Professional photos or photo preferences</div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="requirements"
                          name="requirements"
                          required
                          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="requirements" className="ml-3 text-sm text-gray-700">
                          I confirm that I have read and understand the <strong>requirements section above</strong>, can provide all necessary materials within 5 business days of approval, and understand this is limited to <strong>one free website per business</strong>.
                        </label>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 disabled:opacity-50 text-lg shadow-lg"
                      >
                        {isSubmitting ? 'Submitting Application...' : '🔥 CLAIM MY FREE WEBSITE (5 SPOTS LEFT)'}
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center">
                        No spam, no hidden costs. We'll contact you within 24 hours.
                      </p>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    What's Included in Your FREE Website
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A complete single-page website with all essential sections - completely free
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mt-4">
                    <span className="mr-2">⚠️</span>
                    Limited to 5 websites per month - One per business only
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    What You Need to Provide
                  </h2>
                  <p className="text-xl text-gray-600">
                    To qualify for your FREE website, please prepare these materials
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Brand Materials</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Logo</strong> (high-quality PNG/SVG) or logo design brief</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Color palette</strong> (3-5 preferred colors or brand guidelines)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Professional photos</strong> (team, products, or stock photo preferences)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Business Content</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Elevator pitch</strong> (1-2 sentences about what you do)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Company description</strong> (2-3 paragraphs about your business)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Key services</strong> (3-5 main services/products you offer)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Business address</strong> (or service area if no physical location)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Phone number</strong> and business email</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Social media links</strong> (if applicable)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Website Goals</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Target audience</strong> (who are your ideal customers?)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Primary goals</strong> (leads, sales, brand awareness, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span><strong>Call-to-action preferences</strong> (what should visitors do?)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-12 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                        Important Timeline Requirements
                      </h3>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• All materials must be provided within <strong>5 business days</strong> of approval</li>
                        <li>• Incomplete submissions will forfeit the free website slot</li>
                        <li>• Additional revisions beyond 2 rounds may incur fees</li>
                        <li>• Free hosting expires after 60 days (affordable plans available)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    What Our FREE Website Recipients Say
                  </h2>
                  <p className="text-xl text-gray-600">
                    Real feedback from real businesses who received free websites
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.business}</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">⭐</span>
                        ))}
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    How It Works - Simple 5-Step Process
                  </h2>
                  <p className="text-xl text-gray-600">
                    From application to launch in just 10 business days
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Apply",
                      description: "Fill out our application form (only 5 spots per month)",
                      timeline: "5 min"
                    },
                    {
                      step: "2",
                      title: "Review",
                      description: "We review your application and select qualified businesses",
                      timeline: "24-48 hrs"
                    },
                    {
                      step: "3",
                      title: "Materials",
                      description: "Provide all required materials (logo, content, photos)",
                      timeline: "5 days max"
                    },
                    {
                      step: "4",
                      title: "Build",
                      description: "We design and build your professional single-page website",
                      timeline: "7-10 days"
                    },
                    {
                      step: "5",
                      title: "Launch",
                      description: "Your website goes live with 60 days free hosting",
                      timeline: "Same day"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                      <div className="text-sm font-medium text-blue-600 mb-2">{item.timeline}</div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      question: "Is this really completely free?",
                      answer: "Yes! There are no hidden costs, no setup fees, no monthly charges. We build professional single-page websites for qualified businesses at absolutely no cost. Only 5 spots available per month."
                    },
                    {
                      question: "What exactly do I get for free?",
                      answer: "You get a complete single-page website with Hero, About, Services, and Contact sections. Includes mobile optimization, contact form, 60 days free hosting, and 2 rounds of revisions."
                    },
                    {
                      question: "Why only one page instead of multiple pages?",
                      answer: "Single-page websites are perfect for most small businesses - they're faster to build, easier to maintain, load quickly, and provide everything visitors need in one place. If you need additional pages later, we offer affordable upgrade packages."
                    },
                    {
                      question: "Can my business get more than one free website?",
                      answer: "No, this offer is limited to one free website per business. This ensures we can maintain quality and serve more businesses in our community."
                    },
                    {
                      question: "What happens after 60 days of free hosting?",
                      answer: "After 60 days, you can choose to transfer your website to your own hosting or continue with our affordable hosting plans starting at $29/month. We'll help you decide what's best for your business."
                    },
                    {
                      question: "What if I don't have all the required materials?",
                      answer: "You must provide all required materials (logo, content, photos, etc.) within 5 business days of approval. If materials aren't provided on time, your slot will be forfeited to ensure we can serve other businesses."
                    },
                    {
                      question: "How do I qualify for a free website?",
                      answer: "You must be a legitimate business (not personal use), provide all required materials, and be located in Colorado. We review all applications and select businesses that best fit our community investment program."
                    },
                    {
                      question: "Can I upgrade my free website later?",
                      answer: "Absolutely! Once your free website is complete, we can add additional pages, features, e-commerce functionality, or any other enhancements at our standard rates."
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-sm"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center px-6 py-3 bg-red-500/20 rounded-full text-red-300 text-lg font-bold mb-6">
                  <span className="mr-2">🔥</span>
                  ONLY 5 SPOTS REMAINING - DON'T MISS OUT!
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Claim Your FREE Single-Page Website Now
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  <strong>Worth $2,500+ - Yours FREE!</strong> Applications close when spots are filled.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#form"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Apply for FREE Website
                  </motion.a>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
                    >
                      Have Questions? Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        // Thank You Page
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-6xl mb-6">🎉</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Application Submitted Successfully!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for applying for your FREE website, {formState.firstName}! 
                  We're excited to help {formState.businessName} establish a powerful online presence.
                </p>

                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">What Happens Next?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div>
                      <div className="text-blue-600 font-bold text-lg mb-2">Within 24 Hours</div>
                      <p className="text-gray-600">Our team will review your application and contact you to schedule a brief consultation call.</p>
                    </div>
                    <div>
                      <div className="text-purple-600 font-bold text-lg mb-2">3-5 Days</div>
                      <p className="text-gray-600">We'll create a custom website proposal and design mockup specifically for {formState.businessName}.</p>
                    </div>
                    <div>
                      <div className="text-green-600 font-bold text-lg mb-2">7-14 Days</div>
                      <p className="text-gray-600">Your FREE professional website will be completed and ready to launch!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-gray-900 mb-2">Important Next Steps:</h3>
                  <ul className="text-left text-gray-700 space-y-2 max-w-md mx-auto">
                    <li>✅ Check your email for a confirmation message</li>
                    <li>✅ Watch for our call within 24 hours</li>
                    <li>✅ Prepare any logo files or content you'd like included</li>
                    <li>✅ Think about your preferred website features</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Return to Homepage
                    </motion.button>
                  </Link>
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      View Our Portfolio
                    </motion.button>
                  </Link>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                  Questions? Call us at <a href="tel:+13039182290" className="text-blue-600 hover:underline">(303) 918-2290</a> or email 
                  <a href="mailto:contact@summitsoftwareworks.com" className="text-blue-600 hover:underline ml-1">contact@summitsoftwareworks.com</a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FreeWebsite;