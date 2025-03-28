import React from "react";
import "../Project/Project.css";

const projects = [
    { name: "eComers", url: "https://cloth-khfb.vercel.app/" },
    { name: "Hot-Dog", url: "https://hot-dog-sandy.vercel.app/" },
    { name: "Movies", url: "https://kinolarcom.vercel.app/" },
    { name: "Desert", url: "https://desert-livid.vercel.app/" },
    { name: "Pomdoro ToDo", url: "https://time-chi-nine.vercel.app/" },
    { name: "Tic Tac Toe", url: "https://tic-tac-rose.vercel.app/" },
    { name: "Game", url: "https://game-pink-nine.vercel.app/" },
    { name: "Income Expenses", url: "https://kirim-chqim.vercel.app/" },
    { name: "Ramadan PSI", url: "https://ramadan-psi.vercel.app" },
    { name: "Flags", url: "https://bayroqlar-zeta.vercel.app/" },
    { name: "Calculator", url: "https://calcc-phi.vercel.app/" }

];

const Project = () => {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">MY PROJECTS</h1>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <h2 className="project-name">{project.name}</h2>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Project;