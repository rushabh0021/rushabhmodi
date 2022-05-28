(function () {
    var specialsData = [
        {
            title: "Frontend integration",
            description: "I am specialised in frontend integration and it is something which I love to do. Frontend is very important aspect as it the layer that interacts with the end user."
        },
        {
            title: "Backend API design",
            description: "I also specialise in design backend APIs in node.js. The ability to do both frontend and backend is my strength and has helped me lot in my work."
        },
        {
            title: "Frontend frameworks",
            description: "There are a lot of frameworks in the market. There is pros and cons of all the framworks but need to leverage what suits the best to the project. The knowledge of multiple framework and how it works helps a lot in delivering appliation quickly."
        },
        {
            title: "SEO",
            description: "SEO is very importat aspect after the website is live to attract the cliens and generate leads. The codeing is done in such a way that is is optimised as per SEO rules and perform well in organic search."
        },
    ];

    var statsData = [
        {
            icon: "fa-users",
            title: "Latest Eduation",
            stat: "M.sc IT"

        },
        {
            icon: "fa-hourglass-start",
            title: "Years of Experiance",
            stat: "4"

        },
        {
            icon: "fa-code-branch",
            title: "Projects Done",
            stat: "14"

        },
        {
            icon: "fa-hourglass-start",
            title: "Years of Education",
            stat: "5"

        },
        
    ];
    
    var processData = [
        {
            title: "Requirement Gathering",
            description: "Requirement gathering is initial step in any software development. In this process the information is collected regarging the requirement, what exactly client is looking for.This phase is very important as on basis of this process the development process starts."
        },
        {
            title: "Brain-Storming & Planning",
            description: "After the requirment is clear then we brain storm on the concepts that how can it be achieved and so on. After brain storiming the planning is done regarding the execution, the peoject is divided in small chunks. The main functionalies are focused first and so on."
        },
        {
            title: "Communication",
            description: "While the development process is going on the communication regaring the progress is very important with the client to ensure that the devleopment process is as per the requirement. Another advantage is that client can see the progress and give their inputs."
        },
        {
            title: "Deploying and Maintaining",
            description: "After the development is done it is very important to select the right deployement tool for high availability.After the web experience is developed and deployed then it is time to maintaining it. In this phase quick delivery of changes is important."
        },
    ]
    document.addEventListener("DOMContentLoaded", function () {
        populateSpecialsData();
        populateStatsData();
        populateProcessData();
    });

    function populateSpecialsData() {
        var specialsContainer = document.getElementById("specials");
        specialsData.forEach(function(data) {
            specialsContainer.innerHTML += specialsTemplate(data);
        });
    }
    function populateStatsData() {
        var statsContainer = document.getElementById("stats");
        statsData.forEach(function(data) {
            statsContainer.innerHTML += statsTemplate(data);
        });
    }
    function populateProcessData() {
        var ProcessContainer = document.getElementById("process");
        processData.forEach(function(data) {
            ProcessContainer.innerHTML += processTemplate(data);
        });
    }

    /* Html templates */
    function specialsTemplate(data) {
        return `<div>
                    <i class="fas fa-file-alt fa-2x"></i>
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                </div>`;
    }
    
    function statsTemplate(data) {
        return `<div>
                    <ul>
                        <li><i class="fas ${data.icon} fa-3x"></i></li>
                        <li class="stats-title">${data.title}</li>
                        <li class="stats-number">${data.stat}</li>
                    </ul>
                </div>`;
    }

    function processTemplate(data) {
        return `<div>
                    <i class="fas fa-file-alt fa-4x process-icon my-2">
                        <div class="process-step">1</div>
                    </i>
                    <div class="clr"></div>
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                </div>`;
    }
    
})()