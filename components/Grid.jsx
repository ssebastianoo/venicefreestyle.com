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

    if (tempGrid.length > 0 && tempGrid.length < gridMaxItems || tempGrid.length == gridMaxItems) gridItems.push(tempGrid);


    return (
        <div className="grids">
            {gridItems.map((grid, index_) => {
                return (
                    <div className="grid" key={index_}>
                    {grid.map((item, index) => {
                        return (
                            <div
                                className={
                                    "grid-item" + " grid-item-" + (index + 1)
                                }
                                key={index}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        );
                    })}
                </div>
                )
            })}
        </div>
    );
}
