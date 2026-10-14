from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

# Hard-coded sample data (no models yet)
EMPLOYEES = [
    {"id": 1, "first_name": "Alice", "last_name": "Johnson", "email": "alice@techsolutions.com", "department": "Engineering", "position": "Senior Developer", "hire_date": "2021-03-15"},
    {"id": 2, "first_name": "Bob", "last_name": "Smith", "email": "bob@techsolutions.com", "department": "HR", "position": "HR Manager", "hire_date": "2019-07-22"},
    {"id": 3, "first_name": "Carol", "last_name": "Williams", "email": "carol@techsolutions.com", "department": "Marketing", "position": "Marketing Lead", "hire_date": "2020-11-05"},
    {"id": 4, "first_name": "David", "last_name": "Brown", "email": "david@techsolutions.com", "department": "Engineering", "position": "DevOps Engineer", "hire_date": "2022-01-10"},
    {"id": 5, "first_name": "Eva", "last_name": "Davis", "email": "eva@techsolutions.com", "department": "Finance", "position": "Accountant", "hire_date": "2018-09-30"},
]

def home(request):
    context = {
        "company_name": "TechSolutions Inc.",
        "total_employees": len(EMPLOYEES),
        "page_title": "Home",
    }
    return render(request, "employees/index.html", context)

def employee_list(request):
    context = {
        "employees": EMPLOYEES,
        "page_title": "Employee List",
        "company_name": "TechSolutions Inc.",
    }
    return render(request, "employees/employee_list.html", context)

def employee_detail(request, pk):
    employee = next((e for e in EMPLOYEES if e["id"] == pk), None)
    if not employee:
        return HttpResponse("Employee not found", status=404)

    context = {
        "employee": employee,
        "page_title": f"{employee['first_name']} {employee['last_name']}",
        "company_name": "TechSolutions Inc.",
    }
    return render(request, "employees/employee_detail.html", context)