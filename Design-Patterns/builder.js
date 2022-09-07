function EmployeeBuilder(name) {
    this.employee = new Employee(name);

    this.setExperience = function(experience) {
        this.employee.experience = experience;
        return this;
    }

    this.setDesignation = function(designation) {
        this.employee.designation = designation;
        return this;
    }

    this.setLocation = function(location) {
        this.employee.location = location;
        return this;
    }

    this.setManager = function(manager) {
        this.employee.manager = manager;
        return this;
    }

    this.build = function() {
        return this.employee
    }
}

function Employee(name) {
     this.name = name;
     this.getRole = function() {
       console.log(this.designation)
     }
}

const emp1 = new EmployeeBuilder("John").setLocation("Berlin").build();
console.log(emp1);

const emp2 = new EmployeeBuilder("Mary").setExperience("8yrs").setDesignation("Senior Software Engineer").setManager("John").build();
emp2.getRole();