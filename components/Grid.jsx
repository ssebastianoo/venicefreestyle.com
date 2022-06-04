import SocialButton from "./SocialButton";

export default function Grid({ items }) {
    const gridMaxItems = 13;

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
                                        backgroundImage: `url("${item.background}"`,
                                    }}
                                >
                                    <div className={"grid-item-content " + ([3,5,7,10,11].includes(index+1) ? 'horizontal' : 'vertical')}>
                                        <h3>{index+1}_{item.title}</h3>
                                        <p>{item.content}</p>
                                        <div className="project-links">
                                            {item.links
                                                ? item.links.map(
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
                        })}
                    </div>
                );
            })}
        </div>
    );
}
