import shopSphereHero from "../assets/images/work/shopsphere-hero.png";
import ssFront from "../assets/images/work/shopsphere-front.png";
import ssTracking from "../assets/images/work/shopsphere-tracking.png";
import ssCart from "../assets/images/work/shopsphere-cart.png";
import ssAdmin from "../assets/images/work/shopsphere-admin.png";

import hrmsHero from "../assets/images/work/hrms-hero.png";
import hrmsDashboard from "../assets/images/work/hrms-dashboard.png";
import hrmsEmployee from "../assets/images/work/hrms-employees.png";
import hrmsEmployeeDetails from "../assets/images/work/hrms-employee-details.png";
import hrmsPayroll from "../assets/images/work/hrms-payroll.png";
import hrmsLeave from "../assets/images/work/hrms-leave.png";

import rsaHero from "../assets/images/work/rsa-hero.png";
// images
import rsaCreateTicket from "../assets/images/work/rsa-create-ticket.png";
import rsaL2Dashboard from "../assets/images/work/rsa-dashboard.png";
import rsaCustomerLocation from "../assets/images/work/rsa-customer-location.png";

import {
  Search,
  Truck,
  Shield,
  Users,
  Calendar,
  Clipboard,
  Wallet,
  TicketPlus,
  LayoutDashboard,
  Route,
  LayoutGrid,
  Globe,
  ShoppingCart,
  Monitor,
  Code2,
} from "lucide-react";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWhatsapp,
  SiRedux,
} from "react-icons/si";

export const technologyConfig = {
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Node.js": {
    icon: SiNodedotjs,
    color: "#339933",
  },

  Express: {
    icon: SiExpress,
    color: "#000000",
  },

  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
  },

  "WhatsApp Cloud API": {
    icon: SiWhatsapp,
    color: "#25D366",
  },

  "Redux Toolkit": {
    icon: SiRedux,
    color: "#764ABC",
  },

  "Node.js + Express": {
    icon: SiNodedotjs,
    color: "#339933",
  },
};

export const capabilitiesIcons = {
  search: Search,
  cart: ShoppingCart,
  truck: Truck,
  shield: Shield,
  users: Users,
  calendar: Calendar,
  clipboard: Clipboard,
  wallet: Wallet,
  ticketplus: TicketPlus,
  layoutdashboard: LayoutDashboard,
  monitor: Monitor,
  route: Route,
};

export const projectCategories = [
  {
    name: "All",
    icon: LayoutGrid,
  },
  {
    name: "Websites",
    icon: Globe,
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
  },
  {
    name: "Web Applications",
    icon: Monitor,
  },
  {
    name: "Custom Development",
    icon: Code2,
  },
];


// old array

// export const projects = [
//   {
//     id: 1,
//     slug: "shopsphere",

//     title: "ShopSphere",
//     category: "E-commerce",

//     description:
//       "A modern full-stack e-commerce platform designed for seamless product discovery, shopping, checkout and order management.",

//     heroImage: shopSphereHero,

//     technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],

//     liveUrl: "",
//     githubUrl: "",

//     challenge: {
//       title:
//         "Creating a complete e-commerce experience from customer to admin.",

//       description:
//         "The goal was to build a modern e-commerce platform that provides a smooth shopping experience for customers while giving administrators the tools needed to manage products, users and orders.",
//     },

//     capabilities: [
//       {
//         title: "Product Discovery",
//         description:
//           "Browse products, search and filter through a clean shopping experience.",
//         icon: "search",
//       },

//       {
//         title: "Shopping Cart & Checkout",
//         description:
//           "Manage cart items and complete a streamlined checkout flow.",
//         icon: "cart",
//       },

//       {
//         title: "Order Tracking",
//         description: "Track order progress from placement through delivery.",
//         icon: "truck",
//       },

//       {
//         title: "Admin Management",
//         description: "Manage users, products, sellers and platform activity.",
//         icon: "shield",
//       },
//     ],

