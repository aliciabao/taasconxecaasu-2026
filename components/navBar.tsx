import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          <a href="#about" className="hover:text-primary max-md:hidden">
            About Us
          </a>
          <a href="#schedule" className="hover:text-primary max-md:hidden">
            Schedule
          </a>
          <a href="/">
            <img className="h-10" src="/globe.svg" alt="Logo" />
          </a>
          <a href="#faqs" className="hover:text-primary max-md:hidden">
            FAQs
          </a>
          <Link href="#tickets" className="hover:text-primary max-md:hidden">
            Tickets
          </Link>
        </div>
      </div>
    </header>

    // <div className = "justify-between h-10">
    //   {/* logo here */}
    //   <img className="h-10" src="/globe.svg" alt="Logo" />

    //   {/* nav menu */}
    //   <div>
    //   <NavigationMenu>
    //     <NavigationMenuList>
    //       <NavigationMenuItem>
    //         <NavigationMenuTrigger>About US</NavigationMenuTrigger>
    //         <NavigationMenuContent>
    //           <NavigationMenuLink>ECAASU</NavigationMenuLink>
    //           <NavigationMenuLink>TAASCON</NavigationMenuLink>
    //         </NavigationMenuContent>
    //       </NavigationMenuItem>
    //       <NavigationMenuItem>
    //         <NavigationMenuTrigger>Tickets</NavigationMenuTrigger>
    //         <NavigationMenuContent>
    //           <NavigationMenuLink>Link</NavigationMenuLink>
    //         </NavigationMenuContent>
    //       </NavigationMenuItem>
    //       <NavigationMenuItem>
    //         <NavigationMenuLink asChild>
    //           <Link href="/faqs">FAQs</Link>
    //         </NavigationMenuLink>
    //       </NavigationMenuItem>
    //     </NavigationMenuList>
    //   </NavigationMenu>
    //   </div>
    // </div>
  );
}
