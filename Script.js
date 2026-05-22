const portfolio = {
    contact: {
        email: "shaina.gonzales@outlook.com",
        phone: "(260) 413-9966",
        linkedin: "https://www.linkedin.com/in/shainag3",
        website: "https://www.shainagonzalesdesigns.com"
    },
    filters: ["All", "Full-Stack", "UX/UI", "Data & AI"],
    projects: [
        {
            title: "Secure Enterprise Applications",
            category: "Full-Stack",
            tag: "General Motors",
            summary: "Developed secure internal applications in a firewall-restricted enterprise environment, supporting sensitive data workflows across frontend, backend, APIs, and database integration.",
            details: ["Angular", "REST APIs", "SQL", "Azure"]
        },
        {
            title: "Workflow UX & Dealership Tools",
            category: "UX/UI",
            tag: "Product UX",
            summary: "Designed and built end-to-end user interfaces for internal platforms and dealership-facing applications, reducing manual work and cutting task completion time by approximately 50%.",
            details: ["Wireframes", "Responsive UI", "Usability", "Accessibility"]
        },
        {
            title: "Analytics Dashboards & AI Features",
            category: "Data & AI",
            tag: "Insights",
            summary: "Created Power BI dashboards, optimized complex SQL queries, and integrated AI-driven features including chat assistance, workflow automation, intelligent insights, and recommendations.",
            details: ["Power BI", "SQL", "AI Integration", "Automation"]
        },
        {
            title: "Business Website & Brand Experience",
            category: "UX/UI",
            tag: "All American Petting Zoo",
            summary: "Designed and developed a full website with wireframes, branding, custom client-facing tools, content updates, photography, and marketing assets to support business growth.",
            details: ["Web Design", "Branding", "Market Research", "Content"]
        }
    ],
    experience: [
        {
            company: "General Motors",
            role: "Software Engineer",
            dates: "January 2023 - May 2026",
            highlights: [
                "Owned projects end-to-end, translating business and user needs into wireframes, intuitive interfaces, scalable application solutions, and database-backed workflows.",
                "Built responsive frontend interfaces, backend services, third-party API integrations, complex SQL queries, and Power BI reporting dashboards.",
                "Integrated AI-driven functionality for chat-based assistance, workflow automation, intelligent insights, and recommendation experiences."
            ]
        },
        {
            company: "All American Petting Zoo",
            role: "Web Developer / UI-UX Designer",
            dates: "March 2021 - January 2023",
            highlights: [
                "Designed and developed a full website tailored to business needs, including wireframes, branding, and custom client-facing tools.",
                "Conducted market research and presented user journey insights to improve the customer experience.",
                "Managed IT systems, digital presence, content updates, marketing materials, photography, and visual assets."
            ]
        },
        {
            company: "Purdue University",
            role: "Bachelor's Degree in Graphic Design & Computer Science",
            dates: "2016 - 2022",
            highlights: [
                "Built a foundation that combines visual design, UX thinking, software development, and technical problem solving.",
                "Bilingual in English and Spanish with strong cross-functional collaboration skills."
            ]
        }
    ],
    process: [
        {
            title: "Research",
            text: "Partner with stakeholders, study workflows, identify inefficiencies, and define business and user goals before designing the solution."
        },
        {
            title: "Design",
            text: "Translate requirements into wireframes, user flows, responsive UI patterns, and visual systems that make complex tasks easier."
        },
        {
            title: "Build",
            text: "Develop frontend interfaces, backend services, API integrations, database logic, dashboards, and automated workflows."
        },
        {
            title: "Improve",
            text: "Test usability, improve performance and accessibility, refine reporting, and iterate with engineering, product, and business teams."
        }
    ],
    skills: [
        "Angular",
        "React",
        "JavaScript",
        "Java",
        "Node.js",
        "REST APIs",
        "SQL",
        "Microsoft Power BI",
        "Database Design",
        "Data Visualization",
        "AI Feature Integration",
        "Workflow Automation",
        "Chat-Based Interfaces",
        "UX/UI Design",
        "Responsive Web Design",
        "Wireframing",
        "Usability Testing",
        "Figma",
        "Adobe Creative Suite",
        "Azure",
        "GitHub",
        "CI/CD Pipelines",
        "Jira",
        "WordPress",
        "Wix",
        "Google Analytics"
    ],
    priorities: [
        "Own the full product lifecycle from UX wireframing to full-stack development and database integration.",
        "Build secure, scalable applications that support sensitive enterprise workflows.",
        "Use data, automation, and AI-driven features to reduce manual work and improve decision-making."
    ]
};

let activeFilter = "All";

function renderFilters() {
    const filterBar = document.querySelector(".filter-bar");

    filterBar.innerHTML = portfolio.filters.map((filter) => `
        <button class="filter-button${filter === activeFilter ? " is-active" : ""}" type="button" data-filter="${filter}">
            ${filter}
        </button>
    `).join("");

    filterBar.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter;
            renderFilters();
            renderProjects();
        });
    });
}

function renderProjects() {
    const projectGrid = document.querySelector(".project-grid");
    const visibleProjects = activeFilter === "All"
        ? portfolio.projects
        : portfolio.projects.filter((project) => project.category === activeFilter);

    projectGrid.innerHTML = visibleProjects.map((project) => `
        <article class="project-card">
            <div class="project-visual">
                <span class="project-tag">${project.tag}</span>
            </div>
            <div class="project-body">
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
                <div class="project-meta">
                    ${project.details.map((detail) => `<span>${detail}</span>`).join("")}
                </div>
            </div>
        </article>
    `).join("");
}

function renderProcess() {
    const processGrid = document.querySelector(".process-grid");

    processGrid.innerHTML = portfolio.process.map((step, index) => `
        <article class="process-step">
            <span>${index + 1}</span>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
        </article>
    `).join("");
}

function renderExperience() {
    const experienceGrid = document.querySelector(".experience-grid");

    experienceGrid.innerHTML = portfolio.experience.map((item) => `
        <article class="experience-card">
            <div class="experience-heading">
                <p>${item.dates}</p>
                <h3>${item.company}</h3>
                <strong>${item.role}</strong>
            </div>
            <ul>
                ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
            </ul>
        </article>
    `).join("");
}

function renderSkills() {
    const skillCloud = document.querySelector(".skill-cloud");
    const priorityList = document.querySelector(".priority-list");

    skillCloud.innerHTML = portfolio.skills.map((skill) => `<span class="skill-pill">${skill}</span>`).join("");
    priorityList.innerHTML = portfolio.priorities.map((priority) => `<li>${priority}</li>`).join("");
}

function setupContactActions() {
    const copyButton = document.querySelector(".copy-email");
    const status = document.querySelector(".copy-status");

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(portfolio.contact.email);
            status.textContent = "Email copied.";
        } catch {
            status.textContent = portfolio.contact.email;
        }
    });
}

function show() {
    // Called by the Safari extension host after page load. The portfolio page does not need extension state.
}

function initPortfolio() {
    renderFilters();
    renderProjects();
    renderExperience();
    renderProcess();
    renderSkills();
    setupContactActions();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
