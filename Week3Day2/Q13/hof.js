let details= [
{ name: "Alice", tasksCompleted: 8, rating: 4.7 },
{ name: "Bob", tasksCompleted: 4, rating: 4.0 },
{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },
{ name: "David", tasksCompleted: 10, rating: 4.9 },
{ name: "Eve", tasksCompleted: 7, rating: 2.8 }]


function employeePerform(details) {
  const highTasks = details
    .filter(employee => employee.tasksCompleted > 5)
    .sort((a, b) => b.tasksCompleted - a.tasksCompleted);
    
  const performanceArr = highTasks.map(employee => {
    if (employee.rating >= 4.5) {
      return { name: employee.name, performance: "Excellent" };
    } else if (employee.rating > 3) {
      return { name: employee.name, performance: "Good" };
    } else {
      return { name: employee.name, performance: "Needs Improvement" };
    }
  });
  
 return performanceArr.filter(emp => emp.performance !== "Needs Improvement");
}

console.log(employeePerform(details));