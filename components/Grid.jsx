export default function Grid({ items }) {
    const gridMaxItems = 6;

    let gridItems = [];
    let tempGrid = [];
    let index = 0;
    items.forEach((item) => {
        if (index < gridMaxItems) {
            tempGrid.push(item);
            index++;
        } else {
            gridItems.push(tempGrid);
            tempGrid = [];
            tempGrid.push(item);
            index = 0;
        }
    });

    if (
        (tempGrid.length > 0 && tempGrid.length < gridMaxItems) ||
        tempGrid.length == gridMaxItems
    ) {
        gridItems.push(tempGrid);
    }

    return (
        <div className="grids">
            {gridItems.map((grid, index_) => {
                return (
                    <div className="grid" key={index_}>
                        {grid.map((item, index) => {
                            return (
                                <div
                                    className={
                                        "grid-item" +
                                        " grid-item-" +
                                        (index + 1)
                                    }
                                    key={index}
                                    style={{
                                        backgroundImage: `linear-gradient(
                                            to bottom,
                                            rgba(0, 0, 0, 0.7) 0%,
                                            rgba(0, 0, 0, 0.7) 100%
                                        ), url("${item.background}")`,
                                    }}
                                >
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <div className="project-links">
                                        {item.links
                                            ? item.links.map((link, index) => {
                                                  return (
                                                      <a
                                                          href={link.url}
                                                          className="project-link"
                                                      >
                                                          {link.label}
                                                      </a>
                                                  );
                                              })
                                            : null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
