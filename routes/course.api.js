require('../configs/config')
const courseScma = require('../schema/course.sch');

const router = express.Router()

router.get('/course', async function (req, res, next) {
    try {
        var body = req.query
        const course = await courseScma.findAll();
        return res.json({
            status: true,
            message: "Gets successfully",
            data: course
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

router.post('/course', async function (req, res, next) {
    try {
        var body = req.body
        sequelize.transaction().then(function (t) {
            courseScma.create(body, {
                transaction: t
            }).then(function (data) {
                console.log(data)
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