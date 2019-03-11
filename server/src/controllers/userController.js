module.exports = {
    //get all user
    index (req, res) {
        res.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
    },

    //create user
    create (req, res) {
        res.send('ทำการสร้างผู้ใช้' + JSON.stringify(req.body))
    },

    //Edit user
    put (req, res) {
        res.send('ทำการแก้ไขข้อมูลผู้' + req.params.userId + JSON.stringify(req.body))
    },

    //delete user
    remove (req, res) {
        res.send('ทำการลบผู้ใช้' + req.params.userId + JSON.stringify(req.body))
    },

    show (req, res) {
        res.send('ดูข้อมูลผู้ใช้' + req.params.userId + JSON.stringify(req.body))
    }
    
}