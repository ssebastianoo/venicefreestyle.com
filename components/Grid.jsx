export default function Grid({ items }) {
    return (
        <div className="grid">
            {items.map((item, index) => {
                return (
                    <div className={"grid-item" + " grid-item-" + (index+1)} key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                );
            })}
        </div>
    );
}
