import fs from 'fs/promises';

async function fileOperation(){
        try{
        await fs.writeFile("example.txt","hello world","utf-8")
        console.log("file written successfully")
        
        const data = await fs.readFile("example.txt","utf-8")
        console.log("file content:",data)
        
        await fs.appendFile('example.txt',"\nThis is Ravi","utf-8")
        console.log("content append")

        const updateData = await fs.readFile("example.txt","utf-8")
        console.log("file update content:",updateData)

        await fs.unlink('example.txt')
        console.log("file deleted")
    }

    catch(err){
        console.log("error",err)
    }
}
fileOperation()