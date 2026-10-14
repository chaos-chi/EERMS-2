# Employee Records Management System (EERMS)

## 1. Project Overview

The Employee Records Management System (EERMS) is a Django-based web application designed to support the management and presentation of employee records.

This project was enhanced as part of **Module 2: Responsive Employee Records Interface**, with a focus on frontend improvements, browser debugging, server execution, and collaborative version control using Git and GitHub.

## 2. Technologies Used

- **Python** — application programming language
- **Django** — web application framework
- **HTML** — page structure
- **CSS** — interface styling
- **JavaScript** — client-side interactivity
- **Git and GitHub** — version control and collaboration
- **Chrome/Edge DevTools** — frontend inspection and debugging
- **Gunicorn** — WSGI application server

## 3. Module 2 Enhancements

The following changes were made as part of the frontend enhancement and debugging tasks:

- Added an employee interface HTML template.
- Updated the Django view to support the interface.
- Added JavaScript functionality for the Refresh Status button and status feedback.
- Added a `.gitignore` file to exclude Python cache files and virtual environment directories.
- Used browser developer tools to inspect and debug the interface.

## 4. Installation and Setup

### Prerequisites

- Python installed
- Git installed
- A terminal such as Git Bash
- A web browser

### Clone the Repository

```bash
git clone https://github.com/chaos-chi/EERMS-2.git
cd EERMS-2
```

### Create and Activate a Virtual Environment

**Git Bash on Windows:**

```bash
python -m venv venv
source venv/Scripts/activate
```

If you are using Linux or WSL instead:

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Apply Database Migrations

```bash
python manage.py migrate
```

### Run the Development Server

```bash
python manage.py runserver
```

Open the local address displayed in the terminal, usually `http://127.0.0.1:8000/`.

## 5. Running with Gunicorn

Install Gunicorn if it is not already included in the project's dependencies:

```bash
pip install gunicorn
```

Run the application using:

```bash
gunicorn employee_records_system.wsgi:application
```

Gunicorn is a WSGI application server intended for serving Django applications. Django's development server is intended primarily for development and testing.

## 6. Browser Developer Tools

Chrome or Microsoft Edge DevTools was used to inspect the page structure, examine browser console output, and investigate frontend behaviour.

The inspection process included:

- **Elements:** Inspecting the page's HTML structure.
- **Console:** Checking JavaScript messages and errors.
- **Network:** Inspecting requests and responses.
- **Performance:** Examining page activity and performance-related information.

Changes made temporarily in DevTools were compared with changes implemented in the actual project files.

## 7. Git Collaboration Workflow

The `dev-tools` branch was used to organize the Module 2 changes separately from the `main` branch.

The workflow included:

1. Creating and switching to the `dev-tools` branch.
2. Reviewing and staging the updated project files.
3. Committing the changes with a descriptive commit message.
4. Pushing the branch to GitHub.
5. Creating a pull request from `dev-tools` into `main` for review.

The pull request is intended for review and should not be merged until the assessment instructions permit it.

## 8. Open-Source Component Investigation

**Component:** django-crispy-forms

**Purpose:** django-crispy-forms is an open-source Django package that helps developers control the rendering and presentation of Django forms.

**Potential Use in EERMS:** It could be evaluated for future employee creation, editing, and data-entry forms to improve form presentation and maintainability.

**Decision:** Consider for future evaluation. The component has been identified as a potential improvement, but it should not be described as installed or integrated unless that work has actually been completed.

**Official repository:** https://github.com/django-crispy-forms/django-crispy-forms

## 9. Testing and Evidence

Evidence collected for the Module 2 assessment should include:

- Django development server running successfully.
- Gunicorn running the Django application.
- Browser DevTools inspection and frontend testing.
- Git branch, commit, and push evidence.
- GitHub pull request from `dev-tools` to `main`.
- Evidence of the open-source component investigation.

Only tests that have actually been completed should be marked as successful.

## 10. Repository

GitHub repository: https://github.com/chaos-chi/EERMS-2

