var path= require('path');
var fs=require('fs');
const postsPath=path.join('./source/_posts');

fs.readdir(postsPath, function(err, paths) {
    //遍历文件目录
    // console.log(paths)
    paths.forEach((file)=>{
        var extname=path.extname(file);
        if (extname.indexOf('png')!==-1||
            extname.indexOf('jpg')!==-1||
            extname.indexOf('gif')!==-1
        ){
           fs.copyFile(path.join(postsPath,file),path.join(postsPath,'/img',file),()=>{
            fs.unlinkSync(path.join(postsPath,file));
            console.log('剪切文件成功',file);
           })
        }
       
        //遍历文件
    })
})