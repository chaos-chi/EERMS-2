
document.addEventListener("DOMContentLoaded", () => {
    const employeeList = document.getElementById("employee-list");
    const toggleButton = document.getElementById("toggle-employees-btn");
    const employeeCount = document.getElementById("employee-count");
    const refreshButton = document.getElementById("refresh-btn");
    const statusMessage = document.getElementById("status-message");
    const form = document.getElementById("employee-form");
    const formMessage = document.getElementById("form-message");

    if (
        !employeeList || !toggleButton || !employeeCount ||
        !refreshButton || !statusMessage || !form || !formMessage
    ) {
        console.error(
            "Dashboard initialization failed: required elements are missing."
        );
        return;
    }

    const nameInput = document.getElementById("employee-name");
    const emailInput = document.getElementById("employee-email");
    const departmentInput = document.getElementById("employee-department");
    const positionInput = document.getElementById("employee-position");

    function updateCount() {
        const count = employeeList.querySelectorAll(".employee-card").length;
        employeeCount.textContent = count;

        let emptyMessage = document.getElementById(
            "empty-employees-message"
        );

        if (count === 0 && !emptyMessage) {
            emptyMessage = document.createElement("p");
            emptyMessage.id = "empty-employees-message";
            emptyMessage.textContent = "No employee records available.";
            employeeList.appendChild(emptyMessage);
        } else if (count > 0 && emptyMessage) {
            emptyMessage.remove();
        }
    }

    // Task 1: Hide and show employee records.
    toggleButton.addEventListener("click", () => {
        const isHidden = employeeList.hidden;

        employeeList.hidden = !isHidden;
        toggleButton.textContent = isHidden
            ? "Hide Employees"
            : "Show Employees";

        toggleButton.setAttribute("aria-expanded", String(isHidden));

        statusMessage.textContent = isHidden
            ? "Employee list is now visible."
            : "Employee list is now hidden.";
    });

    // Task 1: Refresh dashboard status without reloading.
    refreshButton.addEventListener("click", () => {
        updateCount();

        statusMessage.textContent =
            `Dashboard status refreshed. ${employeeCount.textContent} employee record(s) currently shown.`;
    });

    function clearErrors() {
        formMessage.textContent = "";
        formMessage.className = "mb-3";
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `mb-3 text-${type}`;
    }

    form.querySelectorAll("input, select").forEach((field) => {
        field.addEventListener("input", clearErrors);
        field.addEventListener("change", clearErrors);
    });

    function createEmployeeCard(name, email, department, position) {
        const card = document.createElement("article");
        card.className = "employee-card card p-3 mb-3";

        const heading = document.createElement("h3");
        heading.className = "h5 employee-name";
        heading.textContent = name;
        card.appendChild(heading);

        const details = [
            ["Email:", email],
            ["Department:", department],
            ["Job Title:", position]
        ];

        details.forEach(([label, value]) => {
            const paragraph = document.createElement("p");
            paragraph.className = "mb-1";

            const strong = document.createElement("strong");
            strong.textContent = `${label} `;
            paragraph.appendChild(strong);
            paragraph.appendChild(document.createTextNode(value));
            card.appendChild(paragraph);
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className =
            "btn btn-sm btn-outline-danger remove-employee";
        removeButton.textContent = "Remove from view";
        card.appendChild(removeButton);

        return card;
    }

    // Tasks 2 and 3: Validate and add employees to the current page.
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearErrors();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const department = departmentInput.value.trim();
        const position = positionInput.value.trim();

        if (!name) {
            showMessage("Please enter the employee name.", "danger");
            nameInput.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email address.", "danger");
            emailInput.focus();
            return;
        }

        if (!department) {
            showMessage("Please select a department.", "danger");
            departmentInput.focus();
            return;
        }

        if (!position) {
            showMessage(
                "Please enter the employee's job title.",
                "danger"
            );
            positionInput.focus();
            return;
        }

        const card = createEmployeeCard(
            name, email, department, position
        );

        const emptyMessage = document.getElementById(
            "empty-employees-message"
        );

        if (emptyMessage) {
            emptyMessage.remove();
        }

        employeeList.appendChild(card);
        updateCount();
        form.reset();

        showMessage(`${name} was added successfully.`, "success");
        statusMessage.textContent = "Employee added successfully.";
    });

    // Task 3: Remove existing and dynamically added cards.
    employeeList.addEventListener("click", (event) => {
        const target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        const removeButton = target.closest(".remove-employee");

        if (!removeButton || !employeeList.contains(removeButton)) {
            return;
        }

        const card = removeButton.closest(".employee-card");

        if (!card) {
            return;
        }

        const employeeName =
            card.querySelector(".employee-name")?.textContent || "Employee";

        card.remove();
        updateCount();

        statusMessage.textContent =
            `${employeeName} was removed from the current view.`;
    });

    // Initialize the dashboard.
    updateCount();
});
