import "./Card.css"

const Card = ({nama, harga, li1, li2, li3, li4, button, card2}) => {
    return(
        <table className= "card2">
            <thead className= {`card-head-2 ${card2 ? "card-head2" : ""}` }>
                <tr>
                    <th colSpan={2}>{nama}</th>
                </tr>
                <tr>
                    <th className="thh">${harga}</th>
                    <th><span>/Month</span></th>
                </tr>
            </thead>
            <tbody className="card-body">
                <tr>
                    <td>
                        <ul>
                            <li>{li1}</li>
                            <li>{li2}</li>
                            <li>{li3}</li>
                            <li>{li4}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><button className={`btn1 ${card2 ? "btn2" : ""}`}>{button}</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Card;