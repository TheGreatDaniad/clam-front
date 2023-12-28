import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout"
import Loader from "../components/Loader"

import {useLazyQuery } from '@apollo/client';
import {  GET_PODCASTS_QUERY } from '../lib/graphql/queries/podcasts';
import {Podcast as PodcastType} from '../lib/graphql/queries/types' 
import {debounce} from "../lib/utils"
export default function Home() {
  const [search, setSearch] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [debouncedCategory, setDebouncedCategory] = useState(categoryName);
  const [page, setPage] = useState(1)
  const [getPodcasts, { loading, data }] = useLazyQuery(GET_PODCASTS_QUERY);

  useEffect(() => {
    const handler = debounce(() => setDebouncedSearch(search), 500);
    handler();
  }, [search]);

  useEffect(() => {
    const handler = debounce(() => setDebouncedCategory(categoryName), 500);
    handler();

  }, [categoryName]);



  useEffect(() => {
    getPodcasts({
      variables: {
        search: debouncedSearch,
        categoryName: debouncedCategory,
        page,
        limit:12
      },
    });
  }, [debouncedSearch, debouncedCategory, getPodcasts, page]);


  return (
    <main >
      <Layout >
        {loading && <Loader text="Loading" />}

        <div className=" px-6 my-auto mb-12 text-lg" >
          Podcasts
        </div>
        <div className="flex justify-between items-center" style={{ borderBottom: "1px #ddd solid" }}>

          <form className="w-full max-w-lg px-6 " >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" >
                  Search
                </label>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Search" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" >
                  Category
                </label>
                <div className="relative">
                  <select
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Technology</option>
                    <option>Health & Wellness</option>
                    <option>True Crime</option>
                    <option>Comedy</option>
                    <option>Education</option>
                    <option>Business & Finance</option>
                    <option>History</option>
                    <option>Science</option>
                    <option>Arts & Culture</option>
                    <option>Sports</option>

                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>


              </div>


            </div>

            <div className="flex flex-wrap -mx-3 mb-2">



            </div>
          </form>
          

        </div>

        <div className="p-4 pl-20 flex flex-wrap">
          {data?.podcasts.map((podcast:PodcastType) => {
            return (
              <div key={podcast.id} className="w-1/5 rounded overflow-hidden border-solid border border-gray-300 mx-4 mb-4">
                <img className="w-full" src={podcast?.images?.thumbnail} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-md mb-2">{podcast.title}</div>
                  <p className="text-gray-700 text-xs">
                    {podcast.description?.substring(0, 200) + " ..."}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 self-end">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2" style={{ fontSize: "9px" }}>#{podcast.categoryName}</span>
                </div>
              </div>

            )
          })}

        </div>
        <div className="flex justify-between mx-24">
{page !==1 &&        <span role="button" className="text-blue-400" onClick={()=>{setPage(page=>page -1)}}>Previous </span>
}
{page ===1 &&        <span  className="text-blue-400"> </span>
}
          <span role="button" className="text-blue-400"  onClick={()=>{setPage(page=>page +1)}}>Next </span>
        </div>

      </Layout>

    </main>
  )
}
