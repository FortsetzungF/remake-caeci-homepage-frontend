export default function Layout() {
    return (
        <div>
            <div className="mb-4 rounded grid md:grid-cols-6 p-4 border border-blue-800">
                <div class="col-span-5 font-bold text-center text-blue-800">
                    <p class="text-3xl">"Lernen - und Zeit für mehr!"</p>
                    <p class="text-2xl">Herzlich willkommen in der Cäcilienschule!</p>
                    {/* <a href="#"><img src="./img/unescologo.jpg" alt="unescologo"></a> */}
                </div>

                <div class="col-span-1">
                    {/* <img src="./img/chomepagelogo.jpg" alt="Caeci Portal" width="110" height="112"> */}
                    <p>
                        Haarenufer 11 <br />
                        26122 Oldenburg <br />
                        Tel. 0441-777 99 74 <br />
                        Fax 0441-777 52 13 <br />
                    </p>
                </div>
            </div>
        </div>
    )
}