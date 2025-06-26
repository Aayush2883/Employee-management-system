

const employees = [
  {
    id: 1,
    name: "Ravi Kumar",
    email: "a@b.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Client Records",
        taskDescription: "Update the contact details for all new clients added this month.",
        taskDate: "2024-01-10",
        category: "Data Entry"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the monthly sales report presentation.",
        taskDate: "2024-01-05",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Backend Issues",
        taskDescription: "Resolve server errors causing delays in data processing.",
        taskDate: "2024-01-03",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review Budget Proposal",
        taskDescription: "Analyze and review the budget proposal for Q1 2024.",
        taskDate: "2024-01-12",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct Employee Training",
        taskDescription: "Lead a training session on workplace safety measures.",
        taskDate: "2024-01-07",
        category: "Training"
      }
    ]
  },
  {
    id: 3,
    name: "Amit Singh",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test New Feature",
        taskDescription: "Perform testing for the new user authentication feature.",
        taskDate: "2024-01-15",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Create user guides for the latest product update.",
        taskDate: "2024-01-08",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    name: "Anjali Gupta",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend a meeting with the client to discuss project updates.",
        taskDate: "2024-01-20",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Add new blog posts to the company's website.",
        taskDate: "2024-01-09",
        category: "Web Development"
      }
    ]
  },
  {
    id: 5,
    name: "Manish Verma",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Organize Files",
        taskDescription: "Sort and archive all financial documents from 2023.",
        taskDate: "2024-01-14",
        category: "Administration"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Brochure",
        taskDescription: "Create a brochure for the upcoming product launch.",
        taskDate: "2024-01-05",
        category: "Design"
      }
    ]
  }
].map((employee) => {
  const taskSummary = {
    activeTasks: employee.tasks.filter(task => task.active).length,
    newTasks: employee.tasks.filter(task => task.newTask).length,
    completedTasks: employee.tasks.filter(task => task.completed).length,
    failedTasks: employee.tasks.filter(task => task.failed).length,
  };
  return { ...employee, ...taskSummary };
});

const admin = [
  {
    id: 1,
    name: "Arjun Mehta",
    email: "admin@a.com",
    password: "123"
  }
];


