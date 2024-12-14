const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Report",
        description: "Compile the monthly sales report.",
        date: "2024-12-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Discuss the quarterly goals.",
        date: "2024-12-06",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Data Cleanup",
        description: "Organize and clean client data.",
        date: "2024-12-08",
        category: "Data Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review the pull requests for the new feature.",
        date: "2024-12-07",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fixing",
        description: "Fix high-priority bugs.",
        date: "2024-12-05",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Anjali",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Presentation",
        description: "Prepare slides for the client pitch.",
        date: "2024-12-09",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Market Research",
        description: "Analyze competitors' strategies.",
        date: "2024-12-06",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Send Follow-up Emails",
        description: "Send emails to prospective clients.",
        date: "2024-12-05",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Website",
        description: "Add new blog posts to the website.",
        date: "2024-12-07",
        category: "Web Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Client Meeting",
        description: "Discuss project updates with the client.",
        date: "2024-12-08",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Plan",
        description: "Draft a strategy for the upcoming campaign.",
        date: "2024-12-10",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Meera",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Invoice",
        description: "Create invoices for recent sales.",
        date: "2024-12-07",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Inventory Check",
        description: "Audit the warehouse inventory.",
        date: "2024-12-05",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Training Session",
        description: "Attend a workshop on customer service.",
        date: "2024-12-09",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];


const admin = [
  {
    id: 1,
    firstName:'Admin',
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
 
  return{employees,admin}
};
