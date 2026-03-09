import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const schedule = [
  {
    day: "Friday",
    date: "March 27th",
    hours: "4 – 9:30PM",
    items: [
      { time: "4:00 - 7:00PM", label: "Registration Check-in" },
      { time: "6:30PM", label: "Opening Ceremony" },
      { time: "7:45PM", label: "Optional Social Mixer (off-site)" },
    ],
  },
  {
    day: "Saturday",
    date: "March 28th",
    hours: "8AM – 10PM",
    items: [
      { time: "8:00-9:00AM", label: "Breakfast" },
      { time: "9:00AM", label: "Workshop Block A" },
      { time: "10:45AM", label: "Guest Speaker Session" },
      { time: "12:00PM", label: "Lunch" },
      { time: "1:45PM", label: "Workshop Block B" },
      { time: "3:30PM", label: "Community Roundtables" },
      { time: "4:45PM", label: "Workshop Block C" },
      { time: "6:30PM", label: "Dinner" },
      { time: "7:30PM", label: "Closing Ceremony" },
    ],
  },
  {
    day: "Sunday",
    date: "March 29th",
    hours: "Check-out",
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
