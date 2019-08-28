module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/goods', function(req, res){
                    res.json({
                        code: 0,
                        list: [
                            {
                                name: 'name1',
                                price: '100'
                              },{
                                name: 'name2',
                                price: '200'
                              },{
                                name: 'name3',
                                price: '300'
                              }
                        ]
                    })
                })
            }
        }
    }
}