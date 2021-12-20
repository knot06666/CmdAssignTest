require('../configs/config')
const teacherScma = require('../schema/teacher.sch');

const router = express.Router()

router.get('/teacher', async function (req, res, next) {
    try {
        var body = req.query
        const users = await teacherScma.findAll();
        return res.json({
            status: true,
            message: "Gets successfully",
            data: users
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: false,
            message: "Gets unsuccessfully " + String(error.message),
            data: null
        });
    }
});

router.post('/teacher', async function (req, res, next) {
    try {
        var body = req.body
        sequelize.transaction().then(function (t) {
            teacherScma.create(body, {
                transaction: t
            }).then(function (data) {
                t.commit();
                return res.json({
                    status: true,
                    message: "Created successfully",
                    data: data
                });
            }).catch(function (error) {
                console.log(error);
                t.rollback();
                throw {
                    message: "Error creating"
                };
            });
        });

    } catch (error) {
        console.error(error);
        return res.json({
            status: false,
            message: "Created unsuccessfully " + String(error.message),
            data: null
        });
    }
});

module.exports = router