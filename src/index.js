import Project from './project.js'

const add_proj_btn = document.getElementById('create-project-button');
const add_proj_input = document.getElementById('project-name-input');

let projectList = [];

add_proj_btn.addEventListener('click', () => {
    let a = new Project(add_proj_input.value);
    // console.log(a);
    projectList.push(a);
    console.log(projectList);
})