//     gallery: [
//       {
//         image: ssFront,
//         title: "Modern Storefront",
//         description:
//           "Product discovery with search, categories and featured products.",
//       },

//       {
//         image: ssAdmin,
//         title: "Admin Dashboard",
//         description: "Manage products, users and platform activity.",
//       },

//       {
//         image: ssCart,
//         title: "Cart & Checkout",
//         description: "Simple cart management and checkout experience.",
//       },

//       {
//         image: ssTracking,
//         title: "Order Tracking",
//         description: "Real-time order status and delivery progress.",
//       },
//     ],

//     features: [
//       "Product browsing & search",
//       "Cart & quantity management",
//       "Checkout flow",
//       "Order management",
//       "Order tracking",
//       "Admin dashboard",
//       "Product management",
//       "User management",
//     ],

//     stack: [
//       {
//         category: "Frontend",
//         technology: "React",
//         description: "Modern component-based UI",
//       },

//       {
//         category: "Backend",
//         technology: "Node.js + Express",
//         description: "REST API architecture",
//       },

//       {
//         category: "Database",
//         technology: "MongoDB",
//         description: "Flexible NoSQL database",
//       },

//       {
//         category: "State Management",
//         technology: "Redux Toolkit",
//         description: "Centralized application state",
//       },
//     ],
//   },
//   {
//     id: 2,
//     slug: "hrms-pro",

//     title: "HRMS Pro",
//     category: "Web Applications",

//     description:
//       "A modern human resource management platform for managing employees, attendance, leave, payroll and everyday HR operations from one centralized system.",

//     heroImage: hrmsHero,

//     technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],

//     liveUrl: "",
//     githubUrl: "",

//     challenge: {
//       title: "Bringing everyday HR operations into one connected platform.",

//       description:
//         "The goal was to create a centralized HR platform where managers can manage employees, monitor attendance, review leave requests, handle payroll and access employee information without switching between multiple systems.",
//     },

//     capabilities: [
//       {
//         title: "Employee Management",
//         description:
//           "Manage employee records, departments, job roles, locations and onboarding information from one place.",
//         icon: "users",
//       },

//       {
//         title: "Attendance Management",
//         description:
//           "Track employee attendance, check-in and check-out times and daily attendance status.",
//         icon: "calendar",
//       },

//       {
//         title: "Leave Management",
//         description:
//           "Review, approve and track employee leave requests with clear approval status and employee context.",
//         icon: "clipboard",
//       },

//       {
//         title: "Payroll Management",
//         description:
//           "Manage payroll summaries, salary information, deductions, bonuses and payment status.",
//         icon: "wallet",
//       },
//     ],

//     gallery: [
//       {
//         image: hrmsDashboard,
//         title: "HR Dashboard",
//         description:
//           "A centralized dashboard providing an overview of employees, pending approvals, attendance and upcoming HR activity.",
//       },

//       {
//         image: hrmsEmployee,
//         title: "Employee Management",
//         description:
//           "Search, filter and manage employee records with department, job title, status, location and invitation information.",
//       },

//       {
//         image: hrmsEmployeeDetails,
//         title: "Employee Profile & Attendance",
//         description:
//           "Detailed employee profiles bring personal information, employment details and attendance records together in one view.",
//       },

//       {
//         image: hrmsPayroll,
//         title: "Payroll Management",
//         description:
//           "Review payroll totals, processed and pending payments, salary breakdowns, deductions and employee payslips.",
//       },

//       {
//         image: hrmsLeave,
//         title: "Leave Management",
//         description:
//           "Manage employee leave requests with request type, dates, duration, reason and approval status.",
//       },
//     ],

//     features: [
//       "Employee records & profiles",
//       "Department management",
//       "Employee search & filtering",
//       "Attendance tracking",
//       "Check-in & check-out records",
//       "Leave request management",
//       "Leave approval workflow",
//       "Payroll management",
//       "Salary & deduction tracking",
//       "Payslip access",
//       "Employee invitations",
//       "HR dashboard & reporting",
//     ],

