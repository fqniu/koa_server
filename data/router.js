module.exports = [
  {
    id:2,
    pid:0, //证明是第一层路由，无父级
    path:'/course', // 根路由需要加 / 
    name:'Course',
    title:'课程管理'
  },
  {
    id:3,
    pid:2, // 意思是id为2的子级
    path:'operate', // 子路由不需要加 /
    name:'Operate',
    link:'/course/operate',
    title:'课程操作'
  },
  {
    id:4,
    pid:3, // 意思是id为3的子级
    path:'info_data',
    name:'CourseInfoData',
    link:'/course/operate/info_data',
    title:'课程数据'
  },
  {
    id:5,
    pid:2, // 意思是id为2的子级
    path:'add',
    name:'CourseAdd',
    link:'/course/add',
    title:'课程添加'
  },
  {
    id:6,
    pid:0, // 证明是第一层路由，无父级
    path:'/student',
    name:'Student',
    title:'学生管理'
  },
  {
    id:7,
    pid:6, // 意思是id为2的子级
    path:'operate',
    name:'StudentOperate',
    link:'/student/operate',
    title:'学生操作'
  },
  {
    id:8,
    pid:6, // 意思是id为2的子级
    path:'add',
    name:'StudentAdd',
    link:'/student/add',
    title:'学生添加'
  },
]