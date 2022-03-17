import *  as fs from 'fs';

// export default function handler(req, res) {

//     // fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
//     //     if(err){
//     //         res.status(500).json({error: "Internal Server Error"})
//     //     }
//     //     console.log(req.query.slug,"jggg");
//     //     res.status(200).json( JSON.parse(data) )
//     // })

//     // fs.readdir("blogdata",(err,data)=>{
//     //     if(err){
//     //         res.status(500).json({error: "Internal Server Error"})
//     //     }
//     //     console.log(data);
//     //     res.status(200).json( data )
//     // })


//   }

export default async function handler(req, res) {

    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' +item),'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    res.status(200).json(allBlogs)
}

  