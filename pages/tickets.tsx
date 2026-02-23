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
      <h1 className="text-3xl font-bold">Ticket Pricing</h1>
      <p className="text-sm text-foreground">
        Please review our{" "}
        <a href="https://drive.google.com/file/d/15BS8H2A1j-No-6yWKqdTz97oiKU_c0K9/view?usp=sharing" className="underline pb-10">Attendee Code of Conduct</a>
      {" "}before proceeding with registration.
      </p>
      <Table className="mb-5">
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
      <div className="flex flex-wrap justify-evenly">
        <a href="https://www.zeffy.com/en-US/ticketing/2026-taascon-x-ecaasu-conference-registration-nc-students-only-duke-university-final"
        className="pb-5 md:pb-0">
          <Button
            variant="outline"
            className="border-foreground rounded-none hover:bg-foreground hover:text-background text-foreground"
          >
            Buy NC Student Tickets Here
          </Button>{" "}
        </a>
        <a href="https://www.zeffy.com/en-US/ticketing/2026-taascon-x-ecaasu-conference-registration-duke-university">
          <Button
            variant="outline"
            className="border-foreground rounded-none hover:bg-foreground hover:text-background text-foreground"
          >
            Buy Tickets Here
          </Button>
        </a>
      </div>
    </div>
  );
}
