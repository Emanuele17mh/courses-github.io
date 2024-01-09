let course = document.getElementById('show-course');
let hiddenCourse = document.getElementById('courses-div');
let contacts = document.getElementById('show-contacts');
let hiddenContacts = document.getElementById('contacts-div');
let teachers = document.getElementById('show-teachers');
let hiddenTeacher = document.getElementById('teacher-div');
let linesMenu = document.getElementById('lines');
let hiddenMenu = document.getElementById('hidden-menu');


course.addEventListener('mouseover', () => {
    hiddenCourse.style.display = 'grid'
})

course.addEventListener('mouseleave', () => {
    hiddenCourse.style.display = 'none'
})

hiddenCourse.addEventListener('mouseenter', () => {
    hiddenCourse.style.display = 'grid'
})

hiddenCourse.addEventListener('mouseleave', () => {
    hiddenCourse.style.display = 'none'
})

//contacts function

contacts.addEventListener('mouseover', () => {
    hiddenContacts.style.display = 'grid'
})

contacts.addEventListener('mouseleave', () => {
    hiddenContacts.style.display = 'none'
})

hiddenContacts.addEventListener('mouseover', () => {
    hiddenContacts.style.display = 'grid'
})

hiddenContacts.addEventListener('mouseleave', () => {
    hiddenContacts.style.display = 'none'
})

//teachers function

teachers.addEventListener('mouseover', () => {
    hiddenTeacher.style.display = 'grid'
})

teachers.addEventListener('mouseleave', () => {
    hiddenTeacher.style.display = 'none'
})

hiddenTeacher.addEventListener('mouseover', () => {
    hiddenTeacher.style.display = 'grid'
})

hiddenTeacher.addEventListener('mouseleave', () => {
    hiddenTeacher.style.display = 'none'
})

//menu function


