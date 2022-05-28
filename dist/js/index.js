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
    document.addEventListener("DOMContentLoaded", function () {
        populateSpecialsData();
        populateStatsData();
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
    
})()