import React, { useEffect, useState } from "react";

const UseEffectapi = () => {
    const [state, setstate] = useState([])
    const [state2, setstate2] = useState([])
    const [state3, setstate3] = useState([])

    const user = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/photos")

        const data = await response.json();

        setstate(data)
        //     console.log(data)
        console.log(state)

    }
    useEffect(() => {
        user();
    }, [])

    const apiCallHandler = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/comments")

        const data = await response.json();

        setstate2(data)
        //     console.log(data)
        console.log(state2)
    }
    const apiCallHandler1 = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos")

        const data = await response.json();

        setstate3(data)
        //     console.log(data)
        console.log(state3)
    }
    return (


        <div >
            <div id="demo" class="carousel slide" data-ride="carousel" style={{ marginBottom: "2em" }}>


                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1616819961192-79c636186524?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Los Angeles" width="1100" height="500" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1616328774557-e11aa5c34135?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Chicago" width="1100" height="500 " />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1612831818795-bf68e721cfa0?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="New York" width="1100" height="500" />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            <div >
                <button onClick={apiCallHandler} className='nextBtn'
                    type='button'>Call 2nd Api</button>
            </div>
            <div >
                <button onClick={apiCallHandler1} className='nextBtn'
                    type='button'>Call 3rd Api</button>
            </div>
            <div >
                {
                    state2.map((currVal) => {
                        return (

                            <div>

                                <ul>
                                    <li>
                                        <h1 style={{textAlign:"center"}}>{currVal.name}</h1>
                                        <p style={{textAlign:"center"}}>{currVal.email}</p>
                                    </li>
                                </ul>

                            </div>
                        )
                    })
                }
            </div>

            <div>
                {
                    state.map((currVal) => {
                        return (

                            <div className="container">
                                <img src={currVal.url} alt="" srcset="" />
                                <p>{currVal.title}</p>

                            </div>
                        )
                    })
                }

            </div>
            <div>
                {
                    state.map((currVal) => {
                        return (

                            <div className="container">
                                <img src={currVal.userId} alt="" srcset="" />
                                <p>{currVal.title}</p>

                            </div>
                        )
                    })
                }

            </div>

        </div>



    )
}
export default UseEffectapi;
