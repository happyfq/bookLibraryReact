//添加自定义对于webpack的配置
const path= require('path')

module.exports={
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}