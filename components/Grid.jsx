import SocialButton from "./SocialButton";
import Project from "./Project";

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
                            return <Project project={item} index={index} key={index} />
                        })}
                    </div>
                );
            })}
        </div>
    );
}
