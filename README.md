#### วิธีการติดตั้งชุด Code

1. git clone https://github.com/knot06666/CmdAssignTest.git
2. docker-compose up -d

#### แนะนำ API

1. API get all teachers
* method: get
* endpoint: /api/v1/teacher

2. API Created teachers
* method: post
* endpoint: /api/v1/teacher
* body: 
> {
    "first_name":"xx",
    "last_name":"xx",
    "date_of_birth":"YYYY-MM-DD",
    "course_id": 0
}

3. API get all course
* method: get
* endpoint: /api/v1/course

4. API Created course
* method: post 
* endpoint: /api/v1/course
* body:
> {
    "course_name":"xx",
    "course_description":"xx"
}