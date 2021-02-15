import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Layout() {
  const { data, error } = useSWR('http://localhost:5000/mitteilungen', fetcher)

    return (
      <div className="rounded border border-blue-800">
            <div class="bg-blue-800 text-white p-2">
              Mitteilungen aus der Cäci
            </div>

            {!data ? <div className="px-2 py-4 font-thin text-center text-gray-500">
              lade Mitteilungen...
            </div> : <div className="divide-y divide-blue-200 px-2">
              {data.reverse().map((element) => {
                return(
                  <div className="p-1" key={element.id}>
                    <p className="text-xl ">{element.title}</p>
                    {element.text}
                  </div>
                )
              })}
            </div>}

          {error ? <div className="p-2 font-thin text-center text-gray-500">
            ein Fehler ist aufgetreten...
          </div> : <></>}




            {/* <div class="p-2"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia necessitatibus quas debitis aspernatur qui iste atque. Explicabo, molestias? Id repudiandae magnam nisi asperiores quidem, architecto provident possimus saepe sunt! Porro molestiae laudantium itaque mollitia voluptatum, neque deserunt ipsa laboriosam impedit, placeat animi officia sint, vitae minus quae ullam officiis.
            </div> */}
      </div>     
    )
  }