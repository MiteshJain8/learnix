# Learnix

Learnix is an educational platform designed to help people with learning disabilities such as dyscalculia, ADHD, memory deficits, and those who are deaf or mute. The platform provides interactive lessons and quizzes to aid in learning and communication.

# Link to website:
[Learnix](https://learnix-learnix-ten.vercel.app/sign-in)

# To run locally using docker:
    docker pull miteshjain8/learnix

## Project Structure

```plaintext
app/
├── layout.js
├── page.js
├── globals.css
├── favicon.ico
├── dyscalculia/
│   └── page.js
├── adhd/
│   └── page.js
├── memory/
│   ├── page.js
│   └── components/
│       └── MemoryGame.js
├── deaf-dumb/
│   ├── page.js
│   ├── lesson/
│   │   └── page.js
│   ├── quiz/
│   │   └── page.js
│   └── components/
│       ├── Lesson.js
│       └── Quiz.js
├── app.py
├── jsconfig.json
├── LICENSE
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.mjs
├── package-lock.json
├── package.json
├── README.md
public/
    └── images/
        └── handGestures/
        |   ├── A.png
        |   ├── B.png
        |   ├── ...
        |   └── Z.png
        └── dyscalc_pic/
        └── memoryGame/
          
```
## Features

<kbd>Dyscalculia:</kbd> Learn and practice math concepts with interactive puzzles and games.

<kbd>ADHD:</kbd>  Engage in short, focused activities designed to maintain attention.

<kbd>Memory Deficits:</kbd>  Improve memory through repetition-based games and tasks.

<kbd>Deaf/Dumb:</kbd>  Learn communication with visual cues and sign language basics.

## Requirements

    npm install firebase
    npm install react-firebase-hooks
    pip install Flask
    pip install numpy
    pip install pickle-mixin
    pip install tensorflow

## Bonus additions

<kbd>Night Mode:</kbd> Night mode is implemented with graphical changes which dynamically changes the layout view/theme.

<kbd>API intergration:</kbd> Firebase is used for real-time login/register authentication for the web-app.

<kbd>Responsive: </kbd> Complete web-app is responsive and is custiomized for every device using TailwindCss and react components.

<kbd>ML learning model:</kbd> ML learning model is implemented using TensorFlow model and flask as api to recognise and tutor sign language through live visuals and audio.

<kbd>Fav-Icon: </kbd> Customised FavIcon for web-app deployment.

<kbd>Hosting:</kbd> Hosting platform used here is vercel.app as whole project is based on Next-JS.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contributers

<kbd>Member 1:</kbd> [Harshvardhan Mehta](https://github.com/Haksham)<br>
<kbd>Member 2:</kbd> [Mitesh Jain](https://github.com/MiteshJain8)<br>
<kbd>Member 3:</kbd> [Atharva Manchalkar](https://github.com/AtharvaManchalkar)<br>
<kbd>Member 4:</kbd> [Somnath Bankapure](https://github.com/somnath2374)<br>
