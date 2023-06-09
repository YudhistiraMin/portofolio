// general data
listExperience = [
  {
    title: 'Software Engineer',
    place: 'Badan Sistem Informasi',
    date: 'Aug 2021 - Current',
    detail: 'works as a frontend developer whose job is to implement the results of the ui/ux design into a web form and implement it using the API that has been provided by BEand sometimes becomes BE to make API using angular 8 for FE and lumen for BE'
  },
  {
    title: 'Frontend Web Developer',
    place: 'PT. Netindo Solution Group',
    date: 'Okt 2019 - Jul 2021',
    detail: 'works as a frontend developer whose job is to implement the results of the ui/ux design into a web form and implement it using the API that has been provided by BE using Nuxt js and Vue js for frontend'
  },
  {
    title: 'Internship',
    place: 'GMF AeroAsia',
    date: 'Sept 2017 - Des 2017',
    detail: 'as an intern to develop the system, we created a system for registration of interns at PT gmf aeroasia made using laravel'
  }
];

listEducation = [
  {
    title: 'Universitas Islam Indonesia',
    place: 'Teknik Informatika',
    date: 'Sept 2014 - Sept 2019',
    detail: 'not so good to imagine about design'
  },
];

listProgress = [
  {
    title: 'HTML',
    value: '75'
  },
  {
    title: 'CSS',
    value: '70'
  },
  {
    title: 'Javascript',
    value: '75'
  },
  {
    title: 'Vue / Nuxt',
    value: '80'
  },
  {
    title: 'Angular',
    value: '60'
  },
  {
    title: 'Vuetify',
    value: '80'
  },
  {
    title: 'Flutter',
    value: '35'
  },
]

const currentYear = new Date().getFullYear(); 
const year = document.getElementById('year');
year.innerText = currentYear;

window.onload = function(){
  getListExperience();
  getListEducation();
  progressBar();
  toggleButton();
}

function getListExperience() {
  const listIdExperience = document.getElementById("exp");
  listExperience.forEach((element) => {
    let divTitle = document.createElement('div');
    let divPlace = document.createElement('span');
    let divDate = document.createElement('span');
    let pDetail = document.createElement('p');

    divTitle.classList.add('heading-6');
    divPlace.classList.add('body-2');
    divDate.classList.add('caption');
    divPlace.classList.add('subtitle-2');
    pDetail.classList.add('subtitle-2', 'fiveth-color', 'mt-1');

    divTitle.innerText = element.title;
    // divDate.innerText = element.date;
    divPlace.innerText = element.place;
    divPlace.innerText = element.place + ' / ' + element.date;
    pDetail.innerText = element.detail;

    listIdExperience.appendChild(divTitle);
    listIdExperience.appendChild(divPlace);
    listIdExperience.appendChild(divDate);
    listIdExperience.appendChild(pDetail);
  });
};

function getListEducation() {
  const listIdEducation = document.getElementById("edu");
  listEducation.forEach((element) => {
    let divTitle = document.createElement('div');
    let divPlace = document.createElement('span');
    let divDate = document.createElement('span');
    let pDetail = document.createElement('p');

    divTitle.classList.add('heading-6');
    divPlace.classList.add('body-2');
    divDate.classList.add('caption');
    divPlace.classList.add('subtitle-2');
    pDetail.classList.add('subtitle-2', 'fiveth-color', 'mt-1');

    divTitle.innerText = element.title;
    divPlace.innerText = element.place;
    divPlace.innerText = element.place + ' / ' + element.date;
    pDetail.innerText = element.detail;

    listIdEducation.appendChild(divTitle);
    listIdEducation.appendChild(divPlace);
    listIdEducation.appendChild(divDate);
    listIdEducation.appendChild(pDetail);
  });
};

function progressBar() {
  const listIdSkills = document.getElementById('skills');
  let title = document.createElement('div');
  title.classList.add('heading-6');
  listIdSkills.appendChild(title);

  listProgress.forEach((element, index) => {
    let parentDiv = document.createElement('div');
    parentDiv.style.marginTop = '10px'

    let label = document.createElement('label');
    label.setAttribute("for", element.title);
    label.classList.add('caption', 'second-color');

    let b = document.createElement('b');
    b.innerText = element.title;

    let divProgress = document.createElement('div');
    divProgress.classList.add('progress');

    let divProgressDone = document.createElement('div');
    divProgressDone.classList.add('progress-done');
    divProgressDone.setAttribute("data-done", element.value);

    let span = document.createElement('span');
    span.innerText = element.value + '%'

    // attach 
    parentDiv.append(label, divProgress);
    label.appendChild(b);
    listIdSkills.appendChild(parentDiv);

    divProgress.appendChild(divProgressDone);
    divProgressDone.appendChild(span);

      setTimeout(() => {
        const progress = document.querySelectorAll('.progress-done');
        progress[index].style.width = progress[index].getAttribute('data-done') + '%';
        progress[index].style.opacity = 1;    
    }, 100);
  });
}

function toggleButton() {
  const toggleButton = document.getElementById('toggle-button');
  const navList = document.getElementById('navigation');
  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}




