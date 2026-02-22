import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

export default function Tickets() {
  return (
    <div className="pb-10">
      <h1 className="text-3xl font-bold pb-10">Ticket Pricing</h1>
      <Table>
        {/* <TableCaption>Discount available for NC students!</TableCaption> */}
        {/* <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader> */}
        <TableBody>
          <TableRow className="line-through">
            <TableCell className="text-left font-medium">
              Dec 1 - Jan 1
            </TableCell>
            <TableCell className="font-medium">Early Bird</TableCell>
            <TableCell className="text-right">$65</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left font-medium">
              Jan 2 - Mar 15
            </TableCell>

            <TableCell className="font-medium">Regular</TableCell>
            <TableCell className="text-right">$75</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left font-medium">
              Mar 16 - Mar 22
            </TableCell>
            <TableCell className="font-medium">Late</TableCell>
            <TableCell className="text-right">$80</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left font-medium">
              Mar 23 - Mar 25
            </TableCell>
            <TableCell className="font-medium">Last Call</TableCell>
            <TableCell className="text-right">$90</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left font-medium">From Dec 1</TableCell>
            <TableCell className="font-medium">NC Students</TableCell>
            <TableCell className="text-right">$30</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-left font-medium">From Dec 1</TableCell>

            <TableCell className="font-medium">Group Pricing</TableCell>
            <TableCell className="text-right">$70/attendee</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-center">
        <a href="https://www.zeffy.com/en-US/ticketing/2026-taascon-x-ecaasu-conference-registration-nc-students-only-duke-university-final">
          <Button variant="link">NC Student Tickets</Button>{" "}
        </a>
        <a href="https://www.zeffy.com/en-US/ticketing/2026-taascon-x-ecaasu-conference-registration-duke-university">
          <Button variant="link">Buy Tickets</Button>
        </a>
      </div>
    </div>
  );
}
