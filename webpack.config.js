/**
 * Created by admin on 2017/2/15.
 */
module.exports = {
    entry: __dirname + '/app/main.js',  //惟一入口文件
    output: {
        path: __dirname + '/public',  //打包后的文件存放的地方
        filename: 'bundle.js'  //打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}