function getRandom() {
  return Math.floor(Math.random() * 10);
}

const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Prepare Monthly Report",
        description: "Compile sales and expenses for the monthly report",
        date: "2026-01-10",
        category: "Reporting",
      },
      {
        taskNumber: 3,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Team Meeting",
        description: "Attend weekly team sync-up meeting",
        date: "2026-01-05",
        category: "Meeting",
      },
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Update Client Database",
        description: "Add new client information and update old records",
        date: "2026-01-12",
        category: "Database",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Design Landing Page",
        description: "Create a new landing page layout for the product",
        date: "2026-01-08",
        category: "Design",
      },
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Bug Fix: Login Form",
        description: "Resolve login validation issue reported by QA",
        date: "2026-01-09",
        category: "Development",
      },
      {
        taskNumber: 3,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Submit Timesheet",
        description: "Submit weekly timesheet to HR",
        date: "2026-01-04",
        category: "HR",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Client Presentation",
        description: "Prepare slides for upcoming client meeting",
        date: "2026-01-15",
        category: "Presentation",
      },
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Code Review",
        description: "Review PRs submitted by the development team",
        date: "2026-01-07",
        category: "Development",
      },
      {
        taskNumber: 3,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Update Wiki",
        description: "Add new documentation for API endpoints",
        date: "2026-01-03",
        category: "Documentation",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Customer Support Tickets",
        description: "Resolve open support tickets in the system",
        date: "2026-01-06",
        category: "Support",
      },
      {
        taskNumber: 3,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Monthly Backup",
        description: "Complete monthly server backup process",
        date: "2026-01-01",
        category: "Maintenance",
      },
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Test New Feature",
        description: "Perform QA testing on the new feature release",
        date: "2026-01-11",
        category: "QA",
      },
    ],
  },
  {
    id: 5,
    name: "William Brown",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Market Research",
        description: "Collect data about competitors for analysis",
        date: "2026-01-09",
        category: "Research",
      },
      {
        taskNumber: 3,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Team Feedback",
        description: "Provide feedback on team performance reviews",
        date: "2026-01-02",
        category: "HR",
      },
      {
        taskNumber: 2,
        active: getRandom(),
        newTask: getRandom(),
        completed: getRandom(),
        failed: getRandom(),
        title: "Prepare Budget",
        description: "Draft budget proposal for next quarter",
        date: "2026-01-13",
        category: "Finance",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
