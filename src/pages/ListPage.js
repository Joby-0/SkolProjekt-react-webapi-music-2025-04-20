import React, { useState, useEffect } from 'react';
import { List } from '../components/list'
import { Search } from '../components/search'
import { Pagition } from '../components/pagition'
import musciApiService  from '../services/myservice';



export function ListPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentFilter, setCurrentPageFilter] = useState("");
  const [apidata, setapidata] = useState();

  const service = new musciApiService("https://seido-webservice-307d89e1f16a.azurewebsites.net/api");

  useEffect(() => {
    (async () => {


      const service = new musciApiService("https://seido-webservice-307d89e1f16a.azurewebsites.net/api");

      let data = await service.getData(currentPage, currentFilter)
      // currentState.pagecout = data.pageCount;
      // currentState.dbItemsCount = data.dbItemsCount;



      console.log(data);

      setapidata(data);


    })();
  },  [currentPage, currentFilter]);

  const onPageChange = async (e) => {
    console.log(e);

    setCurrentPage(e);
  };

  const handleSearch = (e) => {
    console.log(e);
    setCurrentPageFilter(e)

  };
  return (
    <>
      
      <div className="container px-4 py-4" id="list-of-groups">
        <h2 className="pb-2 border-bottom">List of Music bands</h2>

        <p>Below are some of the worlds most famous Music bands.</p>

        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-md-7 col-lg-10">
            <Search onSearch={handleSearch} />

            <List {...apidata} />
            <Pagition currentPage={currentPage} totalPages={3} onPageChange={onPageChange} />
          </div>
        </div>
      </div>
    </>
  )
}
