import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const schedule = [
  {
    day: "Friday",
    date: "March 27th",
    hours: "3 – 9:30PM",
    items: [
      { time: "3:00 PM", label: "Registration Check-in" },
      { time: "Evening", label: "Opening Ceremony with Helen Zia" },
      { time: "Evening", label: "Optional Social Mixer (off-site)" },
    ],
  },
  {
    day: "Saturday",
    date: "March 28th",
    hours: "8AM – 10PM",
    items: [
      { time: "Morning", label: "Breakfast" },
      { time: "Morning", label: "Workshop Block A" },
      { time: "Morning", label: "Guest Speaker Session" },
      { time: "Afternoon", label: "Lunch" },
      { time: "Afternoon", label: "Workshop Block B & C" },
      { time: "Afternoon", label: "Community Roundtables" },
      { time: "Evening", label: "Dinner" },
      { time: "Evening", label: "Closing Ceremony" },
    ],
  },
  {
    day: "Sunday",
    date: "March 29th",
    hours: "Check-out day",
    items: [
      { time: "", label: "No formal programming– optional activities!" },
    ],
  },
];


export default function Schedule() {
    return <div className="pb-10">
      <h1 className="text-3xl font-bold pb-10">Schedule</h1>
      <div className="grid grid-cols-3 gap-6">
        {schedule.map((day) => (
          <div key={day.day}>
            <h2 className="font-bold text-lg">{day.day}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {day.date} · {day.hours}
            </p>
            <ul className="space-y-2">
              {day.items.map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-muted-foreground text-sm">{item.time}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
}
