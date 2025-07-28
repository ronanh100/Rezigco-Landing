"use client";

import React from 'react';
import Image from 'next/image';

export default function FunctionParts() {
  return (
    <section className="relative bg-white py-8 md:py-16 font-manrope">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-[#7F00FF]">Seamless</span> deal progression
          </h2>
        </div>
        
        {/* Function 1: Text Left, UI Mockup Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7F00FF] mb-4 md:mb-6">
              Your voice, every follow up
            </h3>
            <p className="text-base md:text-lg text-black leading-relaxed">
              Finsho manages every thread, drafting personalised replies, prompting you when to act, and organising emails by stage to keep deals moving.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-sm md:max-w-md">
                             {/* Email Composition UI Mockup */}
               <div className="bg-white border-2 border-[#7F00FF] rounded-lg shadow-xl overflow-hidden h-64 relative" style={{boxShadow: '0 25px 50px -12px rgba(127, 0, 255, 0.25)'}}>
                 {/* Email Header Fields */}
                 <div className="p-2 md:p-3 space-y-1 md:space-y-2 border-b border-gray-100">
                   <div className="flex items-center">
                     <span className="text-xs text-gray-500 w-10 md:w-12">To:</span>
                     <span className="text-xs text-black">info@finsho.com</span>
                   </div>
                   <div className="flex items-center">
                     <span className="text-xs text-gray-500 w-10 md:w-12">Party:</span>
                     <span className="text-xs text-black">John Doe (solicitor of seller)</span>
                   </div>
                   <div className="flex items-center">
                     <span className="text-xs text-gray-500 w-10 md:w-12">Subject:</span>
                     <div className="flex-1 border border-gray-300 rounded px-2 py-1 bg-white">
                       <span className="text-xs text-black">Initiation of Draft Contract Stage for 123 Clapham, London</span>
                     </div>
                   </div>
                 </div>
                 
                 {/* Email Body */}
                 <div className="p-2 md:p-3 relative">
                   <div className="border border-gray-300 rounded-md p-2 text-xs text-black leading-relaxed h-32 md:h-36 overflow-hidden bg-white relative">
                     <div className="transform -translate-y-6">
                       <p className="opacity-40 text-xs">Dear John Doe,</p>
                       <p className="opacity-40 text-xs mb-1">I hope this message finds you well.</p>
                       <p className="opacity-100 text-sm leading-tight">I am writing to inform you that we have reached the draft contract stage for the property located at 123 Clapham, London. At this point, it is essential for you to review the draft contract and begin the necessary preparations for the next stage of the conveyancing process.</p>
                       <p className="opacity-100 text-sm mt-1">Please let me know if you require any further information or assistance as you proceed.</p>
                       <p className="opacity-40 text-xs mt-1">Best regards,</p>
                     </div>
                     
                     {/* Seamless Top Fade Overlay */}
                     <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none"></div>
                     
                     {/* Subtle Bottom Fade */}
                     <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/70 to-transparent pointer-events-none"></div>
                   </div>
                 </div>
                 
                 {/* Fade Overlay at Bottom */}
                 <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none">                 </div>
               </div>
               
               {/* Floating Email Icons - Outside the overflow-hidden container */}
               <div className="absolute -bottom-3 md:-bottom-5 -left-3 md:-left-5 bg-white rounded-lg p-1.5 md:p-2 shadow-lg z-50">
                 <Image 
                   src="/Gmail_Logo.svg" 
                   alt="Gmail" 
                   width={32} 
                   height={32} 
                   className="w-6 md:w-8 h-6 md:h-8"
                 />
               </div>
               <div className="absolute -top-3 md:-top-5 -right-3 md:-right-5 bg-white rounded-lg p-1.5 md:p-2 shadow-lg z-50">
                 <Image 
                   src="/Microsoft_Office_Outlook_Logo.svg" 
                   alt="Microsoft Outlook" 
                   width={32} 
                   height={32} 
                   className="w-6 md:w-8 h-6 md:h-8"
                 />
               </div>
            </div>
          </div>
        </div>

        {/* Function 2: UI Mockup Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="flex justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Add New Stage Modal UI Mockup */}
              <div className="bg-white border-2 border-[#7F00FF] rounded-lg shadow-xl overflow-hidden h-64" style={{boxShadow: '0 25px 50px -12px rgba(127, 0, 255, 0.25)'}}>
                {/* Modal Header */}
                <div className="flex justify-between items-center p-2 border-b border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900">Add New Stage</h4>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Modal Content */}
                <div className="p-2 space-y-2">
                  {/* Stage Title */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Stage Title</label>
                    <input 
                      type="text" 
                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F00FF] focus:border-transparent"
                      value="Enquiries Raised"
                      readOnly
                    />
                  </div>
                  
                  {/* Description */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
                    <div className="relative">
                      <textarea 
                        className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7F00FF] focus:border-transparent resize-none"
                        rows={3}
                        placeholder="Enter stage description"
                        readOnly
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <button className="w-6 h-6 border border-gray-300 rounded text-gray-400 hover:text-[#7F00FF] hover:border-[#7F00FF] flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                          {/* Main wand diagonal line */}
                          <path d="M5 15L15 5" strokeWidth="2" strokeLinecap="round"/>
                          {/* Wand tip - thicker rounded end */}
                          <path d="M14 4L16 6" strokeWidth="2" strokeLinecap="round"/>
                          {/* Three sparkles - more prominent */}
                          <path d="M3 3L4 4M4 3L3 4" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M16 16L17 17M17 16L16 17" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M9 1L10 2M10 1L9 2" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* People Responsible */}
                  <div>
                    <h5 className="text-xs font-bold text-gray-900 mb-1">People Responsible</h5>
                    <p className="text-xs text-gray-600 mb-2">Select the people who will be responsible for completing this stage. You can search by name, role, or email address.</p>
                    
                    {/* People Cards Grid */}
                    <div className="grid grid-cols-2 gap-1">
                      <div className="border border-gray-200 rounded-md p-1">
                        <div className="flex items-center space-x-1">
                          <input type="checkbox" className="w-3 h-3 rounded border-gray-300 text-[#7F00FF] focus:ring-[#7F00FF]" />
                          <div>
                            <div className="text-xs font-bold text-gray-900">buyer</div>
                            <div className="text-xs text-gray-600">Ronan Hiney</div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-md p-1">
                        <div className="flex items-center space-x-1">
                          <input type="checkbox" className="w-3 h-3 rounded border-gray-300 text-[#7F00FF] focus:ring-[#7F00FF]" />
                          <div>
                            <div className="text-xs font-bold text-gray-900">seller</div>
                            <div className="text-xs text-gray-600">Joshua Chukwuezi</div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-md p-1">
                        <div className="flex items-center space-x-1">
                          <input type="checkbox" className="w-3 h-3 rounded border-gray-300 text-[#7F00FF] focus:ring-[#7F00FF]" />
                          <div>
                            <div className="text-xs font-bold text-gray-900">solicitor of buyer</div>
                            <div className="text-xs text-gray-600">Jane Doe</div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-md p-1">
                        <div className="flex items-center space-x-1">
                          <input type="checkbox" className="w-3 h-3 rounded border-gray-300 text-[#7F00FF] focus:ring-[#7F00FF]" />
                          <div>
                            <div className="text-xs font-bold text-gray-900">solicitor of seller</div>
                            <div className="text-xs text-gray-600">John Doe</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Modal Footer */}
                <div className="flex justify-end space-x-2 p-2 border-t border-gray-200">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="px-3 py-1 bg-[#7F00FF] text-white rounded-md text-xs font-medium hover:bg-[#6A00E6]">
                    Add Stage
                  </button>
                </div>
                
                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/70 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7F00FF] mb-4 md:mb-6">
              Built for the nuance of every sale
            </h3>
            <p className="text-base md:text-lg text-black leading-relaxed">
              Your AI agent understands conveyancing end to end, adapts to each deal's unique context, and supports custom stage requirements, giving you clarity at every stage.
            </p>
          </div>
        </div>

        {/* Function 3: Text Left, UI Mockup Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7F00FF] mb-4 md:mb-6">
              Real-time clarity for clients
            </h3>
            <p className="text-base md:text-lg text-black leading-relaxed">
              A live timeline showing every stage and who's responsible, updating automatically to keep clients informed without chasing you.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-sm md:max-w-md pb-16">
              {/* Deal Timeline UI Mockup */}
              <div className="bg-white border-2 border-[#7F00FF] rounded-lg shadow-xl overflow-hidden h-64 relative" style={{boxShadow: '0 25px 50px -12px rgba(127, 0, 255, 0.25)'}}>
                <div className="p-2">
                  {/* Property Address */}
                  <h4 className="text-sm font-semibold text-gray-900 mb-1.5">123 Clapham, London</h4>
                  
                  {/* Current Stage */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-600">Current Stage: <span className="font-medium text-gray-900">Draft Contract Sent</span> <span className="text-gray-500">Began: 23/07/2025 (1d 23h ago)</span></div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-600">Progress:</div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-[#7F00FF] h-1 rounded-full" style={{width: '50%'}}></div>
                    </div>
                    <div className="text-xs text-gray-500">50%</div>
                  </div>
                  
                  {/* People in this Deal */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-600 mb-1">People in this Deal:</div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="bg-green-100 rounded px-1.5 py-1">
                        <div className="text-xs font-medium text-gray-900">Ronan Hiney</div>
                        <div className="text-xs text-gray-600">buyer</div>
                      </div>
                      <div className="bg-yellow-100 rounded px-1.5 py-1">
                        <div className="text-xs font-medium text-gray-900">Joshua Chukwuezi</div>
                        <div className="text-xs text-gray-600">seller</div>
                      </div>
                      <div className="bg-purple-100 rounded px-1.5 py-1">
                        <div className="text-xs font-medium text-gray-900">Jane Doe</div>
                        <div className="text-xs text-gray-600">solicitor of buyer</div>
                      </div>
                      <div className="bg-blue-100 rounded px-1.5 py-1">
                        <div className="text-xs font-medium text-gray-900">John Doe</div>
                        <div className="text-xs text-gray-600">solicitor of seller</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Deal Stages */}
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Deal Stages:</div>
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded px-1.5 py-1 shadow-sm">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-gray-900">Draft Contract Sent</span>
                        </div>
                        <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded px-1.5 py-1 shadow-sm">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-3 h-3 bg-amber-500 rounded-full flex items-center justify-center">
                            <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-gray-900">Enquiries Responded To</span>
                        </div>
                        <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded px-1.5 py-1 shadow-sm">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-3 h-3 bg-amber-500 rounded-full flex items-center justify-center">
                            <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-gray-900">Solicitors Open Files</span>
                        </div>
                        <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Fade Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 