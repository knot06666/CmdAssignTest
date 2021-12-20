require('../configs/config')

const TeacherSch = sequelize.define('tb_teacher', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    date_of_birth: Sequelize.DATE,
    age: Sequelize.INTEGER,
    course_id: Sequelize.INTEGER,
});
sequelize.sync({force: true});

module.exports = TeacherSch