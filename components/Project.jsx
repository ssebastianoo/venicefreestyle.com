import SocialButton from "./SocialButton";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function Project({ project, index }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            {imgLoaded ? (
                <div
                    className={"grid-item" + " grid-item-" + (index + 1)}
                    key={index}
                    style={{
                        backgroundImage: `url("${project.background}"`,
                        transitionDuration: "0.5s",
                    }}
                >
                    <div
                        className={
                            "grid-item-content " +
                            ([3, 5, 7, 10, 11].includes(index + 1)
                                ? "horizontal"
                                : "vertical")
                        }
                    >
                        <h3>{project.title}</h3>
                        <ReactMarkdown>{project.content}</ReactMarkdown>
                        <div className="project-links">
                            {project.links
                                ? project.links.map((link, _index) => {
                                      return (
                                          <a
                                              href={link.url}
                                              className="project-link"
                                              key={_index}
                                          >
                                              <SocialButton url={link.url} />
                                          </a>
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="loading">
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img
                        style={{ display: "none" }}
                        src={project.background}
                        onLoad={() => setImgLoaded(true)}
                        alt="Loading"
                    />
                </div>
            )}
        </>
    );
}
