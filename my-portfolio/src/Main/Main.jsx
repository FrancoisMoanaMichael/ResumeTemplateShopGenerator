import React from 'react';
import resumeContent from '../Data/data';


export default React.memo(function Main() {
    let userData = resumeContent;

    console.log(userData)
    return (
        <div className="main">
            <article className="main-article-about">
                <h2 className="main-article-about-title">{userData.about.title}</h2>
                <h3 className="main-article-about-subtitle">{userData.about.subtitle}</h3>
                <div className="main-article-about-content">{userData.about.content}</div>
            </article>
            {userData.skills.map((title, subtitle, content) => {
                return (
                    <article className="main-article-skills">
                        <h2 className="main-article-skills-title">{userData.skills.title}</h2>
                        <h3 className="main-article-skills-subtitle">{userData.skills.subtitle}</h3>
                        <div className="main-article-skills-content">{userData.skills.content}</div>
                    </article>)


            })}
        </div>
    )
})
