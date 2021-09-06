import { useState, useEffect } from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Cards from './comp/Card';
import axios from 'axios';



function App() {
  const instance = axios.create({
    baseURL: 'http://coursemebackend.azurewebsites.net',
})
  const [card, setCard] = useState([]);

    useEffect(()=> {
        async function fetchData() {
          const req = await instance.get("/cards")

          setCard(req.data);
        }

        fetchData();
    }, [instance])




  return (

    <div>
    <Header/>
    <div className="mt-24 pl-14 pr-14 mb-6 gap-3 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 " >

    {card.map((datas) => (
          <Cards
            key={datas._id}
            url={datas.url}
            title={datas.title}
            Desc={datas.Desc}
            link={datas.link}
          />
        ))}

    </div>




    <Footer />  

  
    </div>
  );
}

export default App;



