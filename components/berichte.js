import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Layout() {
  const { data, error } = useSWR('http://localhost:5000/berichte', fetcher)

    return (
      <div className="rounded border border-blue-800">
        <div className="bg-blue-800 text-white p-2">
          Berichte aus der Cäci (nach dem 20.10.2020 - ältere Berichte im <a href="#" className="underline">Archiv</a> | <a href="#" className="underline">Bericht einreichen</a> )
        </div>

        {/* {data.map((id, img, title) => {
          <div className="p-2">
            {id} {img} {tit}
          </div>
        })} */}

          {!data ? <div className="p-2 font-thin text-center text-gray-400">
            Loading...
          </div> : <div className="divide-y divide-blue-200 px-2">
            {data.reverse().map((element) => {
              return(
                <div className="pb-2" key={element.id}>
                  <p className="text-xl ">{element.title}</p>
                  {element.img ? <img className="py-1 text-gray-400 font-mono" src={element.img} alt="could't load image" /> : <></>}
                  {element.text}
                </div>
              )
            })}
          </div>}

          {error ? <div className="p-2 font-thin text-center text-gray-400">
            an error accured
          </div> : <></>}
      </div>          
    )
  }