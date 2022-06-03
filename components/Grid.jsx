export default function Grid({ items }) {
    const gridMaxItems = 6;

    let gridItems = [];
    let tempGrid = [];
    let index = 1;
    items.forEach((item) => {
        if (index < gridMaxItems) {
            tempGrid.push(item);
            index++;
        } else {
            tempGrid.push(item);
            gridItems.push(tempGrid);
            tempGrid = [];
            index = 1;
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
                                            ? item.links.map((link, _index) => {
                                                  return (
                                                      <a
                                                          href={link.url}
                                                          className="project-link"
                                                          key={_index}
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
