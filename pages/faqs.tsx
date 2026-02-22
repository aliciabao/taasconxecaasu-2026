import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      value: "item-1",
      question: "How many nights should we plan to stay?",
      answer:
        "Plan to book two nights — Friday and Saturday evening. While Sunday doesn't have formal programming, Saturday's events run into the late evening, so you'll want a place to rest!",
    },
    {
      value: "item-2",
      question: "Will transportation be provided?",
      answer:
        "Attendees are expected to arrange their own transportation to the venue. Duke University has free university buses and is accessible from UNC via the Robertson Express — pretty convenient!",
    },
    {
      value: "item-3",
      question: "Where can we find parking?",
      answer:
        "We recommend parking at your hotel first. That way you're all set without worrying about campus lots!",
    },
    {
      value: "item-4",
      question: "Will meals be provided?",
      answer:
        "Yes! Breakfast, lunch, and dinner will all be provided on Saturday by amazing local Triangle Area businesses. After registering, you'll get a form to share dietary restrictions and a sneak peek at the menu.",
    },
    // {
    //   value: "item-5",
    //   question: "Are hotel group rates available?",
    //   answer: "Yes — discounted hotel block info is coming soon. Stay tuned!",
    // },
  ];

  const partnerHotels = [
    {
      name: "The Lodge at Duke Medical Center",
      address: "2306 Elba St. Durham, NC 27705",
      bookingLink: "https://bookings.travelclick.com/110231?domain=www.google.com&groupID=5028030#/guestsandrooms",
    },
    {
      name: "Comfort Inn & Suites Durham near Duke University",
      address: "1816 Hillandale Rd, Durham, NC 27705",
      bookingLink: "https://www.choicehotels.com/reservations/groups/KK59H1",
    },
  ];

  const otherHotels = [
    {
      name: "Hilton Durham near Duke University",
      address: "3800 Hillsborough Road, Durham, NC 27705",
    },
    {
      name: "Hampton Inn & Suites Durham University Medical Center",
      address: "1206 Cole Mill Road, Durham, NC 27705",
    },
  ];
  return (
    <div className="py-10 pb-10">
      <h1 className="text-3xl font-bold">FAQs</h1>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="space-y-3"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value} className="">
            <AccordionTrigger>
              <span>{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
                <AccordionItem value="item-5">
          <AccordionTrigger>
            <span>Are hotel group rates available?</span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-3">Yes! We have the following partner hotels:</p>
            <ul className="space-y-3 pb-4">
              {partnerHotels.map((hotel) => (
                <li key={hotel.name}>
                  <p className="font-semibold">{hotel.name}</p>
                  <p className="text-sm text-muted-foreground">{hotel.address}</p>
                  <a href={hotel.bookingLink} className="text-sm underline">
                    Book here
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground pb-2">
              Other nearby options (no hotel block):
            </p>
            <ul className="space-y-2">
              {otherHotels.map((hotel) => (
                <li key={hotel.name} className="text-sm">
                  <p className="font-semibold">{hotel.name}</p>
                  <p className="text-muted-foreground">{hotel.address}</p>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

      </Accordion>

      <p className="text-center text-sm text-gray-400 mt-10">
        Still have questions? Reach out to us!
      </p>
    </div>
  );
}
