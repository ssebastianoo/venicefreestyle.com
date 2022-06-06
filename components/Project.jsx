import SocialButton from "./SocialButton";

export default function Project({ project, index }) {
    return (
        <div
            className={
                "grid-item" +
                " grid-item-" +
                (index + 1)
            }
            key={index}
            style={{
                backgroundImage: `url("${project.background}"`,
                transitionDuration: "0.5s",
            }}
        >
            <div
                className={
                    "grid-item-content " +
                    ([3, 5, 7, 10, 11].includes(
                        index + 1
                    )
                        ? "horizontal"
                        : "vertical")
                }
            >
                <h3>
                    {index + 1}_{project.title}
                </h3>
                <p>{project.content}</p>
                <div className="project-links">
                    {project.links
                        ? project.links.map(
                              (link, _index) => {
                                  return (
                                      <a
                                          href={
                                              link.url
                                          }
                                          className="project-link"
                                          key={_index}
                                      >
                                          <SocialButton
                                              url={
                                                  link.url
                                              }
                                          />
                                      </a>
                                  );
                              }
                          )
                        : null}
                </div>
            </div>
        </div>
    );
}