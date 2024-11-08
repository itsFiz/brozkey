"use client"
import React, { useState } from 'react';

export default function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00');

  const timeSlots = [
    { id: '09:00', label: '09:00 AM' },
    { id: '10:00', label: '10:00 AM' },
    { id: '11:00', label: '11:00 AM' },
    { id: '14:00', label: '02:00 PM' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Book a Consultation</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>
            
            {/* Simple Calendar Preview - You'll want to integrate a proper calendar library */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-center mb-4">
                <h4 className="font-medium">
                  {selectedDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </h4>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(31)].map((_, i) => (
                  <button
                    key={i}
                    className={`p-2 text-center rounded hover:bg-blue-50 
                      ${selectedDate.getDate() === i + 1 ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => {
                      const newDate = new Date(selectedDate);
                      newDate.setDate(i + 1);
                      setSelectedDate(newDate);
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Time Slots */}
            <div className="space-y-4">
              <label className="font-medium block mb-2">Available Time Slots</label>
              <div className="grid grid-cols-2 gap-4">
                {timeSlots.map((slot) => (
                  <div key={slot.id} className="flex items-center">
                    <input
                      type="radio"
                      id={slot.id}
                      name="timeSlot"
                      value={slot.id}
                      checked={selectedTime === slot.id}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={slot.id} className="ml-2 text-sm">
                      {slot.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Details Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Your Details</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any specific requirements?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}