const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const filterBox = document.querySelector(".search-tab");
const filterBoxEntries = document.querySelector(".search-tab .entries");
const clearBtn = document.querySelector(".search-tab .clear");
const homeContent = document.querySelector(".content");
let clickedItems = [];
let result = [];
const givenLanguages = ["HTML", "CSS", "JavaScript", "Python"];
const givenRoles = ["Fullstack", "Frontend", "Backend"];
const givenLevels = ["Junior", "Midweight", "Senior"];
const givenTools = ["React", "Sass", "Django", "Vue", "RoR"];



updateHtml(data);


// render html based on data fed into the function
function updateHtml(data){
  homeContent.innerHTML = ``;
  for (const res of data) {
    const mainBox = document.createElement("div");
    mainBox.className = "main-box";
    mainBox.innerHTML = `
    <div class="left">
    <div class="image">
    <img src="${res.logo}" alt="">
    </div>
    
    <div class="text">
    <div class="top-tags">
    <span class="undecorated">${res.company}</span>
    </div>
      <h3 class="job-title">${res.position}</h3>
      <div class="other-deets">
        <p class="duration"> &#x2022  ${res.postedAt}</p>
        <p class="job-time"> &#x2022 ${res.contract}</p>
        <p class="job-location">&#x2022 ${res.location}</p>
      </div>
    </div>
  </div>
  
  <div class="right">
    <span class="role">${res.role}</span>
    <span class="Level">${res.level}</span>
  </div>
    `;

    const role = mainBox.querySelector(".right .role");
    const level = mainBox.querySelector(".right .Level");
    role.addEventListener("click", function () {
      const value = this.textContent;
      addClickedItems(value);
    });
    level.addEventListener("click", function () {
      const value = this.textContent;
      addClickedItems(value);
    });

    if (res.new == true) {
      const span1 = document.createElement("span");
      span1.className = "new";
      span1.textContent = "NEW!";
      mainBox.querySelector(".top-tags").appendChild(span1);
    }

    if (res.featured == true) {
      const span2 = document.createElement("span");
      span2.className = "featured";
      span2.textContent = "Featured";
      mainBox.querySelector(".top-tags").appendChild(span2);
    }

    if(res.featured == true && res.new == true){
      mainBox.classList.add('green-border')
    }

    if (res.tools !== "") {
      for (const tool of res.tools) {
        const span3 = document.createElement("span");
        span3.className = "Languages";
        span3.textContent = tool;
        span3.addEventListener("click", function () {
          const value = this.textContent;
          addClickedItems(value);
        });
        mainBox.querySelector(".right").appendChild(span3);
      }
    }
    
    if (res.languages !== "") {
      for (const language of res.languages) {
        const span4 = document.createElement("span");
        span4.className = "Languages";
        span4.textContent = language;
        span4.addEventListener("click", function () {
          const value = this.textContent;
          addClickedItems(value);
        });
        mainBox.querySelector(".right").appendChild(span4);
      }
    }

    homeContent.append(mainBox);
  }
}



// function that helps filter the dom according to which tab is selected or even when cross button is clicked
function addClickedItems(value) {
  if (clickedItems.includes(value)) {
    return;
  } else {
    clickedItems.push(value);
  }
  filterBox.classList.add("active");
  filterBoxEntries.innerHTML = ``;
  for (const item of clickedItems) {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
        <span>${item}</span>
        <i class="fas fa-times"></i>       
        `;
    const crossBtn = div.querySelector(".fa-times");
    crossBtn.addEventListener("click", function () {
      const parentEl = crossBtn.parentElement;
      const spanTextContent =crossBtn.parentElement.querySelector("span").textContent;
      const location = clickedItems.indexOf(spanTextContent);
      clickedItems.splice(location, 1);
      filterBoxEntries.removeChild(crossBtn.parentElement);
      if (clickedItems.length == 0) {
        clickedItems = [];
        result = [];
        filterBox.classList.remove("active");
        updateHtml(data);
      } else {
        renderSearchContent();
      }
    });
    filterBoxEntries.appendChild(div);
  }
  renderSearchContent();
}



//renders clicked tabs
function renderSearchContent() {

  if (clickedItems.length == 1) {
    for (const element of data) {
      if (result.includes(element)) {
        console.log("ignore");
      } else {
        let lang = element.languages;
        let toolz = element.tools;
        for (const entry of clickedItems) {
          if (Object.values(element).includes(entry)) {
            result.push(element);
          }
          for (const language of lang) {
            if (language == entry) {
              if (!result.includes(element)) {
                result.push(element);
              }
            }
          }
          for (const tool of toolz) {
            if (tool == entry) {
              if (!result.includes(element)) {
                result.push(element);
              }
            }
          }
        }
      }
    }
    updateHtml(result);
  }


  if (clickedItems.length > 1) {
    for (let i = result.length - 1; i >= 0; i--) {
      let lang = result[i].languages;
      let toolz = result[i].tools;
      let position = result.indexOf(result[i]);
      for (const item of clickedItems) {
        if (givenRoles.includes(item)) {
          if (result[i].role == item) {
            if (result.includes(result[i])) {
              console.log("already in");
            } else {
              result.push(result[i]);
            }
          } else {
            result.splice(position, 1);
          }
        }
        if (givenLevels.includes(item)) {
          if (result[i].level == item) {
            if (result.includes(result[i])) {
              console.log("already in");
            } else {
              result.push(result[i]);
            }
          } else {
            result.splice(position, 1);
          }
        }
        if (givenTools.includes(item)) {
          if (toolz.includes(item)) {
            if (result.includes(result[i])) {
              console.log("already in");
            } else {
              result.push(result[i]);
            }
          } else {
            result.splice(position, 1);
          }
        }
        if (givenLanguages.includes(item)) {
          if (lang.includes(item)) {
            if (result.includes(result[i])) {
              console.log("already in");
            } else {
              result.push(result[i]);
            }
          } else {
            result.splice(position, 1);
          }
        }
      }
    }
    updateHtml(result);
  }
}



//function triggered whem clear button is clicked
clearBtn.addEventListener("click", function () {
  filterBox.classList.remove("active");
  updateHtml(data);
  result = [];
  clickedItems = [];
});
