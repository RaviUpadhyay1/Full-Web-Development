let addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)

}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })

}
async function main() {

    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {

            last.innerHTML = last.innerHTML + "."
        }
    }, 100);

    // async function main() {
    //     // ⬇️ Start dot animation
    //     let intervalId = setInterval(() => {
    //         let last = document.body.lastElementChild;
    //         if (!last) return;

    //         let text = last.innerHTML.trim();

    //         if (text.endsWith("...")) {
    //             last.innerHTML = text.slice(0, text.length - 3);
    //         } else {
    //             last.innerHTML = text + ".";
    //         }
    //     }, 700);


        let text = ["Initializing Hacking",
            "Reading your files",
            "Password files Detected",
            "Sending all password and personal files to the server",
            "Cleaning up"

        ]
        for (let item of text) {
            await addItem(item)
        }
        await randomDelay()
        clearInterval(t)
    }
    main()
