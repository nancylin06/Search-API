import React from "react";

export default function Section(props) {
    return (
        <div>
            {props.ray.meals?.length > 0 ?
                (<div className="container mx-auto p-5">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
                        {props.ray.meals.map((list) => {
                            return (
                                <div className="rounded-md border shadow-md p-2 bg-slate-100 border-indigo-100" key={list.idMeal}>
                                    <img src={list.strMealThumb === "" ? "https://via.placeholder.com/400" : list.strMealThumb} alt="" />
                                    <h1 className="font-semibold tracking-wider leading-7 text-lg">{list.strMeal}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>)
                :
                (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-slate-500">No result Found</h1>
                    </div>
                )}
        </div>
    )
}