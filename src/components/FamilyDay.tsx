import React from 'react';

const events = [
  {
    day: "Day 1",
    date: "March 15, 2024",
    events: [
      { time: "9:00 AM", name: "Welcome Ceremony & Traditional Lamp Lighting" },
      { time: "10:30 AM", name: "Family Tree Presentation" },
      { time: "1:00 PM", name: "Traditional Lunch Gathering" },
      { time: "3:00 PM", name: "Cultural Performances" },
      { time: "6:00 PM", name: "Evening Aarti & Dinner" }
    ]
  },
  {
    day: "Day 2",
    date: "March 16, 2024",
    events: [
      { time: "8:00 AM", name: "Morning Yoga Session" },
      { time: "10:00 AM", name: "Family Games & Activities" },
      { time: "1:30 PM", name: "Cooking Competition" },
      { time: "4:00 PM", name: "Story Telling Session" },
      { time: "7:00 PM", name: "Gala Dinner" }
    ]
  },
  {
    day: "Day 3",
    date: "March 17, 2024",
    events: [
      { time: "9:30 AM", name: "Family Photo Session" },
      { time: "11:00 AM", name: "Awards Ceremony" },
      { time: "1:00 PM", name: "Farewell Lunch" },
      { time: "3:00 PM", name: "Closing Ceremony" }
    ]
  }
];

const FamilyDay = () => {
  return (
    <section id="family-day" className="py-20 bg-[#F5F2EA]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2C5530] text-center mb-16 fade-in">
          Family Day 2025
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((day, index) => (
            <div key={index} className="bg-white/50 p-8 rounded-lg shadow-sm fade-in">
              <h3 className="text-2xl font-serif text-[#2C5530] mb-2">{day.day}</h3>
              <p className="text-[#1A3B1E] mb-6 italic">{day.date}</p>
              <ul className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="flex items-start space-x-3">
                    <span className="text-[#2C5530] font-medium">{event.time}</span>
                    <span className="text-[#1A3B1E]">{event.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyDay;