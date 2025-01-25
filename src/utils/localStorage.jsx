 
//  const employees = [
//   {
//     id: 1,
//     email: "employee1@example.com",
//     password: "123",
//     firstname: "Raj", // Added Indian name
//     tasks: [
//       {
//         title: "Prepare Monthly Report",
//         date: "2024-12-27",
//         description: "Compile and analyze data for the monthly report.",
//         category: "Reports",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         // title: "Team Meeting",
//         // date: "2024-12-28",
//         // description: "Attend the scheduled team meeting.",
//         // category: "Meetings",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//       },
//     ],
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 0,
//       failed: 0,
//     },
//   },
//   {
//     id: 2,
//     email: "employee2@example.com",
//     password: "123",
//     firstname: "Priya", 
//     tasks: [
//       {
//         title: "Client Follow-up",
//         date: "2024-12-27",
//         description: "Follow up with clients regarding their queries.",
//         category: "Client Management",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         // title: "Update Documentation",
//         // date: "2024-12-30",
//         // description: "Update the technical documentation for the project.",
//         // category: "Documentation",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//       },
//     ],
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },
//   },
//   {
//     id: 3,
//     email: "employee3@example.com",
//     password: "123",
//     firstname: "John", // Non-Indian name
//     tasks: [
//       {
//         title: "Code Review",
//         date: "2024-12-28",
//         description: "Review the codebase for errors and improvements.",
//         category: "Development",
//         active: true,
//         newTask: false,
//         completed: true,
//         failed: false,
//       },
//       {
//         // title: "Testing New Features",
//         // date: "2024-12-29",
//         // description: "Test the newly implemented features.",
//         // category: "Testing",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//     ],
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },
//   },
//   {
//     id: 4,
//     email: "employee4@example.com",
//     password: "123",
//     firstname: "Amit", // Added Indian name
//     tasks: [
//       {
//         title: "Prepare Presentation",
//         date: "2024-12-30",
//         description: "Create a presentation for the upcoming meeting.",
//         category: "Presentation",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         // title: "Update Inventory",
//         // date: "2024-12-31",
//         // description: "Update the current inventory details.",
//         // category: "Inventory",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: true,
//       },
//     ],
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 0,
//       failed: 1,
//     },
//   },
//   {
//     id: 5,
//     email: "employee5@example.com",
//     password: "123",
//     firstname: "Sophia", // Non-Indian name
//     tasks: [
//       {
//         title: "Research New Tools",
//         date: "2024-12-29",
//         description: "Research new tools to improve workflow efficiency.",
//         category: "Research",
//         active: false,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         // title: "Team Building Activities",
//         // date: "2024-12-28",
//         // description: "Organize team building activities for the team.",
//         // category: "HR",
//         active: true,
//         newTask: false,
//         completed: true,
//         failed: false,
//       },
//     ],
//     taskCount: {
//       active: 1,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },
//   },
// ];

// const admin = [
//   {
//     id: 1,
//     email: "admin@example.com",
//     password: "123",
//     firstname: "Vikram", // Added Indian name
//   },
// ];

// // Exporting functions
// export const setLocalStorage = () => {
//   localStorage.setItem("employees", JSON.stringify(employees));
//   localStorage.setItem("admin", JSON.stringify(admin));
// };

// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem("employees"));
//   const admin = JSON.parse(localStorage.getItem("admin"));
//   console.log(employees, admin);

//   return { employees, admin };
// };

 
  
// const employees = [
//   {
//     "id": 1,
//     "email": "employee1@example.com",
//     "password": "123",
//     "firstName": "Arjun",
//     "tasks": [
//       {
//         "taskTitle": "Complete Report",
//         "taskDescription": "Prepare and submit the monthly sales report.",
//         "taskDate": "2025-01-10",
//         "category": "Reports",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "taskTitle": "Team Meeting",
//         "taskDescription": "Attend the weekly team meeting.",
//         "taskDate": "2025-01-11",
//         "category": "Meetings",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
  
