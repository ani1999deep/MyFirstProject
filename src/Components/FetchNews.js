import React, { useState } from 'react'
import axios from 'axios'



const FetchNews = () => {

  const [news, setNews] = useState([])

  const fetchnews = () => {

    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=adf5af25d0f84a58b4590d48356be23d')

      .then((response) => {

        setNews(response.data.articles)

        console.log('ok')
      })

      .catch((error) => {

        console(error)
      })
  }
  return (
    <>
      <div className='container'>


        <button onClick={fetchnews}>Fetch News</button>

      </div>

      <div>
        {
          news.map((value) => {
            return (
              <div >
                <div className='col-4'>


                  <div className='card' style={{ width: '18rem' }}>


                    <img className='img' src={value.urlToImage} />


                    <h5>{value.title}</h5>


                    <p>{value.description}</p>


                    <button onClick={value.url}>Press ME</button>


                  </div>
                </div>
              </div>

            )

          })
        }
      </div>

    </>
  )
}

export default FetchNews
