INSERT INTO department (name) VALUES
('Computer Science'),
('Electronics'),
('Mechanical');

-- Student data: make sure you refer to correct auto-increment IDs
-- e.g. CS = 1, ECE = 2, Mech = 3 assuming insert order preserved

INSERT INTO student (first_name, last_name, email, department_id) VALUES
('Siddhesh', 'Thapa', 'sid@abc.com', 1),
('Riya', 'Singh', 'riya@abc.com', 2),
('Rahul', 'Kumar', 'rahul@abc.com', 1);
