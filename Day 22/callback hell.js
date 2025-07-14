fs.writeFile("ravi.txt", "Ravi is a ggod boy", () => {
    console.log("done")
    fs.readFile("harry.text", (error, data) => {
        console.log(error, data.toString())
        // Again
        fs.writeFile("ravi.txt", "Ravi is a ggod boy", () => {
            console.log("done")
            fs.readFile("harry.text", (error, data) => {
                console.log(error, data.toString())
                // Again
                fs.writeFile("ravi.txt", "Ravi is a ggod boy", () => {
                    console.log("done")
                    fs.readFile("harry.text", (error, data) => {
                        console.log(error, data.toString())
                        // Again
                        fs.writeFile("ravi.txt", "Ravi is a ggod boy", () => {
                            console.log("done")
                            fs.readFile("harry.text", (error, data) => {
                                console.log(error, data.toString())
                                // Again
                            })
                        })
                    })
                })
            })
        })

    })
})