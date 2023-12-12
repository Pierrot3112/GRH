import React, {useState, useEffect} from 'react'
import axios from 'axios';



const CongeEnCours = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('./conge.json')
    .then((response) => {
        setData(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

    // fetchData();
  }, []);

  function big(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normal(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }

  return (
    <div onmouseover={big} onmouseout={normal}>
    {data.map((item, index) => (
    <div className='congeEnCours' key={index}>
      <div className="img">
        <img src={item.img} alt="" height="100px" width="100px" />
      </div>
      <hr />
      <div className="description">
        <div className="name">
          <h2>{item.nom} {item.prenom}</h2>
        </div>
        <hr />
        <div className="infoConge">
          <div className='t'>
            <table>
              <tr>
                <th>Date début</th>
                <th>Date fin</th>
                <th>Durée</th>
              </tr>
              <tr>
                <td>{item.dateDebut}</td>
                <td>{item.dateFin}</td>
                <td>{item.dure}</td>
              </tr>
            </table>
          </div>
          <hr />
          <div className='y'>
            <h4>
              Type du congé: {item.typeConge}
            </h4>
          </div>
        </div>
      </div>
      </div>
        ))}
    </div>
  )
}

export default CongeEnCours