// var listCoursesBlock = document.querySelector('#list-courses')
// npx json-server db.json

var courseApi = 'http://localhost:3000/courses'
var updateId = null;
function start() {
    getCourses(function(courses) {
        renderCourses(courses);
    });
    // getCourses(renderCourses)
    handleCreateForm();
}

start();

function getCourses(callback) {
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback)
}

function updateCourse(id, data, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleUpdateCourse(id) {
    fetch(courseApi + '/' + id)
        .then(function(response) {
            return response.json();
        })
        .then(function(course) {
            document.querySelector('input[name="name"]').value = course.name;
            document.querySelector('input[name="description"]').value = course.description;
            updateId = id; // Lưu lại ID của khóa học cần cập nhật
            document.querySelector('#create').textContent = 'Lưu'; // Đổi nút thành 'Lưu'
        });
}


function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {
            // getCourses(renderCourses)
            var courseItem = document.querySelector('.course-item-' + course.id)
            if (courseItem) {
                courseItem.remove();
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        // console.log(course.id);
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleUpdateCourse('${course.id}')">Sửa</button>
            <button onclick="handleDeleteCourse('${course.id}')">Xóa</button>
        </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description,
        };
        // createCourse(formData, function() {
        //     getCourses(renderCourses);
        // });
        if (updateId != null) {
            updateCourse(updateId, formData, function() {
                getCourses(renderCourses);
            });
        } else {
            createCourse(formData, function() {
                getCourses(renderCourses);
            });
        }
    }
}

