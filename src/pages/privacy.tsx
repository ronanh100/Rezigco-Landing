import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
            <title>Privacy Policy - Finsho</title>
    <meta name="description" content="Finsho Privacy Policy - Learn how we collect, use, and protect your personal data." />
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 py-4">
          <div className="container mx-auto px-4">
            <Link href="/" className="text-2xl font-bold text-[#7F00FF] hover:text-[#7F00FF] transition-colors">
              ← Back to Finsho
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal data.
              </p>
            </div>

            {/* Privacy Policy Content */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Official Privacy Policy
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Our complete Privacy Policy is available in our official document.
                    </p>
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vRzu5PIH3T-0Xeolldap7xNV3o61HqNqYQhu96tiHyBWwHEK6tdvwLHewvRLrRt8es2mfdKJU5l_mbN/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#7F00FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#6B00E6] transition-colors shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Full Privacy Policy
                    </a>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Data Collection</h3>
                        <p className="text-gray-600 text-sm">
                          We collect contact information, account data, uploaded content, and usage analytics to provide our AI-powered real estate services.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Data Usage</h3>
                        <p className="text-gray-600 text-sm">
                          Your data is used to operate our services, improve AI models, and provide customer support. We never sell your personal information.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                        <p className="text-gray-600 text-sm">
                          We implement industry-standard security measures to protect your data and comply with GDPR, UK GDPR, and CCPA regulations.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                        <p className="text-gray-600 text-sm">
                          You have the right to access, correct, delete, and opt-out of data processing. Contact us to exercise these rights.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> info@finsho.com
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Address:</strong> Finsho Limited<br />
                        13 Steeple Crescent, Abbey View<br />
                        Trim, Co. Meath, Ireland
                      </p>
                      <p className="text-gray-600 text-sm mt-4">
                        For questions about this Privacy Policy or our data practices, please contact us using the information above.
                      </p>
                    </div>
                  </div>

                  <div className="text-center pt-8">
                    <p className="text-gray-500 text-sm">
                      <strong>Effective Date:</strong> April 15, 2025
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      This policy is automatically updated every 5 minutes from our official document.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
} 