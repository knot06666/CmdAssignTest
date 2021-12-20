require('./configs/config')
const teacherAPI = require('./routes/teacher.api')
const courseAPI = require('./routes/course.api')
const app = express()
const port = 3000


app.use(cors({
    origin: "*",
}));
app.use(express.json({
    limit: '130mb'
}));
app.use(bodyParser.json());

app.use('/api/v1',teacherAPI)
app.use('/api/v1',courseAPI)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})