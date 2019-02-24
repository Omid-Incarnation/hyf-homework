select * from task;

#1. Find out how many tasks are in the task table.
SELECT 
    COUNT(title)
FROM
    task;

#2. Find out how many tasks in the task table do not have a valid due date.
SELECT 
    COUNT(title)
FROM
    task
WHERE
    due_date IS NULL;
    
#3. Find all the tasks that are marked as done.
	#In this example, we can use two methods, 'status.id = 3' or 'status.name = "Done";'
SELECT 
    *
FROM
    task
        JOIN
    status ON task.status_id = status.id
WHERE
    status.id = 3;
    
#4. Find all the tasks that are not marked as done.alter
	# Method 1
SELECT 
    *
FROM
    task
        JOIN
    status ON task.status_id = status.id
WHERE
    status.id = 1 OR status.id = 2;
    
    # Method 2
SELECT 
    *
FROM
    task
        JOIN
    status ON task.status_id = status.id
WHERE
    status.name != 'Done';
    
#5. Get all the tasks, sorted with the most recently created first.alter
SELECT 
    *
FROM
    task
ORDER BY created DESC;

#6. Get the single most recently created task.
SELECT 
    *
FROM
    task
ORDER BY created DESC
LIMIT 1;

#7. Get the title and due date of all tasks where the title or description contains database.
SELECT 
    task.title, task.due_date
FROM
    task
WHERE
    description LIKE '%database%'
        OR title LIKE '%database%';
        
#8. Get the title and status (as text) of all tasks.
SELECT 
    task.title, status.name
FROM
    task
        JOIN
    status ON task.status_id = status.id;
    
#9. Get the name of each status, along with a count of how many tasks have that status.
SELECT 
    status.name, COUNT(task.status_id)
FROM
    task
        JOIN
    status ON task.status_id = status.id
GROUP BY task.status_id;

#10. Get the names of all statuses, sorted by the status with most tasks first
SELECT 
    status.name, COUNT(task.status_id)
FROM
    task
        JOIN
    status ON task.status_id = status.id
GROUP BY task.status_id
ORDER BY COUNT(task.status_id) DESC;