//     stack: [
//       {
//         category: "Frontend",
//         technology: "React",
//         description:
//           "Component-based interface for HR workflows and dashboards",
//       },

//       {
//         category: "Backend",
//         technology: "Node.js + Express",
//         description:
//           "REST API architecture for HR operations and business logic",
//       },

//       {
//         category: "Database",
//         technology: "MongoDB",
//         description:
//           "Flexible storage for employees, attendance, leave and payroll data",
//       },

//       {
//         category: "State Management",
//         technology: "Redux Toolkit",
//         description: "Centralized application state for connected HR workflows",
//       },
//     ],
//   },
//   {
//     id: 3,
//     slug: "road-side-assistance",

//     title: "Road side Assistance",
//     category: "Custom Development",

//     description:
//       "A roadside assistance platform that connects L1 customer support, WhatsApp location sharing and L2 service operations into a centralized ticket management workflow.",

//     heroImage: rsaHero,
//     // heroImage: featuredTest,

//     technologies: [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "WhatsApp Cloud API",
//     ],

//     liveUrl: "",
//     githubUrl: "",

//     challenge: {
//       title:
//         "Turning a roadside assistance call into a connected service workflow.",

//       description:
//         "The platform was built to help L1 support teams create structured roadside assistance tickets, collect the customer's location through WhatsApp and pass the request into an automated service workflow where L2 teams can monitor tickets and technician activity.",
//     },

//     capabilities: [
//       {
//         title: "L1 Ticket Creation",
//         description:
//           "L1 agents create roadside assistance tickets while capturing customer, vehicle, incident and service details, with WhatsApp used to collect the customer's location.",
//         icon: "ticketplus",
//       },

//       {
//         title: "L2 Ticket Monitoring",
//         description:
//           "L2 teams monitor incoming tickets, service status and technician activity from a centralized roadside assistance dashboard.",
//         icon: "layoutdashboard",
//       },

//       {
//         title: "L2 Service Management",
//         description:
//           "L2 teams manage service operations and coordinate technician activity through a centralized dashboard.",
//         icon: "monitor",
//       },

//       {
//         title: "Auto Technician Assignment",
//         description:
//           "Technicians are assigned automatically through the service workflow, allowing L2 to focus on monitoring and operations.",
//         icon: "route",
//       },
//     ],

//     gallery: [
//       {
//         image: rsaCreateTicket,
//         title: "L1 Ticket Creation",
//         description:
//           "L1 agents capture customer, vehicle, incident and required service details while creating a roadside assistance ticket.",
//       },

//       {
//         image: rsaL2Dashboard,
//         title: "WhatsApp Customer Communication",
//         description:
//           "WhatsApp is integrated directly into the L1 workflow to request and receive the customer's current location.",
//       },

//       {
//         image: rsaCustomerLocation,
//         title: "L2 Service Operations",
//         description:
//           "L2 teams can monitor tickets, technician activity, service status and the customer's location from the ticket workflow.",
//       },
//     ],

//     features: [
//       "L1 ticket creation",
//       "Customer details management",
//       "Vehicle details management",
//       "Issue category & sub-category",
//       "Required service selection",
//       "WhatsApp customer communication",
//       "Customer location sharing",
//       "Location coordinates",
//       "L2 ticket dashboard",
//       "Automatic technician assignment",
//       "Technician activity monitoring",
//       "Ticket status monitoring",
//       "Technician route tracking",
//       "Customer WhatsApp conversation",
//       "Roadside assistance workflow",
//     ],

//     stack: [
//       {
//         category: "Frontend",
//         technology: "React",
//         description:
//           "Interfaces for L1 ticket creation and L2 service operations",
//       },

//       {
//         category: "Backend",
//         technology: "Node.js + Express",
//         description:
//           "REST APIs handling tickets, service workflows and technician operations",
//       },

