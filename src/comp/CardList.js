import { useState, useEffect } from "react";

import Cards from "./Card";

import axios from "axios";

function CardList() {
  const instance = axios.create({
    baseURL: "https://coursemebe.herokuapp.com/",
  });
  const [card, setCard] = useState([]);
  const [data, setData] = useState(card);
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line
  const [rat, setRat] = useState("");
  // eslint-disable-next-line
  const [load, setLoad] = useState(true);


  async function fetchData() {
    const req = await instance.get("/cards");

    setCard(req.data);
  }

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let filteredData = card;
    /// SEARCH
    if (searchTerm) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    //Rating

    if (rat) {
      filteredData = filteredData.filter((item) => {
        return item.rating === rat;
      });
      console.log(filteredData);
    }

    setData(filteredData);
  }, [searchTerm, rat, card]);

  return (
    <div className="bg-white dark:bg-gray-700">
      <div className=" flex justify-around items-center flex-grow">
        <div className="flex items-center justify-center">
          <div className="mt-1">
            <input
              type="search"
              className="border-green-300  shadow rounded-md border-2 p-3"
              placeholder={`Search by name...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* <div className="">

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rat}
          label="Rating"
          onChange={(event) => setRat(event.target.value)}
          defaultValue={0}
        >
          <MenuItem value={1}>1 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={2}>2 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={3}>3 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={4}>4 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
          <MenuItem value={5}>5 <StarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0 ml-2 pb-1"> </StarIcon></MenuItem>
        </Select>
      </FormControl>
    </Box>


      </div> */}
      </div>
      <div className="grid mt-4 place-items-center w-screen align-middle pb-12     sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-x-0">
        {searchTerm.length >= 1
          ? data.map((datas) => (
              <Cards
                key={datas._id}
                url={datas.url}
                title={datas.title}
                Desc={datas.Desc}
                link={datas.link}
                rating={datas.rating}
              />
            ))
          : card.map((datas) => (
              <Cards
                key={datas._id}
                url={datas.url}
                youtube={datas.Youtube}
                title={datas.title}
                Desc={datas.Desc}
                link={datas.link}
                rating={datas.rating}
              />
            ))}
      </div>
    </div>
  );
}

export default CardList;
