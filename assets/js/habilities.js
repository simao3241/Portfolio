const skills = document.querySelectorAll('.skill-box');
const description = document.querySelector('.text-description');
const aboutSkill = [
                    '<p>HTML</p> <br> <p>Needs a description!</p> <br>',
                    '<p>CSS</p> <br> <p>Needs a description!</p> <br>',
                    '<p>JavaScript</p> <br> <p>Needs a description!</p> <br>',
                    '<p>TypeScript</p> <br> <p>Needs a description!</p> <br>',
                    '<p>Java</p> <br> <p>Needs a description!</p> <br>',
                    '<p>Firebase</p> <br> <p>Needs a description!</p> <br>',
                    '<p>ReactJS</p> <br> <p>Needs a description!</p> <br>',
                    '<p>NodeJS</p> <br> <p>Needs a description!</p> <br>',
                    '<p>C-Sharp</p> <br> <p>Needs a description!</p> <br>',
                    '<p>Git</p> <br> <p>Needs a description!</p> <br>',
                    '<p>Github</p> <br> <p>Needs a description!</p> <br>'
]
skills.forEach(  (element, index) => {
    element.addEventListener('mouseover', (event) => {
        description.innerHTML = `<p>${aboutSkill[index]} </p>` ;
    } )
    element.addEventListener('mouseout', (event, element,) => {
        description.innerHTML = '/* Mouse over a skill to read the description */';
    } )
} );