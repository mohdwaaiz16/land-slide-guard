import React from 'react';
import { Camera, MapPin, User, CheckCircle } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      author: "NDRF Drone Unit Alpha",
      location: "Mangan District - NH310A",
      time: "2 hours ago",
      content: "Drone survey completed. Severe tension cracks visible on the slope above the highway. Immediate risk of rockfall. Recommending road closure.",
      verified: true,
      image: "drone_placeholder"
    },
    {
      id: 2,
      author: "Local Authority (Sikkim Police)",
      location: "Gangtok - Bypass",
      time: "4 hours ago",
      content: "Minor mudslide reported by locals. Road is partially blocked but passable for single-lane traffic. PWD informed for clearance.",
      verified: true,
      image: "mudslide_placeholder"
    },
    {
      id: 3,
      author: "Citizen Report (Verified)",
      location: "Namchi - Damthang Road",
      time: "6 hours ago",
      content: "Heavy water logging and soil erosion near the main bridge. Structural integrity looks okay but water levels are rising rapidly.",
      verified: true,
      image: "water_placeholder"
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto h-full overflow-y-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Field Reports</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium">Ground intelligence from authorities and drone units in Sikkim</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors flex items-center gap-2">
          <Camera size={16} /> Submit New Report
        </button>
      </div>

      <div className="space-y-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-100 min-h-[200px] flex items-center justify-center border-r border-gray-200">
              <Camera size={48} className="text-gray-300" />
              <span className="sr-only">Image Placeholder for {report.image}</span>
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <User size={16} className="text-blue-500" /> {report.author}
                    {report.verified && <CheckCircle size={14} className="text-green-500 ml-1" />}
                  </div>
                  <span className="text-xs font-semibold text-gray-500">{report.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-red-600 mb-4 bg-red-50 w-fit px-2.5 py-1 rounded-md">
                  <MapPin size={14} /> {report.location}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{report.content}"
                </p>
              </div>
              <div className="flex gap-3">
                <button className="text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded transition-colors">View Attachments (3)</button>
                <button className="text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded transition-colors">Verify Location on Map</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