//       {
//         category: "Database",
//         technology: "MongoDB",
//         description:
//           "Stores tickets, customer details, vehicle information, locations and service data",
//       },

//       {
//         category: "Communication",
//         technology: "WhatsApp Cloud API",
//         description:
//           "Customer communication and location-sharing workflow through WhatsApp",
//       },
//     ],
//     featured: true,
//   },
// ];


// new added title & descritpions for each topic dynamically 
export const projects = [
  {
    id: 1,
    slug: "shopsphere",

    title: "ShopSphere",
    category: "E-commerce",

    description:
      "A modern full-stack e-commerce platform designed for seamless product discovery, shopping, checkout and order management.",

    heroImage: shopSphereHero,

    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],

    liveUrl: "",
    githubUrl: "",

    challenge: {
      title:
        "Creating a complete e-commerce experience from customer to admin.",

      description:
        "The goal was to build a modern e-commerce platform that provides a smooth shopping experience for customers while giving administrators the tools needed to manage products, users and orders.",
    },

    // CAPABILITIES
    capabilities: {
      title: "What We Built",
      description:
        "A complete digital experience built around the product. From discovering products to managing orders, the platform brings the core e-commerce experience together in one system.",

      items: [
        {
          title: "Product Discovery",
          description:
            "Browse products, search and filter through a clean shopping experience.",
          icon: "search",
        },
        {
          title: "Shopping Cart & Checkout",
          description:
            "Manage cart items and complete a streamlined checkout flow.",
          icon: "cart",
        },
        {
          title: "Order Tracking",
          description:
            "Track order progress from placement through delivery.",
          icon: "truck",
        },
        {
          title: "Admin Management",
          description:
            "Manage users, products, sellers and platform activity.",
          icon: "shield",
        },
      ],
    },

    // GALLERY
    gallery: {
      title: "Inside the Platform",
      description:
        "Explore the interfaces behind ShopSphere, from product discovery and checkout to order tracking and administration.",

      items: [
        {
          image: ssFront,
          title: "Modern Storefront",
          description:
            "Product discovery with search, categories and featured products.",
        },
        {
          image: ssAdmin,
          title: "Admin Dashboard",
          description:
            "Manage products, users and platform activity.",
        },
        {
          image: ssCart,
          title: "Cart & Checkout",
          description:
            "Simple cart management and checkout experience.",
        },
        {
          image: ssTracking,
          title: "Order Tracking",
          description:
            "Real-time order status and delivery progress.",
        },
      ],
    },

    // FEATURES
    features: {
      title: "Designed for Seamless Shopping",
      description:
        "ShopSphere brings together the essential tools customers and administrators need for smooth shopping, order handling, and day-to-day platform management.",

      items: [
        "Product browsing & search",
        "Cart & quantity management",
        "Checkout flow",
        "Order management",
        "Order tracking",
        "Admin dashboard",
        "Product management",
        "User management",
      ],
    },

    // TECHNOLOGY STACK
    stack: {
      title: "A Modern Stack Built for Flexibility and Scale",
      description:
        "ShopSphere uses a modern full-stack architecture to keep the application maintainable, responsive and ready to evolve.",

      items: [
        {
          category: "Frontend",
          technology: "React",
          description: "Modern component-based UI",
        },
        {
          category: "Backend",
          technology: "Node.js + Express",
          description: "REST API architecture",
        },
        {
          category: "Database",
          technology: "MongoDB",
          description: "Flexible NoSQL database",
        },
        {
          category: "State Management",
          technology: "Redux Toolkit",
          description: "Centralized application state",
        },
      ],
    },
  },

  // ==================================================
  // PROJECT 2 — HRMS PRO
  // ==================================================

  {
    id: 2,
    slug: "hrms-pro",

    title: "HRMS Pro",
    category: "Web Applications",

    description:
      "A modern human resource management platform for managing employees, attendance, leave, payroll and everyday HR operations from one centralized system.",

    heroImage: hrmsHero,

    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],

    liveUrl: "",
    githubUrl: "",

    challenge: {
      title: "Bringing everyday HR operations into one connected platform.",

      description:
        "The goal was to create a centralized HR platform where managers can manage employees, monitor attendance, review leave requests, handle payroll and access employee information without switching between multiple systems.",
    },

    // CAPABILITIES
    capabilities: {
      title: "What We Built",
      description:
        "A centralized HR management platform that connects employee records, attendance, leave and payroll to simplify everyday workforce operations.",

      items: [
        {
          title: "Employee Management",
          description:
            "Manage employee records, departments, job roles, locations and onboarding information from one place.",
          icon: "users",
        },
        {
          title: "Attendance Management",
          description:
            "Track employee attendance, check-in and check-out times and daily attendance status.",
          icon: "calendar",
        },
        {
          title: "Leave Management",
          description:
            "Review, approve and track employee leave requests with clear approval status and employee context.",
          icon: "clipboard",
        },
        {
          title: "Payroll Management",
          description:
            "Manage payroll summaries, salary information, deductions, bonuses and payment status.",
          icon: "wallet",
        },
      ],
    },

    // GALLERY
    gallery: {
      title: "Inside the HR Platform",
      description:
        "Explore the interfaces that bring employee information, HR dashboards, attendance records, leave requests and payroll operations together.",

      items: [
        {
          image: hrmsDashboard,
          title: "HR Dashboard",
          description:
            "A centralized dashboard providing an overview of employees, pending approvals, attendance and upcoming HR activity.",
        },
        {
          image: hrmsEmployee,
          title: "Employee Management",
          description:
            "Search, filter and manage employee records with department, job title, status, location and invitation information.",
        },
        {
          image: hrmsEmployeeDetails,
          title: "Employee Profile & Attendance",
          description:
            "Detailed employee profiles bring personal information, employment details and attendance records together in one view.",
        },
        {
          image: hrmsPayroll,
          title: "Payroll Management",
          description:
            "Review payroll totals, processed and pending payments, salary breakdowns, deductions and employee payslips.",
        },
        {
          image: hrmsLeave,
          title: "Leave Management",
          description:
            "Manage employee leave requests with request type, dates, duration, reason and approval status.",
        },
      ],
    },

    // FEATURES
    features: {
      title: "Designed for Smarter HR Operations",
      description:
        "HRMS Pro combines the essential tools HR teams and managers need to manage employees, streamline approvals, monitor attendance and handle payroll efficiently.",

      items: [
        "Employee records & profiles",
        "Department management",
        "Employee search & filtering",
        "Attendance tracking",
        "Check-in & check-out records",
        "Leave request management",
        "Leave approval workflow",
        "Payroll management",
        "Salary & deduction tracking",
        "Payslip access",
        "Employee invitations",
        "HR dashboard & reporting",
      ],
    },

    // TECHNOLOGY STACK
    stack: {
      title: "A Scalable Foundation for Workforce Management",
      description:
        "Built with a modern full-stack architecture to support connected HR workflows, consistent application state and reliable employee data management.",

      items: [
        {
          category: "Frontend",
          technology: "React",
          description:
            "Component-based interface for HR workflows and dashboards",
        },
        {
          category: "Backend",
          technology: "Node.js + Express",
          description:
            "REST API architecture for HR operations and business logic",
        },
        {
          category: "Database",
          technology: "MongoDB",
          description:
            "Flexible storage for employees, attendance, leave and payroll data",
        },
        {
          category: "State Management",
          technology: "Redux Toolkit",
          description:
            "Centralized application state for connected HR workflows",
        },
      ],
    },
  },

  // ==================================================
  // PROJECT 3 — ROADSIDE ASSISTANCE
  // ==================================================

  {
    id: 3,
    slug: "road-side-assistance",

    title: "Road side Assistance",
    category: "Custom Development",

    description:
      "A roadside assistance platform that connects L1 customer support, WhatsApp location sharing and L2 service operations into a centralized ticket management workflow.",

    heroImage: rsaHero,
    // heroImage: featuredTest,

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "WhatsApp Cloud API",
    ],

    liveUrl: "",
    githubUrl: "",

    challenge: {
      title:
        "Turning a roadside assistance call into a connected service workflow.",

      description:
        "The platform was built to help L1 support teams create structured roadside assistance tickets, collect the customer's location through WhatsApp and pass the request into an automated service workflow where L2 teams can monitor tickets and technician activity.",
    },

    // CAPABILITIES
    capabilities: {
      title: "What We Built",
      description:
        "A connected roadside assistance platform that links customer support, WhatsApp location sharing, ticket management and technician coordination in one service workflow.",

      items: [
        {
          title: "L1 Ticket Creation",
          description:
            "L1 agents create roadside assistance tickets while capturing customer, vehicle, incident and service details, with WhatsApp used to collect the customer's location.",
          icon: "ticketplus",
        },
        {
          title: "L2 Ticket Monitoring",
          description:
            "L2 teams monitor incoming tickets, service status and technician activity from a centralized roadside assistance dashboard.",
          icon: "layoutdashboard",
        },
        {
          title: "L2 Service Management",
          description:
            "L2 teams manage service operations and coordinate technician activity through a centralized dashboard.",
          icon: "monitor",
        },
        {
          title: "Auto Technician Assignment",
          description:
            "Technicians are assigned automatically through the service workflow, allowing L2 to focus on monitoring and operations.",
          icon: "route",
        },
      ],
    },

    // GALLERY
    gallery: {
      title: "Inside the Service Workflow",
      description:
        "Explore the interfaces used to create assistance tickets, collect customer locations, monitor service operations and coordinate technician activity.",

      items: [
        {
          image: rsaCreateTicket,
          title: "L1 Ticket Creation",
          description:
            "L1 agents capture customer, vehicle, incident and required service details while creating a roadside assistance ticket.",
        },
        {
          image: rsaL2Dashboard,
          title: "WhatsApp Customer Communication",
          description:
            "WhatsApp is integrated directly into the L1 workflow to request and receive the customer's current location.",
        },
        {
          image: rsaCustomerLocation,
          title: "L2 Service Operations",
          description:
            "L2 teams can monitor tickets, technician activity, service status and the customer's location from the ticket workflow.",
        },
      ],
    },

    // FEATURES
    features: {
      title: "Designed for Connected Service Operations",
      description:
        "The platform brings together ticket creation, customer communication, location sharing, technician assignment and service monitoring to help teams coordinate roadside assistance efficiently.",

      items: [
        "L1 ticket creation",
        "Customer details management",
        "Vehicle details management",
        "Issue category & sub-category",
        "Required service selection",
        "WhatsApp customer communication",
        "Customer location sharing",
        "Location coordinates",
        "L2 ticket dashboard",
        "Automatic technician assignment",
        "Technician activity monitoring",
        "Ticket status monitoring",
        "Technician route tracking",
        "Customer WhatsApp conversation",
        "Roadside assistance workflow",
      ],
    },

    // TECHNOLOGY STACK
    stack: {
      title: "Technology for Connected Service Delivery",
      description:
        "A modern full-stack architecture integrates ticket management, service APIs, location data and WhatsApp communication into a connected roadside assistance workflow.",

      items: [
        {
          category: "Frontend",
          technology: "React",
          description:
            "Interfaces for L1 ticket creation and L2 service operations",
        },
        {
          category: "Backend",
          technology: "Node.js + Express",
          description:
            "REST APIs handling tickets, service workflows and technician operations",
        },
        {
          category: "Database",
          technology: "MongoDB",
          description:
            "Stores tickets, customer details, vehicle information, locations and service data",
        },
        {
          category: "Communication",
          technology: "WhatsApp Cloud API",
          description:
            "Customer communication and location-sharing workflow through WhatsApp",
        },
      ],
    },

    featured: true,
  },
];