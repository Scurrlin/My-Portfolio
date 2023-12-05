import self from "../img/self.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

import { Class } from "node-forge/lib/asn1"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(9,175,236)", "rgb(18,103,237)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sean",
    lastName: "Currlin",
    initials: "sc", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Based in Boston, MA'
        },
        {
            emoji: "🎹",
            text: "Professional Musician"
        },
        {
            emoji: "📧",
            text: "sean.currlin@gmail.com"
        },
        {
            emoji: "📂",
            text: <a href="https://drive.google.com/file/d/1m8AZDBcysjB_m5rrR2gcvnah2yWYrysK/view?usp=sharing"download="Sean Currlin - Software Engineer.pdf">Resume</a>
        }
    ],
    socials: [
        {
            link: "https://github.com/Scurrlin",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/seancurrlin/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://open.spotify.com/artist/1yes1OaMmV9w58iMeggawH",
            icon: "fa fa-spotify",
            label: 'spotify'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Operations Lead with 5 years of experience in education looking to leverage new skills in full-stack web development. Expertise includes designing, debugging, and deploying web applications using HTML, CSS, JavaScript, React, and MongoDB. Seeking a position as a Software Engineer.",
    skills:
        {
            proficientWith: ['Python', 'PostgreSQL', 'Django','Javascript', 'React', 'HTML5', 'CSS3', 'Tailwind', 'Express', 'Mongoose', 'MongoDB','Git', 'Github', 'Bootstrap'],
            exposedTo: ['TypeScript', 'NodeJS', 'Amazon S3']
        }
    ,
    hobbies: [
        {
            label: 'Hardware Upgrades',
            emoji: '🖥'
        },
        {
            label: 'Music',
            emoji: '🎧'
        },
        {
            label: 'Fitness',
            emoji: '💪🏻'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Dev Blog",
            live: "https://dev-blog-nn3i.onrender.com",
            source: "https://github.com/Scurrlin/Dev-Blog/tree/main",
            image: mock2
        },
        {
            title: "SummarAIze",
            live: "https://summaraize-jj5v.onrender.com/",
            source: "https://github.com/Scurrlin/AI_Article_Summarizer_Clone",
            image: mock3
        },
        {
            title: "Interval Training Game",
            live: "https://hearos-journey.onrender.com",
            source: "https://github.com/Scurrlin/Interval-Training-Game",
            image: mock4
        }
    ]
}