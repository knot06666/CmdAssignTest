require('../configs/config')

const courseSch = sequelize.define('tb_courses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    course_name: Sequelize.STRING,
    course_description: Sequelize.STRING,
    
});
sequelize.sync({force: true});

module.exports = courseSch