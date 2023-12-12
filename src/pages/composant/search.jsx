import React, { useState, useEffect } from 'react';

  const Search = () => {

    const [data, setData] = useState([]);
    const [seacrhTerm, setSeacrhTerm] = useEffect("");

    useEffect(() => {
      fetch('./empolye')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    const handleSearchTerm = (e) => {
      let value = e.target.value;
      value.length > 2 && seacrhTerm(value)
    };

    console.log(seacrhTerm)

    return (
        <div>
           <div className="serchBar">
              <input
                type="text"
                name='search'
                placeholder="Rechercher..."
                id='search'
                onChange={handleSearchTerm}
              />
           </div>

          <div className="search__results">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur neque quis recusandae sed nobis, amet qui corrupti magnam, aut veniam eos? Aspernatur quibusdam, reprehenderit illum tempore minima ipsum ab?</p>
            {data.filter((val) => {
              return val.title.includes(seacrhTerm);
            })
            .map((val) =>{
              return (
                <div className="search__result" key={val.id}>
                  {val.title}
                </div>
              );
            })}
          </div>
           
        </div>
    );
};

export default Search;
