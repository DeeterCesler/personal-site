const consoleArt = `
%c
██████╗ ███████╗███████╗████████╗███████╗██████╗ 
██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██║  ██║█████╗  █████╗     ██║   █████╗  ██████╔╝
██║  ██║██╔══╝  ██╔══╝     ██║   ██╔══╝  ██╔══██╗
██████╔╝███████╗███████╗   ██║   ███████╗██║  ██║
╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
%c                                                 
 ██████╗███████╗███████╗██╗     ███████╗██████╗  
██╔════╝██╔════╝██╔════╝██║     ██╔════╝██╔══██╗ 
██║     █████╗  ███████╗██║     █████╗  ██████╔╝ 
██║     ██╔══╝  ╚════██║██║     ██╔══╝  ██╔══██╗ 
╚██████╗███████╗███████║███████╗███████╗██║  ██║ 
 ╚═════╝╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝ 
                                                 `

const consoleMessage = `
%cWelcome! %cHappy you're here. 

If you're checking the console, you're probably another developer seeing who I am and what I'm about.

I will share any code you see that you're interested, if you ask!

`

const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

const generateConsoleName = () => {
    const randomColorOne = generateRandomColor()
    const randomColorTwo = generateRandomColor()
    console.log(consoleArt, `color: ${randomColorOne}`, `color: ${randomColorTwo}`)
    console.log(
      consoleMessage,
      `
      font-weight: 900;
    `,
      'font-weight: 500;',
    )

    return {art: consoleArt, message: consoleMessage, colors: [randomColorOne, randomColorTwo]}
}

export default generateConsoleName;