//     ],
//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     }
//   },
//   {
//     "id": 2,
//     "email": "employee2@example.com",
//     "password": "123",
//     "firstName": "Priya",
//     "tasks": [
//       {
//         "taskTitle": "Data Analysis",
//         "taskDescription": "Analyze the customer feedback data.",
//         "taskDate": "2025-01-09",
//         "category": "Analysis",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "taskTitle": "Update CRM",
//         "taskDescription": "Update client details in the CRM system.",
//         "taskDate": "2025-01-10",
//         "category": "Admin",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       }
//     ],
//     "taskCounts": {
//       "active": 1,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     }
//   },
//   {
//     "id": 3,
//     "email": "employee3@example.com",
//     "password": "123",
//     "firstName": "Ananya",
//     "tasks": [
//       {
//         "taskTitle": "Website Update",
//         "taskDescription": "Fix the homepage design issues.",
//         "taskDate": "2025-01-08",
//         "category": "Development",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "taskTitle": "Write Blog",
//         "taskDescription": "Draft a blog post on industry trends.",
//         "taskDate": "2025-01-09",
//         "category": "Content",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
      
//     ],
//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     }
//   },
//   {
//     "id": 4,
//     "email": "employee4@example.com",
//     "password": "123",
//     "firstName": "Rahul",
//     "tasks": [
//       {
//         "taskTitle": "Inventory Check",
//         "taskDescription": "Perform a stock check in the warehouse.",
//         "taskDate": "2025-01-07",
//         "category": "Logistics",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "taskTitle": "Supplier Follow-Up",
//         "taskDescription": "Contact suppliers for delayed shipments.",
//         "taskDate": "2025-01-08",
//         "category": "Supply Chain",
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false
//       },
      
//     ],
//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     }
//   },
//   {
//     "id": 5,
//     "email": "employee5@example.com",
//     "password": "123",
//     "firstName": "Meera",
//     "tasks": [
//       {
//         "taskTitle": "Customer Support",
//         "taskDescription": "Resolve open customer tickets.",
//         "taskDate": "2025-01-07",
//         "category": "Support",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "taskTitle": "Product Testing",
//         "taskDescription": "Test the latest software build.",
//         "taskDate": "2025-01-08",
//         "category": "QA",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
      
//     ],
//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     }
//   }
// ];

// const admin = {
//   "id": 1,
//   "email": "admin@example.com",
//   "password": "123",
//   "firstName": "Kiran"
// };
const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstName": "Arjun",
    "tasks": [
      {
        "taskTitle": "Complete Report",
        "taskDescription": "Prepare and submit the monthly sales report.",
        "taskDate": "2025-01-10",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team meeting.",
        "taskDate": "2025-01-11",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client Call",
        "taskDescription": "Discuss project requirements with the client.",
        "taskDate": "2025-01-12",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Piyush",
    "tasks": [
      {
        "taskTitle": "Data Analysis",
        "taskDescription": "Analyze the customer feedback data.",
        "taskDate": "2025-01-09",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update CRM",
        "taskDescription": "Update client details in the CRM system.",
        "taskDate": "2025-01-10",
        "category": "Admin",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Training",
        "taskDescription": "Create materials for the employee training session.",
        "taskDate": "2025-01-09",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Ananya",
    "tasks": [
      {
        "taskTitle": "Website Update",
        "taskDescription": "Fix the homepage design issues.",
        "taskDate": "2025-01-08",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Write Blog",
        "taskDescription": "Draft a blog post on industry trends.",
        "taskDate": "2025-01-09",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Social Media Strategy",
        "taskDescription": "Plan the next month's social media campaigns.",
        "taskDate": "2025-01-10",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Rahul",
    "tasks": [
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Perform a stock check in the warehouse.",
        "taskDate": "2025-01-07",
        "category": "Logistics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Supplier Follow-Up",
        "taskDescription": "Contact suppliers for delayed shipments.",
        "taskDate": "2025-01-08",
        "category": "Supply Chain",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Budget Review",
        "taskDescription": "Review the departmental budget.",
        "taskDate": "2025-01-09",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Meera",
    "tasks": [
      {
        "taskTitle": "Customer Support",
        "taskDescription": "Resolve open customer tickets.",
        "taskDate": "2025-01-07",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Product Testing",
        "taskDescription": "Test the latest software build.",
        "taskDate": "2025-01-08",
        "category": "QA",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Training",
        "taskDescription": "Create materials for the employee training session.",
        "taskDate": "2025-01-09",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123",
  "firstName": "Kiran"
};

// Exporting functions
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(employees, admin);
  
    return { employees, admin };
  };