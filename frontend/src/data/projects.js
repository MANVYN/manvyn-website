
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

import rsaHero from "../assets/images/work/rsa-hero.png"
// images
import rsaCreateTicket from "../assets/images/work/rsa-create-ticket.png";
import rsaL2Dashboard from "../assets/images/work/rsa-dashboard.png";
import rsaCustomerLocation from "../assets/images/work/rsa-customer-location.png";

export const projectCategories = [
  "All",
  "Websites",
  "E-commerce",
  "Web Applications",
  "Custom Development",
];



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

    capabilities: [
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
        description: "Track order progress from placement through delivery.",
        icon: "truck",
      },

      {
        title: "Admin Management",
        description: "Manage users, products, sellers and platform activity.",
        icon: "shield",
      },
    ],

    gallery: [
      {
        image: ssFront,
        title: "Modern Storefront",
        description:
          "Product discovery with search, categories and featured products.",
      },

      {
        image: ssAdmin,
        title: "Admin Dashboard",
        description: "Manage products, users and platform activity.",
      },

      {
        image: ssCart,
        title: "Cart & Checkout",
        description: "Simple cart management and checkout experience.",
      },

      {
        image: ssTracking,
        title: "Order Tracking",
        description: "Real-time order status and delivery progress.",
      },
    ],

    features: [
      "Product browsing & search",
      "Cart & quantity management",
      "Checkout flow",
      "Order management",
      "Order tracking",
      "Admin dashboard",
      "Product management",
      "User management",
    ],

    stack: [
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

    capabilities: [
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

    gallery: [
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

    features: [
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

    stack: [
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
        description: "Centralized application state for connected HR workflows",
      },
    ],
  },
 {
  id: 3,
  slug: "road-side-assistance",

  title: "Road side Assistance",
  category: "Custom Development",

  description:
    "A roadside assistance platform that connects L1 customer support, WhatsApp location sharing and L2 service operations into a centralized ticket management workflow.",

  heroImage: rsaHero,

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

  capabilities: [
    {
  image: rsaCreateTicket,
  title: "L1 Ticket Creation",
  description:
    "L1 agents create roadside assistance tickets while capturing customer, vehicle, incident and service details, with WhatsApp used to collect the customer's location.",
},

{
  image: rsaL2Dashboard,
  title: "L2 Service Operations",
  description:
    "L2 teams monitor incoming tickets, service status and technician activity from a centralized roadside assistance dashboard.",
},

    {
      title: "L2 Service Operations",
      description:
        "L2 teams monitor incoming tickets, service status and technician activity from a centralized dashboard.",
      icon: "monitor",
    },

    {
      title: "Automatic Technician Assignment",
      description:
        "Technicians are assigned automatically through the service workflow, allowing L2 to focus on monitoring and operations.",
      icon: "route",
    },
  ],

  gallery: [
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

  features: [
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

  stack: [
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
}
];
